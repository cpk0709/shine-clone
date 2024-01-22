import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempImageMap from '@/components/common/organisms/TempImageMap';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import withPageFrame from '@/components/common/withPageFrame';

const DefaultPage = () => (
  <>
    <PageMainBanner
      title="온다"
      imageSrc="/obliv/lazer-onda-temp-screenshot-1.webp"
    />
    <TempImageWrap>
      <TempImageMap
        pcSrcList={[
          '/obliv/lazer-onda-temp-screenshot-2.webp',
          '/obliv/lazer-onda-temp-screenshot-3.gif',
          '/obliv/lazer-onda-temp-screenshot-4.webp',
          '/obliv/lazer-onda-temp-screenshot-5.gif',
          '/obliv/lazer-onda-temp-screenshot-6.webp',
          '/obliv/lazer-onda-temp-screenshot-7.webp',
        ]}
      />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
