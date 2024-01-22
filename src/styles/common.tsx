import { css } from '@emotion/react';

export const defaultMaxContainerWidth = 1920;

export const responsiveWidth = (
  size: number,
  containerWidth = defaultMaxContainerWidth,
) => css`
  width: min(${size}px, ${(size / containerWidth) * 100}vw);
`;

export const responsiveHeight = (
  size: number,
  containerWidth = defaultMaxContainerWidth,
) => css`
  height: min(${size}px, ${(size / containerWidth) * 100}vw);
`;

export const responsiveMargin = (
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
  containerWidth = defaultMaxContainerWidth,
) => css`
  margin-top: min(${top}px, ${(top / containerWidth) * 100}vw);
  margin-bottom: min(${bottom}px, ${(bottom / containerWidth) * 100}vw);
  margin-left: min(${left}px, ${(left / containerWidth) * 100}vw);
  margin-right: min(${right}px, ${(right / containerWidth) * 100}vw);
`;

export const responsivePadding = (
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
  containerWidth = defaultMaxContainerWidth,
) => css`
  padding-top: min(${top}px, ${(top / containerWidth) * 100}vw);
  padding-bottom: min(${bottom}px, ${(bottom / containerWidth) * 100}vw);
  padding-left: min(${left}px, ${(left / containerWidth) * 100}vw);
  padding-right: min(${right}px, ${(right / containerWidth) * 100}vw);
`;

export const responsiveFontSize = (
  size: number,
  containerWidth = defaultMaxContainerWidth,
) => css`
  font-size: min(${size}px, ${(size / containerWidth) * 100}vw);
`;

export const responsiveLineHeight = (
  size: number,
  containerWidth = defaultMaxContainerWidth,
) => css`
  line-height: min(${size}px, ${(size / containerWidth) * 100}vw);
`;

export const responsiveMaxWidth = (
  size: number,
  containerWidth = defaultMaxContainerWidth,
) => css`
  max-width: min(${size}px, ${(size / containerWidth) * 100}vw);
`;

export const responsiveMinWidth = (
  size: number,
  containerWidth = defaultMaxContainerWidth,
) => css`
  min-width: min(${size}px, ${(size / containerWidth) * 100}vw);
`;

export const responsiveGap = (
  size: number,
  containerWidth = defaultMaxContainerWidth,
) => css`
  gap: min(${size}px, ${(size / containerWidth) * 100}vw);
`;

export const responsiveRowGap = (
  size: number,
  containerWidth = defaultMaxContainerWidth,
) => css`
  row-gap: min(${size}px, ${(size / containerWidth) * 100}vw);
`;

export const responsiveColumnGap = (
  size: number,
  containerWidth = defaultMaxContainerWidth,
) => css`
  column-gap: min(${size}px, ${(size / containerWidth) * 100}vw);
`;

export const responsiveTop = (
  size: number,
  containerWidth = defaultMaxContainerWidth,
) => css`
  top: min(${size}px, ${(size / containerWidth) * 100}vw);
`;

export const responsiveLeft = (
  size: number,
  containerWidth = defaultMaxContainerWidth,
) => css`
  left: min(${size}px, ${(size / containerWidth) * 100}vw);
`;

export const responsiveRight = (
  size: number,
  containerWidth = defaultMaxContainerWidth,
) => css`
  right: min(${size}px, ${(size / containerWidth) * 100}vw);
`;

export const responsiveBottom = (
  size: number,
  containerWidth = defaultMaxContainerWidth,
) => css`
  bottom: min(${size}px, ${(size / containerWidth) * 100}vw);
`;

export const responsiveBorderRadius = (
  size: number,
  containerWidth = defaultMaxContainerWidth,
) => css`
  border-radius: min(${size}px, ${(size / containerWidth) * 100}vw);
`;

export const responsiveBoxShadow = (
  x_position: number,
  y_position: number,
  blur: number,
  spread: number,
  color: string,
  containerWidth = defaultMaxContainerWidth,
) => css`
  box-shadow: min(${x_position}px, ${(x_position / containerWidth) * 100}vw)
    min(${y_position}px, ${(y_position / containerWidth) * 100}vw)
    min(${blur}px, ${(blur / containerWidth) * 100}vw)
    min(${spread}px, ${(spread / containerWidth) * 100}vw) ${color};
`;

export const pointer = css`
  cursor: pointer;
`;

export const imageSize = (mobSize = '100%', minWidth = 1023) => css`
  width: ${mobSize};
  @media (min-width: ${minWidth}px) {
    width: 100%;
  }
`;

export const iframeCSS = css`
  /* width: 320px; */
  height: 230px;
  @media (min-width: 1023px) {
    width: 100%;
    height: 100%;
  }
`;

export const imageStyle = (width = '100%', mobWidth = '100%') => css`
  width: ${mobWidth};
  @media (min-width: 1023px) {
    width: ${width};
  }
`;
