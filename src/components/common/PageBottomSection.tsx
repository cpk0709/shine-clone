import { css } from '@emotion/react';

import ImageWrapper from '@/components/common/ImageWrapper';
import KakaoMap from '@/components/common/map/KakaoMap';
import { useMatchMedia } from '@/hooks/use-match-media';
import {
  responsiveFontSize,
  responsiveGap,
  responsiveHeight,
  responsiveLineHeight,
  responsiveMargin,
  responsivePadding,
  responsiveWidth,
} from '@/styles/common';

const imageStyle = css`
  width: 100%;
`;

const headerArticle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${responsiveMargin(0, 120, 0, 0)}
  @media (min-width: 1023px) {
    margin-bottom: 120px;
  }
`;

const titleCss = css`
  color: #282828;
  text-align: center;
  font-family: Noto Sans KR;
  ${responsiveFontSize(80)}
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.8px;
  ${responsiveMargin(0, 20, 0, 0)}
  @media (min-width: 1023px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

const subTitleCss = css`
  color: #282828;
  text-align: center;
  font-family: Bernhard Modern Std;
  ${responsiveFontSize(60)}
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  ${responsiveMargin(0, 60, 0, 0)}
  @media (min-width: 1023px) {
    font-size: 20px;
  }
`;

const listItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  word-break: keep-all;
  ${responsiveMargin(0, 160, 0, 0)}
  strong {
    color: #282828;
    text-align: center;
    font-family: Bernhard Modern Std;
    ${responsiveFontSize(140)}
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1px;
    ${responsiveMargin(0, 40, 0, 0)}
  }
  h2 {
    color: #282828;
    text-align: center;
    font-family: Noto Sans KR;
    ${responsiveFontSize(100)}
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    ${responsiveMargin(0, 60, 0, 0)}
  }
  p.desc {
    color: #282828;
    text-align: center;
    font-family: Noto Sans KR;
    ${responsiveFontSize(60)}
    ${responsiveLineHeight(90)}
    font-style: normal;
    font-weight: 300;
    ${responsiveMargin(0, 140, 0, 0)}
  }
  @media (min-width: 1023px) {
    margin-bottom: 150px;
    strong {
      font-size: 50px;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 20px;
      margin-bottom: 40px;
    }
    p.desc {
      font-size: 18px;
      line-height: 28px;
      margin-bottom: 80px;
    }
  }
`;

const careerArticle = css`
  display: flex;
  align-items: flex-end;
  ${responsiveGap(60)}
  padding-inline:20px;
  @media (min-width: 1023px) {
    gap: 60px;
    padding-inline: unset;
  }
`;

const nameTitle = css`
  color: #212121;
  font-family: Noto Sans KR;
  ${responsiveFontSize(32)}
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  ${responsiveMargin(0, 30, 0, 0)}
  b {
    font-weight: 700;
  }
  @media (min-width: 1023px) {
    margin-bottom: 20px;
    font-size: 20px;
  }
`;

const careerWrap = css`
  display: flex;
  flex-direction: column;
  ${responsiveGap(70)}
  ${responsiveWidth(680)}
  @media (min-width: 1023px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 53px;
    width: unset;
  }
`;

const marginDiv = css`
  width: 100%;
  ${responsiveHeight(30)}
  background-color: transparent;
  @media (min-width: 1023px) {
    height: 40px;
  }
`;

const careerCss = css`
  color: #212121;
  font-family: Noto Sans KR;
  ${responsiveFontSize(32)}
  font-style: normal;
  font-weight: 400;
  @media (min-width: 1023px) {
    font-size: 16px;
    line-height: 30px;
    line-height: 22px;
  }
`;

const imageList = css`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-inline: 20px;
  li.flex {
    display: flex;
    gap: 3px;
  }
  li.img-desc {
    color: #282828;
    text-align: center;
    font-family: Noto Sans KR;
    ${responsiveFontSize(36)}
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 162.5% */
    letter-spacing: -0.32px;
    ${responsiveMargin(20, 200, 0, 0)}
    word-break: keep-all;
  }
  li.img-desc:last-child {
    margin-bottom: unset;
  }
  @media (min-width: 1023px) {
    gap: 5px;
    padding-inline: unset;
    li.flex {
      gap: 5px;
    }
    li.img-desc {
      font-size: 16px;
      margin-top: 50px;
      margin-bottom: unset;
    }
  }
`;

const extraDesc = css`
  color: #282828;
  text-align: center;
  font-family: Noto Sans KR;
  ${responsiveFontSize(40)}
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.36px;
  word-break: keep-all;
  @media (min-width: 1023px) {
    font-size: 18px;
  }
`;

const preventiveArticle = css`
  display: flex;
  gap: 5px;
  margin-top: 80px;
  padding-inline: 20px;
  @media (min-width: 1023px) {
    padding-inline: unset;
  }
`;

const preventiveImg = css`
  flex: 1;
`;

const preventiveList = css`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;

const preventiveListItem = css`
  background-color: #ededed;
  display: flex;
  flex-direction: column;
  ${responsiveGap(40)}
  align-items: center;
  justify-content: center;
  ${responsivePadding(0, 0, 40, 40)}
  p {
    color: #282828;
    text-align: center;
    font-family: Noto Sans KR;
    ${responsiveFontSize(30)}
    font-style: normal;
    font-weight: 100;
    letter-spacing: -0.28px;
    word-break: keep-all;
  }
  @media (min-width: 1023px) {
    gap: 40px;
    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

const iconImgStyle = css`
  @media (max-width: 1023px) {
    ${responsiveWidth(200)}
  }
`;

const listWrap = css`
  margin-top: 120px;
  li {
    border-bottom: 1px solid #ddd;
  }
  .map {
    padding-bottom: 40px;
    border-bottom: unset;
    border-top: unset;
  }
  @media (min-width: 1023px) {
    margin-top: unset;
    padding-inline: 140px;
    .map {
      padding: 40px 100px 36px;
      border-bottom: 3px solid #000;
      border-top: 3px solid #000;
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
    line-height: 20px;
    margin-bottom: 20px;
  }
  p {
    color: #000;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  @media (min-width: 1023px) {
    padding: 100px 0 80px;
  }
`;

const careerList = [
  [
    '(현) 오블리브의원 대표원장',
    '(전) 유앤아이의원 원장',
    '(전) 예쁨주의쁨의원 원장',
    '(전) 포에버의원 원장',
    '@',
    '∙ 대한 미용성형 레이저의학회 학술이사',
    '∙ 대한 리프팅 연구회 이사',
    '∙ 대한 미용의사회 학술위원',
    '∙ 대한 미용성형 레이저의학회 정회원',
    '∙ 대한 비만 체형학회 정회원',
    '∙ 대한 레이저 피부 모발학회 정회원',
    '∙ 스마트 아카데미 강사',
  ],
  [
    '∙ Liftera HIFU 리프팅 레이저 키닥터',
    '∙ Corage 공명파 레이저 키닥터',
    '∙ RG 마이크로 프레스 몰딩 리프팅 PDO실',
    '∙ RG - LIFTER 키닥터',
    '∙ PCL콜라겐 스킨부스터 키닥터',
    '@',
    '∙ MBN찾아라! 특종건강백서 11회 출연',
  ],
];

const PageBottomSection = () => {
  const isMobile = useMatchMedia();

  return (
    <section>
      <article css={headerArticle}>
        <h1 css={titleCss}>오블리브 의원이 특별한 이유</h1>
        <h3 css={subTitleCss}>Special reason of Obliv Clinic</h3>
        <ImageWrapper
          pcSrc="/obliv/obliv_page_bottom_1.webp"
          alt="obliv clinic image"
          imageCss={imageStyle}
        />
      </article>
      <ul>
        <li css={listItem}>
          <strong>1</strong>
          <h2>근복적인 것과 아름다움에 대해 연구하는 박영진 대표원장</h2>
          <p className="desc">
            정확한 진단과 치료를 바탕으로 신뢰를 쌓아온{isMobile ? <br /> : ' '}
            박영진 원장의 노하우는 어디에서도 흉내 낼 수 없는 고유한 기술로
            <br />
            피부 교정에 대한 지속적인 연구 개발과 국내외 학괴, 세미나, 강연 등을
            통하여 시술 노하우를 공유해 드리고 있습니다.
          </p>
          <div css={careerArticle}>
            <ImageWrapper
              pcSrc="/obliv/obliv_page_bottom_2.webp"
              alt="obliv 대표원장 박영진"
              imageCss={imageStyle}
            />
            <div>
              <h3 css={nameTitle}>
                대표원장 <b>박영진</b>
              </h3>
              <div css={careerWrap}>
                {careerList.map((careerColumn, index) => (
                  <ul key={index}>
                    {careerColumn.map((career, idx) =>
                      career === '@' ? (
                        <div css={marginDiv} key={idx} />
                      ) : (
                        <li css={careerCss} key={idx}>
                          {career}
                        </li>
                      ),
                    )}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </li>
        <li css={listItem}>
          <strong>2</strong>
          <h2>책과 음악 문화가 있는 오블리브 라운지</h2>
          <p className="desc">
            방문하시는 고객님께 프라이빗한 공간에서{isMobile ? <br /> : ' '}
            편안함을 느끼실 수 있도록 노력합니다.
            <br />
            당신만의 안식처에서 선물같은 시간을 만나보세요.
            <br />
            고객님께 정교한 맞춤 케어를{isMobile ? <br /> : ' '}정성스럽게
            제공하는 것이 오블리브의 기쁨입니다.
          </p>
          <ul css={imageList}>
            <li>
              <ImageWrapper
                pcSrc="/obliv/obliv_page_bottom_3.webp"
                alt="obliv 라운지"
                imageCss={imageStyle}
              />
            </li>
            {isMobile && (
              <li className="img-desc">
                떠나고 싶지만 떠나지 못하는 요즘, 공항의 라운지처럼 디자인 된
                ©오블리브 라운지
              </li>
            )}
            <li className="flex">
              <ImageWrapper
                pcSrc="/obliv/obliv_page_bottom_4.webp"
                alt="obliv 라운지"
                imageCss={imageStyle}
              />
              <ImageWrapper
                pcSrc="/obliv/obliv_page_bottom_5.webp"
                alt="obliv 라운지"
                imageCss={imageStyle}
              />
            </li>
            {isMobile && (
              <li className="img-desc">
                오블리브가 제공하는 프라이빗한 공간에서 휴식과 회복이 선사하는
                아름다움을 경험해보세요.
              </li>
            )}
            <li>
              <ImageWrapper
                pcSrc="/obliv/obliv_page_bottom_6.webp"
                alt="obliv 라운지"
                imageCss={imageStyle}
              />
            </li>
            {isMobile && (
              <li className="img-desc">
                시술을 앞두고 긴장과 걱정을 품고 오시는 고객님을 위해 모든
                공간을 따듯한 정서와 평온한 모티프를 담았습니다.
              </li>
            )}
            <li className="flex">
              <ImageWrapper
                pcSrc="/obliv/obliv_page_bottom_7.webp"
                alt="obliv 라운지"
                imageCss={imageStyle}
              />
              <ImageWrapper
                pcSrc="/obliv/obliv_page_bottom_8.webp"
                alt="obliv 라운지"
                imageCss={imageStyle}
              />
            </li>
            <li className="img-desc">
              일상을 벗어나 이곳에 머무는 고객님들께 시그니처 티와 음악
              문화서적을 제공함으로 진정한 재충전의 시간을 선사합니다.
            </li>
          </ul>
        </li>
        <li css={listItem}>
          <strong>3</strong>
          <h2>방역 ∙ 안심시설</h2>
          <p css={extraDesc}>
            오블리브는 아래와 같은 방역수칙을 준수하여 안심하고 시술받으실 수
            있도록 노력하고 있습니다.
          </p>
          <div css={preventiveArticle}>
            <div css={preventiveImg}>
              <ImageWrapper
                pcSrc="/obliv/obliv_page_bottom_9.webp"
                alt="obliv 방역"
                imageCss={imageStyle}
              />
            </div>
            <ul css={preventiveList}>
              <li css={preventiveListItem}>
                <ImageWrapper
                  pcSrc="/obliv/icon_obliv_page_bottom_1.svg"
                  alt="obliv 방역"
                  imageCss={[imageStyle, iconImgStyle]}
                />
                <p>
                  예약제를 이용하여 고객이
                  <br />
                  서로 마주치지 않도록 배려합니다.
                </p>
              </li>
              <li css={preventiveListItem}>
                <ImageWrapper
                  pcSrc="/obliv/icon_obliv_page_bottom_2.svg"
                  alt="obliv 방역"
                  imageCss={[imageStyle, iconImgStyle]}
                />
                <p>
                  예약제를 이용하여 고객이
                  <br />
                  서로 마주치지 않도록 배려합니다.
                </p>
              </li>
              <li css={preventiveListItem}>
                <ImageWrapper
                  pcSrc="/obliv/icon_obliv_page_bottom_3.svg"
                  alt="obliv 방역"
                  imageCss={[imageStyle, iconImgStyle]}
                />
                <p>
                  예약제를 이용하여 고객이
                  <br />
                  서로 마주치지 않도록 배려합니다.
                </p>
              </li>
              <li css={preventiveListItem}>
                <ImageWrapper
                  pcSrc="/obliv/icon_obliv_page_bottom_4.svg"
                  alt="obliv 방역"
                  imageCss={[imageStyle, iconImgStyle]}
                />
                <p>
                  예약제를 이용하여 고객이
                  <br />
                  서로 마주치지 않도록 배려합니다.
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      {/*  */}
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

export default PageBottomSection;
