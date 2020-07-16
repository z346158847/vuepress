---
title: Js常用方法
date: 2020-07-01
tags:
 - js
categories:
 -  前端
---

一.字符串与数组之间的相互转换
1、字符串转换为数组

::: tip
str.split(','); // 以逗号,为拆分的字符串
::: 
2、数组转换为字符串

::: tip
arr.join(','); // 把数组项拼接成字符串，以逗号,分隔
::: 
二.Json字符串转换为json对象
1、使用eval

::: tip
result = eval('(' + jsonstr + ')'); // jsonstr是json字符串
::: 
2、使用JSON.parse()

::: tip
result = JSON.parse(jsonstr); // jsonstr是json字符串
::: 
eval和JSON.parse的区别：

eval 是javascript支持的方式，不需要严格的json格式的数据也可以转化

JSON.parse 是浏览器支持的转换方式，必须要标准的json格式才可以转换

三.遍历JSon数组并动态添加属性
```
for(let i =0;i<objNode.length;i++){
    objNode[i]['label'] = labelShow
}
```

四.格式化时间

```javascript
function dateFormat (fmt, date){
        let ret;
        const opt = {
          "y+": date.getFullYear().toString(),        // 年
          "M+": (date.getMonth() + 1).toString(),     // 月
          "d+": date.getDate().toString(),            // 日
          "H+": date.getHours().toString(),           // 时
          "m+": date.getMinutes().toString(),         // 分
          "s+": date.getSeconds().toString()          // 秒
          // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
          ret = new RegExp("(" + k + ")").exec(fmt);
          if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
          }
        }
        return fmt;
      }
```
