---
title: CSS模块化&语言
description: CSS Modularization and Style Guide
lang: zh
transition: slide
theme: black
#width: 1280
#height: 720
---

## 目录

* CSS 使用情景
* CSS 模块化介绍
* CSS 模块化原则
* CSS 预处理语言

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



----------------------------------------------------------------

## 模块化介绍

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

----------------------------------------------------------------

### 模块化原则

* 什么内容需要模块化封装?
* 如何封装?
* 如何实现样式？

~~

### 什么样的CSS适合封装成模块

* 可复用的CSS代码块
* 一般与HTML无关，通常也与标签无关

如 `reset.css`, 图标库等


-----------

### 基本封装原则

* 只暴露一个类名
* 复用原则


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

> 尽可能的拆成可**独立复用**组件

```css
/*坏栗子*/
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

> 使用组合方式使用多个组件
 
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


-----
### 样式实现原则
同样的效果可以有多种实现方案

* 一个规则(DRY：Don't Repeat Yourself)
* 不影响周围布局


~~

### 一个规则(DRY)

```css
selector{
    border-top:1px solid #eee;
    border-left:1px solid #eee;
    border-bottom:1px solid #eee;
}
```
```css
selector{
    border:1px solid #eee;
    border-right:none;
}
```

--------------------

## CSS命名原则和规范

* **基于功能**:  `.btn, .form`
* 基于视觉: 比较广泛的基础属性 `.nowrap, .flex`
* 基于内容: 限局部样式使用 `.user-info, .avatar`

~~

### 命名规范

* 避免无意义
* 避免冲突 (顶层命名避免过于通用)
* 避免使用ID,(同时尽量少使用标签)
* 尽量使用小写字母



----------------------------------------------------------------

## CSS 预处理语言

CSS 不是**编程**语言

无法实现变量,条件函数等控制功能

~~

* 书写方式
* 变量
* 计算和条件控制
* 代码块重用
* 宏和函数

--------------------
### SASS & SCSS

[sass-lang.com](http://sass-lang.com/)

Ruby 实现的CSS预处理器

SASS 依靠缩进控制
```sass
.box
  display: block
