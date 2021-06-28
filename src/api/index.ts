import dockerList from "./data";
import { dockerListType } from "../interface/index";

/**
 * 获取底部导航栏
 */

export const apiGetDockerList = () => {
  return new Promise<dockerListType[]>((resolve) => {
    // 模拟接口请求
    setTimeout(() => {
      resolve(dockerList);
    }, 1000);
  });
};
