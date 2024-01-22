import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempImageMap from '@/components/common/organisms/TempImageMap';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import withPageFrame from '@/components/common/withPageFrame';

const DefaultPage = () => (
  <>
    <PageMainBanner
      title="점, 검버섯, 비립종"
      iframeSrc={
        'https://www.youtube.com/embed/742PkJq-jt4?si=AWZGVOzUDymrf7rG&autoplay=1&mute=1'
      }
    />
    <TempImageWrap>
      <TempImageMap
        pcSrcList={[
          '/obliv/skin-mole-temp-screenshot-1.webp',
          '/obliv/skin-mole-temp-screenshot-2.webp',
          '/obliv/skin-mole-temp-screenshot-3.webp',
          '/obliv/skin-mole-temp-screenshot-4.webp',
          '/obliv/skin-mole-temp-screenshot-5.webp',
        ]}
      />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
