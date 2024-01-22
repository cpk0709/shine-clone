import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempImageMap from '@/components/common/organisms/TempImageMap';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import withPageFrame from '@/components/common/withPageFrame';

const DefaultPage = () => (
  <>
    <PageMainBanner
      title="엔덤"
      imageSrc="/obliv/skin-nderm-temp-screenshot-1.gif"
    />
    <TempImageWrap>
      <TempImageMap
        pcSrcList={[
          '/obliv/skin-nderm-temp-screenshot-2.webp',
          '/obliv/skin-nderm-temp-screenshot-3.webp',
          '/obliv/skin-nderm-temp-screenshot-4.webp',
          '/obliv/skin-nderm-temp-screenshot-5.webp',
          '/obliv/skin-nderm-temp-screenshot-6.gif',
          '/obliv/skin-nderm-temp-screenshot-7.gif',
          '/obliv/skin-nderm-temp-screenshot-8.gif',
          '/obliv/skin-nderm-temp-screenshot-9.gif',
          '/obliv/skin-nderm-temp-screenshot-10.gif',
          '/obliv/skin-nderm-temp-screenshot-11.webp',
        ]}
      />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
