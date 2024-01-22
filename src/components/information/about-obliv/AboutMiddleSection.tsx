/* eslint-disable prettier/prettier */
import { css } from '@emotion/react';

import { useMatchMedia } from '@/hooks/use-match-media';
import { overrideImageSrc } from '@/utils/common';

const textWrap = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 298px;
  p {
    text-align: center;
    color: #212121;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  @media (min-width: 1023px) {
    justify-content: flex-start;
    padding-inline: 14%;
    height: 480px;
    p {
      text-align: unset;
      font-size: 28px;
      line-height: 44px;
    }
  }
`;

const bannerSection = css`
  background: url(${overrideImageSrc('/obliv/about-obliv-banner-middle-m.webp')}) no-repeat center center;
  background-size: cover;
  height: 240px;
  @media (min-width: 1023px) {
    height: 665px;
    background: url(${overrideImageSrc('/obliv/about-obliv-banner-middle.webp')}) no-repeat center center;
    background-size: cover;
  }
`;

const AboutMiddleSection = () => {
  const isMobile = useMatchMedia();

  return (
    <section>
      <article css={textWrap}>
        <p>
          {isMobile ? (
            <>
              건강한 삶과 피부의 균형을 추구하는
              <br />
              똑똑한 메디컬 케어, 오블리브
              <br />
              피부에는 정해진 답이 존재하지 않습니다.
              <br />
              각자의 피부에 맞는 해답을 찾고 치료해야 합니다.
              <br />
              고객님의 피부 고민에 진정성 있는 관심을 갖고,
              <br />
              그에 맞는 정교한 맞춤 케어를 정성스럽게 제공하는 것.
              <br />
              오블리브의 기쁨입니다.
            </>
          ) : (
            <>
              건강한 삶과 피부의 균형을 추구하는 똑똑한 메디컬 케어, 오블리브
              <br />
              피부에는 정해진 답이 존재하지 않습니다.
              <br />
              각자의 피부에 맞는 해답을 찾고 치료해야 합니다.
              <br />
              고객님의 피부 고민에 진정성 있는 관심을 갖고,
              <br />
              그에 맞는 정교한 맞춤 케어를 정성스럽게 제공하는 것. 오블리브의
              기쁨입니다.
            </>
          )}
        </p>
      </article>
      <div css={bannerSection} />
    </section>
  );
};

export default AboutMiddleSection;
