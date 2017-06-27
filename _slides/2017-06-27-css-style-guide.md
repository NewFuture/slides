---
title: CSS实践指南
description: CSS Style Guide for Team Work
lang: zh
transition: slide
theme: black
---

## 内容提要

* 样式实现基本原则
* BEM 规范
* SUIT 规范
* SCSS + Emmet  
* 一个栗子

----

## 样式实现原则

* DRY：Don't Repeat Yourself
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
2. 重复内容使用函数和变量(预处理语言)

~~

### 

~~
### 嵌套层数

两层到三层为佳

* 单层容易冲突
* 多层嵌套太深，增加解析成本

-------------------------------
## BEM 规范


-------------------------------
## SUIT 规范



-------------------------------
### SCSS + Emmet

~~

### SCSS

~~
### Emmet

![BEM with Emmet](https://pawelgrzybek.com/photos/2015-10-17-3.gif)

-------------------------------
## 分析一个栗子

如何实现 这个导航箭头

(同样的效果可以有多种实现方案)
