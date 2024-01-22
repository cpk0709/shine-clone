import { getAllContent } from '@/apis/content-configurations';
import type {
  ContentConfiguration,
  PopUp,
} from '@/types/content-configuration';
import { isTodayWithinPeriod } from '@/utils/common';

export const getStaticPropsPopUp = async () => {
  const data =
    (await getAllContent<ContentConfiguration<PopUp>>(
      process.env.NEXT_PUBLIC_POPUP_CATEGORY,
    )) || [];

  const filteredData = data.filter(({ configurations }) =>
    isTodayWithinPeriod(
      configurations.period.startDate,
      configurations.period.endDate,
    ),
  );

  return {
    props: {
      data: filteredData,
    },
    revalidate: Number.parseInt(
      process.env.CMS_REVALIDATE_SECONDS ?? '3600',
      10,
    ),
  };
};
