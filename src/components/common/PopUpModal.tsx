/* eslint-disable unicorn/no-null */
import 'swiper/css';

import { css, keyframes } from '@emotion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import type SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useMatchMedia } from '@/hooks/use-match-media';
import { useScrollBlock } from '@/hooks/use-scroll-block';
import { pointer } from '@/styles/common';
import { fontNotoSansKr, fontPretendard } from '@/styles/font';
import type {
  ContentConfiguration,
  PopUp,
} from '@/types/content-configuration';
import { getCookie, setCookie } from '@/utils/cookie';

type Props = {
  data: Array<ContentConfiguration<PopUp>>;
  maxLength?: number;
};

const mobileContainerWidth = 768;
const pcMinContainerWidth = mobileContainerWidth + 1;

const container = css`
  z-index: 9999;
  --vh: 100%;
  top: 0;
  left: 0;
  height: var(--vh);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(17, 17, 17, 0.5);
  position: fixed;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media (min-width: ${pcMinContainerWidth}px) {
    align-items: center;
  }
`;

const fadeUp = keyframes`
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(0)
  }
`;

const fadeDown = keyframes`
  0% {
    transform: translateY(0)
  }
  100% {
    transform: translateY(100vh);
  }
`;

const contentContainer = (isOpen: boolean) => css`
  position: relative;
  animation: ${isOpen ? fadeUp : fadeDown} 0.8s ease-out;
  @media (min-width: ${pcMinContainerWidth}px) {
    animation: none;
  }
`;

const contentBox = css`
  display: flex;
  flex-direction: column;
  border-radius: 30px 30px 0 0;
  overflow: hidden;
  @media (min-width: ${pcMinContainerWidth}px) {
    flex-direction: row-reverse;
    border-radius: 60px;
  }
`;

const topContentButton = css`
  background: none;
  margin-left: 42px;
  margin-bottom: -2px;
  display: flex;
  align-items: flex-end;
  gap: 5px;
  text-decoration: none;
  @media (min-width: ${pcMinContainerWidth}px) {
    margin-left: 50px;
  }
`;

const linkImageStyle = css`
  width: 98px;
  height: 98px;
  z-index: -1;
  @media (min-width: ${pcMinContainerWidth}px) {
    width: 117px;
    height: 117px;
  }
`;

const linkTextStyle = css`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.34px;
  margin-bottom: 15px;
  @media (min-width: ${pcMinContainerWidth}px) {
    font-size: 22px;
    letter-spacing: -0.44px;
    margin-bottom: 24px;
  }
`;

const innerBox = css`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: ${pcMinContainerWidth}px) {
    margin-top: 0;
  }
`;

const swiperContainer = (width: number, height: number) => css`
  width: ${width}px;
  height: ${height}px;
  background-color: #00000059;
`;

const popupImage = (width: number, height: number) => css`
  width: ${width}px;
  height: ${height}px;
  object-fit: cover;
`;

const paginationBox = css`
  width: 100%;
  min-height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  flex-direction: column;
  background-color: #eee;
  overflow-y: auto;
  @media (min-width: ${pcMinContainerWidth}px) {
    width: 120px;
    min-height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    background-color: #fff;
    > button:not(:nth-of-type(6)) {
      border-bottom: solid 1px #c4c4c4;
    }
  }
`;

const paginationButton = (isActive: boolean) => css`
  background: ${isActive ? '#C4C4C4' : '#D9D9D9'};
  color: #212121;
  height: 47px;
  ${fontPretendard}
  font-size: 14.449px;
  font-weight: ${isActive ? 700 : 300};
  letter-spacing: -0.36px;
  line-height: normal;
  padding: 0 10px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: top;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  @media (min-width: ${pcMinContainerWidth}px) {
    height: auto;
    font-size: 18px;
    white-space: pre-line;
  }
`;

const buttonBox = css`
  width: 100%;
  background: #f9f9f9;
  height: 50px;
  display: flex;
  justify-content: space-between;
  @media (min-width: ${pcMinContainerWidth}px) {
    background: none;
    height: auto;
    justify-content: flex-end;
    margin-top: 8px;
    padding-right: 50px;
    gap: 53px;
  }
`;

const dayCloseButton = css`
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ${fontNotoSansKr}
  font-size: 12px;
  font-weight: 350;
  line-height: normal;
  letter-spacing: -1px;
  color: #888;
  padding: 0 38px;
  @media (min-width: ${pcMinContainerWidth}px) {
    color: #fff;
    font-size: 14px;
    padding: 0;
  }
`;

const closeButton = css`
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ${fontNotoSansKr}
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1px;
  color: #000;
  padding: 0 39px;
  @media (min-width: ${pcMinContainerWidth}px) {
    width: auto;
    padding: 0;
    font-size: 14px;
    color: #fff;
  }
`;

