let baseURL;
if (process.env.NODE_ENV === "production") {
  baseURL = "";
} else {
  baseURL = "http://127.0.0.1:8000";
}

export const BASE_URL = baseURL;
export const uploadImgURL = `${BASE_URL}/ais/upload/`;
export const BLOG_URL = "http://blog.aigisss.com";
