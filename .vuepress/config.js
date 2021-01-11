module.exports = {
    // base: "/blog/",  // 是否为根目录
    title: "凝夜紫",
    description: '凝夜紫的博客',
    dest: 'public',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]
    ],
    theme: 'reco',
    themeConfig: {
        nav: [
            {text: '主页', link: '/', icon: 'reco-home'},
            {text: '时间轴', link: '/timeline/', icon: 'reco-date'},
            {text: '笔记', link: '/docs/note/', icon: 'reco-document'},
            {
                text: '文档',
                icon: 'reco-message',
                items: [
                    {text: 'vuepress-reco', link: '/docs/theme-reco/'}
                ]
            },
            {
                text: '跳转',
                icon: 'reco-message',
                items: [
                    // {text: 'GitHub', link: 'https://github.com/z346158847', icon: 'reco-github'},
                    // {text: 'qq', link: 'https://github.com/z346158847', icon: 'reco-github'},
                    {
                        text: 'GitHub', items: [
                            {text: 'GitHub1', link: 'https://github.com/z346158847', icon: 'reco-github'},
                            {text: 'GitHub2', link: 'https://github.com/z346158847', icon: 'reco-github'}
                        ]
                    },
                    {
                        text: 'qq', items: [
                            {text: 'qq3', link: 'https://github.com/z346158847', icon: 'reco-github'},
                            {text: 'qq33', link: 'https://github.com/z346158847', icon: 'reco-github'}
                        ]
                    }
                ]
            }
        ],
        sidebar: {
            '/docs/theme-reco/': [
                '',
                ['theme','1'],
                'plugin',
                'api'
            ],
            '/docs/note/': [
                {
                    title: 'HTML5',
                    collapsable: true,
                    children: [
                        'html5/HTML5的语义元素',
                        'html5/HTML5多媒体标签',
                        'html5/HTML5表单元素',
                        'html5/HTML5中的API',
                        'html5/Canvas'
                    ]
                },
                {
                    title: 'CSS',
                    collapsable: true,
                    children: [
                        'css/css3新特性',
                        'css/css3Flip'
                    ]
                },
                {
                    title: 'JS',
                    collapsable: true,
                    children: [
                        'js/js数据类型',
                        'js/js对象',
                        'js/js继承',
                        'js/js原型链、闭包',
                        'js/js函数的四种调用方式'
                    ]
                },
                {
                    title: 'Vue.js',
                    collapsable: true,
                    children: [
                        'Vue/Vue基础笔记',
                        'Vue/Vue组件'
                    ]
                },
                {
                    title: '前端单元测试',
                    collapsable: true,
                    children: [
                        'fe-unit-test/chai',
                        'fe-unit-test/mocha',
                        'fe-unit-test/vueTestUtils'
                    ]
                },
                {
                    title: '微信小程序',
                    collapsable: true,
                    children: [
                        'wechat-mini-program/初识微信小程序',
                    ]
                },
                {
                    text: '菜单分组测试', items: [
                        {
                            text: 'test1', items: [
                                {text: 'test1-1', link: '/frontend/test1-1/'},
                                {text: 'test1-2', link: '/frontend/test1-2/'}
                            ]
                        },
                        {
                            text: 'teset2', items: [
                                {text: 'test2-1', link: '/frontend/test2-1/'},
                                {text: 'test2-2', link: '/frontend/test2-2/'}
                            ]
                        }
                    ]
                }
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
        // 侧边栏深度
        sidebarDepth: 1,
        // 显示所有页面的标题链接
        displayAllHeaders: true,
        // 最后更新时间
        lastUpdated: 'Last Updated',
        // 作者
        author: '凝夜紫',
        // 作者头像
        authorAvatar: '/avatar.jpg',
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
    plugins: [
        ['cursor-effects',
            {
                size: 2,                    // size of the particle, default: 2
                shape: 'star',  // shape of the particle, default: 'star',circle
                zIndex: 999999999           // z-index property of the canvas, default: 999999999
            }
        ]
    ]
}
