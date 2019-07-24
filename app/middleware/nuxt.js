"use strict";

module.exports = options => {
  // 获取配置的路由根 url
  const routerPrefix = options.router.base;
  return async function nuxt(ctx, next) {
    await next();
    const url = ctx.request.url;
    // 匹配配置的路由根url 开头的路由交给 nuxt 渲染( /api 是特例，用于 Restful API)
    if (url.startsWith(routerPrefix) && !url.startsWith("/api")) {
      ctx.status = 200;
      ctx.respond = false; // Bypass Koa's built-in response handling
      ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
      ctx.app.nuxt.render(ctx.req, ctx.res);
    }
  };
};
