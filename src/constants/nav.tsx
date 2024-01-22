export interface GlobalNavMenuConfig {
  title: string;
  subMenus?: SubNavMenuConfig[];
  path?: string;
}

export interface SubNavMenuConfig {
  subMenuTitle?: string;
  path: string;
}

export const globalNavMenuList: GlobalNavMenuConfig[] = [
  {
    title: '오블리브 의원',
    subMenus: [
      {
        subMenuTitle: 'About Obliv',
        path: '/information/about-obliv',
      },
      {
        subMenuTitle: '의료진',
        path: '/information/staff',
      },
      {
        subMenuTitle: '오시는 길',
        path: '/information/location',
      },
      {
        subMenuTitle: '이벤트',
        path: '/information/event',
      },
      {
        subMenuTitle: '오블리브 소식',
        path: '/information/notice',
      },
    ],
  },
  {
    title: '피부교정',
    subMenus: [
      {
        subMenuTitle: '세안습관교정',
        path: '/skin/face-washing',
      },
      {
        subMenuTitle: '여드름/모공/흉터',
        path: '/skin/trouble',
      },
      {
        subMenuTitle: '기미/주근깨/잡티',
        path: '/skin/freckle',
      },
      {
        subMenuTitle: '점/검버섯/비립종',
        path: '/skin/mole',
      },
      {
        subMenuTitle: '홍조/건조증/피부장벽',
        path: '/skin/flushing',
      },
      {
        subMenuTitle: '필러',
        path: '/skin/filler',
      },
      {
        subMenuTitle: '보톡스',
        path: '/skin/botox',
      },
      {
        subMenuTitle: '마크뷰 진단',
        path: '/skin/mark-vu',
      },
      {
        subMenuTitle: '포텐자',
        path: '/skin/potenza',
      },
      {
        subMenuTitle: '코레지',
        path: '/skin/corage',
      },
      {
        subMenuTitle: '엔덤',
        path: '/skin/n-derm',
      },
      {
        subMenuTitle: 'LDM-MED RTI',
        path: '/skin/ldm-med',
      },
      {
        subMenuTitle: '플라미',
        path: '/skin/plami',
      },
      {
        subMenuTitle: '리젠X',
        path: '/skin/regen-x',
      },
      {
        subMenuTitle: '무통가스마취',
        path: '/skin/matrx',
      },
    ],
  },
  {
    title: '실 리프팅',
    subMenus: [
      {
        subMenuTitle: 'AIO리프팅',
        path: '/thread-lifting/aio',
      },
      {
        subMenuTitle: '눈 밑 리프팅',
        path: '/thread-lifting/below-eyes',
      },
      {
        subMenuTitle: '이기적인 코프팅',
        path: '/thread-lifting/nose',
      },
      {
        subMenuTitle: '팔자/심부볼 리프팅',
        path: '/thread-lifting/marionette-lines',
      },
      {
        subMenuTitle: '콜라겐 실 리프팅',
        path: '/thread-lifting/collagen',
      },
    ],
  },
  {
    title: '레이저 클리닉',
    subMenus: [
      {
        subMenuTitle: '오블리브 리프팅',
        path: '/lazer/obliv-lifting',
      },
      {
        subMenuTitle: '트리오엘',
        path: '/lazer/triol',
      },
      {
        subMenuTitle: '리니어지',
        path: '/lazer/linearz',
      },
      {
        subMenuTitle: '다이아',
        path: '/lazer/dia',
      },
      {
        subMenuTitle: '울쎄라',
        path: '/lazer/ulthera',
      },
      {
        subMenuTitle: '온다',
        path: '/lazer/onda',
      },
    ],
  },
  {
    title: '스킨부스터',
    subMenus: [
      {
        subMenuTitle: 'NDA PLUS',
        path: '/skin-booster/nda-plus',
      },
      {
        subMenuTitle: 'DERMA-Z',
        path: '/skin-booster/derma-z',
      },
      {
        subMenuTitle: '오블리브 앰플',
        path: '/skin-booster/ampoule',
      },
      {
        subMenuTitle: '넘버˚5',
        path: '/skin-booster/num-five',
      },
      {
        subMenuTitle: '모공톡스',
        path: '/skin-booster/pore-tox',
      },
      {
        subMenuTitle: '리쥬란LIV',
        path: '/skin-booster/rejuran-liv',
      },
      {
        subMenuTitle: '엑소좀LIV',
        path: '/skin-booster/exosome-liv',
      },
      {
        subMenuTitle: '리쥬란',
        path: '/skin-booster/rejuran',
      },
      {
        subMenuTitle: '엑소좀',
        path: '/skin-booster/exosome',
      },
      {
        subMenuTitle: '골드에토좀PTT',
        path: '/skin-booster/ethosomeptt',
      },
      {
        subMenuTitle: '싸이토케어',
        path: '/skin-booster/cytocare',
      },
      {
        subMenuTitle: '필로가',
        path: '/skin-booster/filorga',
      },
      {
        subMenuTitle: '줄기세포주사',
        path: '/skin-booster/stem-cells',
      },
      {
        subMenuTitle: 'PCL',
        path: '/skin-booster/pcl',
      },
    ],
  },
  {
    title: '바디 교정',
    subMenus: [
      {
        subMenuTitle: '이지스쿼트',
        path: '/body/squirt',
      },
      {
        subMenuTitle: '트리플바디',
        path: '/body/triple',
      },
      {
        subMenuTitle: '엔더몰로지',
        path: '/body/endermologie',
      },
      {
        subMenuTitle: '파셀라',
        path: '/body/fascella',
      },
      {
        subMenuTitle: '지방흡입',
        path: '/body/liposuction',
      },
      {
        subMenuTitle: '문신제거',
        path: '/body/clean-tattoo',
      },
      {
        subMenuTitle: '제모',
        path: '/body/depilation',
      },
      {
        subMenuTitle: '영양주사',
        path: '/body/nutritional',
      },
      {
        subMenuTitle: '플라몬태반주사',
        path: '/body/placenta',
      },
    ],
  },
  {
    title: '도수치료',
    path: '/manual-therapy',
  },
  {
    title: '발치료',
    subMenus: [
      {
        subMenuTitle: '내성발톱',
        path: '/foot/hook-clip',
      },
      {
        subMenuTitle: '무좀',
        path: '/foot/foot-care',
      },
    ],
  },
];
