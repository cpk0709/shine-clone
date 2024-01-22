import { css } from '@emotion/react';

import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempImageMap from '@/components/common/organisms/TempImageMap';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import withPageFrame from '@/components/common/withPageFrame';

const mediaWrap = css`
  background-color: #d9d9d9;
  margin: 30px auto;
  width: 80%;
  @media (min-width: 1023px) {
    width: 100%;
    height: 620px;
    margin: 80px auto;
  }
`;

const iframeStyle = css`
  width: 100%;
  height: 100%;
`;

const DefaultPage = () => (
  <>
    <PageMainBanner
      title="포텐자"
      iframeSrc={
        'https://www.youtube.com/embed/WCq87ugsEaw?si=fvamjQUrL6iwfZyw&autoplay=1&mute=1'
      }
    />
    <TempImageWrap>
      <TempImageMap
        pcSrcList={[
          '/obliv/skin-potenza-temp-screenshot-1.webp',
          '/obliv/skin-potenza-temp-screenshot-2.webp',
        ]}
      />
      <div css={mediaWrap}>
        <iframe
          src="https://www.youtube.com/embed/C27yWbr7_EY?si=lyGymkL3ypImgaDE&autoplay=1&mute=1"
          css={iframeStyle}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <TempImageMap
        pcSrcList={[
          '/obliv/skin-potenza-temp-screenshot-3.webp',
          '/obliv/skin-potenza-temp-screenshot-4.webp',
        ]}
      />
    </TempImageWrap>
  </>
);

export default withPageFrame(DefaultPage);
