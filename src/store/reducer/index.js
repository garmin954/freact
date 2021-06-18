//包含n个reducer函数的模块
import {combineReducers} from 'redux'
import remarks from "./remarks";
import {  login_state, user } from "./user";


export const finalReducer = combineReducers({
  remarks,
  user,
  login_state
})
