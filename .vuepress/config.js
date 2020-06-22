module.exports = {
  title: "凝夜紫",
  description: '凝夜紫的博客',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: '文档',
        icon: 'reco-message',
        items: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/' }
        ]
      },
      { text: '跳转',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/z346158847', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'theme',
        'plugin',
        'api'
      ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '凝夜紫',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '517317384@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: '凝夜紫',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    record: '京ICP备19039217号',
    // 项目开始时间
    startYear: '2020',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: 'jtDLapRB88d6AeBMDcENAHMk-gzGzoHsz',// your appId
      appKey: '2m7cHVhruVtWVWu0tGTnKRBr', // your appKey
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: ["vuepress-plugin-kan-ban-niang",
    {
      theme: ["miku"],
      clean: true,
      modelStyle: {
        position: "fixed",
        left: "0px",
        bottom: "0px",
        opacity: "0.9",
        zIndex: 99999
      }
  }]
}  
