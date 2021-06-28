import './App.css';
import ShouldUpdate from './pages/shouldComponentUpdate/index'
import Memo from './pages/memo/index'
import ForwardRefGM from './pages/forwardRef/index'
import CloneEle from './pages/cloneElement/index'
import ContextGM from './pages/context/index'
import ChildrenMap from './pages/children/map'
import ChildrenCount from './pages/children/count'
import ChildrenToArray from './pages/children/toArray'
import ChildrenOnly from './pages/children/only'

import PureCP from './pages/pureComponent/index'
import {
  HashRouter as Hash, //我这边使用hash路由也就是前端路由
  Route,  //定义路由选项,`负责接收对应的路由组件视图,充当路由插槽的作
} from "react-router-dom";

import MainLayout from "./pages/router";
import React, {Suspense, Profiler} from "react";


function App() {
  return (
    <div className="App container" >
      <Suspense fallback={'loading...'}>

      {/*<PureCP />*/}
      {/*<ShouldUpdate />*/}
        <Profiler id='roots' onRender={(...args)=>console.log(args)}>
          {/*<Memo />*/}
          {/*<CloneEle/>*/}
          {/*<ContextGM/>*/}
          {/*<ChildrenCount />*/}
          <ChildrenOnly />
        </Profiler>

      {/*<ForwardRefGM />*/}


      {/*<Hash>*/}
        {/*    <Route path="/" component={MainLayout}></Route>*/}
        {/*</Hash>*/}
      </Suspense>
    </div>
  );
}

export default App;
