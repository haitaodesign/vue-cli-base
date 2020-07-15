# vue-cli-base

基于 Vue CLI 构建企业级项目最佳实践模板

## 技术选型

### Vue 生态

1. [Vue](https://cn.vuejs.org/)
2. [Vue-Router](https://router.vuejs.org/zh/)
3. [Vuex](https://vuex.vuejs.org/zh/)
4. [Vue-Cli](https://cli.vuejs.org/zh/)

### 第三方库

2. [webpack](https://www.webpackjs.com/)
3. [webpack-chain](https://github.com/neutrinojs/webpack-chain)

## 项目结构

``` js
.
├── docs
│   ├── .vuepress
│   ├── changelog
│   ├── components
│   ├── guides
│   ├── specs
│   └── README.md
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── api
│   ├── assets
│   ├── config
│   ├── main.js
│   ├── plugins
│   ├── router
│   ├── store
│   ├── utils
│   ├── views
│   └── App.vue
├── babel.config.js
├── package.json
├── postcss.config.js
├── README.md
├── vue.config.js
└── yarn.lock
```

## Project setup
``` js
yarn install
```

### Compiles and hot-reloads for development
``` js
yarn run serve
```

### Compiles and minifies for production
``` js
yarn run build
```

### Run your tests
``` js
yarn run test
```

### Lints and fixes files
``` js
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
