---
title: Nginx
date: 2020-07-02
tags:
 - nginx
categories:
 -  工具使用
---



# Nginx安装
1.安装状依赖包

    //一键安装上面四个依赖
    yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel

2.下载nginx


    //创建一个文件夹
    cd /usr/local
    mkdir nginx
    cd nginx
    //下载tar包
    wget https://nginx.org/download/nginx-1.16.1.tar.gz
    tar -zxvf nginx-1.13.7.tar.gz

3.编译安装

    //进入nginx目录
    cd /usr/local/nginx
    //进入目录
    cd nginx-1.13.7
    //执行命令
    ./configure
    //执行make命令
    make
    //执行make install命令
    make install

4.配置nginx.conf

    proxy_buffer_size 64k;
    proxy_buffers   4 32k;
    proxy_busy_buffers_size 64k;
    
    #上传文件的大小限制  默认1m
    client_max_body_size 8m;
    client_body_buffer_size 1014k
    location /ahrmhtml/ {			
        index  index.html index.htm;
        alias  D:/Java/nginx-1.16.0/html/ahrmhtml/;
        try_files $uri $uri/ /index.html;
    }
        
            
    location /ahrmtest/ {
            proxy_pass http://test.axzhengxin.com:20025/ahrmtest/;            
    }
            
    location /download/ {
        alias  D:/Java/nginx-1.16.0/html/download/;
        sendfile on;
        autoindex on;  # 开启目录文件列表
        autoindex_exact_size on;  # 显示出文件的确切大小，单位是bytes
        autoindex_localtime on;  # 显示的文件时间为文件的服务器时间
        charset utf-8,gbk;  # 避免中文乱码
    }


5.启动

    /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
       
       ./nginx 启动
       
       ./nginx -s stop 关闭
       
       ./nginx -s reload 重启