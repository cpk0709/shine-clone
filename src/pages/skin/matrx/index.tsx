import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempImageMap from '@/components/common/organisms/TempImageMap';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import withPageFrame from '@/components/common/withPageFrame';

const DefaultPage = () => (
  <>
    <PageMainBanner
      title="무통가스마취"
      imageSrc="/obliv/skin-matrx-temp-screenshot-1.webp"
    />
    <TempImageWrap>
      <TempImageMap
        pcSrcList={[
          '/obliv/skin-matrx-temp-screenshot-2.webp',
          '/obliv/skin-matrx-temp-screenshot-3.webp',
          '/obliv/skin-matrx-temp-screenshot-4.webp',
          '/obliv/skin-matrx-temp-screenshot-5.webp',
          '/obliv/skin-matrx-temp-screenshot-6.webp',
          '/obliv/skin-matrx-temp-screenshot-7.webp',
        ]}
      />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
