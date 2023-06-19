import axios from "axios";
import Swal from "sweetalert2";
import { GET_COOKIES } from "../utils";

//const api = `${import.meta.env.VITE_APP_SERVER_URL}user/login`; 

const axiosInstance = axios.create({
    baseURL: "/service/api",
}); 

axiosInstance.interceptors.request.use(function (config) {
    //console.log({ config } );
    const { headers, ...configSetting } = config

    const accessToken = GET_COOKIES() || ''

    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`
    }
    return { ...configSetting, headers };
    
    //return config;
}, function (error) { 
    return Promise.reject(error);
});

// 添加响应拦截器
axiosInstance.interceptors.response.use(function (response) { 
    const { status, data: respData = {} } = response;
    const { data, success, message } = respData;

   if ( !success ) {
        Swal.fire({
            icon: 'warning',
            text: message,
            timer: 1500,
            timerProgressBar: true,
        }).then(() => {
            if (status === 401) {
                window.location.href = '/#/loginPages'
            };
        });
    }; 

    return { status, data, success, message };
}, function (error) {
    return Promise.reject(error);
});

export { axiosInstance };