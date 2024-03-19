import { css } from '@emotion/react';
import { type ComponentType, type FC, useCallback } from 'react';

import MarginDiv from '@/components/common/atom/MarginDiv';
import Footer from '@/components/common/Footer';
import ImageWrapper from '@/components/common/ImageWrapper';
import GlobalNav from '@/components/common/nav/GlobalNav';
import PageBottomSection from '@/components/common/PageBottomSection';
import PreparingPage from '@/components/common/PreparingPage';
import RequestBookingForm from '@/components/common/RequestBookingForm';

const container = css`
  position: relative;
`;

const scrollTopBtn = css`
  position: fixed;
  bottom: 20%;
  right: 5%;
  z-index: 1000;
`;
interface FrameProps {
  isPreparing?: boolean;
  hasGnb?: boolean;
  hasBottomSection?: boolean;
  hasFooter?: boolean;
  hasRequestForm?: boolean;
}

const defaultFrameProps: FrameProps = {
  isPreparing: false,
  hasGnb: true,
  hasBottomSection: true,
  hasFooter: true,
  hasRequestForm: true,
};

const withPageFrame = <P extends Record<string, unknown>>(
  WrappedComponent: ComponentType<P>,
  frameProps: FrameProps = defaultFrameProps,
) => {
  const WithPageFrame: FC<P> = (props) => {
    const { isPreparing, hasGnb, hasBottomSection, hasFooter, hasRequestForm } =
      {
        ...defaultFrameProps,
        ...frameProps,
      };

    const handleScrollTop = useCallback(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    if (isPreparing) {
      return (
        <>
          <GlobalNav />
          <MarginDiv />
          <PreparingPage />
          <Footer />
          <RequestBookingForm />
        </>
      );
    }

    return (
      <section css={container}>
        {hasGnb && <GlobalNav />}
        {/* {hasGnb && <MarginDiv />} */}
        <WrappedComponent {...props} />
        {hasBottomSection && <PageBottomSection />}
        {hasFooter && <Footer />}
        {hasRequestForm && <RequestBookingForm />}
        <button css={scrollTopBtn} onClick={handleScrollTop}>
          <ImageWrapper
            pcSrc="/obliv/obliv-icon-scroll-top.svg"
            alt="scroll top"
            isPriority
          />
        </button>
      </section>
    );
  };

  WithPageFrame.displayName = `WithPageFrame(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithPageFrame;
};

export default withPageFrame;
