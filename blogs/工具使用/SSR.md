---
title: SSR
date: 2020-07-03
tags:
 - 工具
categories:
 -  工具使用
---

## SSR介绍
科学上网，懂的人都懂
ShadowSocksR则是原版ShadowSocks（SS）的一个衍生版本，相比原版而言，主要增加了混淆参数功能 。
![](http://img.zwjblog.top/FrAXDLLR8IvXQf7qrreiJ6SErlDz)



## ShadowSocksR搭建流程
服务器，腾讯云，香港，抢占式实例
### 1.部署BBR服务

    //切换当前用户为root用户
    sudo -i
    // 下载bbr安装脚本
    wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh
    // 给脚本加上可执行权限：
    chmod +x bbr.sh
    // 运行脚本  安装成功后自动重启服务器
    ./bbr.sh
    // 查看内核版本，如果返回值有4.13或以上版本，表示成功
    uname -r
    
### 2.安装SSR服务

    // 下载安装脚本
    wget --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh
    //为脚本加可执行权限
    chmod +x shadowsocks-all.sh
    //运行脚本
    ./shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log
    //根据脚本配置SSR
    
    //安装完成后会显示你所配置的ssr服务相关ip和账号信息，手动输入账号信息或一键导入即可使用。

### 3.结果展示

    Congratulations, ShadowsocksR server install completed!
    Your Server IP        :  129.226.49.161 
    Your Server Port      :  12661 
    Your Password         :  123456
    Your Protocol         :  auth_chain_b 
    Your obfs             :  tls1.2_ticket_auth_compatible 
    Your Encryption Method:  aes-192-cfb8 
    
    Your QR Code: (For ShadowsocksR Windows, Android clients only)
     ssr://MTI5LjIyNi40OS4xNjE6MTI2NjE6YXV0aF9jaGFpbl9iOmFlcy0xOTItY2ZiODp0bHMxLjJfdGlja2V0X2F1dGhfY29tcGF0aWJsZTpXbmRxTVRrNU5rQS8/b2Jmc3BhcmFtPQ== 
    Your QR Code has been saved as a PNG file path:
     /root/shadowsocks_r_qr.png 
    
    Welcome to visit: https://teddysun.com/486.html
    Enjoy it!
    
## 使用教程加谷歌插件
### 1. 下载安装
[SSR4.9下载](https://github.com/shadowsocksrr/shadowsocksr-csharp/releases/download/4.9.0/ShadowsocksR-win-4.9.0.zip)
SSR下载完成后，解压，然后后运行ShadowsocksR-dotnet2.0.exe（32位） 或 ShadowsocksR-dotnet4.0.exe（64位） 即可。
SSR Windows客户端的运行，需要.net环境的支持，一般来说Win7以上系统可以直接运行。
[.net下载](https://www.microsoft.com/zh-cn/download/details.aspx?id=17718")

### 2.SSR客户端使用教程

2.1 SSR成功运行后，系统任务栏会出现一个小飞机标志：

![](http://img.zwjblog.top/FqQFMKsC8LJHpko3i-lHxI4QLa4w)


2.2 我们需要先添加SSR服务器。复制好服务器生成的`ssr://链接`，右键点击小飞机——服务器——剪切板批量导入ssr

![](http://img.zwjblog.top/FhH5MYsEZ05u-LLT2-duKQL5xGRk)

2.3 右键点击小飞机——服务器，找到你新导入的节点，代理模式改为`PAC模式`

2.4 系统代理模式
SSR的代理模式，通过该项对流量进行（第一次分流见下文）。决定进入SSR客户端的流量是否走代理。默认为全局模式，下面我们分别介绍。
1. **直连模式：** 所有进入SSR的流量不走代理，相当于没有安装SSR。一般我们很少选择这一项。
2. **PAC模式：** 通过SSR目录中的pac.txt文件，判断进入SSR客户端的流量是否走代理。
3. **全局模式：** 所有进入SSR客户端的流量都走代理。

### 3.谷歌插件SwitchyOmega插件分流
1. 进入谷歌应用商店下载SwitchyOmega插件
2. 将小飞机系统代理模式修改为直连模式
3. [SwitchyOmega备份文件](http://wjzhang.lanzous.com/i50zgmd)下载并解压
![](http://img.zwjblog.top/FqT4FstsaAEeF_MZziUH9prrsAYF)
导入/导出中从备份文件中恢复，注意端口需要与小飞机端口一致，默认1080


### 4.机场分享
[心阶云](https://www.xinjiecloud.co/auth/login)
暂时用的这个，89一年，以后有更好的再换

::: details
https://sub.xinjie.eu.org/link/N7iSrNUFmUtfWOEZ?mu=1
::: 