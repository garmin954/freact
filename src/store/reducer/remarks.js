//包含n个reducer函数的模块
import {ADD_REMARKS, CHECK_REMARKS_ALL, CHECK_REMARKS_ITEM, DEL_REMARKS, DEL_CHECK_REMARKS} from '../actionType'
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
    // 添加
    case ADD_REMARKS:
      state.remarks.push({
        value: action.value,
        check: false,
      })
      return state
    // 删除单条记录
    case DEL_REMARKS:
      state.remarks = state.remarks.filter((item, index)=> {
        if (index !== action.value){
          return  item;
        }else{
          return false;
        }
      })
      return state
    // 多选删除item
    case DEL_CHECK_REMARKS:
      remarks = remarks.filter((item, index)=> {
        return !item.check;
      })
      checkCount = remarks.length;
      allCheck = false;
      return {
        remarks,
        checkCount,
        allCheck
      }
    // 选中单挑记录
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
    // 全选
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
export default remarks;
