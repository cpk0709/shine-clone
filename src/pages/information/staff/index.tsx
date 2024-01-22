import { css } from '@emotion/react';

import withPageFrame from '@/components/common/withPageFrame';
import StaffHeader from '@/components/information/staff/StaffHeader';
import StaffSection from '@/components/information/staff/StaffSection';

const staffWrap = css`
  padding-inline: 30px;
  @media (min-width: 1023px) {
    padding-inline: 150px;
  }
`;

const DefaultPage = () => (
  <>
    <StaffHeader />
    <div css={staffWrap}>
      <StaffSection />
    </div>
  </>
);

export default withPageFrame(DefaultPage, { hasBottomSection: false });
