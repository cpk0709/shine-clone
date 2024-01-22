/* eslint-disable prettier/prettier */
import { css } from '@emotion/react';

import { useMatchMedia } from '@/hooks/use-match-media';
import { overrideImageSrc } from '@/utils/common';

const textWrap = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 312px;
  padding-left: 30px;
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
    justify-content: flex-end;
    padding-inline: 14%;
    height: 573px;
    p {
      text-align: unset;
      font-size: 28px;
      line-height: 44px;
    }
  }
`;

const bannerSection = css`
  background: url(${overrideImageSrc('/obliv/about-obliv-banner-bottom-m.webp')}) no-repeat center center;
  background-size: cover;
  height: 240px;
  @media (min-width: 1023px) {
    height: 665px;
    background: url(${overrideImageSrc('/obliv/about-obliv-banner-bottom.webp')}) no-repeat center center;
    background-size: cover;
  }
`;

const scheduleTable = css`
  display: flex;
  flex-direction: column;
  line-height: 26px;
  color: #212121;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  span.title {
    display: block;
    margin-bottom: 10px;
    font-style: normal;
    font-weight: 500;
  }
  span.head {
    display: inline-block;
    width: 60px;
    text-align: left;
  }
  @media (min-width: 1023px) {
    font-size: 28px;
    font-weight: 400;
    span.title {
      margin-bottom: 40px;
      font-weight: 700;
    }
    span.head {
      width: 120px;
    }
  }
`;

const marginHeight = (height: number) => css`
  height: ${height}px;
`;

const AboutBottomSection = () => {
  const isMobile = useMatchMedia();

  return (
    <section>
      <article css={textWrap}>
        <div css={scheduleTable}>
          <div>
            <span className="title">진료시간</span>
            <p>
              <span className="head">월 - 목</span>ㅣ&nbsp;&nbsp;10:00 - 20:00
            </p>
            <p>
              <span className="head">{isMobile ? '금요일' : '금'}</span>
              ㅣ&nbsp;&nbsp;10:00 - 21:00
            </p>
            <p>
              <span className="head">{isMobile ? '토요일' : '토'}</span>
              ㅣ&nbsp;&nbsp;10:00 - 16:00
            </p>
          </div>
          <div css={marginHeight(isMobile ? 20 : 30)} />
          <div>
            <p>
              <span className="head">평일점심</span>ㅣ&nbsp;&nbsp;13:00 - 14:00
            </p>
            <p>
              <span className="head">휴무일</span>ㅣ&nbsp;&nbsp;일요일, 공휴일
            </p>
          </div>
        </div>
      </article>
      <div css={bannerSection} />
    </section>
  );
};

export default AboutBottomSection;
