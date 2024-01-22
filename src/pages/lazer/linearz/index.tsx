import MarginDiv from '@/components/common/atom/MarginDiv';
import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempImageMap from '@/components/common/organisms/TempImageMap';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import TempMoreButton from '@/components/common/organisms/TempMoreButton';
import withPageFrame from '@/components/common/withPageFrame';
import { useMatchMedia } from '@/hooks/use-match-media';

const DefaultPage = () => {
  const isMobile = useMatchMedia();

  return (
    <>
      <PageMainBanner
        title="리니어지"
        imageSrc="/obliv/lazer-linearz-temp-screenshot-1.webp"
      />
      <TempImageWrap>
        {!isMobile && (
          <TempImageMap
            pcSrcList={['/obliv/lazer-linearz-temp-screenshot-2.webp']}
          />
        )}
        <TempImageMap
          pcSrcList={[
            '/obliv/lazer-linearz-temp-screenshot-3.webp',
            '/obliv/lazer-linearz-temp-screenshot-4.webp',
            '/obliv/lazer-linearz-temp-screenshot-5.gif',
            '/obliv/lazer-linearz-temp-screenshot-6.webp',
            '/obliv/lazer-linearz-temp-screenshot-7.webp',
            '/obliv/lazer-linearz-temp-screenshot-8.gif',
            '/obliv/lazer-linearz-temp-screenshot-9.webp',
            '/obliv/lazer-linearz-temp-screenshot-10.gif',
            '/obliv/lazer-linearz-temp-screenshot-11.webp',
            '/obliv/lazer-linearz-temp-screenshot-12.webp',
          ]}
        />
        <MarginDiv height={60} mobileHeight={18} />
        <TempMoreButton linkSrc="https://blog.naver.com/oblivclinic/222836229204" />
      </TempImageWrap>
    </>
  );
};

export default withPageFrame(DefaultPage);
