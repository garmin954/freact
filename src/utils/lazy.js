import { lazy } from 'react';

/** 异步组件使用lazy()函数加载, 传递一个使用import()函数的Promise异步方法, 该方法最终返回import()函数的结果 */
export default (loader)=> lazy(() => {
  return new Promise((resolve, reject) => {
    loader.then(AsyncComponent => {
      console.log('加载完毕, 延迟传送');
      setTimeout(() => {
        console.log('传送');
        resolve(AsyncComponent);
      }, 1000);
    });
  });
});
