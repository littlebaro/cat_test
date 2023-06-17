import axios from "axios";
import { Swal } from "@/plugins";
import { GET_COOKIES } from "../utils";

const axiosInstance = axios.create({
  baseURL: '/service/api',
});

axiosInstance.interceptors.request.use(function (config) {
  const { headers, ...configSetting } = config
  
  const accessToken = GET_COOKIES() || ''
  
  if(accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`
  }
  return {...configSetting, headers};
}, function (error) {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
  const {data, status} = response
  return {data, status};
}, function (error) {
  const { response = {} } = error
  const { status, data = {} } = response
  Swal.fire({
    icon: 'error',
    text: data.message || '',
    timer: 3000,
    timerProgressBar: true
  }).then(()=> {
    if(status === 401) {
      window.location.href = '/#/loginPages'
    }
  })
  return Promise.resolve({status, data});
});

export { axiosInstance }