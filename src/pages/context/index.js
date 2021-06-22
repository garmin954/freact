import React,{Component, createRef} from 'react';
import RemarksItem from "./item";
export default class Index extends Component{
  // 构造函数
  constructor(props) {
    // 继承
    super(props);
    // 变量
    this.state = {
      target: 'Garmin'
    }
    // 添加一个ref 用来获取input元素
    this.inputRef = createRef();
  }

  // 渲染视图方法，jsx语法
  render() {
    const {state:{remarks}, inputRef} = this;
    return (
      <div className='card'>
        <div className="card-header">

        </div>
        <div className="card_body">

        </div>
      </div>
    )
  }
}
