// Import Swiper styles
import 'swiper/css';

import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import type SwiperCore from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import ImageWrapper from '@/components/common/ImageWrapper';
import { useMatchMedia } from '@/hooks/use-match-media';

const mobileWidth = 1400;

const container = css`
  padding: 200px 10% 100px;
  background-color: #f6f6f6;
`;

const titleWrap = css`
  h2 {
    margin-bottom: calc(100vw * (14 / 1240));
    font-size: calc(100vw * (26 / 1240));
    color: #a8a8a8;
  }
  h1 {
    font-size: calc(100vw * (28 / 1240));
  }
  margin-bottom: 80px;
`;

const titleInnerWrap = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const swiperWrap = (isReversePaginationColor: boolean) => css`
  position: relative;
  background-color: #f6f6f6;
  width: 86%;
  margin: 0 auto;
  .home-slider {
    .swiper-pagination-bullets {
      bottom: 63px;
      @media (max-width: ${mobileWidth}px) {
        bottom: 60px;
      }
    }
    .swiper-pagination-bullet {
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: ${isReversePaginationColor
        ? '#fff'
        : 'rgba(255, 255, 255, 0.5)'};
      margin: 0 7.5px;
      opacity: 1;
      @media (max-width: ${mobileWidth}px) {
        width: 10px;
        height: 10px;
        margin: 0 5px;
      }
    }
    .swiper-pagination-bullet-active {
      background: ${isReversePaginationColor ? '#AAA' : '#fff'};
    }
  }
`;

const slideButton = (isPrev: boolean) => css`
  display: none;
  @media (min-width: ${mobileWidth + 1}px) {
    display: flex;
    background: none;
    position: absolute;
    top: 50%;
    left: ${isPrev ? '-100px' : 'auto'};
    right: ${isPrev ? 'auto' : '-100px'};
    transform: translateY(-50%);
    height: auto;
    z-index: 2;
  }
`;

const swiperItem = css`
  background-color: transparent;
  height: 400px;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    .image-area {
      background-color: rgba(0, 0, 0, 0.3);
      transform: scale(1.15);
    }
    .text-area {
      h4,
      p {
        color: #fff;
      }
    }
    .text-area-inner {
      color: #fff;
    }
    .text-area-background {
      height: 100%;
      background-color: #000048;
    }
  }
`;

const imageCSS = css`
  background-color: transparent;
  transition:
    all 0.3s,
    transform 0.3s;
`;

const swiperTextArea = css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  width: 100%;
  h5 {
    color: #ababab;
    font-size: calc(100vw * (14 / 1240));
  }
  h4 {
    color: #000;
    font-size: calc(100vw * (18 / 1240));
    margin-bottom: 10px;
  }
  p {
    font-size: calc(100vw * (13 / 1240));
    font-weight: 600;
  }
`;

const swiperTextInner = css`
  width: 100%;
  color: transparent;
`;

const textBackground = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  z-index: -1;
  background-color: transparent;
  transition: all 0.2s ease-in;
`;

const PrevIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
  >
    <path
      d="M40 50L20 31.3333L40 10"
      stroke="#e1e1e1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
  >
    <path
      d="M20 50L40 31.3333L20 10"
      stroke="#e1e1e1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DoctorSwiper = () => {
  const isMobile = useMatchMedia();
  const swiperRef = useRef<SwiperCore>();
  const [currentIndex, setCurrentIndex] = useState(1);

  const reversePaginationColorSlides = [3, 4, 5];

  return (
    <section css={container}>
      <div css={titleWrap}>
        <h2>SHINEAMC 대표의료진</h2>
        <div css={titleInnerWrap}>
          <h1>
            샤인의 의료진은 국내외 학술발표, 각종 교육 이수 등 최고 수준의
            <br />
            전문성을 자랑합니다. 대표 의료진 외 수십명의 의료진 상세 이력도
            확인해보세요.
          </h1>
          <button>View More &gt;</button>
        </div>
      </div>
      <article
        css={swiperWrap(
          !isMobile &&
            reversePaginationColorSlides.includes(currentIndex % 5 || 5),
        )}
      >
        <button
          css={slideButton(true)}
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        >
          <PrevIcon />
        </button>
        <button
          css={slideButton(false)}
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
          <NextIcon />
        </button>
        <Swiper
          className="home-slider"
          onInit={(core) => {
            swiperRef.current = core;
          }}
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.activeIndex);
          }}
          // 스와이퍼 초기화 되었을 때 실행
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
            <SwiperSlide key={idx}>
              <div css={swiperItem}>
                <div className="image-area" css={imageCSS}>
                  <ImageWrapper
                    pcSrc="/obliv/free-doctor-cartoon-1.webp"
                    alt="doctor"
                    imageCss={css`
                      width: 100%;
                    `}
                  />
                </div>
                <div className="text-area" css={swiperTextArea}>
                  <div className="text-area-background" css={textBackground} />
                  <h5>대표원장</h5>
                  <h4>김병원 원장</h4>
                  <p>서울대학교 출신</p>
                  <div css={swiperTextInner}>
                    <ul className="text-area-inner">
                      <li>이력 1</li>
                      <li>이력 2</li>
                      <li>이력 3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </section>
  );
};

export default DoctorSwiper;
