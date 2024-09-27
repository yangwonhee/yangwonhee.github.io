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
      role: `ML/AI 연구원`,
      description: ['성장을 즐기는', '도전적인'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/yangwonhee`, // `https://github.com/yangwonhee`,
      linkedIn: `https://www.linkedin.com/in/%EC%9B%90%ED%9D%AC-%EC%96%91-740491302/`, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
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
        date: '2014.03 ~ 2017.02',
        activity: '수내고등학교 졸업',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          // demo: 'https://www.zoomkoding.com',
        },
      },
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
        activity: '단국대학교 과학교육과, SW융합학부 학사 졸업',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      {
        date: '2023.03 ~ 2024.08',
        activity: '단국대학교 일반대학원 인공지능융합학과 석사 졸업',
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
        title: '나노인공지능 융합기술 기반 NLRP3 염증질환 면역제어 연구실 👉',
        description:
          '대장염에 대해 유전체 데이터 및 장내 미생물 데이터를 바탕으로 급성 대장염과 만성 대장염의 차이를 분석하였습니다. 유전체 데이터 분석에서 새로운 인사이트를 도출하여 질병 별 세포 비율과 특이적인 marker를 선별하였습니다. 장내 미생물 데이터를 통해 대장염에 따라 다르게 나타나는 미생물 구성에 대해 분석하였습니다. Single-Cell/Bulk RNA sequencing 및 Microbiome 데이터를 활용하여 인사이트 도출하고, 데이터 전처리/분석/시각화에 기여하였습니다.',
        techStack: ['Ulcerative Colitis', 'scRNA-seq', 'Microbiome', 'Data analysis', 'Data visualization'],
        thumbnailUrl: 'paperimage_colitis.png',
        links: {
          post: 'https://www.nature.com/articles/s42003-024-06409-w',
          // github: 'https://github.com/yangwonhee',
          // demo: '',광섬유 기반 라만 분광법 및 인공지능 시스템을 이용한 췌장암 액체생검 조기진단 기술 개발
        },
      },
      
      {
        title: '기계학습 기반 종양 세포 식별 방법에 관한 연구 👉',
        description:
          '머신러닝 기반 비지도학습을 통해 암세포와 정상세포를 분류하는 새로운 기법 제안한 논문입니다. 자세한 내용은 블로그 포스팅을 참고해주세요.',
        techStack: ['Machine learning', 'Algorithms', 'Classification', 'scRNA-seq'],
        thumbnailUrl: 'paperimage_grad.png',
        links: {
          post: '/paper_graduation',
          // github: 'https://github.com/combio-dku',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      {
        title: '발달장애인을 위한 전자도서관 서비스 개발 👉 ',
        description:
          '\'생성형 AI를 활용한 사회적 약자를 위한 서비스 개발\'이라는 주제의 해커톤에서 대상(서울시장상)을 수상한 프로젝트입니다. 발달장애 인구의 약 45프로가 가장 필요로 하는 대체 자료로 \'읽기 쉬운 책\'을 선정하였으나, 국내의 읽기 쉬운 책은 33권 뿐 입니다. 2023년 정부에서 1억 5천을 투자하였지만, 15권이 제작되었습니다. 이러한 수요에 비해 떨어지는 공급과, 제작 비용을 감축하기 위해 LLM을 활용하여 발달장애인을 위한 전자도서관 서비스를 개발하였습니다. 저는 데이터 수집, 정제 및 LLM 모델의 파인튜닝을 맡았습니다. ',
        techStack: ['Data Engineering', 'AI', 'Hackerthon'],
        thumbnailUrl: 'easyread_image.png',
        links: {
          // post: '/paper_graduation',
          github: 'https://github.com/easy-lead/easy-lead-ai',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      // {
      //   title: '디지털헬스산업 전문인력양성 산학프로젝트',
      //   description:
      //     '',
      //   techStack: ['Machine learning', 'Algorithms', 'scRNA-seq'],
      //   // thumbnailUrl: 'blog-proj2.png',
      //   links: {
      //     // post: '/paper_graduation',
      //     // github: 'https://github.com/combio-dku',
      //     // demo: 'https://www.zoomkoding.com',
      //   },
      // },
      {
        title: 'A Retrospective View of the Triple-Negative Breast Cancer Microenvironment: Novel Markers, Interactions, and Mechanisms of Tumor-Associated Components Using Public Single-Cell RNA-Seq Datasets 👉',
        description:
          '유방암 연구 과제에서 유전체 데이터를 바탕으로 삼중 음성 유방암에 대해 연구한 논문입니다. 삼중 음성 유방암에서 특이적으로 발현되는 marker, pathway 발굴하였습니다.',
        techStack: ['Breast Cancer', 'Tumor Microenvironment', 'scRNA-seq', 'Data analysis', 'Data visualization'],
        thumbnailUrl: 'paperimage_breast.png',
        links: {
          post: 'https://www.mdpi.com/2072-6694/16/6/1173',
          // github: 'https://github.com/yangwonhee',
          // demo: 'https://www.mdpi.com/2072-6694/16/6/1173',
        },
      },
      {
        title: '광섬유 기반 라만 분광법 및 인공지능 시스템을 이용한 췌장암 액체생검 조기진단 기술 개발',
        description:
          '췌장암 조기 진단을 위한 단백질 마커의 조합을 찾는 연구에 참여하여, ELISA/LSPR/SERS 방법으로 농도 배수에 따라 달리 측정된 데이터 활용하였습니다. 농도 별로 측정된 데이터를 표준화하여 1,2기 췌장암과 3,4기 췌장암 분류하는 데에 기여하였습니다. 아직 진행 중인 한국연구재단의 연구 과제로 상세한 내용은 기술이 어렵습니다.',
        techStack: ['Machine learning', 'Pancreatic Cancer', 'Data visualization'],
        // thumbnailUrl: 'blog-proj2.png',
        links: {
          // post: '/paper_graduation',
          // github: 'https://github.com/combio-dku',
          // demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
