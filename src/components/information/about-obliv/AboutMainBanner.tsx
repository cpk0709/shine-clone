import { css } from '@emotion/react';

import { useMatchMedia } from '@/hooks/use-match-media';
import { overrideImageSrc } from '@/utils/common';

const container = css`
  background: url(${overrideImageSrc('/obliv/about-obliv-banner-main-m.webp')})
    no-repeat center center;
  background-size: cover;
  height: 625px;
  display: flex;
  align-items: flex-end;
  @media (min-width: 1023px) {
    background: url(${overrideImageSrc('/obliv/about-obliv-banner-main.webp')});
    height: 1008px;
    align-items: center;
  }
`;

const textWrap = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  @media (min-width: 1023px) {
    align-items: center;
    padding-left: unset;
  }
`;

const title = css`
  color: #fff;
  text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.35);
  font-family: Noto Sans KR;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
  @media (min-width: 1023px) {
    font-size: 60px;
    text-align: center;
    margin-bottom: 40px;
  }
`;

const desc = css`
  color: #fff;
  text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.35);
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 86px;
  @media (min-width: 1023px) {
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const quotation = css`
  color: #fff;
  text-align: center;
  text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.35);
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  > span {
    margin-top: 10px;
    display: block;
    font-size: 24px;
    text-align: right;
  }
`;

const AboutMainBanner = () => {
  const isMobile = useMatchMedia();

  return (
    <section css={container}>
      <article css={textWrap}>
        <h1 css={title}>오블리브 의원</h1>
        <p css={desc}>
          오블리브는 근본적인 것과 아름다움에 대해 생각합니다.
          <br />
          누구나 지니고 있지만 달리 품고 있는 것,{isMobile ? <br /> : ' '}그것이
          드러나기까지의 여정을 함께합니다.
        </p>
        {!isMobile && (
          <div>
            <blockquote css={quotation}>
              “It takes a long time to become young”
              <span>- Pablo Picasso</span>
            </blockquote>
          </div>
        )}
      </article>
    </section>
  );
};

export default AboutMainBanner;
