import axios from 'axios';
import {useHistory, HashRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import store from "../store";
import {loginState} from "../store/actions/user";

const instance = axios.create({
  baseURL: '/api',
  headers: {},
  timeout: 3000,
})

instance.interceptors.request.use((config)=>{
  const token = Cookies.get('_token') || null;
  if (token){
    config.headers= {
      Authorization: `Bearer ${token}`
    }
  }
  return config;  //添加这一行
})
const headers = {};
const request = (url='', method="GET", params={}) => {
  return new Promise((resolve, reject) => {
    let dataName = 'data';
    switch (method.toUpperCase()){
      case "REQUEST":
      case "GET":
      case "HEAD":
      case "OPTIONS":
        dataName = 'params';
        break;
    }

    instance({
      headers,
      url,
      method,
      [dataName]: params,
    }).then(response=>{
      const { status, data } = response;
      switch (status){
        case 200:
          resolve(data)
          break;
        case 401:
          resolve(data)
          break;
      }
      resolve(data)
      console.log(response);
    }).catch(error=>{
      reject(error);
    })
  })
}

instance.interceptors.response.use((response) =>{
  console.log(response);
  // 对响应数据做点什么
  return response;
},(error)=>{
  const { status } = error.response;
  const router = new HashRouter({})
  switch (status){
    case 401:
      Cookies.remove('_token')
      store.dispatch(loginState())
      setTimeout(()=>router.history.replace({ pathname: '/login' }), 0)
      return Promise.reject('Permission denied')
      break;
  }
})


export default request;
