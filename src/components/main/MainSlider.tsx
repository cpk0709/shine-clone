import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { css } from '@emotion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import ImageWrapper from '@/components/common/ImageWrapper';
import SwiperNextButton from '@/components/main/SwiperNextButton';
import { useMatchMedia } from '@/hooks/use-match-media';

const container = css`
  padding: 50px 0 20px;
  @media (min-width: 1023px) {
    padding: 90px 0 30px;
  }
`;

const slideImgCss = css`
  width: 80%;
  object-fit: cover;
  @media (min-width: 1023px) {
    width: 100%;
  }
`;

const SwiperContainer = (slideImgWidth: string) => css`
  background-color: #fff;
  position: relative;
  .swiper {
    width: 100%;
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
    flex-direction: column;
  }
  @media (min-width: 1023px) {
    width: 90%;
    padding-left: unset;
    margin-left: auto;
    .swiper-slide {
      width: ${slideImgWidth} !important;
    }
  }
`;

const title = css`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-bottom: 30px;
  @media (min-width: 1023px) {
    font-size: 16px;
    margin-bottom: 43px;
    text-align: unset;
  }
`;

const slideTextWrap = css`
  width: 70%;
  @media (min-width: 1023px) {
    width: 100%;
  }
`;

const slideTitleCss = css`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
  text-align: left;
  @media (min-width: 1023px) {
    font-size: 16px;
    margin-top: 23px;
  }
`;

const slideDesc = css`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 5px;
  text-align: left;
  @media (min-width: 1023px) {
    font-size: 15px;
    margin-top: 10px;
  }
`;

const scrollBarContainer = css`
  width: 100%;
  height: 2px;
  background-color: #d9d9d9;
  margin-top: 60px;
`;

const scrollBar = (width: number) => css`
  height: 2px;
  width: ${width}px;
  background-color: #494747;
  transition: width 0.2s;
`;
// 기본 스크롤바 길이가 전체의 60%
const SCROLL_BAR_INITIAL_RATIO = 0.6;
// 전체 스크롤 길이에서 스크롤바 외의 길이 40$
const PER_REMAIN_BAR_WIDTH_RATIO = 0.4;

interface MainSliderProps {
  slideTitle?: string;
  slideItems: Array<{
    imgSrc: string;
    title: string;
    desc?: string;
  }>;
  slidePerViewPc?: number;
  slideImgWidth?: string;
  slideGap?: number;
}

const MainSlider = (props: MainSliderProps) => {
  const {
    slideTitle,
    slideItems,
    slidePerViewPc = 4,
    slideImgWidth = '406px',
    slideGap = 30,
  } = props;
  /**
   * initialWidth : 스크롤바 초기 길이
   * currentWidth : 스크롤바 현재 길이
   * perRemainWidth : PER_REMAIN_BAR_WIDTH_RATIO 를 스크롤바 가변길이 최대횟수로 나눈 값 : 슬라이드당 늘어날 길이
   */
  const [scrollBarState, setScrollBarState] = useState({
    initialWidth: 0,
    currentWidth: 0,
    perRemainWidth: 0,
  });
  // 스크롤 길이가 변경될 최대 횟수 = slide array 마지막 index
  const LIST_MAX_INDEX_NUMBER = slideItems.length - 1;

  const isMobile = useMatchMedia();

  const scrollBarRef = useRef<HTMLDivElement>(null);

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
  }, [LIST_MAX_INDEX_NUMBER]);

  const updateScrollBar = useCallback((swiperIndex: number) => {
    setScrollBarState((prevState) => ({
      ...prevState,
      currentWidth:
        prevState.initialWidth + swiperIndex * prevState.perRemainWidth,
    }));
  }, []);

  return (
    <section css={container}>
      <div css={SwiperContainer(slideImgWidth)}>
        {slideTitle && <h2 css={title}>{slideTitle}</h2>}
        <Swiper
          initialSlide={1}
          slidesPerView={isMobile ? 1 : slidePerViewPc}
          spaceBetween={slideGap}
          centeredSlides={true}
          onSlideChange={({ activeIndex }) => updateScrollBar(activeIndex)}
        >
          {slideItems?.map((item, index) => (
            <SwiperSlide key={index}>
              <ImageWrapper
                pcSrc={item.imgSrc}
                alt="slideImage"
                imageCss={slideImgCss}
                isPriority
              />
              <div css={slideTextWrap}>
                <h3 css={slideTitleCss}>{item.title}</h3>
                {item.desc && <p css={slideDesc}>{item.desc}</p>}
              </div>
            </SwiperSlide>
          ))}
          {!isMobile && <SwiperNextButton />}
        </Swiper>
        <div ref={scrollBarRef} css={scrollBarContainer}>
          <div css={scrollBar(scrollBarState.currentWidth)} />
        </div>
      </div>
    </section>
  );
};

export default MainSlider;
