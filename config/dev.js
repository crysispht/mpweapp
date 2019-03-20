module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  weapp: {},
  h5: {
    devServer: {
      host: '0.0.0.0',
      proxy: {
        '/api/': {
          target: 'http://mp.visitbeijing.com.cn',
          pathRewrite: {
            '^/api/': '/api/'
          },
          secure: false,
          changeOrigin: true
        }
      }
    }
  }
}
