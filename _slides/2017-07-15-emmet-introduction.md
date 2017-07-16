---
title: Emmet简介
description: the Essential Toolkit for Web Developers
lang: zh
transition: slide
theme: black
category: FE
tags: ["CSS","MS","front-end","guide"]
redirect_from: 
  - "/Emmet简介/"
  - "/Emmet简介"
  - "/emmet-introduction"
---

## Emmet

![](https://emmet.io/-/4076541266/i/logo.svg){: .no-border .transparent}

>必备前端开发插件

前身`Zen Coding`

像jQuery一样写HTML和CSS, 减少 <kbd>复制</kbd><kbd>粘贴</kbd>

~~

### 目录

* [缩写](#/2)
* [层级](#/3)
* [重复](#/4)
* [属性](#/5)
* [BEM](#/6)

----------------------------------------------------------------
## HTML缩写
![](https://www.smashingmagazine.com/wp-content/uploads/2013/03/initializers.gif)

简单快速书写html和css

~~

### HTML缩写

`!`然后按下<kbd>Tab</kbd>

自动生成默认的HTML模板
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
`lang`和`charset`以及模板可自定义配置

~~

### 缩写规则

`tag:attr` 冒号分割

如生成邮件链接
```css
a:mail
```

```html
<a href="mailto:"></a>
```

~~
### MORE

完整的缩写手册和CSS缩写

参考速查表: <https://docs.emmet.io/cheat-sheet/>

----------------------------------------------------------------
## 层级关系

* `>`子元素 (child)
* `+`兄弟元素 (sibling)
* `^`返回上级 (climb-up)
* `()`组 (group)

~~
### `>` 子级

和CSS中一样,`>`表示子元素

```css
nav>ul>li>a
```
展开成HTML
```html
<nav>
    <ul>
        <li><a href=""></a></li>
    </ul>
</nav>
```

~~
### `+` 同级
和CSS中一样,`+`表示同级元素

```css
article>h1+section+section
```
展开成HTML
```html
<article>
    <h1></h1>
    <section></section>
    <section></section>
</article>
```

~~
### `^` 父级
```css
section>h2^section
```
转成HTML(^使第二个section跳至h2上级)
```html
<section>
    <h2></h2>
</section>
<section></section>
```

~~
### `(` `)`分组

```css
(section>h2)+section
```
转成HTML(括号类是一组)
```html
<section>
    <h2></h2>
</section>
<section></section>
```

----------------------------------------------------------------
## 复制

* `*` 乘法
* `$` 自增量
* `@` 自增范围

~~
### `*`乘法

```css
ul>li*3
```
快速复制3份
```html
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

~~
### `$` 自增

`list_$`自增
```css
ul>li#list_$*3
```
```html
<ul>
    <li id="list_1"></li>
    <li id="list_2"></li>
    <li id="list_3"></li>
</ul>
```
多个`$`可填充0
```css
ul>li#list_$$$$*2
```
```html
<ul>
    <li id="list_0001"></li>
    <li id="list_0002"></li>
</ul>
```

~~
### `@` 起始

```css
ul>li#list_$@-*3
```
```html
<ul>
    <li id="list_3"></li>
    <li id="list_2"></li>
    <li id="list_1"></li>
</ul>
```
`@-`表示倒序,`@n`从n计数
```css
ul>li#list_$@*2^ul>li#list_$@3*3
```
```html
<ul>
    <li id="list_1"></li>
    <li id="list_2"></li>
</ul>
<ul>
    <li id="list_3"></li>
    <li id="list_4"></li>
    <li id="list_5"></li>
</ul>
```

----------------------------------------------------------------
##  属性

* `#` id
* `.` class
* `[]` 自定义属性
* `{}` 内容

~~
### `#`id
和css中一样#表示ID
```css
div#header
```
```html
<div id="header"></div>
```
`div`是默认标签,此处可以省略div,结果一样
```css
#header
```
可结合上文自动选择缺省标签(`span`,`li`,`tr`和`td`)

如省去li效果一样
```css
ul>#list_$*3
```
```html
<ul>
    <li id="list_1"></li>
    <li id="list_2"></li>
    <li id="list_3"></li>
</ul>
```

~~
### `.` class
和css中一样`.`表示class,同样支持缺省自动补全
```css
button.btn
```
展开成HTML
```html
<button class="btn"></button>
```

多个class可以同时使用
```
.btn.is-disabled
```
```html
<div class="btn is-disabled"></div>
```

~~
### `[]`自定义属性
```css
link[href="style.css"]
```
展开成HTML
```html
<link rel="stylesheet" href="style.css" />
```

多个属性可以同时使用
```
img.logo[src="logo.svg"][title="LOGO"]
```
```html
<img src="logo.svg" alt="" class="logo" title="LOGO" />
```

~~
### `{}`内容

```css
.Btn{发送}
```
展开成HTML
```html
<div class="Btn">发送</div>
```
结合变量的栗子
```css
ul>li{item$}*3
```
```html
<ul>
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
</ul>
```

----------------------------------------------------------------

## Emmet + BEM规范

![](https://pawelgrzybek.com/photos/2015-10-17-3.gif)

>大部分复制粘贴的内容都是可以省掉的!

~~

### VScode 配置

```json
{
    "emmet.preferences": {
        "bem.elementSeparator": "-",
        "bem.modifierSeparator": "_",
        "bem.shortElementPrefix": "-"
    },
    "emmet.syntaxProfiles": {
        "html": {
            "filters": "html, bem"
        }
    },
    "emmet.variables": {
        "lang": "zh"
    } 
}
```

~~
### DEMO

5行速成写页面

```css
!
link[href="http://style.chinacloudsites.cn/preview/dist/css/style.min.css"]
header.Navbar._top+main.CardList+footer.fixed-bottom
(.Nav>a.-link)*2
(.Card>.-head.UserBar>img.-avatar+.-name{NewFuture}+.-info{intern}+.-follow{+关注}^.-content{hello world!}+.-bottom>.-time+.-up+.-comment)*5
.Input>input.-text+.Icon>button.-pen
```
