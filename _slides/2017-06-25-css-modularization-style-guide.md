---
title: CSS模块化和开发规范
description: CSS Modularization and Style Guide
lang: zh
transition: slide
theme: black
#width: 1280
#height: 720
---

## 目录

* CSS 模块化
* CSS 预处理语言
* 参考规范

---
## 基本的CSS使用方法

### 链接模式
作用域: 所有引用的页面有效
```html
<head>
 <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
```

通常是独立全局CSS部分，也是模块化的主要部分


~~
### 嵌入模式
作用域: 整页面有效

```html
 <html>
 <head>>
     <style type="text/css">
         .red {color: red;}
     </style>
 </head>
 <body>
     <p class="red">我是p标签</p>
 </body>
 </html>
```
对应前端模板或者模块内的局部CSS


~~
### 内联模式
作用域: 单个元素有效
```html
 <p style="font-size: 14px; color: red;">这里是红色14号字体</p>
```

对应单个元素有效，通常是JS动态修改的部分，尽量少用

**避免直接使用**


---

### 模块化


