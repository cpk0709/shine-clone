import { css } from '@emotion/react';
import { useRef } from 'react';

import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { responsiveGap } from '@/styles/common';

const container = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;

const titleWrap = css`
  h2 {
    margin-bottom: calc(100vw * (14 / 1240));
    font-size: calc(100vw * (36 / 1240));
    color: #a8a8a8;
  }
  h1 {
    font-size: calc(100vw * (38 / 1240));
  }
  margin-bottom: 80px;
`;

const listWrap = css`
  display: flex;
  ${responsiveGap(60)}
  li {
    transform: translateY(120px);
    opacity: 0;
  }
  li.active {
    transform: translateY(0);
    opacity: 1;
    transition:
      transform 1.4s ease,
      opacity 1.4s ease;
  }
  li:nth-child(1).active {
    transition-delay: 0s;
  }
  li:nth-child(2).active {
    transition-delay: 0.4s;
  }
  li:nth-child(3).active {
    transition-delay: 0.9s;
  }
`;

const listItem = css`
  width: calc(100vw * (320 / 1240));
`;

const listImgWrap = css`
  width: 100%;
  height: 294px;
  background-color: pink;
  margin-bottom: 60px;
`;

const listTitleWrap = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h4 {
    font-size: calc(100vw * (21 / 1240));
    font-weight: 100;
  }
  h3 {
    font-size: calc(100vw * (30 / 1240));
  }
`;

const listDivider = css`
  height: 1px;
  width: 100%;
  background-color: #000;
  margin-block: calc(100vw * (24 / 1240));
`;

const listDesc = css`
  font-size: calc(100vw * (15 / 1240));
  word-break: keep-all;
`;

const ArticleRisingUpSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(sectionRef, {
    root: undefined,
    rootMargin: '0px',
    threshold: 0.1, // 요소의 10%가 보이면 콜백 실행
  });
  const isVisible = Boolean(entry?.isIntersecting);

  return (
    <section css={container} ref={sectionRef}>
      <article>
        <div css={titleWrap}>
          <h2>SHINEAMC Brand Mission</h2>
          <h1>
            최고의 의료서비스를 통해 반려동물과
            <br />
            보호자의 행복한 삶을 만들어갑니다.
          </h1>
        </div>
        <ul css={listWrap}>
          <li className={isVisible ? 'active' : ''} css={listItem}>
            <div css={listImgWrap}>Photo Area</div>
            <div>
              <div css={listTitleWrap}>
                <h4>Expertise</h4>
                <h3>전문적인 기술</h3>
              </div>
              <div css={listDivider} />
              <p css={listDesc}>
                샤인은 서울대, 건대 석박사 출신 등 국내 최고 수준의
                <br />
                전문 의료진이 상주합니다. 또한 대학병원급 장비를 활용하여
                <br /> 정밀하고 정확한 진단을 시행합니다.
              </p>
            </div>
          </li>
          <li className={isVisible ? 'active' : ''} css={listItem}>
            <div css={listImgWrap}>Photo Area</div>
            <div>
              <div css={listTitleWrap}>
                <h4>Expertise</h4>
                <h3>전문적인 기술</h3>
              </div>
              <div css={listDivider} />
              <p css={listDesc}>
                샤인은 서울대, 건대 석박사 출신 등 국내 최고 수준의
                <br />
                전문 의료진이 상주합니다. 또한 대학병원급 장비를 활용하여
                <br /> 정밀하고 정확한 진단을 시행합니다.
              </p>
            </div>
          </li>
          <li className={isVisible ? 'active' : ''} css={listItem}>
            <div css={listImgWrap}>Photo Area</div>
            <div>
              <div css={listTitleWrap}>
                <h4>Expertise</h4>
                <h3>전문적인 기술</h3>
              </div>
              <div css={listDivider} />
              <p css={listDesc}>
                샤인은 서울대, 건대 석박사 출신 등 국내 최고 수준의
                <br />
                전문 의료진이 상주합니다. 또한 대학병원급 장비를 활용하여
                <br /> 정밀하고 정확한 진단을 시행합니다.
              </p>
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default ArticleRisingUpSection;
