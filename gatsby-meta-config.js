module.exports = {
  title: `yangwonhee.com`,
  description: `대학 5년 다니는 복전생..`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.yangwonhee.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `yangwonhee.github.io/comments`, // `yangwonhee/yangwonhee-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `양원희`,
    bio: {
      role: `개발자`,
      description: ['자유로운', '소통이 원활한', '능동적으로 일하는'],
      thumbnail: 'sample.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/yangwonhee`, 
      linkedIn: `https://www.instagram.com/wonheez`, // `https://www.instagram.com/wonheez`,
      email: `yangwonhee@kakao.com`, 
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
        date: '2021.11 ~',
        activity: '개인 블로그 운영',
        links: {
          post: '/gatsby-starter-yangwonhee-introduction',
          github: 'https://github.com/yangwonhee',
          demo: 'https://blog.naver.com/friendlilo',
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
        title: '진행 중  ...',
        description:
          '개인 프로젝트를 작게 진행하고 있습니다. 이 곳에 차곡차곡 쌓아가려고 합니다.',
        techStack: ['html', 'css', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/yangwonhee',
          demo: 'https://yangwonhee.github.io',
        },
      },
    ],
  },
};
