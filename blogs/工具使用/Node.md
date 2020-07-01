---
title: Node
date: 2020-07-01
tags:
 - 工具
categories:
 -  工具使用
---


# 一、安装
[Node下载](https://nodejs.org/zh-cn/)
将node目录添加到环境变量中
:::
node -v
:::




# 二、npm
::: tip
npm -v
npm install xxx  //安装模块如不指定版本号，默认会安装最新的版本，安装但不写入package.json
npm install xxx 0.0.1  //安装指定版本的模块
npm install --save xxx //安装并把模块的版本信息保存到dependencies（生产环境依赖）中，即你的package.json文件的dependencies字段中
npm install --global xxx
npm install --save-dev xxx //安装并把模块版本信息保存到devDependencies（开发环境依赖）中，即你的package.json文件的devDependencies字段中
npm install -g cnpm --registry=https://registry.npm.taobao.org
:::
> --save相当于-s，--global相当于-g，--save-dev相当于-d，--save-optional相当于-o，--save-exact相当于-e。

::: waring
npm install rimraf -g //删除包特别快
rimraf node_modules
:::


# 三、yarn
::: tip
npm install -g yarn
:::
查看版本：yarn --version
```
# 初始化一个项目
yarn init
# 装包
yarn add packagename
yarn add packagename --dev
# 更新包
yarn upgrade packagename
# 删除包
yarn remove packagename
# 安装所有包
yarn
yarn install
# 发布包
yarn publish
# 查看包的缓存列表
yarn cache list
# 全局安装包 == npm -g
yarn global
```