import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { useMatchMedia } from '@/hooks/use-match-media';

const sideTitle = css`
  color: #212121;
  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
`;

const telNum = css`
  color: #212121;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 30px;
`;

const linkList = css`
  color: #666;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  span {
    color: #212121;
    font-family: Noto Sans KR;
    text-decoration-line: underline;
    cursor: pointer;
  }
`;

const mobileDivider = css`
  width: 100vw;
  height: 1px;
  background-color: #888;
  position: absolute;
  transform: translateY(-16px);
`;

type Props = {
  title: string;
  isIfrMobileVisible?: boolean;
};

const TitleContact = (props: Props) => {
  const { title, isIfrMobileVisible } = props;
  const route = useRouter();
  const isMobile = useMatchMedia();

  const handleLink = (linkText: 'naver' | 'kakao' | 'booking') => {
    switch (linkText) {
      case 'naver':
        void route.push('https://talk.naver.com/ct/w4xi72');

        return;
      case 'kakao':
        void route.push('https://pf.kakao.com/_xaxnUjxb/chat');

        return;

      default:
        void route.push('https://booking.naver.com/booking/13/bizes/338830');
    }
  };

  return (
    <>
      <div>
        <h2 css={sideTitle}>{title}</h2>
        <h4 css={telNum}>032.851.9119</h4>
        <ul css={linkList}>
          <li>
            네이버 톡톡상담{' '}
            <span onClick={() => handleLink('naver')}>
              @오블리브 상담하러 가기
            </span>
          </li>
          <li>
            카카오 채팅상담{' '}
            <span onClick={() => handleLink('kakao')}>
              @오블리브 상담하러 가기
            </span>
          </li>
          <li>
            예약하기{' '}
            <span onClick={() => handleLink('booking')}>
              @오블리브 예약하러 가기
            </span>
          </li>
        </ul>
      </div>
      {isMobile && isIfrMobileVisible && <div css={mobileDivider} />}
    </>
  );
};

export default TitleContact;
