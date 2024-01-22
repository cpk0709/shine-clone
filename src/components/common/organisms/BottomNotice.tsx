import { css } from '@emotion/react';

import { useMatchMedia } from '@/hooks/use-match-media';

const bottomTextWrap = css`
  display: flex;
  justify-content: center;
  padding-block: 120px;
  p {
    color: #000;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-align: center;
  }
  @media (min-width: 1023px) {
    p {
      font-size: 18px;
    }
  }
`;

const BottomNotice = () => {
  const isMobile = useMatchMedia();

  return (
    <div css={bottomTextWrap}>
      <p>
        ※개인의 특성에 따라 시술 후 통증, 붉음증, 화상 등
        {isMobile ? <br /> : ' '}부작용이 발생 할 수 있으므로 주의를 요합니다.
      </p>
    </div>
  );
};

export default BottomNotice;