```

SCSS 和 SASS 语法一致，写法靠近css

```scss
.box {
  display: block;
}
```
SCSS一般使用SASS的处理器进行编译

~~
#### SCSS (SASS)基本语法

```scss
p {
  color: blue;
  border: { color: red;}
  &:hover { color: green;}
  span { color: black;}
}
```
编译后的css
```css
p {
  color: blue;
  border-color: red;
}
p:hover {
  color: green;
}
p span {
  color: black;
}
```

~~
##### 变量
```scss
$mainColor: #963; //以$开头
body {
  color: $mainColor
}
```
也可在字符名中使用变量
```scss
$side : left;
.rounded {
  border-#{$side}-radius: 5px; //字符使用#{}
}
```

**SCSS变量无作用域**

~~
#####  SCSS(SASS)计算与条件控制

```scss
body {
  margin: (14px/2);
  top: 50px + 100px;
  right: $var * 10%;
}
```

```scss
.a{
    @if lightness($color) > 30% {
    background-color: #000;
  } @else {
    background-color: #fff;
  }
}
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
```

~~

####  SCSS(SASS) 模块重用 

`@import` 导入模块
```scss
@import "reset.css";
@import "header";
@import "var.scss";
```

`@extend` 继承
```scss
.class1 {
  border: 1px;
}
.class2 {
  @extend .class1;
  font-size:2em;
}
```

~~

##### SCSS(SASS) Mixin(宏)与函数
```scss
@mixin border-radius($values: 0) {/* @mixin*/
  -webkit-border-radius: $values;
     -moz-border-radius: $values;
          border-radius: $values;
}
div {
  @include border-radius(10px);/* using mixin */
}
```
```scss
@function double($n) { /*function*/
    @return $n * 2;
}
.sidebar { width: double(5px);}
```

------

### LESS

LESS extends CSS: [lesscss.org](http://lesscss.org/)

~~
#### LESS 基本语法
LESS 和 SCSS 一样源自SASS,写法上更接近CSS
```less
.header {
    color: #000;
    h1 {
        font-size: 3rem;
    }
    p {
        font-size: .8rem;
        &:hover { border-width: .1rem}
      }
    }
}
```
```css
.header { color: #000;}
.header h1 { font-size: 3rem; }
.header p { font-size: .8rem; }
.header p:hover { border-width: .1rem; }
```

~~
#### LESS  变量

```less
@mainColor: #963; //以@开头
body {
  color: @mainColor;
}
```
```less
@property: color;
.widget {
  @{property}: #0ee; // 字符变量@{}
}
```
变量名可以是变量
```less
@jack: "I am jack.";
@var: 'jack';
.msg{
  content: @@var;  //编译结果: content: "I am jack.";
}
```

LESS的变量是 **惰性(Lazy Loading)** 计算

~~
#### LESS 计算和条件控制

```less
@the-border: 1px;
#header {
  border-left: @the-border;
  border-right: @the-border * 2;
}
```

less条件判断 非常有限
```less
.mixin (@color) when (lightness(@color) >= 50%) {
  background-color: black;
}
//循环使用条件判断迭代实现
.generate-columns(4);
.generate-columns(@n, @i: 1) when (@i =< @n) {
  .column-@{i} {
    width: (@i * 100% / @n);
  }
  .generate-columns(@n, (@i + 1));
}
```

~~
#### LESS Mixins 和 函数
```less
.border-radius(@values: 1px) {
  -webkit-border-radius: @values;
     -moz-border-radius: @values;
          border-radius: @values;
} 
div {
  .border-radius(10px);
}
.m {
    .border-radius;//默认参数
}
```
不能单独定义函数 (可使用Mixins模拟)
```less
.average(@x, @y) {
  @average: ((@x + @y) / 2);
}
div {
  .average(16px, 50px); // "call" the mixin
  padding: @average;    // use its "return" value
}
```

~~
### stylus

EXPRESSIVE, DYNAMIC, ROBUST CSS

[stylus-lang.com](http://stylus-lang.com/)

JS实现的最像脚本语言的CSS预处理语言

~~
#### Stylus 书写方式
省略一切可以省略的(`{}`,`;`,`:`)

```stylus
body
  font 12px, sans-serif

a.button
  border-radius 5px
  &:hover
    color #000
```

```css
body { font: 12px, sans-serif; }
a .button { border-radius:5px; }
a .button:hover { color: #000; }
```
当然，这样并太适合阅读

~~

#### Stylus 变量

非常灵活

```stylus
font-size = 12px /*比JS的赋值更自由*/
body
  font font-size Arial, sans-serif
```
`@`访问内部属性

```stylus
#logo
  width: 150px
  height: 80px
  margin-left: -(@width / 2)
  margin-top: -(@height / 2)
```

`Sprintf`的替换方式的字符串模板
```stylus
'-webkit-gradient(%s, %s, %s)' % (linear (0 0) (0 100%))
```

#### Stylus 运算 和 条件控制
算术运算和逻辑运算几乎都支持，也支持三元操作符
```stylus
.box
 num = 5
 border: num ? unit(num, 'px') : 20px
```
条件 `if / else if / else ; unless`
```stylus
body
  for num in 1 2 3
    foo num
```
几乎实现了脚本语言(ruby python)的运算和条件分支的功能

~~

#### 代码块复用
`SASS`和`LESS`支持的复用方式Stylus几乎都支持

```stylus
.message
  border: 1px solid #eee
.warning
  @extends .message
  border-color: yellow
.error
  @extends .message
  border-color: red
```
```stylus
foo = @block {
  width: 20px
  height: 20px
}
.icon
  {foo}
```

~~

#### Stylus Mixin 和 函数
* Stylus 有最为复杂和灵活的函数支持
* Mixin和函数已经合并，唯一的区别是有无返回值
* 支持函数嵌套，匿名函数，函数指针等复杂用法
* 可以使用变参函数，也可像python一样指定参数值

```stylus
border-radius(values)
  -webkit-border-radius: values
  -moz-border-radius: values
  border-radius: values
div 
  border-radius(10px)
```
```stylus
first-even(nums)
  return n if n % 2 == 0 for n in nums
body
  z-index first-even(1 3 5 5 6 3 2)
```

