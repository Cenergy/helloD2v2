let baseURL;
if (process.env.NODE_ENV === "production") {
  baseURL = "/apis";
} else {
  baseURL = "http://127.0.0.1:8000";
}
// baseURL = "https://www.aigisss.com/apis";
// baseURL = "http://127.0.0.1:8000/";

export const BASE_URL = baseURL;
export const uploadImgURL = `${baseURL}/ais/upload/`;
export const BLOG_URL = "/blog/";
export const MAP_URL = "/view/";

export const FRIEND_LINKS = [
  {
    name: "小小的诗",
    url: "https://ouyangresume.github.io/"
  },
  {
    name: "地理信息导航网站",
    url: "https://gis.3nice.cc"
  },
  {
    name: "偷得浮生半日闲",
    url: "https://www.xpshuai.cn"
  },
  {
    name: "X北辰北的个人博客",
    url: "http://www.xbeichen.cn"
  },
  {
    name: "3nice.cc",
    url: "https://www.3nice.cc/"
  },
  {
    name: "Xiayin Lou",
    url: "https://elaiza.pro"
  },
  {
    name: "henshin的Blog",
    url: "http://zlh.giserhub.com/"
  }
];
