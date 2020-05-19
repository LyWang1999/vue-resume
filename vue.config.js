const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const PUBLIC_PATH = process.env.NODE_ENV === 'production' ? '/kuluo/' : '/'

module.exports = {
  lintOnSave: false,
  publicPath: PUBLIC_PATH,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/component'))

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  // 打包时不生成.map文件
  productionSourceMap: false
  // 将任何没有匹配到静态资源的请求都映射到这个url
  // devServer: {
  //   proxy: 'http://localhost:8080',
  //   port: 8081
  // }
}
