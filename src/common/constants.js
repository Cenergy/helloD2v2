let baseURL;
if (process.env.NODE_ENV === "production") {
  baseURL = "https://api.aigisss.com";
} else {
  baseURL = "http://127.0.0.1:8000";
  // baseURL = "https://api.aigisss.com";
}

export const BASE_URL = baseURL;
export const uploadImgURL = `${BASE_URL}/ais/upload/`;
export const BLOG_URL = "https://www.aigisss.com/blog";
