import type { RevalidateType } from '@/types/common';

export const getImageName = (imageName: string) => imageName.split('/').pop();

export const overrideImageSrc = (src: string) => {
  if (process.env.NEXT_PUBLIC_NODE_ENV === 'local') {
    return src;
  }

  return `${process.env.NEXT_PUBLIC_CMS_GET_DATA_URL}/${process.env.NEXT_PUBLIC_LANDING_IMAGE_PATH}${src}`;
};

export const getRevalidatePaths = (type: RevalidateType) => {
  switch (type) {
    case 'popup':
      return ['/'];
    case 'notice':
      return ['/notice'];
    case 'event':
      return ['/event'];
    default:
      return [];
  }
};

export const isTodayWithinPeriod = (startDate: string, endDate: string) => {
  const today = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  end.setDate(end.getDate() + 1);

  return today >= start && today <= end;
};
