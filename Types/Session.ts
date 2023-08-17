export interface Session {
  id: number;
  name: string;
  duration: {
    start: string;
    end: string;
  };
  groupActivityProduct: {
    id: number;
    name: string;
  };
  businessUnit: {
    id: number;
    name: string;
    location: string;
    companyNameForInvoice: string;
  };
  locations: {
    id: number;
    name: string;
  }[];
  instructors: any[];
  bookableEarliest: string;
  bookableLatest: string;
  externalMessage: string | null;
  internalMessage: string | null;
  cancelled: boolean;
  slots: {
    total: number;
    totalBookable: number;
    reservedForDropin: number;
    leftToBook: number;
    leftToBookIncDropin: number;
    hasWaitingList: boolean;
    inWaitingList: number;
  };
}
