import {createStore} from 'redux'
import {finalReducer} from './reducer/index'

//生成store对象
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(finalReducer, composeEnhancers);//内部会第一次调用reducer函数，得到初始state

export default store
