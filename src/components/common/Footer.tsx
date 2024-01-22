import { css } from '@emotion/react';

import { useMatchMedia } from '@/hooks/use-match-media';
import { imageSize } from '@/styles/common';

import ImageWrapper from './ImageWrapper';

const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14%;
  justify-content: center;
  background-color: #f4f4f4;
  padding: 24px 0 100px;
  @media (min-width: 1200px) {
    flex-direction: row;
    padding: 80px 0 170px;
  }
`;
const logoWrap = css`
  margin-bottom: 24px;
  text-align: center;
  @media (min-width: 1200px) {
    margin-bottom: 20px;
    text-align: left;
  }
`;

const infoList = (flexDirection = 'row') => css`
  display: flex;
  flex-direction: column;
  color: #000;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
  li {
    text-align: center;
    span.bold {
      font-weight: 600;
      margin-right: 8px;
    }
    span.semi-bold {
      font-weight: 400;
    }
  }
  @media (min-width: 1200px) {
    flex-direction: ${flexDirection};
    font-size: 15px;
    line-height: 25px;
    li {
      text-align: left;
      span.bold {
        margin-right: 14px;
      }
    }
  }
`;

const noticeProductionWrap = css`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 1200px) {
    flex-direction: column;
  }
`;

const notice = css`
  color: #000;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 15px;
  text-align: center;
  margin-top: 22px;
  margin-bottom: 29px;
  @media (min-width: 1200px) {
    margin-top: 29px;
    font-size: 15px;
    text-align: unset;
    line-height: 23px;
  }
`;

const policyWrap = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  button {
    color: #000;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: -0.24px;
  }
  .divider {
    width: 1px;
    height: 12px;
    background-color: #000;
  }
  @media (min-width: 1200px) {
    justify-content: unset;
    gap: 12px;
    button {
      font-size: 15px;
      letter-spacing: unset;
    }
    .divider {
      height: 15px;
    }
  }
`;

const snsBtnList = css`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
  @media (min-width: 1200px) {
    justify-content: unset;
    margin-bottom: unset;
  }
`;

const Footer = () => {
  const isMobile = useMatchMedia(1200);

  return (
    <section css={container}>
      <article>
        <div css={logoWrap}>
          <ImageWrapper
            pcSrc="/obliv/oblive-gnb-logo-black.svg"
            alt="obliv logo"
            imageCss={imageSize('102px', 1200)}
          />
        </div>
        <ul css={infoList('column')}>
          <li>
            <span className="bold">상호명</span>
            <span>오블리브의원</span>
          </li>
          <li>
            <span className="bold">대표자</span>
            <span>
              박영진 인천광역시 연수구 인천타워대로132번길 34 (송도동) 3F
            </span>
          </li>
          <li>
            <span className="bold">대표번호</span>
            <span style={{ marginRight: '24px' }}>032-851-9119</span>
            <span className="bold">사업자등록번호</span>
            <span className="semi-bold">457-23-00938</span>
          </li>
        </ul>
        <div css={noticeProductionWrap}>
          <p css={notice}>
            {isMobile ? (
              <>
                오블리브의원의 모든 콘텐츠는 [콘텐츠산업진흥법]에 따라
                <br />
                최초 제작일로부터 5년간 보호됩니다.
                <br />
                오블리브의원에서 제작한 모든 창작물의 저작권은 관련 법률에
                의하여
                <br />
                보호받고 있으므로 허가 없는 무단도용은 민사적 손해배상책임을
                비롯해
                <br />
                콘텐츠산업진흥법 제 40조에 의하여 최고 1년 이하의 징역이나
                <br />
                2천만원 이하의 벌금형으로 처벌을 받을 수 있음을 고지합니다.
              </>
            ) : (
              <>
                {' '}
                오블리브의원의 모든 콘텐츠는 [콘텐츠산업진흥법]에 따라 최초
                제작일로부터 5년간 보호됩니다.
                <br />
                오블리브의원에서 제작한 모든 창작물의 저작권은 관련 법률에
                의하여 보호받고 있으므로 허가 없는 무단도용은 민사적
                손해배상책임을 비롯해
                <br />
                콘텐츠산업진흥법 제 40조에 의하여 최고 1년 이하의 징역이나
                2천만원 이하의 벌금형으로 처벌을 받을 수 있음을 고지합니다.
              </>
            )}
          </p>
          <ul css={infoList()}>
            {isMobile ? (
              <>
                <li>
                  <span className="bold">제작년월일</span>
                  <span style={{ marginRight: '8px' }}>2020년</span>
                  <span className="bold">제작자</span>
                  <span>박영진 (사업자번호 : 457-23-00938)</span>
                </li>
              </>
            ) : (
              <>
                <li style={{ marginRight: '20px' }}>
                  <span className="bold">제작년월일</span>
                  <span>2020년</span>
                </li>
                <li style={{ marginRight: '50px' }}>
                  <span className="bold">제작자</span>
                  <span>박영진 (사업자번호 : 457-23-00938)</span>
                </li>
              </>
            )}

            {!isMobile && (
              <li css={policyWrap}>
                <button>사이트 이용약관</button>
                <div className="divider" />
                <button>개인정보처리방침</button>
              </li>
            )}
          </ul>
        </div>
      </article>
      <ul css={snsBtnList}>
        <li>
          <button>
            <ImageWrapper
              pcSrc="/obliv/oblive-icon-footer-blog-black.svg"
              alt="blog button"
              imageCss={imageSize()}
            />
          </button>
        </li>
        <li>
          <button>
            <ImageWrapper
              pcSrc="/obliv/oblive-icon-footer-insta-black.svg"
              alt="instagram button"
              imageCss={imageSize()}
            />
          </button>
        </li>
        <li>
          <button>
            <ImageWrapper
              pcSrc="/obliv/oblive-icon-footer-youtube-black.svg"
              alt="youtube button"
              imageCss={imageSize()}
            />
          </button>
        </li>
      </ul>
      {isMobile && (
        <div css={policyWrap}>
          <button>사이트 이용약관</button>
          <div className="divider" />
          <button>개인정보처리방침</button>
        </div>
      )}
    </section>
  );
};

export default Footer;
