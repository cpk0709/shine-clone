import { css } from '@emotion/react';

import TitleContact from '@/components/common/organisms/TitleContact';
import { useMatchMedia } from '@/hooks/use-match-media';

const container = css`
  @media (min-width: 1023px) {
    padding-inline: 150px;
  }
`;

const article = css`
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30%;
  padding-top: 15%;
  white-space: nowrap;
  padding-inline: 150px;
  border-bottom: 1px solid #ddd;
  @media (min-width: 1023px) {
    align-items: flex-start;
    height: 600px;
  }
`;

const title = css`
  color: #212121;
  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: -0.44px;
  margin-bottom: 55px;
  @media (min-width: 1023px) {
    font-size: 40px;
    line-height: 60px;
    letter-spacing: -0.8px;
    margin-bottom: 90px;
  }
`;

const subtitle = css`
  display: flex;
  flex-direction: column;
  h1 {
    color: #212121;
    font-family: Bernhard Modern Std;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.8px;
  }
  span {
    color: #212121;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  @media (min-width: 1023px) {
    flex-direction: row;
    align-items: flex-end;
    gap: 10px;
    h1 {
      font-size: 40px;
    }
  }
`;

const StaffHeader = () => {
  const isMobile = useMatchMedia();

  return (
    <section css={container}>
      <article css={article}>
        <div>
          <h1 css={title}>
            건강한 삶과 피부의 균형을 추구하는
            <br />
            똑똑한 메디컬 케어, 오블리브
          </h1>
          <div css={subtitle}>
            <h1>Our People</h1>
            <span>오블리브 의료진을 소개합니다.</span>
          </div>
        </div>
        {!isMobile && <TitleContact title="오블리브 의료진" />}
      </article>
    </section>
  );
};

export default StaffHeader;
