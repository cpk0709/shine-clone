// 카카오 맵
/* eslint-disable @typescript-eslint/no-loss-of-precision */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable @next/next/no-sync-scripts */
/// <reference path="../../../../node_modules/kakao.maps.d.ts/@types/index.d.ts" />
import { css } from '@emotion/react';
import Script from 'next/script';
import type { MutableRefObject } from 'react';
import React, { useCallback, useEffect, useRef } from 'react';

import { useMatchMedia } from '@/hooks/use-match-media';
import { overrideImageSrc } from '@/utils/common';

type Props = {
  height?: number;
  mobileHeight?: number;
  isPhysical?: boolean;
  mobileWidth?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  relayoutDependancy?: any;
};

const mapStyle = (
  height: number,
  mobileHeight: number,
  mobileWidth?: string,
) => css`
  width: 100%;
  height: ${height}px;
  @media (max-width: 1023px) {
    height: ${mobileHeight}px;
    width: ${mobileWidth ? mobileWidth : '100%'};
  }
`;

const KakaoMap: React.FunctionComponent<Props> = ({
  height = 519,
  mobileHeight = 265,
  isPhysical = false,
  mobileWidth,
  relayoutDependancy,
}): JSX.Element => {
  /*
    <script type="text/javascript" src="http://dapi.kakao.com/v2/maps/sdk.js?autoload=false"></script>
    <script type="text/javascript">
    kakao.maps.load(function() {
    // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
    var map = new kakao.maps.Map(node, options);
    });
    </script>
  */
  const isMobile = useMatchMedia();

  const kakaoMapSrc = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`;

  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

  const initKakaoMap = useCallback(() => {
    //console.debug('### KakaoMap #1:'+process.env.KAKAO_API_KEY);
    //console.debug('### KakaoMap #1:'+process.env.AIRTABLE_API_KEY);
    // setInterval(() => {
    //   console.debug('### KakaoMap #timer:'+kakao);
    // }, 3000);
    if (typeof window === 'undefined') {
      return;
    }

    if (!Object.hasOwnProperty.call(window, 'kakao')) {
      return;
    }

    const kakaoObj = window?.kakao;

    //console.debug('### KakaoMap #1:'+kakaoObj);
    if (mapRef && mapRef.current && kakaoObj) {
      //console.debug('### KakaoMap #2');
      kakaoObj.maps.load(() => {
        const mapOption = {
          center: new kakaoObj.maps.LatLng(37.386_363_9, 126.643_913_2), // 지도의 중심좌표
          level: isMobile ? 4 : 3, // 지도의 확대 레벨
        };
        //console.debug('### KakaoMap #3');
        const map = new kakaoObj.maps.Map(mapRef.current, mapOption);
        //console.debug('### KakaoMap #4');

        // 마커가 표시될 위치입니다
        // 클릭한 위치의 위도는 37.499581614366384 이고, 경도는 127.02576732623953 입니다
        const markerPosition = new kakaoObj.maps.LatLng(
          37.386_363_9,
          126.643_913_2,
        );

        const imageSrc = overrideImageSrc('/obliv/obliv-map-marker.svg'); // 마커이미지의 주소입니다
        const imageSize = new kakaoObj.maps.Size(73, 73); // 마커이미지의 크기입니다
        const imageOption = { offset: new kakaoObj.maps.Point(36, 73) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new kakaoObj.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption,
        );

        // 마커를 생성합니다
        const marker = new kakaoObj.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
          clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
        // marker.setMap(null);

        // 마커에 클릭이벤트를 등록합니다
        // kakao.maps.event.addListener(marker, 'click', function () {
        //   // 마커 위에 인포윈도우를 표시합니다
        //   // infowindow.open(map, marker);
        //   try {
        //     window.open(process.env.NEXT_PUBLIC_MAP_CLICK_URL);
        //   } catch (error) {
        //     logger.error(error);
        //   }
        // });
        map.relayout();
      });
    }
  }, [isMobile, isPhysical, relayoutDependancy]);

  useEffect(() => {
    initKakaoMap();
  }, [initKakaoMap]);

  return (
    <div>
      <div ref={mapRef} css={mapStyle(height, mobileHeight, mobileWidth)}></div>
      <Script
        src={kakaoMapSrc}
        strategy={'afterInteractive'}
        onLoad={initKakaoMap}
      />
    </div>
  );
};

export default KakaoMap;
