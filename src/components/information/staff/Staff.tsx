import { css } from '@emotion/react';
import type { ReactNode } from 'react';

import ImageWrapper from '@/components/common/ImageWrapper';

const staffImage = (mobWidth: number) => css`
  width: ${mobWidth}px;
  @media (min-width: 1023px) {
    width: 100%;
  }
`;

const article = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-block: 60px;
  @media (min-width: 1023px) {
    flex-direction: row;
    align-items: unset;
    gap: 60px;
    padding: 80px 0 80px 130px;
  }
`;

const careerInfo = css`
  margin-top: auto;
`;

const nameTitle = css`
  color: #212121;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
  b {
    font-weight: 700;
  }
  @media (min-width: 1023px) {
    font-size: 20px;
  }
`;

const careerWrap = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 260px;
  @media (min-width: 1023px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 53px;
    width: unset;
  }
`;

const marginDiv = css`
  width: 100%;
  height: 30px;
  background-color: transparent;
  @media (min-width: 1023px) {
    height: 40px;
  }
`;

const careerCss = css`
  color: #212121;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  @media (min-width: 1023px) {
    font-size: 16px;
    line-height: 30px;
  }
`;

type Props = {
  staffImg: {
    pcSrc: string;
    mobileSrc: string;
    alt: string;
  };
  name: ReactNode;
  careerList: string[][];
};

/**
 *
 * @param props
 * careerList의 @ 은 개행 의미.
 * @returns
 */
const Staff = (props: Props) => {
  const { staffImg, name, careerList } = props;

  return (
    <article css={article}>
      <ImageWrapper
        pcSrc={staffImg.pcSrc}
        mobileSrc={staffImg.mobileSrc}
        alt={staffImg.alt}
        imageCss={staffImage(260)}
      />
      <div css={careerInfo}>
        <h3 css={nameTitle}>
          {/* 부원장 <b>이소영</b> */}
          {name}
        </h3>
        <div css={careerWrap}>
          {careerList.map((careerColumn, index) => (
            <ul key={index}>
              {careerColumn.map((career, idx) =>
                career === '@' ? (
                  <div css={marginDiv} key={idx} />
                ) : (
                  <li css={careerCss} key={idx}>
                    {career}
                  </li>
                ),
              )}
            </ul>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Staff;
