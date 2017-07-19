---
title: 样式库和规范
description: The CSS Library and Guidelines for ShenNong Team
lang: zh
transition: slide
theme: black
category: FE
tags: ["CSS","MS","front-end","guide"]
redirect_from: 
  - "/样式库和规范/"
  - "/样式库和规范"
  - "/the-css-library-and-guideliness"
---

## 目录

* 基本原则
* Utility (工具类)
* Component (组件类)
* Layout (布局类)
* Usage (使用)


----------------------------------------------------------------
## 基本思想

![](/assets/img/2017-07-09/page.png){:.no-border}

**数据模型** -- **样式模块** -- **视图结构**

Notes:

三者间形成统一认识和一致信息传递

PPT-->网页

~~
### 参考原则 References


* 命名规范参考 `BEM` 和 `SUITCSS`
* 代码管理和组件设计参考 `Bootstrap`


<small> 站在巨人的肩膀上 </small>


----------------------------------------------------------------
## Utility 工具类

单一的基础元素或者结构

可(强制)实现特定的样式

如文字排版,特殊样式

~~
### 工具命名 

#### Utilities naming conventions

```css
utilityName[-propertyName]
```

小写驼峰工具分类-小写驼峰工具属性

~~
### examples:

文字(txt)控制

```html
<!-- 高亮突出 -->
<h1 class="txt-primary"></h1>

<!--右对齐  -->
<div class="txt-right"></div>
```


----------------------------------------------------------------
## Component 组件类


一个组件包含

* 根组件(块)
* 子组件(子元素)
* 组件样式(修或者主题)
* 组件状态

Notes:

一个页面由多个组件和组合或嵌套组成

~~
### 组件命名 

#### Components naming conventions

* ComponentName
* ComponentName-descendentName
* ComponentName_modifierName
* ComponentName.is-stateOfComponent
* <small>ComponentName-descendentName_modifierName</small>

~~
### 命名说明

* class都以组件名开头
* 组件名称大写驼峰，其他小写驼峰
* 短线`-`连接组件与子元素(或者子模块) 最多一层
* 下划线`_`连接修饰(特殊样式)
* `is-*`标明特殊状态(可动态切换)

~~
#### ComponentName-descendentName
{:.no-transform}

例如导航(Nav)模块
```html
<nav class="Nav">
    <a class="Nav-link"></a>
    <a class="Nav-link"></a>
</nav>
```

~~
#### ComponentName_modifierName
{:.no-transform}

如导航条(NavBar)
```html
<!-- 普通导航条 -->
<div class="NavBar"></div>

<!-- 固定顶部导航条  -->
<div class="NavBar NavBar_top"></div>
```

~~
#### ComponentName.is-stateOfComponent
{:.no-transform}

如按钮(Btn)状态切换
```html
<!-- 普通的按钮  -->
<botton class="Btn">正常</botton>

<!-- 禁用的按钮  -->
<botton class="Btn is-disabled">禁用</botton>
```


----------------------------------------------------------------
## Layout 布局

![](http://matthewjamestaylor.com/demos/ipad-css-layout/ipad-layout-dimensions.gif)

~~
### 响应式
![](https://www.smashingmagazine.com/wp-content/uploads/2017/06/mrh_CSS_grid_fig_09-large-opt.png)

~~
### current

目前涉及的布局方案
![](/assets/img/2017-07-09/layout-phone.jpg)



----------------------------------------------------------------
## Usage 使用

直接在项目中link一行css文件即可

```html
<!--开发阶段使用样式库(实时更新)-->
<link href="https://style.chinacloudsites.cn/preview/dist/css/style.css?" rel="stylesheet"/>
```

```html
<!-- 上线发布后切换为优化版 -->
<link href="//CDN-NAME/{project-name}.min.css" rel="stylesheet"/>
```

(样式库提交后,自动编译更新到预览站点)

~~
### 测试预览和组件文档

<https://style.chinacloudsites.cn/preview/tests/>

* 组件是否可用?
* 效果是否正常?
* 如何命名和使用?

~~
### TODO

* 统一图标库(IconFont)
* 确定布局(layout)标准
* 自动构建和管理工具
* 版本和Release管理
