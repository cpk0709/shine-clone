// 임시 더 알아보기 버튼

import { css } from '@emotion/react';

import ImageWrapper from '@/components/common/ImageWrapper';

const buttonWrap = css`
  width: 100%;
  padding-left: 10px;
  @media (min-width: 1023px) {
    padding-left: 50px;
  }
`;

const buttonCss = css`
  display: block;
  padding-inline: 8px;
  height: 22px;
  background-color: #282828;
  display: flex;
  align-items: center;
  gap: 8px;
  span {
    white-space: nowrap;
    color: #fff;
    font-family: Noto Sans KR;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media (min-width: 1023px) {
    padding-inline: 30px;
    height: 50px;
    span {
      font-size: 20px;
      line-height: 22px;
    }
  }
`;

const arrowIcon = css`
  transform: translateY(-1px);
  width: 8px;
  @media (min-width: 1023px) {
    transform: translateY(-2px);
    width: 18px;
  }
`;

type Props = {
  linkSrc: string;
};

const TempMoreButton = (props: Props) => {
  const { linkSrc } = props;

  return (
    <div css={buttonWrap}>
      <button css={buttonCss} onClick={() => window.open(linkSrc)}>
        <span>더 알아보기</span>
        <ImageWrapper
          pcSrc="/obliv/obliv-icon-arrow-right-white-opacity-1.svg"
          alt="arrow icon"
          imageCss={arrowIcon}
        />
      </button>
    </div>
  );
};

export default TempMoreButton;
