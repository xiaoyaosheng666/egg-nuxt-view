"use strict";

const { Builder } = require("nuxt");

class AppBootHook {
  constructor(app) {
    this.app = app;
  }
  configWillLoad() {
    // 修配置 Nuxt.js 应用是开发模式还是生产模式
    this.app.config.nuxt.dev = this.app.config.env === "local";

    // 插入 nuxtjs 中间件到框架的 coreMiddleware 最后位置
    this.app.config.coreMiddleware.push("nuxt");
  }
  async didLoad() {
    const nuxt = this.app.nuxt;
    const builder = new Builder(nuxt);
    await builder.build();
    this.app.coreLogger.info("Nuxt.js is ready.");
  }
}

module.exports = AppBootHook;
