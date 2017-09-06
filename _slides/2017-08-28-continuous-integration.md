---
title: 持续集成
description: Build Automation & Continuous Integration
lang: zh
transition: slide
theme: black
category: ''
tags: ["automation","build","integration"]
redirect_from: 
  - "/持续集成/"
  - "/持续集成"
  - "/continuous-integration"
---

## 目录

* 自动构建(build automation)
  * 流程图
  * 开源的自动构建方案
* 持续集成(continuous integration)
  * 流程图
  * 开源方案
* 代码管理方案


---------------------------------------------------------------------------
## 自动构建

build automation

~~

![](/assets/img/2017-08-28/build.png)

```
code ==> git ==> build (test) ==> deploy
```

~~
### 开源方案  

* Travis-CI (https://travis-ci.org)
* Jenkins (https://jenkins.io)


~~
### 以更新此slides为例

1. [修改代码](https://github.com/NewFuture/slides/edit/edit/_slides/2017-08-28-continuous-integration.md)(手动)
2. [提交代码(commit & push)](https://github.com/NewFuture/slides/commits/edit)
3. github 触发webhook 通知 Travis-CI
4. Travis-CI 下载edit分支代码根据配置(`.travis.yml`)自动编译
5. 编译成功将编译后的静态页面推送到[master上](https://github.com/NewFuture/slides/tree/master)
6. 网站更新

~~
### slides update flow

![](/assets/img/2017-08-28/buildslides.png)

----------------------------------------------------------------------------
## 持续集成

continuous integration

= `build automation` + `code review` + more

~~

### work flow

![](/assets/img/2017-08-28/ci_flow.png)

(两次build 一次 deploy)

~~
### 开源方案（Github）

 * `fork` 复制代码库
 * `pull request` 提交PR
 * `check` CI检查和review等
 * `merge` 合并代码
 * new version or deploy 构建新版本

~~
### github pull request

![](/assets/img/2017-08-28/github_pr.png)

----------------------------------------------------------------------------
## 代码管理方案