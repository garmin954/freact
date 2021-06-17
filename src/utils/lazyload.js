import React from "react";
import Loadable from "react-loadable"; //npm i  react-loadable  项目依赖

//  import {Toast} from "antd-mobile";  //ui库的提示效果框
//通用的懒加载
const loadingComponent = () => {
  //ui库的弹框
  //  Toast.loading('Loading...', 1, () => {
  //     console.log('Load complete !!!');
  // });
  return (
    <div>
      loading......
    </div>
  )
}
export default function (loader, loading = loadingComponent) {
  return Loadable({
    loader,   //需要懒加载的组件
    loading  //加载效果样式
  })
}
