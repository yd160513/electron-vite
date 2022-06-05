import axios from 'axios'
import qs from 'qs'
// import smark from 'spark-md5'

const request = axios.create({
  baseURL: '/',
  transformRequest: (data, headers) => {
    if (headers) {
      const contentType = headers['Content-Type']
      if (contentType === "application/x-www-form-urlencoded") return qs.stringify(data);
    }
    return data
  },
  timeout: 5000
})

request.interceptors.request.use(config => {
  const token = 'xxx'
  config.headers = {
    ...config.headers,
    token
  }
  return config
}, e => {
  const err = e.response.data.message
  return Promise.reject(err)
})

request.interceptors.response.use(response => {
  return response.data
}, e => {
  const err = e.response.data.message
  return Promise.reject(err)
})

export default request
