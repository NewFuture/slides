---
title: CSS实践指南
description: CSS style guide
lang: zh
transition: slide
theme: black
#width: 1280
#height: 720
---



## 内容提要

* 样式实现基本原则
* BEM 规范
* SUIT 规范
* SCSS + Emmet  

----

## 样式实现原则
同样的效果可以有多种实现方案

* 一个规则(DRY：Don't Repeat Yourself)
* 不影响周围布局
* 嵌套层次

~~

### DRY
1. 合并
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
2. 重复内容使用函数和变量


------------

### SCSS + Emmet

~~

### SCSS

~~
### Emmet

![BEM with Emmet](https://pawelgrzybek.com/photos/2015-10-17-3.gif)