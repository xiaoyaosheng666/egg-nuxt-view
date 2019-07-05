'use strict';

/**
 * egg-nuxtjs default config
 * @member Config#nuxtjs
 * @property {String} SOME_KEY - see https://nuxtjs.org/guide/configuration
 */
exports.nuxt = {
  mode: "universal",
  rootDir: "client",
  router: {
    base: "/"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Nuxt.js for egg",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ]
};
