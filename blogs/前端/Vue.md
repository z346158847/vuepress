---
title: Vue
date: 2020-07-02
tags:
 - vue
categories:
 -  前端
---





### Vue2.0配置webpack-dev-server的配置

proxy:设置代理
::: tip
因为浏览器的同源策略，调用不同域的资源就会产生跨域的问题，所以需要设置代理配置跨域，才能正常请求到其他域下的资源
设置代理, 首先得有一个标识, 确认哪一个连接要用代理. 不然的话, html, css, js这些静态资源都使用代理的网址调用. 所以只有需要调用的接口用代理, 静态文件用本地.
:::



- '/api':{}：接口只要是'api'开头的才用代理.这个'api'即标识
- target:源地址，即请求接口的url前缀，如果我的接口都在http://xxx.xx.com下，那么源地址就是http://xxx.xx.com
- changeOrigin:是否允许跨域
- ws:是否代理websockets
- pathRewrite:{'^/api':''}:顾名思义，这是 ' 路径重写 ’ 的意思
- 当设置了标识符后，接口调用就要这么写 :/api/delete?id=123，最后请求的路径就是 http://xxx.xx.com/api/delete?id=123.但是如果正确的接口路径里面没有/api. 所以就需要 pathRewrite,用'^/api':'', 把'/api'用空字符代替,最后请求的路径就是http://xxx.xx.com/delete?id=123了.这样既能有正确标识, 又能在请求接口的时候去掉api.

### Vue3.0配置vue.config.js

```
module.exports = {
    // 基本路径
    baseUrl: '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // webpack配置
    chainWebpack: () => { },
    configureWebpack: () => { },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        open: true,                                 //配置自动启动浏览器
        host: 'localhost',
        port: 8080,                                 // 端口号
        https: false,
        hotOnly: false,                             // https:{type:Boolean}
        proxy: {                                        // 配置跨域
            '/api':{
                target:'http://xxx.xx.xxx.xxx:8080', //源地址
                changeOrigin:true,                  //改变源
                ws:true,                            //是否代理websockets
                pathRewrite:{
                    '^/api':''
                }
            }
        },                                           // 配置跨域处理,只有一个代理
        before: app => { }
    },
    // 第三方插件配置
    pluginOptions: {}
}
```




## Vue踩坑记录
### 

vue项目部署 
生产环境静态文件为nginx目录下的目录名

生产接口为后台接口

history去除


跨域问题
1.vue开发时开启跨域

    proxyTable: {
          '/api/**': {
            changeOrigin: true,
        },

2.axiox跨域导致cookie失效

    axios.defaults.withCredentials = true

3.跨域请求,关于后端session会话丢失的解决办法

    tomcat，在conf/context.xml文件中，设置sessionId的cookieName别名，不和默认的jsessionid

    <Context  sessionCookieName="SHGJSESSIONID"  sessionCookiePath="/">

    weblogic
    <session-descriptor>
    <cookie-name>JSESSIONID1</cookie-name>
    </session-descriptor>

