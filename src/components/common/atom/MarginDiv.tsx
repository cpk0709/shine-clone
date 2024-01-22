import { css } from '@emotion/react';

const marginCss = (height: number, mobileHeight: number) => css`
  height: ${mobileHeight}px;
  @media (min-width: 1023px) {
    height: ${height}px;
  }
`;

type MarginDivProps = {
  height?: number;
  mobileHeight?: number;
};

const MarginDiv = ({ height = 80, mobileHeight = 50 }: MarginDivProps) => (
  <div css={marginCss(height, mobileHeight)} />
);

export default MarginDiv;
