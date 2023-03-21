function getIpAddress (){
  const interfaces = require('os').networkInterfaces()
  for (let devName in interfaces){
    const iface = interfaces[devName]
    for(let i = 0; i < iface.length; i++) {
      const alias = iface[i]
      if (alias.family ==='IPv4'&&alias.address!=='127.0.0.1'&&!alias.internal) {
        return alias.address
      }
    }
  }
}

const ipAddress = getIpAddress()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'testipnuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    NODE_ENV: process.env.NODE_ENV,
    IP: ipAddress
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
