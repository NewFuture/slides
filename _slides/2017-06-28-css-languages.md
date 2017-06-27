---
title: CSS预处理语言
description: CSS Pre-processor and Languages
lang: zh
transition: slide
theme: black

---
## 目录

* SASS & SCSS
* LESS
* Stylus
* 对比总结

-----------------

## 为什么需要预处理语言?

CSS 不是**编程**语言

模块化和多样化很困难

无法实现变量,条件函数等控制功能

~~

* 书写方式
* 变量
* 计算和条件控制
* 代码块重用
* 宏和函数

--------------------

## SASS

[sass-lang.com](http://sass-lang.com/)

Ruby 实现的CSS预处理器

![](http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg)

最成熟、最稳定、最强大的CSS扩展语言

~~

### SASS 与 SCSS

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
### SCSS (SASS)基本语法

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
### SCSS (SASS)变量
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

SCSS变量3.4.21之后才有**作用域**

~~
#### SCSS(SASS)计算与条件控制

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

### SCSS(SASS) 模块重用 

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

### SCSS(SASS) Mixin(宏)与函数
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

--------------------------------------

## LESS
[lesscss.org](http://lesscss.org/)

JS 实现的 CSS 预处理器
![less](http://lesscss.org/public/img/logo.png)
LESS,a CSS pre-processor, extends CSS 
~~
### LESS 基本用法

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

### LESS  变量

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
### LESS 计算和条件控制

```less
@the-border: 1px;
#header {
  border-left: @the-border;
  border-right: @the-border * 2;
}
```

LESS条件判断 非常有限
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
### LESS Mixins 和 函数
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

---------------------------------

## stylus

[stylus-lang.com](http://stylus-lang.com/)

EXPRESSIVE, DYNAMIC, ROBUST CSS

![](http://stylus-lang.com/img/stylus-logo.svg)

Node.JS实现的最像脚本语言的CSS预处理语言

~~
### Stylus 书写方式
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

### Stylus 变量

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

~~
### Stylus 运算 和 条件控制
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

### 代码块复用
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
除了`@extend`也支持`@block`
```stylus
foo = @block {
  width: 20px
  height: 20px
}
.icon
  {foo}
```

~~

### Stylus Mixin 和 函数
* Stylus 有最为复杂和灵活的函数支持
* Mixin和函数合并，唯一的区别是有无返回值
* 支持函数嵌套，匿名函数，函数指针等复杂用法
* 可使变参函数，也可像python一样指定参数值

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

--------------------

## 预处理语言对比

|  语言   |  SCSS  | LESS | Stylus  |
|--------|:-------|:------:|:-------:|
| CSS兼容 |  中   |  高   |   低     |
| 阅读性 |   高   |   高  |    底    | 
| 灵活性 |   中   |  低   |   一般   | 
| Mixin库 | 多    |  中   |    少    | 
| 难度 |  中  |  低    |   高    | 

~~

### 语言选型

* CSS: UI和原型设计者
* **SCSS: 前端团队或者全栈团队**
* LESS: 个人或前端团队(样式设计为主)
* Stylus: 编程能力强的个人或者小团队
