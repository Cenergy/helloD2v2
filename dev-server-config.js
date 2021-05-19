module.exports = {
  port: 8080,
  hot: true,
  proxy: {
    // 地图api，gis-mapbox库
    "/apis": {
      target: "https://api.aigisss.com",
      changeOrigin: true,
      ws: false,
      secure: false, // https协议才设置
      pathRewrite: {
        "^/apis": "/",
      },
      headers: {
        Referer: 'https://api.aigisss.com'
      }
    },
    "/media": {
      target: "https://api.aigisss.com",
      changeOrigin: true,
      ws: false,
      secure: false, // https协议才设置
      pathRewrite: {
        "^/media": "/media",
      },
      headers: {
        Referer: 'https://api.aigisss.com'
      }
    },
  },
};
