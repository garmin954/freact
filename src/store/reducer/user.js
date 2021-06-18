import {LOGIN_USER, GET_USER_INFO, IS_USER_LOGIN} from '../actionType';
import Cookies from 'js-cookie';
import {combineReducers} from "redux";
import remarks from "./remarks";
const userState = {};
function user(state=userState, action){
  switch (action.type){
    case LOGIN_USER:
      return action.data;
      break;

    case GET_USER_INFO:
      return action.data;
      break;
  }

  return state;
}

function login_state(state = true, action){
  switch (action.type){
    case IS_USER_LOGIN:
      if (Cookies.get('_token')){
        return true;
      }
      return false;
      break;
    default:
      return false;
      break;
  }
}
export {
  login_state,
  user
};
