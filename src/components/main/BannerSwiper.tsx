/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-len */
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import type SwiperCore from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useMatchMedia } from '@/hooks/use-match-media';
import { overrideImageSrc } from '@/utils/common';

const container = css`
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
  }
`;

const bannerHeader = css`
  padding: 160px 10% 100px;
  @media (max-width: 1023px) {
    padding: 70px 20px 30px;
  }
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
  margin-bottom: 50px;
  @media (max-width: 1023px) {
    h2 {
      font-size: 20px;
    }
    h1 {
      font-size: 24px;
    }
    margin-bottom: 30px;
  }
`;

const titleInnerWrap = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const divider = css`
  width: 100%;
  height: 1px;
  background-color: #a8a8a8;
  margin-bottom: 50px;
  @media (max-width: 1023px) {
    margin-bottom: 30px;
  }
`;

const swiperTextList = css`
  display: flex;
  justify-content: space-between;
  li {
    cursor: pointer;
    font-size: calc(100vw * (20 / 1240));
    color: #cfcfcf;
    font-weight: 700;
  }
  li.active {
    color: #222;
  }
  @media (max-width: 1023px) {
    gap: 30px;
    li {
      font-size: 18px;
      white-space: nowrap;
    }
  }
`;

const mobileMenuItem = (isActive: boolean) => css`
  color: ${isActive ? '#000' : '#cfcfcf'};
  font-weight: 700;
  /* white-space: nowrap; */
`;

const bannerContainer = css`
  width: 100%;
`;

const bannerInnerWrap = css`
  display: flex;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

const bannerImage = (bgSrc: string) => css`
  flex: 2;
  background: url(${overrideImageSrc(bgSrc)}) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 620px;
  @media (max-width: 1023px) {
    flex: unset;
    height: calc(100vw * (600 / 1240));
  }
`;

const bannerDesc = css`
  flex: 1;
  background-color: #000048;
  color: #fff;
  padding: 70px 0 0 70px;
  h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 40px;
  }
  p {
    word-break: keep-all;
    width: 70%;
    font-size: 18px;
    line-height: 1.6;
  }
  @media (max-width: 1023px) {
    flex: unset;
    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    h3 {
      font-size: 18px;
      margin-bottom: 20px;
    }
    p {
      font-size: 14px;
    }
  }
