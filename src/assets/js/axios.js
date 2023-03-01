import axios from "axios";
import qs from "qs";
import { ElMessage } from "element-plus";
import { showMsg, deleteEmpty } from "@/assets/js/public";
import router from "@/router/index";
axios.defaults.baseURL = import.meta.env.VITE_APP_WEB_URL;
axios.defaults.timeout = 30000;
axios.defaults.withCredentials = true;

//axios实例
const axiosdeful = axios.create({});

//错误码
let ERR_CODE = [400005, 400000, 500000, 400001];
let ERR_LOGIN = 400002;

// 请求拦截
axiosdeful.interceptors.request.use(config => {
  return config;
});

// 响应拦截
/**
 * @description: response 2xx 范围内的状态码都会触发该函数；
 *               error    非2xx 范围内的状态码都会触发该函数
 * @return {*}
 */
axiosdeful.interceptors.response.use(
  response => {
    let _data = response.data;

    if (ERR_CODE.includes(_data.code)) {
      showMsg(_data.message, "error", 6000);
      return Promise.reject(_data);
    } else if (_data.code == ERR_LOGIN) {
      if (!_data.message.includes("登录异常")) {
        showMsg(_data.message, "error", 4000);
      }
      router.push("/login");
    }
    return _data;
  },
  error => {
    showMsg(error.message, "error", 6000);
    return Promise.reject(error);
  }
);

//导出方法 =======================================================================
export let axiosGet = (url, data = "") => {
  deleteEmpty(data);
  return axiosdeful.get(url, { params: data });
};

//upload上传  multipart/form-data
export let axiosFormat = (url, data) => {
  return axiosdeful.post(url, data, { headers: { "Content-Type": "multipart/form-data" } });
};

//默认传值    application/x-www-form-urlencoded
export let axiosPost = (url, data = "") => {
  deleteEmpty(data);
  return axiosdeful.post(url, qs.stringify(data));
};
//json 传值   application/json
export let axiosPostJson = (url, data = "") => {
  deleteEmpty(data);
  return axiosdeful.post(url, JSON.stringify(data), { headers: { "Content-Type": "application/json"} });
};
//通过接口返回文件流
export let getFilesBlob = (url, data = "") => {
  return axiosdeful.get(url, { params: data, responseType: "blob" });
};
