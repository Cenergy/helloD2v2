const webpack = require("webpack");
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin"); //引入gzip压缩插件
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

// 定义压缩文件类型
const productionGzipExtensions = ["js", "css"];

const CopyWebpackPlugin = require("copy-webpack-plugin");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  assetsDir: "assets",
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    extract: false // Error: No module factory available for dependency type: CssDependency
  },
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
      .loader("image-webpack-loader")
      .options({
        mozjpeg: { progressive: true, quality: 65 },
        optipng: { enabled: false },
        pngquant: { quality: [0.65, 0.9], speed: 4 },
        gifsicle: { interlaced: false },
        webp: { quality: 75 }
      });
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
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.8
      }),
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: true,
            drop_debugger: true, //移除debugger
            pure_funcs: ["console.log"] //移除console
          }
        },
        sourceMap: false,
        parallel: true
      }),
      new CopyWebpackPlugin([
        {
          from: "CNAME",
          to: "../dist/"
        }
      ])
      // new BundleAnalyzerPlugin()
    ],
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace("@", "")}`;
            }
          }
        }
      }
    }
  }
};
