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
      description: ['적응력이 뛰어난', '도전적인', '문제해결능력을 갖춘'],
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
        date: '2018.03 ~ 2020.02',
        activity: '용인대학교 생명과학과',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      
      
      
      {
        date: '2020.03 ~ 2023.02',
        activity: '단국대학교 사범대학 과학교육과, SW융합학부 SW바이오융합학과',
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
        date: '2023.01 ~ 2024.08',
        activity: '[광섬유 기반 라만 분광법 및 인공지능 시스템을 이용한 췌장암 액체생검 조기진단 기술 개발] 참여 연구원',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          // demo: 'https://www.zoomkoding.com',
        },
      },

      {
        date: '2023.03 ~ 2024.08',
        activity: '단국대학교 일반대학원 인공지능융합학과',
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
        title: 'Integrative analysis of single-cell RNA-seq and gut microbiome metabarcoding data elucidates macrophage dysfunction in mice with DSS-induced ulcerative colitis',
        description:
          'Communication Biology, Nature | 2024.06.15',
        techStack: ['Ulcerative Colitis', 'scRNA-seq', 'Microbiome', 'Data analysis', 'Data visualization'],
        thumbnailUrl: 'blog-proj1.png',
        links: {
          post: 'https://www.nature.com/articles/s42003-024-06409-w',
          // github: 'https://github.com/yangwonhee',
          // demo: '',
        },
      },
      {
        title: '기계학습 기반 종양 세포 식별 방법에 관한 연구',
        description:
          '',
        techStack: ['Machine learning', 'Algorithms', 'Classification', 'scRNA-seq'],
        thumbnailUrl: 'blog-proj2.png',
        links: {
          post: '/paper_graduation',
          // github: 'https://github.com/combio-dku',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      {
        title: 'A Retrospective View of the Triple-Negative Breast Cancer Microenvironment: Novel Markers, Interactions, and Mechanisms of Tumor-Associated Components Using Public Single-Cell RNA-Seq Datasets',
        description:
          'MDPI, Cancers | 2024.03.16',
        techStack: ['Breast Cancer', 'Tumor Microenvironment', 'scRNA-seq', 'Data analysis', 'Data visualization'],
        thumbnailUrl: 'blog-proj3.png',
        links: {
          post: 'https://www.mdpi.com/2072-6694/16/6/1173',
          // github: 'https://github.com/yangwonhee',
          // demo: 'https://www.mdpi.com/2072-6694/16/6/1173',
        },
      },
    ],
  },
};
