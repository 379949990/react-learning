import axios from "axios";

// 开发/生产服务器；
const devBaseURL = " https://httpbin.org";
const proBaseURL = "http://fluoxetine.pub";

const BASE_URL = process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;
const TIMEOUT = 3000;

const axiosInstance_1 = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// axios拦截器
// 请求拦截：
axiosInstance_1.interceptors.request.use(
  (config) => {
    // 1，发送网络请求时在页面中间显示Loading组件；
    // 2，发送请求时携带token，如果没有携带跳转至登录界面；
    // 3，params/data序列化操作；
    // ...
    return config;
  },
  (err) => {
    // 请求发生错误时操作
  }
);
// 响应拦截：
axiosInstance_1.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    // 请求发生错误时操作
    if (err && err.response.status) {
      switch (err.response.status) {
        case 400:
          console.log("请求错误");
          break;
        case 401:
          console.log("未授权");
          break;
        default:
          console.log("其他错误");
      }
    }
    return err;
  }
);

export default axiosInstance_1;