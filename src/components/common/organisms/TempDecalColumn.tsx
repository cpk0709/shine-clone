import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import ImageWrapper from '@/components/common/ImageWrapper';
import { iframeCSS, imageStyle } from '@/styles/common';

const listCss = (gap: number) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${gap}px;
`;

type Props = {
  imgSrc: string;
  iframeSrc: string;
  gap?: number;
  imageCss?: SerializedStyles[] | SerializedStyles;
};

const TempDecalColumn = ({ imgSrc, iframeSrc, gap = 0, imageCss }: Props) => (
  <ul css={[listCss(gap), imageCss]}>
    <li>
      <ImageWrapper
        pcSrc={imgSrc}
        alt="obliv 리프팅 이미지"
        imageCss={imageStyle()}
      />
    </li>
    <li>
      <iframe
        src={iframeSrc}
        css={iframeCSS}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </li>
  </ul>
);

export default TempDecalColumn;
