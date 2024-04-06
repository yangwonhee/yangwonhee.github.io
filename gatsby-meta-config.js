module.exports = {
  title: `yangwonhee.portfolio`,
  description: `WONHEEZ의 분석일지`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.yangwonhee.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `yangwonhee/yangwonhee.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `양원희`,
    bio: {
      role: `데이터분석가`,
      description: ['적응력이 뛰어난', '도전적인', '문제해결능력을 갖춘'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/yangwonhee`, // `https://github.com/yangwonhee`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `yangwonhee1117@gmail.com`, // `yangwonhee1117@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2018.03 ~ 2020.02',
        activity: '용인대학교 생명과학과 중퇴',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      
      
      
      {
        date: '2020.03 ~ 2023.02',
        activity: '단국대학교 사범대학 과학교육과(복수전공: SW융합학부 SW바이오융합학과) 졸업',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      
      {
        date: '2022.12 ~ 2024.02',
        activity: '[나노인공지능 융합기술 기반 NLRP3 염증질환 면역제어 연구실] 참여 연구원',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          // demo: 'https://www.zoomkoding.com',
        },
      },

      {
        date: '2023.01 ~ ',
        activity: '[광섬유 기반 라만 분광법 및 인공지능 시스템을 이용한 췌장암 액체생검 조기진단 기술 개발] 참여 연구원',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          // demo: 'https://www.zoomkoding.com',
        },
      },

      {
        date: '2023.03 ~ (2024.08)',
        activity: '단국대학교 일반대학원 인공지능융합학과 졸업예정',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'A Retrospective View of the Triple-Negative Breast Cancer Microenvironment: Novel Markers, Interactions, and Mechanisms of Tumor-Associated Components Using Public Single-Cell RNA-Seq Datasets',
        description:
          '2저자로 참여하였습니다. MDPI Cancers 16, no. 6: 1173. https://doi.org/10.3390/cancers16061173',
        techStack: ['Breast Cancer', 'Tumor Microenvironment', 'scRNA-seq', 'Data analysis', 'Data visualization'],
        thumbnailUrl: 'blog-proj3.png',
        links: {
          // post: '',
          // github: 'https://github.com/yangwonhee',
          demo: 'https://www.mdpi.com/2072-6694/16/6/1173',
        },
      },
      
      
      {
        title: 'Integrative analysis of ulcerative colitis progression using single-cell RNA-seq and microbiome',
        description:
          'Communications Biology에 revision 중인 논문으로, 추후 수정할 예정입니다.',
        techStack: ['Ulcerative Colitis', 'scRNA-seq', 'microbiome', 'Data analysis', 'Data visualization'],
        thumbnailUrl: 'blog-proj1.png',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/yangwonhee',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      {
        title: '기계학습 기반 종양 조직의 단일 세포 RNA 시퀀싱 데이터에서 inferCNV를 이용한 종양 세포 식별 기법(학위논문 및 저널 투고 예정)',
        description:
          '단일 세포 RNA 시퀀싱 기술의 발전으로 시퀀싱 데이터의 품질이 향상되고 있으며, 이에 따라 종양 조직 데이터의 개수가 늘어나고 있다. 종양 세포 분류의 중요성이 증가함에 따라, 상대적으로 빠르고 정확한 종양 세포 분류 기법인 inferCNVaddon을 제안하였다. 제시한 기법을 적용하여 두경부암, 대장암, 유방암 그리고 흑색종까지 4개의 다양한 종양 데이터세트에서 총 174,300개 단일 세포를 분석하여 종양 세포를 98.275%의 정확도 및 97.8%의 F1 score의 성능으로 분류하였다. 우수한 성능의 inferCNVaddon을 통해 종양 미세환경 내의 다양한 세포 유형의 특성 및 상호작용을 새롭게 규명할 수 있다.',
        techStack: ['Machine learning', 'Algorithms', 'Classification', 'scRNA-seq'],
        thumbnailUrl: 'blog-proj2.png',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/combio-dku',
          // demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
