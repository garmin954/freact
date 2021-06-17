// 配置所有路由
import React, {Component, Suspense} from "react";
import {
  Redirect,   //路由重定向
  Route,  //定义路由选项,`负责接收对应的路由组件视图,充当路由插槽的作
  Switch  //仅仅只会渲染一个路径,解决route的唯一渲染（仅仅渲染一个路由路径）
} from "react-router-dom";
import AuthRoute from "./authRoute";
// import Lazyload from "./utils/lazyload"; //react路由懒加载需要依赖第三方模块 `react-loadable`, Lazyload是之前封装好的懒加载效果
import lazy from "../utils/lazy";
//后面写再附上具体代码
export default class MainLayout extends Component {
  render() {
    return (
      <div className="main">
        <Suspense fallback={'loading...'}>
          <Switch>
            <Route path="/" exact render={() => (<Redirect to="/guide"/>)}/>
            <Route path="/guide" component={lazy(import("./routing/guide"))}></Route>
            <Route path="/remarks" component={lazy(import("./remarks/index"))}></Route>
            <Route path="/login" component={lazy(import("./login/index"))}></Route>
            <AuthRoute path="/user" component={lazy(import("./routing/user"))}></AuthRoute>
            <Route path="/404" component={lazy(import("./routing/404"))}></Route>
            <Route render={() => (<Redirect to="/404"/>)}></Route>
          </Switch>
        </Suspense>
      </div>
    )
  }
}
