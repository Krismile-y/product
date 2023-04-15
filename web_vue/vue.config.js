const path = require('path');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  productionSourceMap:false,
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
    port: 1996,
    disableHostCheck: true, // 内网穿透
  },
  // 配置别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_com', resolve('src/components'))
      .set('_api', resolve('src/api'))
      .set('_views', resolve('src/views'))
      .set('_assets', resolve('src/assets'));
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: ['./src/theme', './src/assets/stylus/mixin'],
      },
    },
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true,
    },
  },
  configureWebpack: {
    
    plugins: [
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require('./public/vendor/vendor-manifest.json'),
      }),
      // 将 dll 注入到 生成的 html 模板中
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, './public/vendor/*.js'),
        // dll 引用路径
        publicPath: './vendor',
        // dll最终输出的目录
        outputPath: './vendor',
      }),
    ],
  },
};
