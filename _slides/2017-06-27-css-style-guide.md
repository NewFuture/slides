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
1. 合并相同和相近
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

### 不影响周围布局

尽量避免在基础模块中使用这些属性
* float: left/right ; (脱离文档流)
* position: **absolute**  / **fixed** ;(脱离文档流)
* 最外层使用 `margin`(margin穿透等不稳定)

~~
### 嵌套层数

两层到三层为佳

* 单层容易冲突
* 多层嵌套太深，增加解析成本

-------------------------------
## 开发规范

* 方便阅读和维护
* 避免冲突和污染

适合对象: 大型项目 团队开发

-------------------------------
## BEM 规范

使用最多的CSS规范

解决核心的问题逻辑: **命名问题**

顺带确定逻辑划分

Notes:

源自俄罗斯的互联网公司团队

~~ 

### 划分和命名原则

单词用小写短横线`-`连接

* B: **B**lcok 块, 所有名称从block开始
* E: **E**lement 元素, 默认用`__`连接
* M: **M**odifier 修改 (样式标志或者状态),默认用 `--`连接

```css
.block__element--modifier
.block__element
.block--modifier
```

Notes:

BEM 将 HTML 划分位 `块`(包含 `元素`和 `修改` )

~~

![BEM 划分逻辑](http://getbem.com/assets/github_captions.jpg)

~~

### 一个BEM的栗子

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input class="form__submit form__submit--disabled" type="submit" />
</form>
```

```css
.form { } /*block*/
.form--theme-xmas { }  /*modifier style*/
.form--simple { } /*modifier flag*/
.form__input { } /*element*/
.form__submit { } /*element*/
.form__submit--disabled { } /*element status*/
```

-------------------------------
## SUIT 规范

针对BEM的改进方案


~~

### SUIT 命名原则

```css
.ComponentName
.ComponentName--modifierName
.ComponentName-descendentName
.ComponentName .is-stateOfComponent
```

~~

### 一个栗子(筛选自twitter)
```html
<div class="RichEditor RichEditor--emojiPicker ">
    <div class="RichEditor-bottomItems">
        <div class="EmojiPicker dropdown is-loading">
            <button type="button" class="EmojiPicker-trigger u-textUserColorHover">
                <span class="Icon Icon--smiley"></span>
            </button>
            <div class="EmojiPicker-dropdownMenu">
                <div class="EmojiPicker-content Caret Caret--stroked"></div>
            </div>
        </div>
    </div>
</div>
```

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



-------
## References

* BEM： <http://getbem.com/naming/>
* SUIT CSS: <https://github.com/suitcss/suit/blob/master/doc/README.md>