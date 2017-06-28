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
* 嵌套层次不易过多

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

一层到三层为佳

* 单层要注意冲突
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
* M: **M**odifier 修改(样式标志或状态),默认用 `--`连接

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

特点是组件化，名字**更短**更易读

~~

### SUIT 命名原则

* 驼峰命名 
* 组件为基本单元(相当于BEM的block)
* 后代名(相当于BEM的Element)使用`-`连接
* modifier 表示主题样式
* 独立出 `is-state` 表示状态

```css
.ComponentName
.ComponentName-descendentName
.ComponentName--modifierName
.ComponentName .is-stateOfComponent
```

~~
### modifier 和 state

```css
/* Core button */
.Button { /* … */ }
/* Default button style */
.Button--default { /* … */ }
```

```css
.Tweet { /* … */ }
.Tweet.is-expanded { /* … */ }
```

~~

### 蒸栗子(筛选自twitter)
```html
<div class="RichEditor RichEditor--emojiPicker ">
  <div class="RichEditor-bottomItems">
    <div class="EmojiPicker dropdown is-loading">
      <button class="EmojiPicker-trigger u-textUserColorHover">
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

重复的内容使用工具

~~

### SCSS
`$`
```
.nav {
    &__list {
      font-size:1em;
      &__item {
        border:1em;
      }    
    }
  &__link {
    &--active { 
      color:green;
    }
  }
}
```

```css
.nav__list {
  font-size: 1em;
}
.nav__list__item {
  border: 1em;
}
.nav__link--active {
  color: green;
}
```
~~
### Emmet

![BEM with Emmet](https://pawelgrzybek.com/photos/2015-10-17-3.gif)

-------------------------------
## 分析一个CSS栗子

如何实现 这个导航箭头

![](/assets/img/navigator.jpg)

(同样的效果可以有多种实现方案)

~~
### 实现方案

1. 嵌套 img 标签
2. css 背景图片 
3. css 字体图标 
4. css 动画

~~
## 图片方案
```html
<img class="arrow" src="arrow.jpg"></img>
```

```css
.arrow{
    background:url(arrow.jpg);;
    background-repeat:no-repeat;
}
```

~~
## CSS 伪元素方案

```css
.arrow::after{
    font-family: "myicon-font";
    content: "\0030";
}
```

```css
.arrow::after {
    content: " ";
    border-width: 3px 3px 0 0;
    border-color: #888888;
    border-style: solid;
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
}
```

-------
## References

* BEM： <http://getbem.com/naming/>
* SUIT CSS: <https://suitcss.github.io/>

~~
## Thanks