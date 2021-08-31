import {
    ApplicationRef,
    ComponentFactoryResolver,
    ComponentRef,
    EmbeddedViewRef,
    Injectable,
    Injector,
    Type,
    ViewContainerRef
} from '@angular/core';
import { first } from 'rxjs/operators';

import { DynamicModalComponent } from '../components/modal/dynamic-modal.component';
import { ModalInjector } from '../components/modal/modal-injector';
import { ModalRef } from '../components/modal/modal.ref';

export class ModalConfig<D = any> {
    data?: D;
    allowMultipleModals: boolean = false;
}

@Injectable()
export class ModalService {
    protected modalCount = 0;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private applicationRef: ApplicationRef,
        private injector: Injector) {}

    async openViewRef<T>(componentType: Type<T>, viewContainerRef: ViewContainerRef,
        setComponentParameters: (component: T) => void = null): Promise<[ModalRef, T]> {

        this.modalCount++;
        const [modalRef, modalComponentRef] = this.openInternal(componentType, null, false);
        modalComponentRef.instance.setComponentParameters = setComponentParameters;

        viewContainerRef.insert(modalComponentRef.hostView);

        await modalRef.onCreated.pipe(first()).toPromise();

        return [modalRef, modalComponentRef.instance.componentRef.instance];
    }

    open(componentType: Type<any>, config?: ModalConfig) {
        if (!(config?.allowMultipleModals ?? false) && this.modalCount > 0) {
            return;
        }
        this.modalCount++;

        const [modalRef, _] = this.openInternal(componentType, config, true);

        return modalRef;
    }

    protected openInternal(componentType: Type<any>, config?: ModalConfig, attachToDom?: boolean):
        [ModalRef, ComponentRef<DynamicModalComponent>] {

        const [modalRef, componentRef] = this.createModalComponent(config);
        componentRef.instance.childComponentType = componentType;

        if (attachToDom) {
            this.applicationRef.attachView(componentRef.hostView);
            const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
            document.body.appendChild(domElem);
        }

        modalRef.onClosed.pipe(first()).subscribe(() => {
            if (attachToDom) {
                this.applicationRef.detachView(componentRef.hostView);
            }
            componentRef.destroy();
            this.modalCount--;
        });

        this.setupHandlers(modalRef);

        return [modalRef, componentRef];
    }

    protected setupHandlers(modalRef: ModalRef) {
        let backdrop: HTMLElement = null;

        // Add backdrop, setup [data-dismiss] handler.
        modalRef.onCreated.pipe(first()).subscribe(el => {
            document.body.classList.add('modal-open');

            backdrop = document.createElement('div');
            backdrop.className = 'modal-backdrop fade';
            backdrop.style.zIndex = `${this.modalCount}040`;
            document.body.appendChild(backdrop);

            el.querySelector('.modal-dialog').addEventListener('click', (e: Event) => {
                e.stopPropagation();
            });

            const modalEl: HTMLElement = el.querySelector('.modal');
            modalEl.style.zIndex = `${this.modalCount}050`;

            const modals = Array.from(el.querySelectorAll('.modal, .modal *[data-dismiss="modal"]'));
            for (const closeElement of modals) {
                closeElement.addEventListener('click', event => {
                    modalRef.close();
                });
            }
        });

        // onClose is used in Web to hook into bootstrap. On other projects we pipe it directly to closed.
        modalRef.onClose.pipe(first()).subscribe(() => {
            modalRef.closed();

            if (this.modalCount === 0) {
                document.body.classList.remove('modal-open');
            }

            if (backdrop != null) {
                document.body.removeChild(backdrop);
            }
        });
    }

    protected createModalComponent(config: ModalConfig): [ModalRef, ComponentRef<DynamicModalComponent>] {
        const modalRef = new ModalRef();

        const map = new WeakMap();
        map.set(ModalConfig, config);
        map.set(ModalRef, modalRef);

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicModalComponent);
        const componentRef = componentFactory.create(new ModalInjector(this.injector, map));

        return [modalRef, componentRef];
    }
}