---
title: Git
date: 2020-06-29
tags:
 - 工具
categories:
 -  工具使用
---

# 一、工具安装


# 二、生成ssh key

## 生成本机私钥公钥
::: tip
ssh-keygen -t rsa -C "your_email@example.com"
:::
## 将ssh key添加到GitHub中
GitHub中setting立的SSH新建一个添加进去

# 三、创建本机用户
::: tip
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
:::

# 四、将代码提交到本地库

::: tip
git add .
git commit -m "描述"
:::

# 五、将代码提交到远程仓库

::: tip
git remote -v
git remote add origin git@github.com:z346158847/vuepress.git
git pull
git push origin master
:::


# 六、Git中CRLF与LF的转换
```
// 提交时转换为LF，检出时转换为CRLF
git config --global core.autocrlf true   

// 提交时转换为LF，检出时不转换
git config --global core.autocrlf input   

// 提交检出均不转换
git config --global core.autocrlf false
```
::: tip
git config --global core.autocrlf input  //解决
:::
```
// 拒绝提交包含混合换行符的文件 （一般设置为true）
git config --global core.safecrlf true   

// 允许提交包含混合换行符的文件
git config --global core.safecrlf false   

// 提交包含混合换行符的文件时给出警告
git config --global core.safecrlf warn
```