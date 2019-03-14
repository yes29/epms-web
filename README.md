# 项目简介

> 项目管理系统
> 项目名称:项目管理系统
>
> 技术栈:`vue`+`vue-router`
> 版本:v1.00
>
>[项目地址](http://git.tuandai888.com/zhanghrCoder/project-management-syste.git)
>
> 使用`vue-cli3.0`为基础构建,技术栈:`vue`+`vue-router`+`scss`+`vuex`+`element-ui`

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 工程目录

``` bash

├─build
├─config
├─node_modules  
├─src       //开发目录
│  │──app.vue
│  │──main.js
│  ├─assets     //第三方静态资源
│  ├─common     //公共资源（css、image、js）
│  ├─components //基础组件
│  ├─mock       //mock数据
│  ├─router     //路由管理
│  ├─store      //全局变量管理
│  └─views      //视图组件
├─static    //静态资源目录
├─test      //此目录为测试目录，存放和项目测试相关的文件。
├─.babelrc
├─.editorconfig
├─.eslintignore
├─.eslintrc.js
├─.gitignore
├─.postcssrc.js
├─favicon.ico
├─index.html
├─package-lock.json
├─package.json
└─README.md
