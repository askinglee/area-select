import axios from 'axios'
import store from 'STORE/store'
import router from 'ROUTERS/'
import apiRoot from './config'

/**
 * axios 全局 options
 */
axios.defaults.baseURL = apiRoot().webAPI
axios.defaults.withCredentials = false

/**
 * Ajax response 拦截器
 * 截获相应的数据集，返回接口的真实数据
 */
axios.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)

/**
 * Ajax request 拦截器
 * 在检测到 token 时将其塞入 header 中随请求一起发送给后台
 */
axios.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error)
)

// export default Promise Object
const xhr = ({ url, data = {}, method = 'get' }) => {

}

export default xhr
