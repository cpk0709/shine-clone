import { css } from '@emotion/react';
import Vimeo from '@u-wave/react-vimeo';
import { useEffect, useState } from 'react';

import { useMatchMedia } from '@/hooks/use-match-media';
import { mobileSpace } from '@/styles/common';

const mainVideoBox = css`
  padding: 56.25% 0 0 0;
  position: relative;
  @media (max-width: 1023px) {
    ${mobileSpace(50, 0, 0, 0)}
    padding: 0;
    width: auto;
    height: max(
      min(100vh, calc(100vw * 1.7777777778)),
      calc(100vw * 1.7777777778)
    );
  }
`;

const mainVideo = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background: #000;
  @media (max-width: 1023px) {
    iframe {
      width: 100vw !important;
      height: 100vh !important;
    }
  }
`;

const MainVimeo = () => {
  const isMobile = useMatchMedia();
  const [iframeSource, setIframeSource] = useState(
    'https://vimeo.com/822859295',
  );
  const [videoSize, setVideoSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (isMobile) {
      setIframeSource('https://vimeo.com/822883012');
    } else {
      setIframeSource('https://vimeo.com/822859295');
    }
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      const videoWidth = window.innerWidth;
      const videoHeight = !isMobile
        ? 0
        : Math.max(
            Math.min(window.innerHeight, window.innerWidth * 1.777_777_777_8),
            window.innerWidth * 1.777_777_777_8,
          );

      setVideoSize({ width: videoWidth, height: videoHeight });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <div css={mainVideoBox}>
      {/* <ImageWrapper
        pcSrc="/onlif/home-main-banner-3.webp"
        mobileSrc="/onlif/home-main-banner-3-mobile.webp"
        alt="home-main"
        isPriority={true}
        imageCss={mainBannerImage}
      /> */}
      <div css={mainVideo} className="test">
        <Vimeo
          video={iframeSource}
          loop={true}
          // paused={!isPlayingVideo}
          controls={false}
          muted={true}
          background={true}
          // onEnd={onVideoEnded}
          width={videoSize.width}
          height={videoSize.height}
          showByline={false}
          showPortrait={false}
          responsive
        />
      </div>
    </div>
  );
};

export default MainVimeo;
