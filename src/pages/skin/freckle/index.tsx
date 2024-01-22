import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempImageMap from '@/components/common/organisms/TempImageMap';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import withPageFrame from '@/components/common/withPageFrame';

const DefaultPage = () => (
  <>
    <PageMainBanner
      title="기미, 주근깨, 잡티"
      iframeSrc={
        'https://www.youtube.com/embed/78YjFuM9kr8?si=foyFPIvP0TI0ePnP&autoplay=1&mute=1'
      }
    />
    <TempImageWrap>
      <TempImageMap
        pcSrcList={[
          '/obliv/freckle-temp-screenshot-1.webp',
          '/obliv/freckle-temp-screenshot-2.webp',
          '/obliv/freckle-temp-screenshot-3.webp',
          '/obliv/freckle-temp-screenshot-4.webp',
          '/obliv/freckle-temp-screenshot-5.webp',
          '/obliv/freckle-temp-screenshot-6.webp',
          '/obliv/freckle-temp-screenshot-7.webp',
          '/obliv/freckle-temp-screenshot-8.webp',
        ]}
      />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
