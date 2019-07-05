"use strict";

/**
 * Generally speaking, the calculation of properties only need to be done once, therefore we have to do some cache, otherwise it will degrade performance of the app as too much calculation would be going to do when accessing those properties several times.
 * 一般来说属性的计算只需要进行一次，那么一定要实现缓存，否则在多次访问属性时会计算多次，这样会降低应用性能。
 */
const { Nuxt } = require("nuxt");
const NuxtSymbol = Symbol("Application#Nuxt");

module.exports = {
  get nuxt() {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    const config = this.config.nuxt; // nuxt 配置文件
    if (!this[NuxtSymbol] && config) {
      const nuxt = new Nuxt(config);
      this[NuxtSymbol] = nuxt;
    }
    return this[NuxtSymbol];
  }
};
