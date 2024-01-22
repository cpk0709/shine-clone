export type Brand = 'obliv';

export interface ContentConfiguration<T> {
  id: number;
  brand?: string;
  category?: string;
  published?: boolean;
  configurations: T;
  sortIndex?: number;
  deleted?: boolean;
}

export interface Period {
  startDate: string; //YYYY-MM-DD
  endDate: string; //YYYY-MM-DD
}

export interface UploadedImage {
  uid: string;
  name: string;
  url: string;
}
export interface PopUp {
  title: string;
  pcImage: UploadedImage;
  mobileImage: UploadedImage;
  linkImage?: UploadedImage;
  linkText?: string;
  href?: string;
  period: Period;
}

export interface Notice {
  title: string;
  registrationDate: string; //YYYY-MM-DD
  content: string;
}

export interface EventPeriod {
  url: string;
  period: Period;
  title: string;
  descripton: string | undefined;
  tags: string[];
}

export interface Event {
  title: string;
  thumbnailImage: UploadedImage;
  detailImages: UploadedImage[];
  iframeSrc?: string;
  privateUrl?: string;
  period: Period;
}
