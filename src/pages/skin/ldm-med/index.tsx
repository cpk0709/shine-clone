import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempImageMap from '@/components/common/organisms/TempImageMap';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import withPageFrame from '@/components/common/withPageFrame';

const DefaultPage = () => (
  <>
    <PageMainBanner
      title="LDM-MED Tri"
      imageSrc="/obliv/skin-ldm-med-temp-screenshot-1.webp"
    />
    <TempImageWrap>
      <TempImageMap
        pcSrcList={[
          '/obliv/skin-ldm-med-temp-screenshot-2.webp',
          '/obliv/skin-ldm-med-temp-screenshot-3.webp',
          '/obliv/skin-ldm-med-temp-screenshot-4.webp',
          '/obliv/skin-ldm-med-temp-screenshot-5.webp',
        ]}
      />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
