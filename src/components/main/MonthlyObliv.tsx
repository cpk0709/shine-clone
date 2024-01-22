import { css } from '@emotion/react';

import ImageWrapper from '@/components/common/ImageWrapper';
import { useMatchMedia } from '@/hooks/use-match-media';

const container = css`
  padding-top: 112px;
  @media (min-width: 1460px) {
    padding: 120px 0 76px;
    border-bottom: 1px solid #d9d9d9;
  }
`;

const content = css`
  display: flex;
  justify-content: center;
  @media (min-width: 1460px) {
    justify-content: space-between;
  }
`;

const textWrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 60px;
  h1 {
    color: #000;
    font-family: Bernhard Modern Std;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
  }
  @media (min-width: 1460px) {
    border-bottom: unset;
    justify-content: space-between;
    align-items: unset;
    padding-bottom: unset;
    h1 {
      margin-bottom: unset;
    }
  }
`;

const descWrap = css`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  h3 {
    display: block;
    font-weight: 700;
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 20px;
  }
  button {
    color: #000;
    font-family: Bernhard Modern Std;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 1px solid #000;
    padding: 10px 32px;
    border-radius: 50%;
  }
  @media (min-width: 1460px) {
    text-align: unset;
    h3 {
      margin-bottom: 40px;
    }
    p {
      margin-bottom: 80px;
    }
    button {
      font-size: 20px;
      padding: 11px 44px;
    }
  }
`;

const profileImage = css`
  width: 100%;
`;

const MonthlyObliv = () => {
  const isMobile = useMatchMedia(1460);

  return (
    <section css={container}>
      <article css={content}>
        <div css={textWrap}>
          <h1>Monthly Obliv</h1>
          <div css={descWrap}>
            <h3>오블리브 뷰티 매거진</h3>
            <p>
              {isMobile ? (
                <>
                  건강, 행복, 삶의 질을 최상으로 끌어 올리기 위해
                  <br />
                  일상속에서 할 수 있는 일이 있습니다.
                  <br />
                  긴장완화기법부터 체중 감량을 위한
                  <br />
                  운동방법, 바른 샤워 습관 등 다양한 방법이 존재합니다.
                  <br />
                  내적 건강과 외적 건강을 모두 챙길 수 있는
                  <br />
                  새로운 전략들을 오블리브와 함께 배워보세요.
                </>
              ) : (
                <>
                  건강, 행복, 삶의 질을 최상으로 끌어 올리기 위해 일상속에서 할
                  수 있는 일이 있습니다.
                  <br />
                  긴장완화기법부터 체중 감량을 위한 운동방법, 바른 샤워 습관 등
                  다양한 방법이 존재합니다.
                  <br />
                  내적 건강과 외적 건강을 모두 챙길 수 있는 새로운 전략들을
                  오블리브와 함께 배워보세요.
                </>
              )}
            </p>
            <button>View</button>
          </div>
        </div>
        {!isMobile && (
          <ImageWrapper
            pcSrc="/obliv/obliv-home-main-doctor.webp"
            alt="doctor image"
            imageCss={profileImage}
          />
        )}
      </article>
    </section>
  );
};

export default MonthlyObliv;
