import { css } from '@emotion/react';

import ImageWrapper from '@/components/common/ImageWrapper';

const titleWrap = css`
  padding-bottom: 6px;
  margin-bottom: 30px;
  text-align: center;
  h1 {
    color: #000;
    font-family: Bernhard Modern Std;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media (min-width: 1023px) {
    text-align: left;
    margin-bottom: 10px;
    border-bottom: 1px solid #d9d9d9;
  }
`;

const contentWrap = css`
  display: flex;
  flex-direction: column-reverse;
  /* padding-bottom: 14px; */
  @media (min-width: 1023px) {
    flex-direction: column;
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 80px;
  }
`;

const newList = css`
  max-width: 300px;
  margin: 0 auto;
  white-space: nowrap;
  text-align: center;
  margin-top: 20px;
  padding-bottom: 60px;
  border-bottom: 1px solid #d9d9d9;
  li {
    color: #000;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 183.333% */
    padding-block: 2px;
  }
  button {
    color: #787878;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    padding: 4px 0 4px 6px;
  }
  @media (min-width: 1023px) {
    margin-left: auto;
    margin-right: unset;
    text-align: right;
    margin-bottom: 14px;
    padding-bottom: unset;
    border-bottom: unset;
    li {
      text-align: right;
    }
  }
`;

const bannerCss = css`
  width: 100%;
`;

const OblivNews = () => (
  <section>
    <div css={titleWrap}>
      <h1>Obliv News</h1>
    </div>
    <article css={contentWrap}>
      <ul css={newList}>
        <li>2022.11 KAFC 대한리프팅연구회 제 4회 학술대회</li>
        <li>2022.09 DEMIRE 대한미용성형레이저의학회 추계학술대회</li>
        <li>2022.06 K-BEAUTY 베트남 대한미용성형레이저의학회</li>
        <button>more...</button>
      </ul>
      <ImageWrapper
        pcSrc="/obliv/obliv-home-banner-1.webp"
        mobileSrc="/obliv/obliv-home-banner-1-m.webp"
        alt="obliv-news-banner"
        imageCss={bannerCss}
      />
    </article>
  </section>
);

export default OblivNews;
