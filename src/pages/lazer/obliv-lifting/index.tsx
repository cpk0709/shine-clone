import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempImageMap from '@/components/common/organisms/TempImageMap';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import withPageFrame from '@/components/common/withPageFrame';

const DefaultPage = () => (
  <>
    <PageMainBanner
      title="오블리브 리프팅"
      imageSrc="/obliv/obliv-lifting-temp-screenshot-1.webp"
    />
    <TempImageWrap>
      <TempImageMap
        pcSrcList={[
          '/obliv/obliv-lifting-temp-screenshot-2.webp',
          '/obliv/obliv-lifting-temp-screenshot-3.webp',
          '/obliv/obliv-lifting-temp-screenshot-4.webp',
          '/obliv/obliv-lifting-temp-screenshot-5.webp',
          '/obliv/obliv-lifting-temp-screenshot-6.webp',
        ]}
      />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
