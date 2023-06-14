import axios from "axios";
import Swal from "sweetalert2";

//const api = `${import.meta.env.VITE_APP_SERVER_URL}user/login`; 

const axiosInstance = axios.create({
    baseURL: "/service/api",
});

axiosInstance.interceptors.request.use(function (config) {
    //console.log( { config } );
    return config;
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
        });
    };

    return { status, data, success, message };
}, function (error) {
    return Promise.reject(error);
});

export { axiosInstance };