module.exports = {
  port: 8080,
  hot: true,
  proxy: {
    // 地图api，gis-mapbox库
    "/apis": {
      target: "http://127.0.0.1:8000/",
      changeOrigin: true,
      ws: false,
      // secure: false, // https协议才设置
      pathRewrite: {
        "^/apis": "/",
      },
      // headers: {
      //   Referer: 'https://api.gishai.top'
      // }
    },
    "/media": {
      target: "https://api.gishai.top/media",
      changeOrigin: true,
      ws: false,
      secure: false, // https协议才设置
      pathRewrite: {
        "^/media": "/media",
      },
      headers: {
        Referer: 'https://api.gishai.top'
      }
    },
    "/static": {
      target: "https://api.gishai.top/static",
      changeOrigin: true,
      ws: false,
      secure: false, // https协议才设置
      pathRewrite: {
        "^/static": "/static",
      },
      headers: {
        Referer: 'https://api.gishai.top'
      }
    },
  },
};
