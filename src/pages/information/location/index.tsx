import { css } from '@emotion/react';

import withPageFrame from '@/components/common/withPageFrame';
import LocationMap from '@/components/information/location/LocationMap';

const container = css`
  padding-inline: 20px;
  padding-top: 20px;
  @media (min-width: 1023px) {
    padding-inline: 160px;
    padding-top: unset;
  }
`;

const DefaultPage = () => (
  <>
    <section css={container}>
      <LocationMap />
    </section>
  </>
);

export default withPageFrame(DefaultPage, { hasBottomSection: false });
