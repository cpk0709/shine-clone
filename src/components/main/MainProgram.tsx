import { css } from '@emotion/react';

import ImageWrapper from '@/components/common/ImageWrapper';
import MainProgramMobSlide from '@/components/main/MainProgramMobSlide';
import { useMatchMedia } from '@/hooks/use-match-media';

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding: 78px 0 80px;
  @media (min-width: 1190px) {
    flex-direction: row;
    align-items: unset;
    padding: 126px 0 96px;
  }
`;

const imageStyle = css`
  width: 100%;
  max-width: 480px;
`;

const articleCss = css`
  h2 {
    color: #000;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-bottom: 32px;
  }
  p {
    word-break: keep-all;
    color: #000;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px;
    text-align: center;
    b {
      display: block;
      margin-bottom: 4px;
      font-weight: 400;
    }
  }
  @media (min-width: 1190px) {
    margin-top: -60px;
    max-width: 204px;
    h2 {
      font-size: 16px;
      text-align: left;
    }
    p {
      text-align: left;
      b {
        margin-bottom: 10px;
      }
    }
  }
`;

const listWrap = css`
  display: flex;
  gap: 46px;
`;

const listItemCss = css`
  > p {
    word-break: keep-all;
    color: #787878;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
  }
  @media (min-width: 1820px) {
    font-size: 14px;
  }
`;

const listTitle = css`
  padding-block: 4px;
  border-top: 1px solid #494747;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 4px;
  h3 {
    color: #000;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const MainProgram = () => {
  const isMobile = useMatchMedia(1190);

  return (
    <section css={container}>
      <article css={articleCss}>
        <h2>당신의 윤곽을 교정합니다.</h2>
        {isMobile ? (
          <p>
            <b>오블리브 시그니처 리프팅 케어</b>
            개개인의 개성과 본연의 미를 살리기 위하여
            <br />
            한가지 시술이 아닌 얼굴 구조와 피부 속 <br />
            지방과 근육의 두께, 노화의 정도를 정확하게
            <br />
            진단하여 맞춤형 시술을 진행하여 미세한 <br />
            부위까지 교정이 가능합니다. 시술자의 방식에
            <br />
            따라 그 효과와 만족도의 편차가 있어 시술
            <br />
            특성을 잘 알고 활용하는 것이 매우 중요합니다.
          </p>
        ) : (
          <p>
            <b>오블리브 시그니처 리프팅 케어</b>
            개개인의 개성과 본연의 미를 살리기 위하여 한가지 시술이 아닌 얼굴
            구조와 피부 속 지방과 근육의 두께, 노화의 정도를 정확하게 진단하여
            맞춤형 시술을 진행하여 미세한 부위까지 교정이 가능합니다. 시술자의
            방식에 따라 그 효과와 만족도의 편차가 있어 시술 특성을 잘 알고
            활용하는 것이 매우 중요합니다.
          </p>
        )}
      </article>
      {isMobile ? (
        <MainProgramMobSlide />
      ) : (
        <ul css={listWrap}>
          <li css={listItemCss}>
            <div css={listTitle}>
              <h3>보톡스 / 필러 / 실 리프팅</h3>
            </div>
            <p>아름다운 얼굴 라인과 자연스러운 표정을 바탕으로 교정합니다.</p>
            <ImageWrapper
              pcSrc="/obliv/obliv-home-program-1.webp"
              alt="보톡스 / 필러 / 실 리프팅"
              imageCss={imageStyle}
            />
          </li>
          <li css={listItemCss}>
            <div css={listTitle}>
              <h3>레이저 리프팅</h3>
            </div>
            <p>피부 속 근막층까지 침투하여 탄력을 교정합니다.</p>
            <ImageWrapper
              pcSrc="/obliv/obliv-home-program-2.webp"
              alt="레이저 리프팅"
              imageCss={imageStyle}
            />
          </li>
          <li css={listItemCss}>
            <div css={listTitle}>
              <h3>바디라인</h3>
            </div>
            <p>울퉁불퉁한 셀룰라이트와 체지방을 매끄럽게.</p>
            <ImageWrapper
              pcSrc="/obliv/obliv-home-program-3.webp"
              alt="바디라인"
              imageCss={imageStyle}
            />
          </li>
        </ul>
      )}
    </section>
  );
};

export default MainProgram;
