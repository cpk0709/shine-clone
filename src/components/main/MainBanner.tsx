import { css } from '@emotion/react';

import { overrideImageSrc } from '@/utils/common';

const container = css`
  width: 100%;
  height: 625px;
  background: url(${overrideImageSrc('/obliv/obliv-home-main-banner-m.webp')})
    no-repeat center center;
  background-size: cover;
  position: relative;
  @media (min-width: 1023px) {
    height: 1000px;
    background: url(${overrideImageSrc('/obliv/obliv-home-main-banner.webp')})
      no-repeat center center;
    background-size: cover;
  }
`;

const textWrap = css`
  position: absolute;
  top: unset;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  h1 {
    color: #fff;
    font-family: Bernhard Modern Std;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.7px;
    margin-bottom: 10px;
  }
  p {
    color: #fff;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  @media (min-width: 1023px) {
    top: 26%;
    right: 12%;
    left: unset;
    transform: unset;
    h1 {
      color: #000;
      font-size: 40px;
      letter-spacing: -0.8px;
      margin-bottom: 30px;
    }
    p {
      color: #000;
      line-height: 26px;
    }
  }
`;

const MainBanner = () => (
  <section css={container}>
    <article css={textWrap}>
      <h1>Welcome Obliv Clinic </h1>
      <p>
        오블리브는 근본적인 것과 아름다움에 대해 생각합니다.
        <br />
        누구나 지니고 있지만 각자 달리 품고 있는 것,
        <br />
        그것이 드러나기까지의 여정을 함께 합니다.
      </p>
    </article>
  </section>
);

export default MainBanner;
