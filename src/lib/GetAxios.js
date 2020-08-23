import axios from "axios"

const url='http://47.105.66.103:5000'
var request = function (config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: url,
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 1.比如config中的一些信息不符合服务器的要求

    // 2.比如每次发送网络请求时, 都希望在界面中显示一个请求的图标

    // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res
    //return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}

var getAxiosJsonResAsync = function (jsonName, func) {
  if (jsonName == null) return;
  axios.get(`/jsons/${jsonName}.json`).then(function (res) {
    func(res.data);
  });
}

// 全局注册axios
window.axios = request;

export {
  getAxiosJsonResAsync,
  url
}