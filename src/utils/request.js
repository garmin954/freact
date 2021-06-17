import axios from 'axios';
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'

const instance = axios.create({
  baseURL: '/api',
  headers: {},
  timeout: 3000,
})

instance.interceptors.request.use((config)=>{
  console.log('request before');
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
    const token = Cookies.get('_token') || null;
    if (token){
      Object.assign(headers, {
        Authorization: `Bearer ${token}`
      })
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
      console.log(response);
    }).catch(error=>{
      reject(error);
    })
  })
}

instance.interceptors.response.use((config)=>{
  console.log('response after', config);
  return config;  //添加这一行

})


export default request;
