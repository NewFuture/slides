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
3. 第三阶段：前后端交互 [发展下]
4. 第四阶段：混乱和统一 [统一]
5. 第五阶段：前端渲染 [爆发]
6. 下一阶段：原生交互 [设备]

--------------------------------

## 第一阶段——纯静态起源 

HTML (Hyper Text Mark-up Language)

最初提供 **链接** 服务，核心: 文档+索引 

伴随 www 诞生，网络核心开始由 `FTP` 转向 `HTTP`



解决问题: 
{: .fragment .left}

* 统一的文档格式
* 超链接
{: .fragment}

~~

最初的HTML是纯静态文档


和FTP上共享的文件一样

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

## 第二阶段——动态化

随着图形化浏览器的出现和Web的流行，

解决问题: **页面重用**,模板化

* 1994年PHP诞生, 嵌套的后端html模板开始流行
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
* 前端除JavaScript 还有微软 `VBScript` 和 `JScript`等


~~

## CSS 诞生

解决问题: 
{: .left}
* 内容与样式**分离**
* 样式设计结构化和统一管理

1993年开始讨论设计定义样式的方案
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


~~

1991网站出现 - 1996 CSS诞生 - 2000浏览器完整支持


* css1.0 基本样式
* ccs2.0 丰富选择器
* css3.0 特效和响应式

--------------------------------

## 第三阶段——前后端数据交互

Web2.0 的开端

* XMLHttpRequest (1999 IE5)
* ~~Flash~~ (1996-2015)


~~

## AJAX

Asynchronous JavaScript and XML

解决问题: 前后端数据交互,无需**刷新**页面

* 2005 提出AJAX概率,已经开始使用和流行
* 2006 XMLHttpRequest 纳入W3C标准

~~

## WebSocket
解决问题: 实现后端和前端**双向**通信


* 2011 WebSocket 协议纳入RFC标准
* 2015 HTML5 定稿 (确定WebSocket API)



--------------------------------

## 第四阶段——混乱和统一

* 浏览器兼容问题
* 接口操作繁琐

推荐网站：[CanIuse.com](https://caniuse.com)


~~

经历过的网站提示

* 请用IE打开
* 请使用IE9及以上版本访问**本站**
* 不兼容IE浏览器
{: .fragment}

~~

## Jquery

使用量最高的JS库

重新定义JS操作DOM的接口,兼容浏览器差异

~~

![](https://w3techs.com/diagram/history_overview/javascript_library/all/m)

2006年发布


前端开始进入第一波造轮子时代(插件)

~~

## Bootstrap

GitHub上star最多的项目(超第二名两倍)

响应式前端UI框架,兼容各厂商和平台的浏览器


--------------------------------

## 第五阶段：前端渲染 [爆发]

2009年NodeJS发布带来**npm**,前端走向模块化
随前端路由和渲染数据的成熟,前端框架开始出现流行

~~

## 前端框架

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
* 新的WEB标准和草稿:
  * 设备接口: 位置,语音,摄像头,蓝牙等
  * Offline
  * 后台服务
  * 多进程


--------------------------------

## 前端发展总结


|  阶段 | 起步   | 动态化 |   发展  |   统一   |  爆发    |
|------|-------|-------|---------|---------|---------|
| 时间  | ~1994 | ~1996 |  ~2006 | ~2010    |  2017 |
|原因| HTML格式| CGI,浏览器 | HTML4,CSS2标准 | ECMA趋于年更| npm,HTML5 |
|代表技术| HTML | PHP等 | Ajax,CSS | jQuery,Bootsrap | 前端框架 |
|重要内容| 静态HTML | 后端模板 | 数据交互 | 兼容美观的页面 | Web APP|
|数据渲染 | 无 | 仅后端 | 后端为主 | 前端后端 | 前端为主 |

