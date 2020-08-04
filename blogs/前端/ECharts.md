---
title: ECharts
date: 2020-07-08
tags:
 - echarts
categories:
 -  前端
---















## ECharts踩坑

### 点击图例数据叠加多次触发，导致路由跳转报错
在图表初始化之后，设置
```
myCharts.off('click') // 重要！！！

myCharts.on('click', (e) => {
  alert(111) // 如果不加off事件，就会叠加触发
})
```
























