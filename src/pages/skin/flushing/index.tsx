import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempImageMap from '@/components/common/organisms/TempImageMap';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import withPageFrame from '@/components/common/withPageFrame';

const DefaultPage = () => (
  <>
    <PageMainBanner
      title="홍조, 건조증, 피부장벽"
      iframeSrc={
        'https://www.youtube.com/embed/0bay_MNr68Y?si=VKG_wvZMzY8M8_Qd&autoplay=1&mute=1'
      }
    />
    <TempImageWrap>
      <TempImageMap
        pcSrcList={[
          '/obliv/skin-flushing-temp-screenshot-1.webp',
          '/obliv/skin-flushing-temp-screenshot-2.webp',
          '/obliv/skin-flushing-temp-screenshot-3.webp',
          '/obliv/skin-flushing-temp-screenshot-4.webp',
          '/obliv/skin-flushing-temp-screenshot-5.webp',
        ]}
      />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
