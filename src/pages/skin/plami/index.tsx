import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempImageMap from '@/components/common/organisms/TempImageMap';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import withPageFrame from '@/components/common/withPageFrame';

const DefaultPage = () => (
  <>
    <PageMainBanner
      title="플라미"
      imageSrc="/obliv/skin-plami-temp-screenshot-1.webp"
    />
    <TempImageWrap>
      <TempImageMap
        pcSrcList={[
          '/obliv/skin-plami-temp-screenshot-2.webp',
          '/obliv/skin-plami-temp-screenshot-3.webp',
          '/obliv/skin-plami-temp-screenshot-4.webp',
          '/obliv/skin-plami-temp-screenshot-5.webp',
          '/obliv/skin-plami-temp-screenshot-6.webp',
        ]}
      />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
