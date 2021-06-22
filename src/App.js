import './App.css';
import Remarks from "./pages/index";
import {
  HashRouter as Hash, //我这边使用hash路由也就是前端路由
  Route,  //定义路由选项,`负责接收对应的路由组件视图,充当路由插槽的作
} from "react-router-dom";

import MainLayout from "./pages/router";


function App() {
  return (
    <div className="App">
      {/*<Remarks/>*/}
        <Hash>
            <Route path="/" component={MainLayout}></Route>
        </Hash>
    </div>
  );
}

export default App;
