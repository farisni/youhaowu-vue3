import axios from "axios";

const http = axios.create({
  baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout:5000,
})


http.interceptors.request.use(
  (config) => {
    // 请求拦截器
    return config;
  },
  (error) => {
    console.log('请求失败', error);
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res) => {
    if (res.status === 200 || res.status === 0) {
      return res.data;
    } else {
      Promise.reject();
    }
  },
  (error) => {
    console.log('响应失败', error);
    return Promise.reject(error);
  }
);
export default http;
