---
title: Java开发环境
date: 2020-07-03
tags:
 - linux
 - java
categories:
 -  Java
---


## 前言
用了快一年的服务器，期间学习下载了不少东西，有点乱了，决定将它初始化，顺便重新回顾一下Java开发环境的配置。打开[谷歌](https://www.google.com/)，搜索，开始踩坑。

## 一.Java安装
### 1.检查是否安装
检查系统是否安装了JDK（有些会默认装openJDK），若无，忽略这步

	[root@xxx ~]#java -version
    # 一般是openJDK
    [root@xxx ~]# rpm -qa | grep openjdk
    # 卸载openJDK
    [root@xxx ~]# rpm -e --nodeps java-1.6.0-openjdk-xxx

### 2.下载Java
找到 Oracle官网 -> Java -> JavaSE -> JavaSE8u211
也就是这个网址 [JavaSE8u211下载](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

::: tip
1772885836@qq.com/OracleTest1234
:::

这里顺便提一下 8u211 和 8u212的**区别**
JDK版本7u71以后，Java会在同一时间发布2个版本，其中：
奇数版为BUG修正并全部通过检验的版本。
偶数版包括奇数版，以及未被验证的BUG修复。推荐使用奇数版。
![](http://ww1.sinaimg.cn/large/007eIU54ly1g52nojhljpj30f008uq3c.jpg)


注：2019/04/16以后下载Java8需要Oracle账户，我注册了一下，还是很简单的，需要验证邮箱，不想注册的话可以到微软或AWS上下载，贴上AWS的GitHub：[AWS的GitHub的下载地址](https://github.com/frekele/oracle-java/releases)，不翻墙速度就...


	[root@xxx ~]# wget "这里放你获取到的地址，因为需要登录所以地址不固定"
    # 这里采用wget方式下载 若为Oracale官网下载 我这里文件名为 jdk-8u211-linux-x64.rpm/Auxxxxxx  所以我这里修改了文件名
    [root@xxx ~]# mv jdk-8u211-linux-x64.rpm/Auxxxxxx    jdk-8u211-linux-x64.rpm
    # 采用yum方式安装
    [root@xxx ~]# yum -y localinstall jdk-8u211-linux-x64.rpm
	[root@xxx ~]# java -version
    [root@xxx ~]# java -version
    java version "1.8.0_211"
    # 设置jdk环境变量
    [root@xxx ~]# vi /etc/profile
    # 最后增加
    export JAVA_HOME=/usr/java/default
    export PATH=$PATH:$JAVA_HOME/bin
    export CLASSPATH=.:$JAVA_HOME/jre/lib:$JAVA_HOME/lib:$JAVA_HOME/lib/tools.jar
    [root@xxx ~]# source /etc/profile

### 3.测试Java环境是否正常

	[root@xxx ~]#vi hello.java
    class hello {
    public static void main(String[] args) {
        System.out.println("helloWorld");
    	}
	}
    [root@xxx ~]# javac hello.java
	[root@xxx ~]# java hello






## 二.Mysql的安装
接下来是Mysql的安装，先说下，从Centos7开始，MariaDB成为yum源中默认的数据库安装包，搜索了一些文章后，MariaDB是Mysql的分支，综合了一下就安这个默认的吧（在我看来问题不大）。

### 1.检查MariaDB是否安装

	[root@xxx ~]#yum list installed | grep mariadb
    mariadb-libs.x86_64
    #若安装，卸载全部MariaDB相关
    [root@xxx ~]yum -y remove mariadb*


### 2.下载Mysql的yum源

	#进入下载的路径，一般都下载到这里
	[root@xxx ~]#cd /usr/local/src
    #wget下载
    [root@xxx ~]#wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
    #安装Mysql的yum源
    [root@xxx ~]#rpm -ivh mysql57-community-release-el7-11.noarch.rpm
	#检查Mysql的yum源是否安装成功
	[root@xxx ~]#yum repolist enabled | grep "mysql.*-community.*"
    mysql-connectors-xxxxxx
    # 查看Mysql版本
    [root@xxx ~]#yum repolist all | grep mysql


### 3.安装Mysql

	[root@xxx ~]#yum -y install mysql-community-server

### 4.测试连接Mysql服务

	#先启动Mysql服务
    [root@xxx ~]#systemctl start mysqld
	#这个时候没有密码应该是进不去的
	[root@xxx ~]#mysql -u root
	#停止Mysql服务
    [root@xxx ~]#systemctl stop mysqld
    #以不检查权限的方式启动Mysql
    [root@xxx ~]#mysqld --user=root --skip-grant-tables &
    [root@xxx ~]#mysql -u root
    #注意 密码设置时 5.7默认需要 大小写 + 数字 + 特殊字符
    mysql>UPDATE mysql.user SET authentication_string=PASSWORD('你的密码') where USER='root';
    #刷新
    mysql>flush privileges;
    #退出
	mysql>exit;
    #设置完成就可以 登进数据库了
    [root@xxx ~]#mysql -u root -p

### 5.防火墙相关设置

	#查看防火墙是否开启
    [root@xxx ~]#systemctl status firewalld
    #打开防火墙
    [root@xxx ~]#systemctl start firewalld
    #开放3306端口  此时可以顺便把常用的80、8080端口一并开启
    [root@xxx ~]#firewall-cmd --permanent --zone=public --add-port=3306/tcp
    [root@xxx ~]#firewall-cmd --permanent --zone=public --add-port=3306/udp
    [root@xxx ~]#firewall-cmd --reload
    #查看以开放端口
    [root@xxx ~]#firewall-cmd --list-ports
    #将Mysql服务加入防火墙
    [root@xxx ~]#firewall-cmd --zone=public --permanent --add-service=mysql
    #重启
	[root@xxx ~]#systemctl restart firewalld
    #加入开机启动
    [root@xxx ~]#systemctl enable mysqld

### 6.设置远程访问（看情况选择）

	#默认情况下 MySQL 是不允许远程连接的 允许任意主机通过 root 用户使用 密码连接到mysql服务器
    mysql>grant all privileges on *.* to root@"%" identified by '复杂密码';
    #刷新
    mysql>flush privileges;


## 三.Tomcat安装

### 1.下载Tomcat
神奇的是只有7.0、9.0、8.5  没有8.0版本的下载地址
下载tomcat linux安装包 [Tomcat下载地址](https://tomcat.apache.org/download-80.cgi)
![](http://ww1.sinaimg.cn/large/007eIU54ly1g52pnv6nfxj30ia097js1.jpg)

	#进入下载的路径
	[root@xxx ~]#cd /usr/local/src
    #wget下载
    [root@xxx ~]#wget https://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-8/v8.5.43/bin/apache-tomcat-8.5.43.tar.gz
    [root@xxx ~]#tar -zxvf  apache-tomcat-8.5.43.tar.gz
    [root@xxx ~]#cd apache-tomcat-8.5.43/bin

### 2.启动

    [root@xxx ~]#./startup.sh

记得开放8080端口

### 3.tomcat配置开机启动和service

1.先了解一下Centos7使用systemctl替换了service命令

	查看服务
    systemctl status name.service
    启动服务
    systemctl start name.service
    停止服务
    systemctl stop name.service
    重启服务
    systemctl restart name.service
    增加开机启动
    systemctl enable name.service
    删除开机启动
    systemctl disable name.service

2.tomcat增加启动参数，tomcat需要增加一个pid文件

	[root@xxx ]#vim /usr/local/src/apache-tomcat-8.5.43/bin/setenv.sh
    #tomcat
    export CATALINA_HOME=/usr/local/src/apache-tomcat-8.5.43
    export CATALINA_BASE=/usr/local/src/apache-tomcat-8.5.43
    #add tomcat pid
    CATALINA_PID="$CATALINA_BASE/tomcat.pid"
    #add java opts
    JAVA_OPTS="-server -XX:PermSize=256M -XX:MaxPermSize=1024m -Xms512M -Xmx1024M -XX:MaxNewSize=256m"

3.增加tomcat.service

	[root@xxx]#vim /usr/lib/systemd/system/tomcat.service
    [Unit]
    Description=Tomcat
    After=syslog.target network.target remote-fs.target nss-lookup.target
    [Service]
    Type=forking
    PIDFile=/usr/local/src/apache-tomcat-8.5.43/tomcat.pid
    ExecStart=/usr/local/src/apache-tomcat-8.5.43/bin/startup.sh
    ExecReload=/bin/kill -s HUP $MAINPID
    ExecStop=/bin/kill -s QUIT $MAINPID
    PrivateTmp=true
    [Install]
    WantedBy=multi-user.target

4.使用tomcat.service

    systemctl enable tomcat.service

    systemctl start tomcat.service

    systemctl stop tomcat.service

    systemctl restart tomcat.service

    因为配置pid，在启动的时候会在tomcat的根目录下生产tomcat.pid文件，停止后删除

### 4.优化tomcat
还发现个问题就是tomcat启动巨慢

通过查看tomcat日志发现

    [root@xxx]#cat /usr/local/src/apache-tomcat-8.5.43/logs/catalina.out
	17-Jul-2019 12:56:11.644 WARNING [localhost-startStop-1] org.apache.catalina.util.SessionIdGeneratorBase.createSecureRandom Creation of SecureRandom instance for session ID generation using [SHA1PRNG] took [514,651] milliseconds.

通过查找资料，原因在于就是通过随机数生成秘钥的时候卡住了，导致Tomcat启动慢或失败。

    #注意这个数字 只有137
	[root@xxx]#cat  /proc/sys/kernel/random/entropy_avail
    137

解决方法有3种
**方法1：使用rngd 软件增大熵池 建议使用**

    grep  rdrand /proc/cpuinfo #需要cpu支持
    yum install rng-tools # 安装rngd服务（熵服务，增大熵池）
    systemctl start rngd  # 启动服务

**方法2：java环境下修改配置文件**

    vim $JAVA_HOME/jre/lib/security/java.security
    securerandom.source=file:/dev/random
    改为
    securerandom.source=file:/dev/urandom

**方法3：可以通过配置JRE使用非阻塞的Entropy Source：**

    vim $TOMCAT_HOME/bin/catalina.sh
    if [[ "$JAVA_OPTS" !=*-Djava.security.egd=* ]]; then
      JAVA_OPTS="$JAVA_OPTS -Djava.security.egd=file:/dev/urandom"
    fi
    ##这个系统属性egd表示熵收集守护进程(entropy gathering daemon)

我使用的方法一，之前需要几分钟，现在秒启动

    #注意这个数字 变大为2983
	[root@xxx]#cat  /proc/sys/kernel/random/entropy_avail
    2983
    17-Jul-2019 13:27:39.902 INFO [main] org.apache.catalina.startup.Catalina.start Server startup in 1478 ms

