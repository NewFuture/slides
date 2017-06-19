---
title: 前端简史
description: A Brief History of the Front End
lang: zh
transition: slide
theme: black
---

## 目录

1. 第一阶段：静态页面 [起步]
2. 第二阶段：动态页面 [发展]
3. 第三阶段：前后端数据交互 (XMLHttpRequest)
4. 第四阶段：统一标准化 (jQuery等前端插件)
5. 第五阶段：前端渲染 (Angular Vue等框架)
6. 下一阶段：输入和交互 (设备接口和Hybird APP)

---

## 第一阶段——纯静态起源 

HTML (Hyper Text Mark-up Language)

最初提供 **链接** 服务，核心: 文档+索引 

伴随 www 诞生，网络核心开始由 `FTP` 转向 `HTTP`



解决主要问题: 
{: .fragment}

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


---

## 第二阶段——动态化

随着图形化浏览器的出现和Web的流行，

对于**页面重用**的需求越来越高

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
* 内容与样式**分离**
* 样式设计结构化和统一管理