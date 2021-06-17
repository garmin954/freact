import { ADD_REMARKS, DEL_REMARKS, DEL_CHECK_REMARKS, CHECK_REMARKS_ITEM, CHECK_REMARKS_ALL } from "../actionType";

//包含所有的action creator
export const addRemarksCreater = (value) =>({type:ADD_REMARKS,value})
export const delRemarksCreater = (value) =>({type:DEL_REMARKS,value})
export const delCheckRemarksCreater = () =>({type:DEL_CHECK_REMARKS})
export const checkRemarksItemCreater = (value) =>({type:CHECK_REMARKS_ITEM, value})
export const checkRemarksAllCreater = (value) =>({type:CHECK_REMARKS_ALL, value})
