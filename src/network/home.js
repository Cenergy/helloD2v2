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

export function getImgConvertWord(id) {
  return request({
    url: "/ais/img2words/",
    params: { id }
  });
}
export function deleteOriginImg(id) {
  return request({
    url: "/ais/img2words/",
    method: "delete",
    params: { id }
  });
}
export function getSources(type) {
  return request({
    url: "/api/v1/resources/",
    params: {
      question_type: type
    }
  });
}
