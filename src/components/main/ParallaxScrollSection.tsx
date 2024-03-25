import { css } from '@emotion/react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { overrideImageSrc } from '@/utils/common';

const container = css`
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
`;

const listImgWrap = css`
  width: 100%;
  height: 380px;
  background-color: pink;
  margin-bottom: 60px;
`;

const articleCSS = css`
  display: flex;
  /* justify-content: space-between; */
  position: relative;
`;

const rightSide = css`
  width: 100%;
  max-width: 57%;
  margin-left: auto;
`;

const listCSS = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* gap: 60px; */
  li {
    border-left: 1px solid #999;
    padding-inline: 50px;
  }
`;

const marginCSS = css`
  width: 100%;
  height: 100px;
  border-left: 1px solid #999;
`;

const leftSide = (isFixed: boolean, positionVal: number, bgImg: string) => css`
  /* section 기분범위 내인 경우 fixed, section 보다 위로 스크롤 한 경우 unset, section 보다 아래인 경우 absolute */
  position: ${isFixed && positionVal < 0
    ? 'fixed'
    : positionVal > 0
    ? 'unset'
    : 'absolute'};
  top: ${isFixed ? 0 : 'unset'};
  /* left: 0; */
  /* section 보다 아래로 내린 경우 bottom에 위치 */
  bottom: ${isFixed ? 'unset' : 0};
  left: 0;
  background: url(${overrideImageSrc(bgImg)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  max-width: 40%;
`;

type ParallaxScrollSectionProps = {
  leftSideBg: string;
  isRightSideMargin?: boolean;
};

const ParallaxScrollSection = ({
  leftSideBg,
  isRightSideMargin = false,
}: ParallaxScrollSectionProps) => {
  // section 위치값. section 모니터 top 에 위치시 0, 그 아래로 스크롤 시 마이너스 값
  const [position, setPosition] = useState(0);
  // article 모니터 고정 기준
  const [isFixed, setIsFixed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null);

  const handlePosition = useCallback(() => {
    if (sectionRef.current) {
      setPosition(sectionRef.current.getBoundingClientRect().y);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handlePosition);

    return () => window.removeEventListener('scroll', handlePosition);
  }, [handlePosition]);

  useEffect(() => {
    if (sectionRef.current && articleRef.current) {
      // section이 모니터 top에 위치하고 section의 끝 부분(끝 부분은 section 전체 높이에서 article의 높이를 빼준 값) 까지만 fixed 처리.
      if (
        position < 0 &&
        position >
          -(sectionRef.current.offsetHeight - articleRef.current.offsetHeight)
      ) {
        setIsFixed(true);
      } else if (position > 0) {
        // 스크롤을 section 보다 위로 올렸을 경우
        setIsFixed(false);
      } else {
        setIsFixed(false);
      }
    }
  }, [position]);

  return (
    <section css={container} ref={sectionRef}>
      <article css={articleCSS}>
        <div
          css={leftSide(isFixed, position, leftSideBg)}
          ref={articleRef}
        ></div>
        <section css={rightSide}>
          <ul css={listCSS}>
            <li>
              <div css={listImgWrap}></div>
            </li>
            <li>
              <div css={listImgWrap}></div>
            </li>
            <li>
              <div css={listImgWrap}></div>
            </li>
            <li>
              <div css={listImgWrap}></div>
            </li>
            <li>
              <div css={listImgWrap}></div>
            </li>
            <li>
              <div css={listImgWrap}></div>
            </li>
            <li>
              <div css={listImgWrap}></div>
            </li>
            <li>
              <div css={listImgWrap}></div>
            </li>
            <li>
              <div css={listImgWrap}></div>
            </li>
            <li>
              <div css={listImgWrap}></div>
            </li>
          </ul>
          {isRightSideMargin && <div css={marginCSS} />}
        </section>
      </article>
    </section>
  );
};

export default ParallaxScrollSection;