const PopUpModal = (props: Props) => {
  const { data, maxLength = 6 } = props;
  const swiperRef = useRef<SwiperCore>();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 800, height: 600 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMatchMedia(mobileContainerWidth);
  const [blockScroll, allowScroll] = useScrollBlock();
  const pcBottomBoxHeight = 36;

  const firstContent = useMemo(
    () => data?.[0]?.configurations || undefined,
    [data],
  );

  useEffect(() => {
    if (isOpen) {
      return;
    }

    let timeoutId: NodeJS.Timeout;

    if (!isMobile) {
      setIsVisible(false);
    } else {
      timeoutId = setTimeout(() => setIsVisible(false), 600);
    }

    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, [isOpen, isMobile]);

  useEffect(() => {
    const shouldOpen = getCookie('popup') !== 'end' && data.length > 0;

    if (shouldOpen) {
      setIsOpen(true);
      setIsVisible(true);
      blockScroll();
    } else {
      setIsOpen(false);
      setIsVisible(false);
      allowScroll();
    }
  }, []);

  // eslint-disable-next-line sonarjs/cognitive-complexity
  const handleResize = () => {
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;

    const widthPerHeight = innerWidth / innerHeight;

    const pcMaxWidth = 800;
    const pcMaxHeight = pcMaxWidth * (600 / 800);
    const mobileWidth = window.innerWidth;
    const mobileHeight = mobileWidth * (540 / 428);
    const hasLinkImage = Boolean(firstContent?.linkImage?.uid);
    const hasLinkText = Boolean(firstContent?.linkText);
    const pcTopBottomContentHeight =
      pcBottomBoxHeight + (hasLinkImage ? 115 : hasLinkText ? 70 : 0);
    const isMobileView = innerWidth <= 768;

    if (isMobileView) {
      setImageSize({
        width: mobileWidth,
        height: mobileHeight,
      });
    } else {
      if (widthPerHeight >= pcMaxWidth / pcMaxHeight) {
        if (innerHeight >= pcMaxHeight + pcTopBottomContentHeight) {
          setImageSize({
            width: pcMaxWidth,
            height: pcMaxHeight,
          });
        } else {
          setImageSize({
            width:
              (innerHeight - pcTopBottomContentHeight) *
              (pcMaxWidth / pcMaxHeight),
            height: innerHeight - pcTopBottomContentHeight,
          });
        }
      } else {
        if (innerWidth >= pcMaxWidth + 140) {
          setImageSize({
            width: pcMaxWidth,
            height: pcMaxHeight,
          });
        } else {
          setImageSize({
            width: innerWidth - 140,
            height: (innerWidth - 140) * (pcMaxHeight / pcMaxWidth),
          });
        }
      }
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const setVh = () => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight}px`,
    );
  };

  useEffect(() => {
    setVh();

    window.addEventListener('resize', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
      document.documentElement.style.removeProperty('--vh');
    };
  }, []);

  const onClose = () => {
    setIsOpen(false);
    allowScroll();
  };

  const notToday = () => {
    setCookie('popup', 'end', 1);
    onClose();
  };

  const onClickBanner = (href?: string) => {
    if (href) {
      window.location.href = href;
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div css={container}>
      <div css={innerBox}>
        <div css={contentContainer(isOpen)}>
          {(Boolean(firstContent.linkImage) ||
            Boolean(firstContent.linkText)) && (
            <a css={topContentButton} href={firstContent.href || ''}>
              {firstContent.linkImage && (
                <img
                  src={firstContent.linkImage.url}
                  alt="link"
                  css={linkImageStyle}
                />
              )}
              {firstContent.linkText && (
                <span css={linkTextStyle}>{firstContent.linkText}</span>
              )}
            </a>
          )}
          <div css={contentBox}>
            <div css={swiperContainer(imageSize.width, imageSize.height)}>
              <Swiper
                onInit={(core) => {
                  swiperRef.current = core;
                }}
                modules={[Autoplay]}
                loop={data.length > 1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => {
                  setCurrentIndex(swiper.activeIndex);
                }}
              >
                {data.slice(0, maxLength).map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      onClick={() => onClickBanner(item.configurations.href)}
                      css={item.configurations.href && pointer}
                    >
                      <img
                        src={
                          isMobile
                            ? item.configurations.mobileImage.url
                            : item.configurations.pcImage.url
                        }
                        alt={item.configurations.title}
                        css={popupImage(imageSize.width, imageSize.height)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div css={paginationBox}>
              {data.slice(0, maxLength).map((item, index) => (
                <button
                  key={index}
                  css={paginationButton(
                    (index + 1) % data.length === currentIndex % data.length,
                  )}
                  onClick={() => {
                    swiperRef.current?.slideTo(index + 1);
                  }}
                >
                  {item.configurations.title}
                </button>
              ))}
              {isMobile &&
                Array.from({
                  length: 3 - (Math.min(data.length, 6) % 3 || 3),
                }).map((_, index) => (
                  <div key={index} css={paginationButton(false)} />
                ))}
            </div>
          </div>
          <div css={buttonBox}>
            <button css={dayCloseButton} onClick={notToday}>
              하루동안 닫기
            </button>
            <button css={closeButton} onClick={onClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;
