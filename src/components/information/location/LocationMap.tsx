import { css } from '@emotion/react';

import KakaoMap from '@/components/common/map/KakaoMap';
import { useMatchMedia } from '@/hooks/use-match-media';

const titleContainer = css`
  height: 190px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: flex-end;
  padding-left: 140px;
  padding-bottom: 30px;
`;

const titleWrap = css`
  display: flex;
  align-items: center;
  gap: 10px;
  h1 {
    color: #000;
    font-family: Bernhard Modern Std;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1px;
  }
  h6 {
    color: #000;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

const listWrap = css`
  li {
    border-bottom: 1px solid #ddd;
  }
  .map {
    padding-bottom: 40px;
  }
  @media (min-width: 1023px) {
    padding-inline: 140px;
    .map {
      padding: 40px 100px 36px;
    }
  }
`;

const listCss = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-block: 80px;
  padding-left: 22px;
  .list-title {
    color: #000;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
  }
  @media (min-width: 1023px) {
    flex-direction: row;
    gap: 70px;
    padding-left: 140px;
    .list-title {
      width: 76px;
    }
  }
`;

const scheduleWrap = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 1023px) {
    flex-direction: row;
    gap: 92px;
  }
`;

const scheduleText = css`
  display: flex;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  span {
    width: 58px;
    margin-right: 12px;
    line-height: 20px;
    white-space: nowrap;
  }
  .divider {
    margin-right: 18px;
  }
`;

const telAddress = css`
  padding: 60px 0 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #000;
    font-family: Noto Sans KR;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 80% */
    margin-bottom: 20px;
  }
  p {
    color: #000;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
  @media (min-width: 1023px) {
    padding: 100px 0 80px;
  }
`;

const LocationMap = () => {
  const isMobile = useMatchMedia();

  return (
    <section>
      {!isMobile && (
        <div css={titleContainer}>
          <div css={titleWrap}>
            <h1>Obliv Clinic Map</h1>
            <h6>오블리브 오시는 길</h6>
          </div>
        </div>
      )}
      <ul css={listWrap}>
        <li className="map">
          <KakaoMap height={430} mobileHeight={420} />
        </li>
        <li css={listCss}>
          <div className="list-title">주소</div>
          <p css={scheduleText}>
            인천 연수구 인천타워대로 132번길 34{isMobile ? <br /> : ' '}3층
            오블리브의원
          </p>
        </li>
        <li css={listCss}>
          <div className="list-title">주차</div>
          <p css={scheduleText}>
            <span>무료주차</span>
            <div className="divider">ㅣ</div>건물 지하 주차장 2시간 무료
            {isMobile ? <br /> : ' '}(데스크 주차 등록)
          </p>
        </li>
        <li css={listCss}>
          <div className="list-title">대중교통</div>
          <div>
            <p css={scheduleText}>
              <span>지하철</span>
              <div className="divider">ㅣ</div>인천대입구역 4번출구
              {isMobile ? <br /> : ' '}(도보 5분 거리)
            </p>
            <p css={scheduleText}>
              <span>버&nbsp;&nbsp;&nbsp;스</span>
              <div className="divider">ㅣ</div>16-1 송도컨벤시아
              {isMobile ? <br /> : ' '}남문 정거장
            </p>
          </div>
        </li>
        <li css={listCss}>
          <div className="list-title">진료시간</div>
          <div css={scheduleWrap}>
            <div>
              <p css={scheduleText}>
                <span>월 - 목</span>
                <div className="divider">ㅣ</div>10:00 - 20:00
              </p>
              <p css={scheduleText}>
                <span>금</span>
                <div className="divider">ㅣ</div>10:00 - 21:00
              </p>
              <p css={scheduleText}>
                <span>토</span>
                <div className="divider">ㅣ</div>10:00 - 16:00
              </p>
            </div>
            <div>
              <p css={scheduleText}>
                <span>평일점심</span>
                <div className="divider">ㅣ</div>13:00 - 14:00
              </p>
              <p css={scheduleText}>
                <span>휴무일</span>
                <div className="divider">ㅣ</div>일요일, 공휴일
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div css={telAddress}>
        <h2>032.851.9119</h2>
        <p>
          인천 연수구 인천타워대로 132번길 34
          <br />
          3층 오블리브의원
        </p>
      </div>
    </section>
  );
};

export default LocationMap;
