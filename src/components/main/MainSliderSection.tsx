import MainSlider from '@/components/main/MainSlider';

const MainSliderSection = () => (
  <>
    <MainSlider
      slideTitle="진행 중인 이벤트 및 프로모션"
      slideItems={[
        {
          imgSrc: '/obliv/obliv-home-slide-event-1.webp',
          title: '특별한 혜택',
          desc: '3월 한정 피부 클리닉 이벤트',
        },
        {
          imgSrc: '/obliv/obliv-home-slide-event-2.webp',
          title: '세안 습관 교정',
          desc: '박영진 원장의 바른 피부 가이드',
        },
        {
          imgSrc: '/obliv/obliv-home-slide-event-3.webp',
          title: '오블리브 1:1 맞춤 앰플',
          desc: '다 같은 피부가 아니기에 현재 피부 컨디션에 맞춰...',
        },
        {
          imgSrc: '/obliv/obliv-home-slide-event-4.webp',
          title: '이상적인 황금비율 매력적인 입술',
          desc: '[특가진행] 입술필러1cc+입꼬리보톡스 15만원',
        },
      ]}
    />
    <MainSlider
      slideTitle="당신의 피부를 교정합니다."
      slideItems={[
        {
          imgSrc: '/obliv/obliv-home-slide-skin-1.webp',
          title: '노화된 피부장벽 / 주름',
        },
        {
          imgSrc: '/obliv/obliv-home-slide-skin-2.webp',
          title: '기미 / 색소침착',
        },
        {
          imgSrc: '/obliv/obliv-home-slide-skin-3.webp',
          title: '건조한 피부장벽 / 각질',
        },
        {
          imgSrc: '/obliv/obliv-home-slide-skin-4.webp',
          title: '제모',
        },
        {
          imgSrc: '/obliv/obliv-home-slide-skin-5.webp',
          title: '모공 / 과다한 피지분비',
        },
      ]}
      slideImgWidth="345px"
    />
    <MainSlider
      slideItems={[
        {
          imgSrc: '/obliv/obliv-home-slide-ampoule-1.webp',
          title: '오블리브 앰플',
        },
        {
          imgSrc: '/obliv/obliv-home-slide-ampoule-2.webp',
          title: '넘버5',
        },
        {
          imgSrc: '/obliv/obliv-home-slide-ampoule-3.webp',
          title: '골드 에토좀 PTT',
        },
        {
          imgSrc: '/obliv/obliv-home-slide-ampoule-4.webp',
          title: '창상피복재',
        },
        {
          imgSrc: '/obliv/obliv-home-slide-ampoule-5.webp',
          title: '엑소좀 리브',
        },
      ]}
      slideImgWidth="345px"
    />
  </>
);

export default MainSliderSection;
