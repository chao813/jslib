export class ConstantsService {
    static readonly environmentUrlsKey: string = 'environmentUrls';
    static readonly disableGaKey: string = 'disableGa';
    static readonly disableAddLoginNotificationKey: string = 'disableAddLoginNotification';
    static readonly disableChangedPasswordNotificationKey: string = 'disableChangedPasswordNotification';
    static readonly disableContextMenuItemKey: string = 'disableContextMenuItem';
    static readonly disableFaviconKey: string = 'disableFavicon';
    static readonly disableBadgeCounterKey: string = 'disableBadgeCounter';
    static readonly disableAutoTotpCopyKey: string = 'disableAutoTotpCopy';
    static readonly enableAutoFillOnPageLoadKey: string = 'enableAutoFillOnPageLoad';
    static readonly autoFillOnPageLoadDefaultKey: string = 'autoFillOnPageLoadDefault';
    static readonly vaultTimeoutKey: string = 'lockOption';
    static readonly vaultTimeoutActionKey: string = 'vaultTimeoutAction';
    static readonly lastActiveKey: string = 'lastActive';
    static readonly neverDomainsKey: string = 'neverDomains';
    static readonly installedVersionKey: string = 'installedVersion';
    static readonly localeKey: string = 'locale';
    static readonly themeKey: string = 'theme';
    static readonly collapsedGroupingsKey: string = 'collapsedGroupings';
    static readonly autoConfirmFingerprints: string = 'autoConfirmFingerprints';
    static readonly dontShowCardsCurrentTab: string = 'dontShowCardsCurrentTab';
    static readonly dontShowIdentitiesCurrentTab: string = 'dontShowIdentitiesCurrentTab';
    static readonly defaultUriMatch: string = 'defaultUriMatch';
    static readonly pinProtectedKey: string = 'pinProtectedKey';
    static readonly protectedPin: string = 'protectedPin';
    static readonly clearClipboardKey: string = 'clearClipboardKey';
    static readonly eventCollectionKey: string = 'eventCollection';
    static readonly ssoCodeVerifierKey: string = 'ssoCodeVerifier';
    static readonly ssoStateKey: string = 'ssoState';
    static readonly biometricUnlockKey: string = 'biometric';
    static readonly biometricText: string = 'biometricText';
    static readonly biometricAwaitingAcceptance: string = 'biometricAwaitingAcceptance';
    static readonly biometricFingerprintValidated: string = 'biometricFingerprintValidated';
    static readonly cryptoKeys = {
        key: 'key', // Master Key
        encOrgKeys: 'encOrgKeys',
        encPrivateKey: 'encPrivateKey',
        encKey: 'encKey', // Generated Symmetric Key
        keyHash: 'keyHash',
    };

    readonly environmentUrlsKey: string = ConstantsService.environmentUrlsKey;
    readonly disableGaKey: string = ConstantsService.disableGaKey;
    readonly disableAddLoginNotificationKey: string = ConstantsService.disableAddLoginNotificationKey;
    readonly disableContextMenuItemKey: string = ConstantsService.disableContextMenuItemKey;
    readonly disableFaviconKey: string = ConstantsService.disableFaviconKey;
    readonly disableBadgeCounterKey: string = ConstantsService.disableBadgeCounterKey;
    readonly disableAutoTotpCopyKey: string = ConstantsService.disableAutoTotpCopyKey;
    readonly enableAutoFillOnPageLoadKey: string = ConstantsService.enableAutoFillOnPageLoadKey;
    readonly autoFillOnPageLoadDefaultKey: string = ConstantsService.autoFillOnPageLoadDefaultKey;
    readonly vaultTimeoutKey: string = ConstantsService.vaultTimeoutKey;
    readonly vaultTimeoutActionKey: string = ConstantsService.vaultTimeoutActionKey;
    readonly lastActiveKey: string = ConstantsService.lastActiveKey;
    readonly neverDomainsKey: string = ConstantsService.neverDomainsKey;
    readonly installedVersionKey: string = ConstantsService.installedVersionKey;
    readonly localeKey: string = ConstantsService.localeKey;
    readonly themeKey: string = ConstantsService.themeKey;
    readonly collapsedGroupingsKey: string = ConstantsService.collapsedGroupingsKey;
    readonly autoConfirmFingerprints: string = ConstantsService.autoConfirmFingerprints;
    readonly dontShowCardsCurrentTab: string = ConstantsService.dontShowCardsCurrentTab;
    readonly dontShowIdentitiesCurrentTab: string = ConstantsService.dontShowIdentitiesCurrentTab;
    readonly defaultUriMatch: string = ConstantsService.defaultUriMatch;
    readonly pinProtectedKey: string = ConstantsService.pinProtectedKey;
    readonly protectedPin: string = ConstantsService.protectedPin;
    readonly clearClipboardKey: string = ConstantsService.clearClipboardKey;
    readonly eventCollectionKey: string = ConstantsService.eventCollectionKey;
    readonly ssoCodeVerifierKey: string = ConstantsService.ssoCodeVerifierKey;
    readonly ssoStateKey: string = ConstantsService.ssoStateKey;
    readonly biometricUnlockKey: string = ConstantsService.biometricUnlockKey;
    readonly biometricText: string = ConstantsService.biometricText;
    readonly biometricAwaitingAcceptance: string = ConstantsService.biometricAwaitingAcceptance;
    readonly biometricFingerprintValidated: string = ConstantsService.biometricFingerprintValidated;
    readonly cryptoKeys: any = ConstantsService.cryptoKeys;
}
