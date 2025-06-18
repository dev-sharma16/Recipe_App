import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com"
    // withCredentials = true
}) 

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    console.log("Request is sending..! ",config);
    return config;
    }, function (error) {
    console.log("Error in sending request : ",error);
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    console.log("Response is received..! ", response);
    return response;
    }, function (error) {
    console.log("Error in receving response : ",error);
    return Promise.reject(error);
});

export default instance;