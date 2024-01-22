import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempImageMap from '@/components/common/organisms/TempImageMap';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import withPageFrame from '@/components/common/withPageFrame';

const DefaultPage = () => (
  <>
    <PageMainBanner
      title="보톡스"
      iframeSrc={
        'https://www.youtube.com/embed/rESUZH780Bo?si=yr7iqtZRXq7pXAsX&autoplay=1&mute=1'
      }
      isIfrMobileVisible
    />
    <TempImageWrap>
      <TempImageMap
        pcSrcList={[
          '/obliv/obliv-botox-temp-screenshot-1.webp',
          '/obliv/obliv-botox-temp-screenshot-2.webp',
          '/obliv/obliv-botox-temp-screenshot-3.webp',
        ]}
      />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
