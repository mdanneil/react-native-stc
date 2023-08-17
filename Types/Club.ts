export interface Club {
  id: number;
  name: string;
  company: {
    id: number;
    name: string;
  };
  companyNameForInvoice: string;
  address: {
    postalCode: string;
    city: string;
    street: string;
    careOf: string;
    country: {
      id: number;
      name: string;
      alpha2: string;
    };
  };
  location: string;
  currency: string;
  releaseSuspensionProduct: {
    id: number;
    name: string;
  };
  settings: {
    allowCancelServiceBooking: boolean;
    allowCancelDebitedServiceBooking: boolean;
    allowDuplicateEmail: boolean;
    allowFreeze: boolean;
    allowRegistrationWithoutAddress: boolean;
    allowRegistrationWithoutMobile: boolean;
    allowRegistrationWithoutSex: boolean;
    allowRegistrationWithoutSsnOrBirthDate: boolean;
    allowSetParticipantsForEvent: boolean;
    debitFrozenSubscription: boolean;
    maxFreezePeriod: number;
    minFreezePeriod: number;
    registerCustomerMinAge: number;
    requireSsnForCustomerRegistration: boolean;
    showBookingTerms: boolean;
    showCustomerImage: boolean;
    showMessageFieldInCart: boolean;
    showSubscriptionTerms: boolean;
    signAutogiroMinAge: number;
    useFreezeReason: boolean;
    useTerminationReason: boolean;
    youthMaxAge: number;
    ageAvoidParentalConsent: number;
    requireAcceptRegTermsIfNotDoneAfter: null | number;
    useGdprTools: boolean;
    groupActivitiesEnabledApp3: boolean;
    mobilePassageTryEnabled: boolean;
    beaconIdentifier: null | string;
    beaconUUID: string;
    enableAppMyPages: boolean;
    appModeEnabled: boolean;
    useEntryWebCategory: boolean;
    useRecurringPayment: boolean;
    pushNotificationsEnabled: boolean;
    allowReleaseSuspension: boolean;
    underskriftBeforePurchase: boolean;
    changeEmailOnWeb: boolean;
    changeFirstNameOnWeb: boolean;
    changeLastNameOnWeb: boolean;
    changeBirthDateOnWeb: boolean;
    requireEmailConfirmationOnEntry: boolean;
    hideInvalidValueCards: boolean;
    daysBetweenSwitchingPassageDevice: number;
    allowRegionInBuApiEndpoint: boolean;
    useWaitingListForPaidClasses: boolean;
    useExorlive: boolean;
  };
}
