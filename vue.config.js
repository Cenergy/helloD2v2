const webpack = require("webpack");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        common: "@/common",
        assets: "@/assets",
        network: "@/network",
        views: "@/views"
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
