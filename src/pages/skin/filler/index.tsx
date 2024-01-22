import { css } from '@emotion/react';

import ImageWrapper from '@/components/common/ImageWrapper';
import PageMainBanner from '@/components/common/organisms/PageMainBanner';
import TempDecal from '@/components/common/organisms/TempDecal';
import TempDecalColumn from '@/components/common/organisms/TempDecalColumn';
import TempImageMap from '@/components/common/organisms/TempImageMap';
import TempImageWrap from '@/components/common/organisms/TempImageWrap';
import withPageFrame from '@/components/common/withPageFrame';
import { useMatchMedia } from '@/hooks/use-match-media';
import { imageStyle } from '@/styles/common';

const DefaultPage = () => {
  const isMobile = useMatchMedia();

  return (
    <>
      <PageMainBanner
        title="필러"
        iframeSrc={
          'https://www.youtube.com/embed/pCzDNbON20g?si=XCvsYaAzlUqBjm5R&autoplay=1&mute=1'
        }
        isIfrMobileVisible
      />
      <TempImageWrap>
        {isMobile ? (
          <>
            <TempImageMap
              pcSrcList={['/obliv/lazer-filler-temp-screenshot-1-m.webp']}
            />
            <TempDecalColumn
              imgSrc="/obliv/lazer-filler-temp-screenshot-2-m.webp"
              iframeSrc="https://www.youtube.com/embed/n7S3ane2PL4?si=BGkD9d77mHhxW1NP&autoplay=1&mute=1"
            />
            <TempDecalColumn
              imgSrc="/obliv/lazer-filler-temp-screenshot-3-m.webp"
              iframeSrc="https://www.youtube.com/embed/8rcBs9_gFpA?si=ZQRuH5mqqnt5uGRc&autoplay=1&mute=1"
              imageCss={[
                css`
                  margin-top: 50px;
                `,
              ]}
            />
            <TempDecalColumn
              imgSrc="/obliv/lazer-filler-temp-screenshot-4-m.webp"
              iframeSrc="https://www.youtube.com/embed/-lr8-bBV_D0?si=mksLcmGuC2DBMwlY&autoplay=1&mute=1"
              imageCss={[
                css`
                  margin-top: 50px;
                `,
              ]}
            />
            <TempDecalColumn
              imgSrc="/obliv/lazer-filler-temp-screenshot-5-m.webp"
              iframeSrc="https://www.youtube.com/embed/xxeh5sTEoEw?si=v_egph1BbJx5g9TA&autoplay=1&mute=1"
              imageCss={[
                css`
                  margin-top: 50px;
                `,
              ]}
            />
            <TempDecalColumn
              imgSrc="/obliv/lazer-filler-temp-screenshot-6-m.webp"
              iframeSrc="https://www.youtube.com/embed/QLZZ1-GJzfI?si=00D9R_q2qgKo11qY&autoplay=1&mute=1"
              imageCss={[
                css`
                  margin-top: 50px;
                `,
              ]}
            />
            <TempImageMap
              pcSrcList={['/obliv/lazer-filler-temp-screenshot-7-m.webp']}
            />
          </>
        ) : (
          <>
            <TempImageMap
              pcSrcList={[
                '/obliv/lazer-filler-temp-screenshot-1.webp',
                '/obliv/lazer-filler-temp-screenshot-2.webp',
              ]}
            />
            <TempDecal
              imgSrc="/obliv/lazer-filler-temp-screenshot-3.webp"
              iframeSrc="https://www.youtube.com/embed/n7S3ane2PL4?si=BGkD9d77mHhxW1NP&autoplay=1&mute=1"
              gap={80}
            />
            <TempImageMap
              pcSrcList={['/obliv/lazer-filler-temp-screenshot-4.webp']}
            />
            <TempDecal
              imgSrc="/obliv/lazer-filler-temp-screenshot-5.webp"
              iframeSrc="https://www.youtube.com/embed/8rcBs9_gFpA?si=ZQRuH5mqqnt5uGRc&autoplay=1&mute=1"
              gap={80}
            />
            <TempImageMap
              pcSrcList={['/obliv/lazer-filler-temp-screenshot-6.webp']}
            />
            <TempDecal
              imgSrc="/obliv/lazer-filler-temp-screenshot-7.webp"
              iframeSrc="https://www.youtube.com/embed/-lr8-bBV_D0?si=mksLcmGuC2DBMwlY&autoplay=1&mute=1"
              gap={80}
            />
            <TempImageMap
              pcSrcList={['/obliv/lazer-filler-temp-screenshot-8.webp']}
            />
            <TempDecal
              imgSrc="/obliv/lazer-filler-temp-screenshot-9.webp"
              iframeSrc="https://www.youtube.com/embed/xxeh5sTEoEw?si=v_egph1BbJx5g9TA&autoplay=1&mute=1"
              gap={80}
            />
            <TempImageMap
              pcSrcList={['/obliv/lazer-filler-temp-screenshot-10.webp']}
            />
            <TempDecal
              imgSrc="/obliv/lazer-filler-temp-screenshot-11.webp"
              iframeSrc="https://www.youtube.com/embed/QLZZ1-GJzfI?si=00D9R_q2qgKo11qY&autoplay=1&mute=1"
              gap={80}
            />
            <ImageWrapper
              pcSrc="/obliv/lazer-filler-temp-screenshot-12.webp"
              alt="obliv 리프팅 이미지"
              imageCss={imageStyle()}
            />
          </>
        )}
      </TempImageWrap>
    </>
  );
};

export default withPageFrame(DefaultPage);
