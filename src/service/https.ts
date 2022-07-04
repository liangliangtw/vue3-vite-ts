//http.ts
import axios, { AxiosRequestConfig } from 'axios'
import { showMessage } from './statusCode' // 引入状态码文件
import { ElMessage } from 'element-plus' // 引入el 提示框
// 设置请求头和请求路径
console.log(import.meta.env.VITE_APP_WEB_URL, 'uu')
// @ts-ignore
axios.defaults.baseURL = import.meta.env.VITE_APP_WEB_URL
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      //@ts-ignore
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return error
  }
)
// 响应拦截
axios.interceptors.response.use(
  (res) => {
    // if (res.data.code === 111) {
    //   sessionStorage.setItem('token', '')
    //   // token过期操作
    // }

    // if (res.data.code !== 200) {
    //   const errMsg = showMessage(res.data.code) // 传入响应码，匹配响应码对应信息
    //   ElMessage.warning(errMsg)
    // } else {
    //   return res
    // }
    return res
  },
  (error) => {
    ElMessage.warning('网络连接异常,请稍后再试!')
    return Promise.reject(error)
  }
)
interface ResType<T> {
  code: number
  data?: T
  msg: string
  err?: string
}
interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, params)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },
}
export default http
