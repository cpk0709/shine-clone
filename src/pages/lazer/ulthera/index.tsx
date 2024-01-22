import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempImageMap from '@/components/common/organisms/TempImageMap';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import withPageFrame from '@/components/common/withPageFrame';

const DefaultPage = () => (
  <>
    <PageMainBanner
      title="울쎄라"
      iframeSrc="https://www.youtube.com/embed/fOIMx_6rswg?si=1qWIxFQ3vtNGAomz"
    />
    <TempImageWrap>
      <TempImageMap
        pcSrcList={[
          '/obliv/lazer-ulthera-temp-screenshot-1.webp',
          '/obliv/lazer-ulthera-temp-screenshot-2.webp',
          '/obliv/lazer-ulthera-temp-screenshot-3.gif',
          '/obliv/lazer-ulthera-temp-screenshot-4.gif',
          '/obliv/lazer-ulthera-temp-screenshot-5.webp',
          '/obliv/lazer-ulthera-temp-screenshot-6.gif',
          '/obliv/lazer-ulthera-temp-screenshot-7.webp',
          '/obliv/lazer-ulthera-temp-screenshot-8.webp',
          '/obliv/lazer-ulthera-temp-screenshot-9.webp',
          '/obliv/lazer-ulthera-temp-screenshot-10.webp',
          '/obliv/lazer-ulthera-temp-screenshot-11.webp',
        ]}
      />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
