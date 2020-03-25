module.exports = {
  port: 8080,
  proxy: {
    // 地图api，gis-mapbox库
    "/apis": {
      target: "http://127.0.0.1:8000",
      changeOrigin: true,
      ws: false,
      pathRewrite: {
        "^/apis": ""
      }
    }
  }
};
