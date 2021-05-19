import { request } from "./request";

export const BANNER = "banner";
export const RECOMMEND = "recommend";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}

export function getHomeData(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  });
}

export function uploadImage(img) {
  return request({
    url: "/api/imgupload/",
    method: "post",
    data: { stick_img: img }
  });
}

export function getImgConvertWord(id) {
  return request({
    url: "/api/img2words/",
    params: { id }
  });
}
export function getImgConvertExcel(id) {
  return request({
    url: "/api/img2excel/",
    params: { id }
  });
}
export function deleteOriginImg(id) {
  return request({
    url: "/api/img2words/",
    method: "delete",
    params: { id }
  });
}
export function deleteOriginExcelImg(id) {
  return request({
    url: "/api/img2excel/",
    method: "delete",
    params: { id }
  });
}
export function getSources(type) {
  return request({
    url: "/resources/resources/",
    params: {
      question_type: type
    }
  });
}
export function setSuggest(options) {
  const { suggest_email, suggest_user, suggest_message } = options;
  return request({
    url: "/api/suggestions/",
    method: "post",
    data: {
      suggest_email,
      suggest_user,
      suggest_message
    }
  });
}
