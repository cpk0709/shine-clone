import { css } from '@emotion/react';

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
      title="콜라겐실리프팅"
      iframeSrc={
        'https://www.youtube.com/embed/dBvC5J8hY7Y?si=46KgqXyqjOV4RpB_&autoplay=1&mute=1'
      }
    />
    <TempImageWrap>
      <ImageWrapper
        pcSrc="/obliv/collagen-temp-screenshot-1.webp"
        alt="collagen리프팅"
        imageCss={imageStyle()}
      />
      <TempDecal
        imgSrc="/obliv/collagen-temp-screenshot-2.webp"
        iframeSrc="https://www.youtube.com/embed/4bRryyN2ywc?si=xgQ-0KvRG4Dql7ib&autoplay=1&mute=1"
      />
      <ImageWrapper
        pcSrc="/obliv/collagen-temp-screenshot-3.webp"
        alt="collagen리프팅"
        imageCss={imageStyle()}
      />
      <TempMoreButton linkSrc="https://blog.naver.com/oblivclinic/222437010816" />
      <ImageWrapper
        pcSrc="/obliv/collagen-temp-screenshot-4.webp"
        alt="collagen리프팅"
        imageCss={imageStyle()}
      />
      <TempMoreButton linkSrc="https://blog.naver.com/oblivclinic/222438256350" />
      <ImageWrapper
        pcSrc="/obliv/collagen-temp-screenshot-5.webp"
        alt="collagen리프팅"
        imageCss={imageStyle()}
      />
      <TempMoreButton linkSrc="https://blog.naver.com/oblivclinic/222439629606" />
      <TempDecal
        imgSrc="/obliv/collagen-temp-screenshot-6.webp"
        iframeSrc="https://www.youtube.com/embed/LZaUF5novic?si=W9SmmPSmKZIeUTTx&autoplay=1&mute=1"
        imageCss={[
          css`
            margin-top: 70px;
          `,
        ]}
      />
      <ImageWrapper
        pcSrc="/obliv/collagen-temp-screenshot-7.webp"
        alt="collagen리프팅"
        imageCss={imageStyle()}
      />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
