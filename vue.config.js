const webpack = require("webpack");
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin"); //引入gzip压缩插件
module.exports = {
  assetsDir: "static",
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => {
    // Loader
    config.module
      .rule("svg")
      .test(/\.(swf|ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/)
      .use("file-loader")
      .loader("file-loader")
      .end();
    config.module
      .rule("images")
      .use("image-webpack-loader")
      .loader("image-webpack-loader");
  },

  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        common: "@/common",
        assets: "@/assets",
        network: "@/network",
        views: "@/views",
        pages: "@/pages"
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      }),
      new CompressionPlugin({
        //gzip压缩配置
        test: /\.js$|\.html$|\.css/, //匹配文件名
        threshold: 10240, //对超过10kb的数据进行压缩
        deleteOriginalAssets: false //是否删除原文件
      })
    ]
  }
};
