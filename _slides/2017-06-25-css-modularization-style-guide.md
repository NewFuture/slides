---
title: CSS模块化&指南
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

~~

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
 <head>
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

对应单个元素有效，通常是JS动态修改的部分

尽量少用(考虑使用class代替)

**避免直接使用**


---

## 模块化

* 代码可复用，不重复
* 容易修改,方便维护
* 形成框架，增量开发

总之: 提升长期开发效率和运行效率


~~

先看如何使用CSS模块，发挥CSS作用


~~

### 模块化使用

 面向对象

* 封装
* 继承
* 多态

~~

#### 封装的栗子

封装是模块化的基础
```css
.module-a{.....}
.module-a h3{.....}
.module-a p{.....}

.module-b{.....} 
.module-b h3{.....} 
```

同样是h3在 module-a 和 module-b下样式不同

~~

#### 继承的栗子
继承是CSS模块化的关键

```css
.module {.....}
    .module-A {.....}
    .module-B {.....}
```
```html
<div calss=".module .module-A">A</div>
<div calss=".module .module-B">B</div>
```
优先级: 后面定义的属性可以覆盖前面的 (后来居上)

~~

#### 多态的栗子

同样的内容在不同的位置显示不同的样式
```css
h1{}

.dark {}
.dark h1{}

.light{}
.light h1{}
```
比如修改 一个class动态的修改主题

```html
<body class="dark">...</body>
<body class="light">...</body>
```

---

### 模块化原则

~~

### 什么样的CSS时候封装成模块

* 可复用的CSS代码块
* 一般与HTML无关，通常也与标签无关

如 `reset.css`, 图标库等



~~

###  只暴露一个类名

导航封装的好栗子
```css
.nav { ... }
.nav .list { ... }
.nav .list .item { ... }
```
坏的栗子
```css
/* 暴露了.nav和.list两个类名，污染了.list空间 */
.nav { ... }
.list { ... }
.list .item { ... }
```

~~
### 复用原则


* 尽可能的拆分成可独立复用的组件
* 使用组合方式使用多个组件

坏栗子
```css
.error-massage{
  display:block;
  padding:10px;
  border-top:1px solid #f00;
  border-bottom:1px solid #f00;
  background-color:#fee;
  color:#f00;
  font-weight:bold;
}
.success-massage{
  display:block;
  padding:10px;
  border-top:1px solid #f00;
  border-bottom:1px solid #f00;
  background-color:#efe;
  color:#0f0;
  font-weight:bold;
}
```

~~
变成好栗子
```css
/*独立布局*/
.box{
  display:block;
  padding:10px;
}
/*公共部分复用*/
.massage{
  border-top:1px solid #f00;
  border-bottom:1px solid #f00;
  font-weight:bold;
}
.massage-error{
  background-color:#fee;
  color:#f00;
}
.massage-success{
  background-color:#efe;
  color:#0f0;
}
```

### 