module.exports = {
  title: `코린이 탈출기`,
  description: `코린이 탈출기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.yangwonhee.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `yangwonhee/yangwonhee-gatsby-blog`,
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
        title: '개발 블로그 테마 개발',
        description:
          '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-yangwonhee-introduction',
          github: 'https://github.com/yangwonhee/yangwonhee-gatsby-blog',
          demo: 'https://www.yangwonhee.com',
        },
      },
    ],
  },
};
