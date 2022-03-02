// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

// Impedir que o PWA seja utilizado no modo dev
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  reactStrictMode: true,

  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
