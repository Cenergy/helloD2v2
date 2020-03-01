let baseURL;
if (process.env.NODE_ENV === "production") {
  baseURL = "https://api.aigisss.com";
} else {
  baseURL = "http://127.0.0.1:8000";
}
// baseURL = "https://api.aigisss.com";
// // baseURL = "http://127.0.0.1:8000";

export const BASE_URL = baseURL;
export const uploadImgURL = `${baseURL}/ais/upload/`;
export const BLOG_URL = "https://blog.aigisss.com/";
export const MAP_URL = "https://map.aigisss.com/";
