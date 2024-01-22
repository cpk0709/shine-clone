import { css } from '@emotion/react';

import ImageWrapper from '@/components/common/ImageWrapper';
import TitleContact from '@/components/common/organisms/TitleContact';
import { useMatchMedia } from '@/hooks/use-match-media';
import { iframeCSS } from '@/styles/common';

const container = css`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 55px;
  padding: 70px 0 70px;
  position: relative;
  @media (min-width: 1023px) {
    padding: 70px 0 120px;
    flex-direction: row;
    align-items: unset;
  }
`;

const mediaWrap = css`
  background-color: #d9d9d9;
  @media (min-width: 1023px) {
    width: 60%;
    height: 620px;
  }
`;

const bannerImage = css`
  width: 100%;
`;

type Props = {
  title: string;
  isIfrMobileVisible?: boolean;
} & (
  | { iframeSrc: string; imageSrc?: never }
  | { iframeSrc?: never; imageSrc: string }
);

/**
 *
 * @param props iframeSrc 혹은 imageSrc 둘 중 하나만 받을 수 있음.
 * @isIfrMobileVisible 모바일 화면에서 iframe 노출 여부
 * @returns
 */
const PageMainBanner = (props: Props) => {
  const { title, iframeSrc, imageSrc, isIfrMobileVisible = false } = props;
  const isMobile = useMatchMedia();

  return (
    <section css={container}>
      {(!isMobile || isIfrMobileVisible) && (
        <>
          {iframeSrc && (
            <div css={mediaWrap}>
              <iframe
                src={iframeSrc}
                css={iframeCSS}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {imageSrc && (
            <ImageWrapper
              pcSrc={imageSrc}
              alt="banner image"
              imageCss={bannerImage}
            />
          )}
        </>
      )}
      <TitleContact title={title} isIfrMobileVisible={isIfrMobileVisible} />
    </section>
  );
};

export default PageMainBanner;
