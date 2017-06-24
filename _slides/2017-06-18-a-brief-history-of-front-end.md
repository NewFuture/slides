---
title: 前端简史
description: A Brief History of the Front End
lang: zh
transition: slide
theme: black
width: 1280
height: 720
---

## 目录

1. 第一阶段：静态页面 [起步]
2. 第二阶段：动态页面 [发展上]
3. 第三阶段：前后通信 [发展下]
4. 第四阶段：混乱和兼容 [统一]
5. 第五阶段：前端渲染 [爆发]
6. 下一阶段：原生交互 [设备]

--------------------------------

## 第一阶段：静态页面 

HTML和网站最初是提供 **链接** 服务: 文档+索引 

HTTP协议随之发布(只能`GET`,`文本数据`)

整个网络核心开始由 `FTP` 转向 `HTTP`

~~

### HTML所解决问题

HTML (Hyper Text Mark-up Language)

* 统一的文档格式
* 超链接

~~

最初的网站是纯静态文档

无前后端之分,和FTP共享的文件一样

```html
<html>
<body>
    hello <a href="http://info.cern.ch">world</a> !
</body>
</html>
```

此URL记录了第一个网站


Notes:

创建者 Tim Berners-Lee 的遗憾就是http协议后面的那两道斜杠


--------------------------------

## 第二阶段：网页动态化

随着图形化浏览器的出现和Web的流行，

对前后端动态化需求越来高

* 1994年PHP诞生, 嵌套的后端html模板
* 1994年JavaScript诞生，页面可运行脚本验证

~~

动态渲染,同一个页面可以呈现不同效果和内容

```php
<html>
<body>
  <CENTER>
    <font color="<?php echo 'red'?>"><?php echo 'hello'?></font>
  </CENTER>
</body>
</html>
```

* 后端 ASP, JSP, Ruby,Python 等
* 前端除JavaScript 还有IE上的`JScript`和`VBScript`等


~~

解决问题: 
 - 根据用户请求动态输出页面
 - **页面重用** 和 模板化
 - 页面可交互


~~

### CSS 诞生

1993讨论 - 1996 CSS诞生 - 2000浏览器完整支持

* CSS1.0 基本样式
* CSS2.0 丰富选择器
* CSS3.0 特效和响应式

~~

CSS 解决的问题

* 内容与样式**分离**
* 样式设计结构化和统一管理

~~

1993年开始讨论设计样式(还不是`层叠样式表`)的方案

[PWP一种类似SASS的设计方案](http://1997.webhistory.org/www.lists/www-talk.1993q4/0264.html)
```
(BODY fontSize=normal
	  BGColor=white
	  FGColor=black
  (H1   fontSize=largest
	    BGColor=red
	    FGColor=white)
)
```


--------------------------------

## 第三阶段：前后端数据通信

前端可以发送HTTP请求直接与后端交互，Web2.0 的开端

* XMLHttpRequest (1999 IE5)
* ~~Flash~~ (1996-2015)


~~

### AJAX

Asynchronous JavaScript and XML

解决问题: 前后端数据交互,无需**刷新**页面

* 2005 提出AJAX概率,已经开始使用和流行
* 2006 XMLHttpRequest 纳入W3C标准

~~

### WebSocket

解决问题: 实现后端和前端**双向**通信


* 2011 WebSocket 协议纳入RFC标准
* 2015 HTML5 定稿 (确定WebSocket API)


--------------------------------

## 第四阶段：混乱和兼容

随着各大厂商浏览器发展，和标准发布的滞后，一个新的问题

* 浏览器兼容问题
* 原生JS接口操作繁琐，不同版本差异大

~~

[CanIuse.com](https://caniuse.com)可查询浏览器兼容

![](/assets/img/caniuse.png)

~~

经历过的网站提示

* 请用IE打开
* 请使用IE9及以上版本访问**本站**
* 不兼容IE浏览器

~~

### Jquery

2006年发布，目前使用量最高的JS库

![](https://w3techs.com/diagram/history_overview/javascript_library/all/m)

~~

### `$`

重新定义JS操作DOM的接口,兼容浏览器差异

前端开始进入第一波造轮子时代(插件)


~~

### Bootstrap

GitHub上star最多的项目(超第二名两倍)

响应式前端UI框架,兼容各厂商和平台的浏览器

--------------------------------

## 第五阶段：前端渲染 (现阶段)

2009年NodeJS发布带来**npm**

前端模块化和工程化

随前端路由和页面渲染开始流行

~~

### 前端框架

* Angular (2009, 2014, Google)
* ~~Backbone.js (2010, Ashkenas)~~
* React (2011, 2013, Facebook)
* Vue.js (2014, 尤雨溪)

~~

前端与后端彻底解耦

服务器端减压和节流

--------------------------------

## 下一阶段——原生交互

Web前端开始获取更多的**设备能力**

* Hybird APP
* Progressive Web Apps
* WeiXin App (HTML5 和 小程序)

~~

新的WEB标准和草稿:
  
* Offline
* 后台服务
* 多进程
* 设备接口: 位置,语音,摄像头,蓝牙等

Web转向APP化

--------------------------------

## 前端发展总结

| 时间  |  背景   | 代表技术 | 前端内容  | 网页生成 |
|------|:--------|:------:|:--------:|--------:|
| ~1994| HTML格式|   HTM   | HTML文档 | 无
| ~1996|浏览器CGI |  PHP等  | 后端模板 | 后端渲染
| ~2006| HTML4  | CSS,AJAX| 模板,样式| 后端为主
| ~2010| ECMA年更| jQurey等| JS和模板| 后端前端
| 至今 | npm,HTML5|前端框架 | Web APP| 前端渲染
