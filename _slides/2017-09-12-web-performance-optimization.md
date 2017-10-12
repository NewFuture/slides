---
title: Web性能优化
description: Web Performance Optimization
lang: zh
transition: slide
theme: black
width: 1280
height: 720
redirect_from:
  - "/前Web性能优化端简史/"
  - "/Web性能优化"  
  - "/web-performance-optimization"
---


## 目录

* web 处理基本流程
* 后端
* 前端
* 实践指导

--------

## time line
![](/assets/img/web-performance-optimization/web_timeline.png)


~~

## 基本流程

`后端输出` ==> `加载前端资源` ==> `渲染交互`

--------------------------
## 后端渲染时间消耗

| 操作           | 基本时间消耗       | 备注说明             |
| -------------- | :----------------- | :------------------: |
| 解析和反向代理 | ms级               | 复杂匹配修改可能变慢 |
| URL路由        | ms级               | 复杂的hook可能变慢   |
| 远程API        | 内网0.5s级/公网s级 | 一般不超过60s        |
| 数据库操作     | 100ms~1s           | 写比读慢             |
| 文件操作       | 10ms级             | 写比读慢             |
| 模板解析渲染   | 10ms               | 嵌套或者ASP控件会慢  |

~~
### 优化原则

1. 尽量加快首页输出时间
2. 优先使用内存缓存
3. 尽量减少远程调用
  * 缓存
  * 避免再循环中调用
4. 数据库操作避免大量写入
  * 减少和合并写操作
  * 避免循环中操作数据库


--------------------------
## 前端消耗

* 文件下载 (后端和网络影响)
* 解析执行 
* 页面渲染
* 事件捕获

~~
### 资源下载

| 操作           | 基本时间消耗 | 备注说明           |
| -------------- | :----------- | :----------------: |
| 小静态资源下载 | s级          | 与网速和服务器相关 |
| 大静态资源下载 | 1s~10级      | 与网络状况相关     |
| 缓存           | ms级         |                    |

~~

### 解析执行

| 操作       | 基本时间消耗 | 备注说明         |
| ---------- | :----------- | :--------------: |
| HTML解析   | 10ms级       | 复杂html可能更长 |
| JS框架执行 | 100ms级      |                  |
| CSS解析    | 100ms级      | 可能会二次加载   |

~~
### 优化原则

* 精简首次渲染
* 压缩资源
* 减少合并请求,异步加载非首要内容
* 简化结构和缩小体积


----

## 提高WEB性能指南

* 后端开发
* 前端开发
* 服务器和CDN

三个方面: 前两个coding和设计时注意,后一个通过升级配置实现

~~

### 优化后端编码

1. 尽量使用 **缓存** (内存和redis) 和允许必要的客户端缓存
2. **分离静态资**源到CDN
3. 减少和优化远程API调用,首页尽量避免调用
4. 减少和优化数据库操作,首页避免数据库写入和多次操作
5. 尽量**减少重定向**,避免多次重定向
6. 尽量减少cookie的使用

~~

### 优化前端

1. 文件 **压缩** 和 **打包** (<200K最佳,不要超过500K)
2. JS尽量 **减少库依赖** 和 分离css
3. CSS 避免使用 `import` 和 `计算表达式`
4. css在head,js在`</body>`前引入,考虑异步或延迟
5. HTML和CSS 尽量**减少DOM嵌套层次**,规范语法
6. 避免使用 `iframe` 和 `cookie`

~~

### 优化服务器和CDN配置

1. 开启`GZip` 压缩(文本效率高)
2. 最优化设置 **缓存头** `Cache-Control`
3. CDN 开启 `HTTP2` (多图效率高)
4. 设置 `ETag` 和 `Expires` 头
5. CDN 使用单独域名,无cookie 
6. 配置优化HTTPS (算法选择，简化握手)

-----
## 性能分析工具

* 网页性能分析[PageSpeed](https://developers.google.com/speed/pagespeed/)
* 网站分析[YSlow](http://yslow.org/)
* Webpack JS依赖和体积分析[webpack-chart](http://alexkuz.github.io/webpack-chart/)或[webpack analyse](http://webpack.github.io/analyse/)
* Chrome 调试工具: [Performance](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/) 和 Audits
