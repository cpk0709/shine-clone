import { css } from '@emotion/react';
import { useSwiper } from 'swiper/react';

import ImageWrapper from '../common/ImageWrapper';

const nextButton = css`
  position: absolute;
  z-index: 10;
  top: 50%;
  right: 0;
  width: 64px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
`;

const SwiperNextButton = () => {
  const swiper = useSwiper();

  return (
    <button css={nextButton} onClick={() => swiper.slideNext()}>
      <ImageWrapper
        pcSrc="/obliv/obliv-icon-arrow-right-white-opacity-07.svg"
        alt="arrowRight"
      />
    </button>
  );
};

export default SwiperNextButton;
