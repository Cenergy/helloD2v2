const webpack = require("webpack");
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    // Loader
    config.module
      .rule("svg")
      .test(/\.(swf|ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/)
      .use("file-loader")
      .loader("file-loader")
      .end();
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
      })
    ]
  }
};
