import {createStore, applyMiddleware, compose} from 'redux'
import {finalReducer} from './reducer/index'
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

//生成store对象
const store = createStore(finalReducer, enhancer);//内部会第一次调用reducer函数，得到初始state

export default store
