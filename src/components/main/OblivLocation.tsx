import { css } from '@emotion/react';

import KakaoMap from '@/components/common/map/KakaoMap';
import { useMatchMedia } from '@/hooks/use-match-media';

const container = css`
  padding: 80px 0 50px;
  @media (min-width: 1023px) {
    padding-bottom: 110px;
  }
`;

const textWrap = css`
  h1 {
    text-align: center;
    color: #000;
    font-family: Bernhard Modern Std;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 40px;
  }
  @media (min-width: 1460px) {
    h1 {
      margin-bottom: 30px;
      text-align: left;
      margin-bottom: 34px;
    }
  }
`;

const content = css`
  display: flex;
  gap: 44px;
  flex-direction: column;
  @media (min-width: 1023px) {
    flex-direction: row;
    gap: 48px;
  }
`;

const kakaoMapWrap = css`
  @media (min-width: 1023px) {
    width: 550px;
  }
`;

const rightContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1023px) {
    align-items: unset;
  }
`;

const title = css`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
  @media (min-width: 1023px) {
    margin-bottom: 40px;
  }
`;

const timeTable = css`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 20px;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  span.title {
    display: block;
    margin-bottom: 10px;
    font-weight: 600;
  }
  @media (min-width: 1023px) {
    width: unset;
    flex-direction: row;
    gap: 120px;
    font-size: 16px;
  }
`;

const leftTable = css`
  display: flex;
  flex-direction: column;
  line-height: 22px;
  @media (min-width: 1023px) {
    line-height: 28px;
  }
`;

const rightTable = css`
  display: flex;
  flex-direction: column;
  line-height: 26px;
  span.head {
    display: inline-block;
    width: 70px;
  }
`;

const marginHeight = (height: number) => css`
  height: ${height}px;
`;

const OblivLocation = () => {
  const isMobile = useMatchMedia();

  return (
    <section css={container}>
      <div css={textWrap}>
        <h1>Obliv Clinic Map</h1>
      </div>
      <article css={content}>
        <div css={kakaoMapWrap}>
          <KakaoMap
            height={270}
            // mobileHeight={mobileMapHeight}
            // isPhysical={isPhysical}
            mobileWidth="100vw"
          />
        </div>
        <div css={rightContent}>
          <h3 css={title}>오블리브 피부 교정 센터</h3>
          <ul css={timeTable}>
            <li css={leftTable}>
              <p>
                <span className="title">오시는 길</span>
                인천광역시 연수구 인천타워대로{!isMobile ? <br /> : ' '}
                132번길 34, 3층
              </p>
              <div css={marginHeight(isMobile ? 20 : 40)} />
              <p>
                <span className="title">전화상담</span>
                032.851.9119
              </p>
            </li>
            <li css={rightTable}>
              <div>
                <span className="title">진료시간</span>
                <p>
                  <span className="head">월 - 목</span>ㅣ&nbsp;&nbsp;10:00 -
                  20:00
                </p>
                <p>
                  <span className="head">금요일</span>ㅣ&nbsp;&nbsp;10:00 -
                  21:00
                </p>
                <p>
                  <span className="head">토요일</span>ㅣ&nbsp;&nbsp;10:00 -
                  16:00
                </p>
              </div>
              <div css={marginHeight(isMobile ? 20 : 30)} />
              <div>
                <p>
                  <span className="head">평일점심</span>ㅣ&nbsp;&nbsp;13:00 -
                  14:00
                </p>
                <p>
                  <span className="head">휴무일</span>ㅣ&nbsp;&nbsp;일요일,
                  공휴일
                </p>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default OblivLocation;
