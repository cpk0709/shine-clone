import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempImageMap from '@/components/common/organisms/TempImageMap';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import withPageFrame from '@/components/common/withPageFrame';

const DefaultPage = () => (
  <>
    <PageMainBanner
      title="여드름, 모공, 흉터, 피부교정 상담"
      imageSrc="/obliv/skin-trouble-temp-screenshot-1.webp"
    />
    <TempImageWrap>
      <TempImageMap
        pcSrcList={[
          '/obliv/skin-trouble-temp-screenshot-2.webp',
          '/obliv/skin-trouble-temp-screenshot-3.webp',
          '/obliv/skin-trouble-temp-screenshot-4.webp',
          '/obliv/skin-trouble-temp-screenshot-5.webp',
          '/obliv/skin-trouble-temp-screenshot-6.webp',
          '/obliv/skin-trouble-temp-screenshot-7.webp',
          '/obliv/skin-trouble-temp-screenshot-8.webp',
          '/obliv/skin-trouble-temp-screenshot-9.webp',
          '/obliv/skin-trouble-temp-screenshot-10.webp',
          '/obliv/skin-trouble-temp-screenshot-11.webp',
          '/obliv/skin-trouble-temp-screenshot-12.webp',
        ]}
      />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
