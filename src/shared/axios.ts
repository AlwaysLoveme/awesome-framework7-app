import qs from "qs";
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
} from "axios";
import { f7 } from "framework7-vue";
import { toast, hideLoading, showLoading } from "./f7api";

const cancelTokenSources = new Map(); // 定义cancel队列
const request: AxiosInstance = axios.create({
  baseURL: process.env.BASE_HTTP,
  timeout: 20000,
  method: "POST",
});

const handlerRequest = async (config: AxiosRequestConfig) => {
  showLoading();
  if (!(config.data instanceof FormData) && config.method === "POST") {
    config.data = qs.stringify(config.data);
  }
  // eslint-disable-next-line no-prototype-builtins
  if (!config.hasOwnProperty("cancelToken")) {
    // 排除不需要cancel的请求
    const source = axios.CancelToken.source();
    cancelTokenSources.set(source.token, source.cancel); // 加入cancel队列
    config.cancelToken = source.token;
  }
  return config;
};
const handlerResponse = (res: AxiosResponse) => {
  hideLoading();
  const data = res.data;
  if (res.config.cancelToken) {
    cancelTokenSources.delete(res.config.cancelToken);
  }
  if (data.code && data.code === 42001) {
    // 移除所有历史路由页面
    if (f7.views.main.router.currentRoute.path !== "/login") {
      f7.views.main.router.navigate("/login", {
        clearPreviousHistory: true,
      });
    }
  }
  if (!data.status) {
    toast(data.msg);
  }
  return data;
};
const handlerError = (err: AxiosError) => {
  hideLoading();
  if (axios.isCancel(err)) {
    return cancelTokenSources.delete(err.message);
  }
  toast(err.message);
};

request.interceptors.request.use(handlerRequest, handlerError);
request.interceptors.response.use(handlerResponse, handlerError);

export default request;
export { cancelTokenSources };
