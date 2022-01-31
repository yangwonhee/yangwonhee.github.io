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
      thumbnail: `sample.png`, // Path to the image in the 'asset' folder
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
          post: '/',
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
        
          title: '그림판 만들기',
        description:
          '🖤 다크모드 가능 \n 🎨 그림 저장 가능 🖌 \n 여러 색상 선택 가능 \n 👩‍🎨 색 채우기 가능 \n 🖍 펜 굵기 선택 가능 \n 🍇 이름 입력 후 사용하는 기능 구현',
        techStack: ['html', 'css', 'js'],
        thumbnailUrl: 'minipro1.png',
        links: {
          post: '/',
          github: 'https://github.com/yangwonhee/paintingPage',
          demo: 'https://yangwonhee.github.io/paintingPage/',
        },
      },
      {
        title: 'this blog!',
        description:
          '본 블로그를 통해 웹의 기본적인 구조에 대해 배울 수 있었습니다.',
        techStack: ['html', 'css', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/about',
          github: 'https://github.com/yangwonhee',
          demo: 'https://yangwonhee.github.io',
        },
      },
    ],
  },
};
