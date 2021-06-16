//包含n个reducer函数的模块
import {ADD_REMARKS, CHECK_REMARKS_ALL, CHECK_REMARKS_ITEM, DEL_REMARKS} from './actionType'
import {combineReducers} from 'redux'

const remarksState = {
  remarks:[{
    value: 'Garmin',
    check: false,
  }],
  checkCount: 0,
  allCheck: false
}

function remarks(state=remarksState,action){ //形参默认值
  let {remarks, allCheck, checkCount} = state;
  switch(action.type){
    case ADD_REMARKS:
      state.remarks.push({
        value: action.value,
        check: false,
      })
      return state

    case DEL_REMARKS:
      state.remarks = state.remarks.filter((item, index)=> {
        if (index !== action.value){
          return  item;
        }else{
          return false;
        }
      })
      return state

    case CHECK_REMARKS_ITEM:
      remarks[action.value].check = !remarks[action.value].check;
      checkCount = remarks.filter((item) => {
        return item.check;
      }).length

      if (checkCount >= remarks.length){
        allCheck = true;
      }else{
        allCheck = false;
      }

      return {
        remarks,
        checkCount,
        allCheck
      }

    case CHECK_REMARKS_ALL:
      let check;
      if (!allCheck){
        allCheck = true;
        checkCount = remarks.length
        check = true;
      } else{
        check = false;
        allCheck = false;
        checkCount = 0;
      }
      remarks = remarks.map(item=>{
        item.check = check
        return item;
      })

      return {
        remarks,
        checkCount,
        allCheck
      }
    default:
      return state
  }
}


export const finalReducer = combineReducers({
  remarks
})