`;

const bannerObj = [
  {
    imageSrc: '/obliv/banner_pancreas.jpg',
    title: '간담낭췌장 전문센터',
    subTitle: '국내 최초 간담낭 질환 센터',
    description:
      '샤인동물메디컬센터는 국내 최초로 간, 담낭, 췌장 전문 치료센터를 설립하였습니다. 그리고 설립 이후 가장 많은 치료 케이스를 보유하고 있습니다. 몸 속 가장 깊은 곳에 위치한 고난이도의 질환인 만큼 실력있는 내과, 외과, 영상진단의학과, 마취과 전문 의료진의 협진과 정밀한 장비에 의한 판독이 있어야 최상의 치료 결과를 기대할 수 있습니다. 샤인만의 간담낭췌장 전문센터의 진료 konw-how를 확인하시려면 하단의 ‘veiw more’을 클릭해주세요.',
  },
  {
    imageSrc: '/obliv/banner_joint.jpg',
    title: '골관절센터',
    subTitle: '국내 최고 수준 외과 의료진',
    description:
      "샤인동물메디컬센터는 국내 최고 수준의 외과 의료진이 골관절센터를 이끌어갑니다.  세계적으로 유명한 수의외과학 교육기관인 AOVET과 Biomedtrix사에서 주관하는 교육과정을 다수 이수하여 전문 자격을 갖춘 의료진, 환자별 맞춤형 수술, 최첨단 물리치료 장비 활용으로 가장 안전한 수술과 빠른 일상으로의 회복을 유도합니다. 샤인 골관절 전문센터의 자세한 내용을 확인하시려면 하단의 'view more'을 클릭해주세요.",
  },
  {
    imageSrc: '/obliv/banner_heart.jpg',
    title: '심장혈관센터',
    subTitle: '심장 및 합병증 전문 케어',
    description:
      "샤인동물메디컬센터는 대학병원 수준의 고가의 영상장비와 이를 가장 정확하게 판독할 수 있는 전문의가 상주하고 있습니다. 판독이 어려운 심장 질환을 최고의 영상 전문의가 판독하고, 수준 높은 내/외과 전문 의료진이 협진하여 정확한 치료 방안을 계획합니다. 판막질환, 심부전, 폐고혈압, 비대심근병증 등 다양한 합병증까지 놓치지 않고 체계적으로 케어합니다. 샤인 심장혈관전문센터의 자세한 내용을 확인하시려면 하단의 'view more'을 클릭해주세요.",
  },
  {
    imageSrc: '/obliv/banner_tumor.jpg',
    title: '종양항암센터',
    subTitle: '종양 및 암질환 전문 케어',
    description:
      "샤인동물메디컬센터는 종양, 항암센터를 전문적으로 운영하기 위하여 대학병원급 전문 진단 장비 및 첨단 수술 장비를 보유하고 있습니다. 또한 일반 병원에서 구하기 어려운 항암제도 보유하고 있습니다. 종양 치료는 정밀한 진단을 통한 정확한 치료 계획 수립이 중요하기 때문에 내과, 외과, 영상진단의학과, 마취과의 효과적인 협진을 통하여 Team 체계 진료를 시행하고 있습니다. 샤인 종양, 항암 전문센터의 자세한 내용을 확인하시려면 하단의 'view more'을 클릭해주세요.",
  },
  {
    imageSrc: '/obliv/banner_cat.jpg',
    title: '고양이 특화진료센터',
    subTitle: 'ISFM인증센터, 고양이 전담 의료진',
    description:
      "샤인동물메디컬센터는 국제고양이수의학협회 회원병원이자 ISFM 골드레벨 인증을 받은 고양이 친화병원입니다. 진료 대기실, 진료실, 처치실, 입원실을 강아지들과 완전 분리 운영하여 낯선 환경에 예민한 고양이가 안심하고 진료받을 수 있습니다. 또한 각 공간의 조도, 습도 등 고양이에게 최적화된 환경으로 구성하여 진료 스트레스를 최소화하고 있습니다. 핸들링부터 치료까지 고양이만을 진료하는 고양이 전담 의료팀이 진료의 원칙을 꾸준히 연구하여 진료에 적용합니다. 샤인 고양이 특화 진료 센터의 자세한 내용을 확인하시려면 하단의 'view more'을 클릭해주세요.",
  },
  {
    imageSrc: '/obliv/banner_medical.jpg',
    title: '24시 응급의료센터',
    subTitle: '365일 24시간 연중무휴 응급센터',
    description:
      "샤인동물메디컬센터는 365일 24시간 응급의료센터를 운영하고있습니다. 샤인의 진료 우선순위는 언제나 응급환자가 최우선시 됩니다. 샤인 24시 응급의료센터의 자세한 내용을 확인하시려면 하단의 'view more'을 클릭해주세요.",
  },
];

const BannerSwiper = () => {
  const swiperRef = useRef<SwiperCore>();
  const mobileMenuSwiperRef = useRef<SwiperCore>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = useMatchMedia();

  const handleSwiperTextClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  // useEffect(() => {
  //   if (mobileMenuSwiperRef.current && isMobile) {
  //     mobileMenuSwiperRef.current.slideToLoop(currentIndex);
  //   }
  // }, [currentIndex, isMobile]);

  return (
    <section css={container}>
      <article css={bannerHeader}>
        <div css={titleWrap}>
          <h2>SHINEAMC 전문의료센터</h2>
          <div css={titleInnerWrap}>
            <h1>
              샤인은 우리 아이들을 더욱 전문적으로 케어하기 위하여
              <br />
              질환별 특화 진료 센터를 보유하고 있습니다.
            </h1>
          </div>
        </div>
        <div css={divider} />
        {!isMobile ? (
          <ul css={swiperTextList}>
            <li
              className={currentIndex === 0 ? 'active' : ''}
              onClick={() => handleSwiperTextClick(0)}
            >
              간담낭췌장 전문센터
            </li>
            <li
              className={currentIndex === 1 ? 'active' : ''}
              onClick={() => handleSwiperTextClick(1)}
            >
              골관절센터
            </li>
            <li
              className={currentIndex === 2 ? 'active' : ''}
              onClick={() => handleSwiperTextClick(2)}
            >
              심장혈관센터
            </li>
            <li
              className={currentIndex === 3 ? 'active' : ''}
              onClick={() => handleSwiperTextClick(3)}
            >
              종양항암센터
            </li>
            <li
              className={currentIndex === 4 ? 'active' : ''}
              onClick={() => handleSwiperTextClick(4)}
            >
              고양이특화진료센터
            </li>
            <li
              className={currentIndex === 5 ? 'active' : ''}
              onClick={() => handleSwiperTextClick(5)}
            >
              24시 응급의료센터
            </li>
          </ul>
        ) : (
          <Swiper
            onInit={(core) => {
              mobileMenuSwiperRef.current = core;
            }}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={(swiper) => {
              handleSwiperTextClick(swiper.realIndex);
            }}
            // 스와이퍼 초기화 되었을 때 실행
            // onSwiper={(swiper) => console.log(swiper)}
            // grabCursor={true}
            loop={true}
          >
            <SwiperSlide>
              <li
                css={mobileMenuItem(currentIndex === 0)}
                onClick={() => handleSwiperTextClick(0)}
              >
                간담낭췌장 전문센터
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li
                css={mobileMenuItem(currentIndex === 1)}
                onClick={() => handleSwiperTextClick(1)}
              >
                골관절센터
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li
                css={mobileMenuItem(currentIndex === 2)}
                onClick={() => handleSwiperTextClick(2)}
              >
                심장혈관센터
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li
                css={mobileMenuItem(currentIndex === 3)}
                onClick={() => handleSwiperTextClick(3)}
              >
                종양항암센터
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li
                css={mobileMenuItem(currentIndex === 4)}
                onClick={() => handleSwiperTextClick(4)}
              >
                고양이특화진료센터
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li
                css={mobileMenuItem(currentIndex === 5)}
                onClick={() => handleSwiperTextClick(5)}
              >
                24시 응급의료센터
              </li>
            </SwiperSlide>
          </Swiper>
        )}
      </article>
      <article css={bannerContainer}>
        <Swiper
          className="home-slider"
          onInit={(core) => {
            swiperRef.current = core;
          }}
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.realIndex);
          }}
          // 스와이퍼 초기화 되었을 때 실행
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {bannerObj.map((item, idx) => (
            <SwiperSlide key={`${idx} ${item.title}`}>
              <div css={bannerInnerWrap}>
                <div css={bannerImage(item.imageSrc)} />
                <div css={bannerDesc}>
                  <h2>{item.title}</h2>
                  <h3>{item.subTitle}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </section>
  );
};

export default BannerSwiper;
