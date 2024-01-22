// 임시 통이미지 wrap 컴포넌트

import { css } from '@emotion/react';

import BottomNotice from '@/components/common/organisms/BottomNotice';

const articleWrap = css`
  padding-inline: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1023px) {
    padding-inline: 12%;
  }
`;

type Props = {
  children: React.ReactNode;
  isBottomNotice?: boolean;
};

const TempImageWrap = (props: Props) => {
  const { children, isBottomNotice = true } = props;

  return (
    <article css={articleWrap}>
      {children}
      {isBottomNotice && <BottomNotice />}
    </article>
  );
};

export default TempImageWrap;
