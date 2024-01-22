import { css } from '@emotion/react';

import ImageWrapper from '@/components/common/ImageWrapper';
import { imageSize } from '@/styles/common';

const container = css`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 210px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1023px) {
    padding: 165px 0;
  }
`;

const logoWrap = css`
  margin-bottom: 30px;
  position: relative;
  z-index: -1;
`;

const title = css`
  margin: 1px 0 54px 0;
  font-family: 'Pretendard';
  font-weight: 300;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: #212121;
  @media (max-width: 1023px) {
    margin: 1px 0 40px 0;
    font-size: 26px;
    line-height: 31px;
  }
`;
const description = css`
  font-family: 'Pretendard';
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #454547;
  @media (max-width: 1023px) {
    font-size: 15px;
    line-height: 22px;
  }
`;
const PreparingPage = () => (
  <div css={container}>
    <div css={logoWrap}>
      <ImageWrapper
        pcSrc="/obliv/oblive-gnb-logo-black.svg"
        alt="obliv logo"
        imageCss={imageSize('115px')}
        isPriority
      />
    </div>
    <h1 css={title}>페이지 준비중 입니다.</h1>
    <p css={description}>
      Obliv 홈페이지를 방문해 주셔서 감사합니다.
      <br />
      <br />
      페이지 준비중 입니다.
      <br />
      <br />
      감사합니다.
    </p>
  </div>
);

export default PreparingPage;
