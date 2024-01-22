import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempImageMap from '@/components/common/organisms/TempImageMap';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import withPageFrame from '@/components/common/withPageFrame';

const DefaultPage = () => (
  <>
    <PageMainBanner
      title="트리오엘"
      imageSrc="/obliv/lazer-triol-temp-screenshot-1.webp"
    />
    <TempImageWrap>
      <TempImageMap
        pcSrcList={[
          '/obliv/lazer-triol-temp-screenshot-2.webp',
          '/obliv/lazer-triol-temp-screenshot-3.webp',
          '/obliv/lazer-triol-temp-screenshot-4.webp',
          '/obliv/lazer-triol-temp-screenshot-5.webp',
          '/obliv/lazer-triol-temp-screenshot-6.webp',
        ]}
      />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
