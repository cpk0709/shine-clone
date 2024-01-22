import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { css } from '@emotion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import ImageWrapper from '@/components/common/ImageWrapper';

const SwiperContainer = css`
  position: relative;
  width: 100%;
  .swiper {
    width: 80%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const slideImgCss = css`
  width: 100%;
  max-width: 360px;
`;

const slideItem = css`
  display: flex;
  flex-direction: column;
`;

const listTitle = css`
  padding-block: 5px;
  border-top: 1px solid #494747;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 4px;
  h3 {
    color: #000;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
  }
`;

const listDesc = css`
  height: 40px;
  color: #787878;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 116.667% */
  text-align: left;
  margin: 6px 0 16px;
`;

const scrollBarContainer = css`
  /* position: absolute;
  bottom: 400px;
  left: 0; */
  width: 100%;
  height: 2px;
  background-color: #d9d9d9;
  margin-top: 60px;
`;

// 기본 스크롤바 길이가 전체의 60%
const SCROLL_BAR_INITIAL_RATIO = 0.4;
// 전체 스크롤 길이에서 스크롤바 외의 길이 40$
const PER_REMAIN_BAR_WIDTH_RATIO = 0.6;
// 스크롤 길이가 변경될 최대 횟수 = slide array 마지막 index
const LIST_MAX_INDEX_NUMBER = 2;

const scrollBar = (width: number) => css`
  height: 2px;
  width: ${width}px;
  background-color: #494747;
  transition: width 0.2s;
`;

const MainProgramMobSlide = () => {
  const scrollBarRef = useRef<HTMLDivElement>(null);
  const [scrollBarState, setScrollBarState] = useState({
    initialWidth: 0,
    currentWidth: 0,
    perRemainWidth: 0,
  });

  /**
   * initialWidth : 스크롤바 초기 길이
   * currentWidth : 스크롤바 현재 길이
   * perRemainWidth : PER_REMAIN_BAR_WIDTH_RATIO 를 스크롤바 가변길이 최대횟수로 나눈 값 : 슬라이드당 늘어날 길이
   */
  useEffect(() => {
    if (scrollBarRef.current) {
      const initialWidth =
        scrollBarRef.current.offsetWidth * SCROLL_BAR_INITIAL_RATIO;
      setScrollBarState({
        initialWidth,
        currentWidth: initialWidth,
        perRemainWidth:
          (scrollBarRef.current.offsetWidth * PER_REMAIN_BAR_WIDTH_RATIO) /
          LIST_MAX_INDEX_NUMBER,
      });
    }
  }, []);

  const updateScrollBar = useCallback((swiperIndex: number) => {
    setScrollBarState((prevState) => ({
      ...prevState,
      currentWidth:
        prevState.initialWidth + swiperIndex * prevState.perRemainWidth,
    }));
  }, []);

  return (
    <div css={SwiperContainer}>
      <Swiper
        initialSlide={0}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        onSlideChange={({ activeIndex }) => updateScrollBar(activeIndex)}
      >
        <SwiperSlide>
          <div css={slideItem}>
            <div css={listTitle}>
              <h3>보톡스 / 필러 / 실 리프팅</h3>
            </div>
            <p css={listDesc}>
              아름다운 얼굴 라인과 자연스러운 표정을
              <br />
              바탕으로 교정합니다.
            </p>
            <ImageWrapper
              pcSrc={'/obliv/obliv-home-program-1.webp'}
              alt="보톡스 / 필러 / 실 리프팅"
              imageCss={slideImgCss}
              isPriority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div css={slideItem}>
            <div css={listTitle}>
              <h3>레이저 리프팅</h3>
            </div>
            <p css={listDesc}>피부 속 근막층까지 침투하여 탄력을 교정합니다.</p>
            <ImageWrapper
              pcSrc={'/obliv/obliv-home-program-2.webp'}
              alt="레이저 리프팅"
              imageCss={slideImgCss}
              isPriority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div css={slideItem}>
            <div css={listTitle}>
              <h3>바디라인</h3>
            </div>
            <p css={listDesc}>울퉁불퉁한 셀룰라이트와 체지방을 매끄럽게.</p>
            <ImageWrapper
              pcSrc={'/obliv/obliv-home-program-3.webp'}
              alt="slideImage"
              imageCss={slideImgCss}
              isPriority
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div ref={scrollBarRef} css={scrollBarContainer}>
        <div css={scrollBar(scrollBarState.currentWidth)} />
      </div>
    </div>
  );
};

export default MainProgramMobSlide;
