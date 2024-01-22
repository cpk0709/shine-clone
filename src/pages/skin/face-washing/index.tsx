import { css } from '@emotion/react';

import MarginDiv from '@/components/common/atom/MarginDiv';
import ImageWrapper from '@/components/common/ImageWrapper';
import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import TempMoreButton from '@/components/common/organisms/TempMoreButton';
import withPageFrame from '@/components/common/withPageFrame';
import { imageStyle } from '@/styles/common';

const mediaWrap = css`
  background-color: #d9d9d9;
  margin: 30px auto;
  width: 80%;
  @media (min-width: 1023px) {
    width: 100%;
    height: 620px;
    margin: 80px auto;
  }
`;

const iframeStyle = css`
  width: 100%;
  height: 100%;
`;

const tempBorder = css`
  width: 100%;
  height: 1px;
  background-color: #dbdbdb;
`;

const DefaultPage = () => (
  <>
    <PageMainBanner
      title="세안습관교정"
      iframeSrc={
        'https://www.youtube.com/embed/2dvd6WVgzqg?si=svSmM1wM39R8NnC6&autoplay=1&mute=1'
      }
      isIfrMobileVisible
    />
    <TempImageWrap isBottomNotice={false}>
      <ImageWrapper
        pcSrc="/obliv/obliv-washing-temp-screenshot-1.svg"
        mobileSrc="/obliv/obliv-washing-temp-screenshot-1-m.svg"
        alt="세안습관교정 이미지"
        imageCss={imageStyle()}
      />
      <MarginDiv height={150} mobileHeight={100} />
      <ImageWrapper
        pcSrc="/obliv/obliv-washing-temp-screenshot-2.svg"
        alt="세안습관교정 이미지"
        imageCss={imageStyle()}
      />
      <div css={mediaWrap}>
        <iframe
          src="https://www.youtube.com/embed/F3Rz_x0GBCs?si=zvUUvKpsw2z6OWuz&autoplay=1&mute=1"
          css={iframeStyle}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <ImageWrapper
        pcSrc="/obliv/obliv-washing-temp-screenshot-3.svg"
        alt="세안습관교정 이미지"
        imageCss={imageStyle()}
      />
      <MarginDiv height={66} mobileHeight={30} />
      <TempMoreButton linkSrc="https://blog.naver.com/oblivclinic/222455511938" />
      <MarginDiv height={88} mobileHeight={34} />
      <div css={tempBorder} />
      <MarginDiv height={150} mobileHeight={100} />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
