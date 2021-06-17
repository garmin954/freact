import {LOGIN_USER, GET_USER_INFO} from '../actionType'
import request from "../../utils/request";
import Cookies from 'js-cookie'
import store from "../index";

export const login = (params) =>{
  return async () =>{
    await request('/login', 'POST', params).then(response => {
      const {code, msg, data: {token}} = response;
      if (code === 0){
        Cookies.set('_token', token, { expires: 1 });
        store.dispatch({
          type: LOGIN_USER,
          data: response.data,
        })
      }
      console.log(response);
    })
  }
}

export const getUserInfo = () => {
  return async ()=>{
    await request('/user', 'GET').then(response => {
      const {code, msg, data} = response;
      if (code === 0){
        store.dispatch({
          type: GET_USER_INFO,
          data,
        })
      }
      return false
    })
  }
}
