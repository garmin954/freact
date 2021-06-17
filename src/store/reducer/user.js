import {LOGIN_USER, GET_USER_INFO} from '../actionType';
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
export default user;
