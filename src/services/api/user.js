import { axiosInstance } from '../axiosInstance'

export const FETCH_USER = {
  login: (data) => axiosInstance.post('/AllToken/Login', data),
  getUserInfo: () => axiosInstance.get('/AllToken/GetLoginInfo')
}