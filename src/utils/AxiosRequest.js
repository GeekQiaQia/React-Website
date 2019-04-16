// 自定义一个请求模块；
/*
* 1、请求函数是结合call函数；
* 2、call接收一个函数，未来处理 axios异步请求；
* 3、外部函数先接收一个参数，return 的函数再由call 发起请求；
*
* */

import Axios from 'axios'
let token = '';

// 定义一个请求实例；
let axios =Axios.create({
    withCredentials:true, //跨域过程中，客户端必须要设置，允许ajax 携带cookie到服务器；
    baseURL:'http://127.0.0.1:3006/api/'

});
axios.defaults.headers.common['token'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头


// 添加一个请求拦截器；
axios.interceptors.request.use(function (config) {
  let user = JSON.parse(window.sessionStorage.getItem('access-user'));
  if (user) {
    token = user.userToken;
  }
  config.headers.common['token'] = token;
  //console.dir(config);
  return config;
}, function (error) {
  // Do something with request error
  console.info("error: ");
  console.info(error);
  return Promise.reject(error);
});

// 响应拦截器；
axios.interceptors.response.use((response)=>{
    console.log(response);
    if(response.data.code!="0000"){

        alert(response.data.message);
    }

    return response;
    }
)

let q=function (url,options={}) {

    // 默认请求方式；
    options.method=options.method||"get";
    return axios({
        url,
        ...options,
    });
}

export default q;

