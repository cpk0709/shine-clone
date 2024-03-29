import { css } from '@emotion/react';

import PopUpModal from '@/components/common/PopUpModal';
import withPageFrame from '@/components/common/withPageFrame';
import ArticleRisingUpSection from '@/components/main/ArticleRisingUpSection';
import BannerSwiper from '@/components/main/BannerSwiper';
import CountUpSection from '@/components/main/CountUpSection';
import DoctorSwiper from '@/components/main/DoctorSwiper';
// import MainBanner from '@/components/main/MainBanner';
import MainProgram from '@/components/main/MainProgram';
import MainSliderSection from '@/components/main/MainSliderSection';
import MainVimeo from '@/components/main/MainVimeo';
import MonthlyObliv from '@/components/main/MonthlyObliv';
import OblivLocation from '@/components/main/OblivLocation';
import OblivNews from '@/components/main/OblivNews';
import ParallaxScrollSection from '@/components/main/ParallaxScrollSection';
import { getStaticPropsPopUp } from '@/services/ssg';
import type {
  ContentConfiguration,
  PopUp,
} from '@/types/content-configuration';

const articleWrap = css`
  @media (min-width: 1023px) {
    padding-inline: 10%;
  }
`;

type Props = {
  data: Array<ContentConfiguration<PopUp>>;
};

export function getStaticProps() {
  return getStaticPropsPopUp();
}

const Home = (props: Props) => {
  const { data } = props;

  return (
    <>
      <MainVimeo />
      <ArticleRisingUpSection />
      <CountUpSection />
      <DoctorSwiper />
      <BannerSwiper />
      <ParallaxScrollSection
        leftSideBg="/obliv/view_more_case.webp"
        isRightSideMargin
      />
      <ParallaxScrollSection leftSideBg="/obliv/view_more_review.webp" />
      {/* <MainBanner /> */}
      <MainSliderSection />
      <section css={articleWrap}>
        <MainProgram />
        <OblivNews />
        <MonthlyObliv />
        <OblivLocation />
      </section>
      <PopUpModal data={data} />
    </>
  );
};

export default withPageFrame(Home, { hasBottomSection: false });
