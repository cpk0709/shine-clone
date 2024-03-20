import { css } from '@emotion/react';
import { useRef } from 'react';
import CountUp from 'react-countup';

import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { responsiveGap } from '@/styles/common';

const container = css`
  background-color: #000048;
  padding: calc((100vw * (216 / 1240))) calc((100vw * (60 / 1240)))
    calc((100vw * (209 / 1240)));
  .color-white {
    color: #fff;
  }
  .color-grey {
    color: #9c9cc8;
  }
`;

const fontSize = (size: number) => css`
  font-size: calc(100vw * (${size} / 1240));
`;

const articleCSS = css`
  display: flex;
  justify-content: center;
  ${responsiveGap(140)}
`;

const flex = (gap = 0) => css`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  ${responsiveGap(gap)}
`;

const minWidthCSS = (minWidth: number) => css`
  min-width: ${minWidth}px;
`;

const CountUpSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(sectionRef, {
    root: undefined,
    rootMargin: '0px',
    threshold: 0.5, // 요소의 50%가 보이면 콜백 실행
    freezeOnceVisible: true,
  });

  const isVisible = Boolean(entry?.isIntersecting);

  const totalCount = 102_582;
  const countOfTreat = 8136;
  const countOfDiagnosis = 39_532;
  const countOfHospital = 174;

  return (
    <section ref={sectionRef} css={container}>
      <article css={articleCSS}>
        <div>
          <h2 className="color-white" css={fontSize(36)}>
            다년간 축적된 임상데이터
          </h2>
          <p className="color-white" css={fontSize(20)}>
            샤인동물메디컬센터는 다년간 쌓아온 경험을 통하여
            <br />
            다양한 변수에 신속, 정확하게 대처할 수 있습니다.
          </p>
          <p className="color-grey" css={fontSize(20)}>
            (2024년 02월 기준)
          </p>
        </div>
        <div>
          <p className="color-grey" css={[fontSize(36), flex()]}>
            진료건수&nbsp;&nbsp;&nbsp;&nbsp;
            <strong
              className="color-white"
              css={[fontSize(80), minWidthCSS(430)]}
            >
              {isVisible ? (
                <CountUp end={totalCount} delay={1} duration={3} />
              ) : (
                0
              )}
            </strong>
            <b className="color-white" css={fontSize(32)}>
              &nbsp;건
            </b>
          </p>
          <ul className="color-grey" css={flex(80)}>
            <li>
              <span css={fontSize(20)}>간/담낭/췌장 전문진료</span>
              <p css={fontSize(34)}>
                {isVisible ? (
                  <CountUp end={countOfTreat} delay={1} duration={3} />
                ) : (
                  0
                )}
                건
              </p>
            </li>
            <li css={minWidthCSS(190)}>
              <span css={fontSize(20)}>영상진단건수</span>
              <p css={fontSize(34)}>
                {isVisible ? (
                  <CountUp end={countOfDiagnosis} delay={1} duration={3} />
                ) : (
                  0
                )}
                건
              </p>
            </li>
            <li css={minWidthCSS(112)}>
              <span css={fontSize(20)}>협력 병원</span>
              <p css={fontSize(34)}>
                {isVisible ? (
                  <CountUp end={countOfHospital} delay={1} duration={3} />
                ) : (
                  0
                )}
                곳
              </p>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default CountUpSection;
