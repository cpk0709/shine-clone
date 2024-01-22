import { css } from '@emotion/react';

import Staff from '@/components/information/staff/Staff';

const borderDiv = css`
  width: 100%;
  height: 1px;
  background-color: #ddd;
`;

const StaffSection = () => (
  <section>
    <Staff
      staffImg={{
        pcSrc: '/obliv/obliv-staff-deputy-director-lee.webp',
        mobileSrc: '/obliv/obliv-staff-deputy-director-lee.webp',
        alt: '부원장 이소영',
      }}
      name={
        <>
          부원장 <b>이소영</b>
        </>
      }
      careerList={[
        [
          '(현) 오블리브의원 대표원장',
          '(전) 유앤아이의원 원장',
          '(전) 예쁨주의쁨의원 원장',
          '(전) 포에버의원 원장',
          '@',
          '∙ 대한 미용성형 레이저의학회 학술이사',
          '∙ 대한 리프팅 연구회 이사',
          '∙ 대한 미용의사회 학술위원',
          '∙ 대한 미용성형 레이저의학회 정회원',
          '∙ 대한 비만 체형학회 정회원',
          '∙ 대한 레이저 피부 모발학회 정회원',
          '∙ 스마트 아카데미 강사',
        ],
      ]}
    />
    <div css={borderDiv} />
    <Staff
      staffImg={{
        pcSrc: '/obliv/obliv-staff-deputy-director-yun.webp',
        mobileSrc: '/obliv/obliv-staff-deputy-director-yun.webp',
        alt: '부원장 윤지예',
      }}
      name={
        <>
          부원장 <b>윤지예</b>
        </>
      }
      careerList={[
        [
          '(현) 오블리브의원 부원장',
          '(전) 잇츠미의원 부원장',
          '(전) 오네스타의원 부원장',
          '(전) 강남 신성형외과의원 부원장',
          '(전) 장피부과의원 부원장',
          '@',
          '∙ 대한 미용성형 레이저학회 정회원',
          '∙ 대한 미용외과학회 정회원',
          '∙ 대한 미용의사회 정회원',
          '∙ 대한 미용웰빙학회 정회원',
          '∙ 대한 미용문신의학회 정회원',
          '∙ 대한 비만연구의사회 정회원',
          '∙ 대한 비만학회 정회원',
          '∙ 대한 비만 체형학회 정회원',
          '∙ 대한 필러학회 정회원',
          '∙ 대한 일차진료학회 정회원',
        ],
      ]}
    />
    <div css={borderDiv} />
    <Staff
      staffImg={{
        pcSrc: '/obliv/obliv-staff-director-park.webp',
        mobileSrc: '/obliv/obliv-staff-director-park.webp',
        alt: '대표원장 박영진',
      }}
      name={
        <>
          대표원장 <b>박영진</b>
        </>
      }
      careerList={[
        [
          '(현) 오블리브의원 대표원장',
          '(전) 유앤아이의원 원장',
          '(전) 예쁨주의쁨의원 원장',
          '(전) 포에버의원 원장',
          '@',
          '∙ 대한 미용성형 레이저의학회 학술이사',
          '∙ 대한 리프팅 연구회 이사',
          '∙ 대한 미용의사회 학술위원',
          '∙ 대한 미용성형 레이저의학회 정회원',
          '∙ 대한 비만 체형학회 정회원',
          '∙ 대한 레이저 피부 모발학회 정회원',
          '∙ 스마트 아카데미 강사',
        ],
        [
          '∙ Liftera HIFU 리프팅 레이저 키닥터',
          '∙ Corage 공명파 레이저 키닥터',
          '∙ RG 마이크로 프레스 몰딩 리프팅 PDO실',
          '∙ RG - LIFTER 키닥터',
          '∙ PCL콜라겐 스킨부스터 키닥터',
          '@',
          '∙ MBN찾아라! 특종건강백서 11회 출연',
        ],
      ]}
    />
  </section>
);

export default StaffSection;
