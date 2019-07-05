# egg-nuxt-view

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-nuxt-view.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-nuxt-view
[travis-image]: https://img.shields.io/travis/eggjs/egg-nuxt-view.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-nuxt-view
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-nuxt-view.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-nuxt-view?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-nuxt-view.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-nuxt-view
[snyk-image]: https://snyk.io/test/npm/egg-nuxt-view/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-nuxt-view
[download-image]: https://img.shields.io/npm/dm/egg-nuxt-view.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-nuxt-view

<!--
Description here.
-->

## 依赖说明

### 依赖的插件

<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.nuxtView = {
  enable: true,
  package: "egg-nuxt-view"
};
```

## 使用场景

- Why and What: 描述为什么会有这个插件，它主要在完成一件什么事情。
  将 Nuxt.js 作为中间件集成到 到 egg，渲染 UI 页面。默认渲染除 /api 开头的所有路由，支持配置渲染特定的路由，例如：/client 开头的所有路由
- How: 描述这个插件是怎样使用的，具体的示例代码，甚至提供一个完整的示例，并给出链接。
  默认 rootDir = client ,即在项目根目录下 创建 client 目录，目录下的内容同 Nuxt.js 项目目录结构。
  可通过配置 router = { base: "/client" } 使 Nuxt.js 只渲染 /client 开头的路由，其他仍由 egg 的路由负责。

```js
// config/config.default.js
exports = {
  nuxtView：{
    rootDir: "client",
    router: {
      base: "/client"
    }
  }
};
```

## 详细配置

请到 [Nuxt.js Config](https://zh.nuxtjs.org/guide/configuration) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg-nuxt-view issues](https://github.com/xiaoyaosheng666/egg-nuxt-view/issues) 异步交流。

## License

[MIT](LICENSE)
