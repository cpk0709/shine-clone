import ImageWrapper from '@/components/common/ImageWrapper';
import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempDecal from '@/components/common/organisms/TempDecal';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import TempMoreButton from '@/components/common/organisms/TempMoreButton';
import withPageFrame from '@/components/common/withPageFrame';
import { imageStyle } from '@/styles/common';

const DefaultPage = () => (
  <>
    <PageMainBanner
      title="AIO리프팅"
      iframeSrc={
        'https://www.youtube.com/embed/dBvC5J8hY7Y?si=pQrTS75reCdruCOI&autoplay=1&mute=1'
      }
    />
    <TempImageWrap>
      <ImageWrapper
        pcSrc="/obliv/aio-temp-screenshot-1.webp"
        alt="aio리프팅"
        imageCss={imageStyle()}
      />
      <TempDecal
        imgSrc="/obliv/aio-temp-screenshot-2.webp"
        iframeSrc="https://www.youtube.com/embed/4bRryyN2ywc?si=d2zg8bO0a0blA2R0&autoplay=1&mute=1"
      />
      <ImageWrapper
        pcSrc="/obliv/aio-temp-screenshot-3.webp"
        alt="aio리프팅"
        imageCss={imageStyle()}
      />
      <TempMoreButton linkSrc="https://blog.naver.com/oblivclinic/222437010816" />
      <ImageWrapper
        pcSrc="/obliv/aio-temp-screenshot-4.webp"
        alt="aio리프팅"
        imageCss={imageStyle()}
      />
      <TempMoreButton linkSrc="https://blog.naver.com/oblivclinic/222438256350" />
      <ImageWrapper
        pcSrc="/obliv/aio-temp-screenshot-5.webp"
        alt="aio리프팅"
        imageCss={imageStyle()}
      />
      <TempMoreButton linkSrc="https://blog.naver.com/oblivclinic/222439629606" />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
