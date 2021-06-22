import React,{Component, createRef} from 'react';
import RemarksItem from "./item";
export default class Index extends Component{
  // 构造函数
  constructor(props) {
    // 继承
    super(props);
    // 变量
    this.state = {
      remarks: [
        'This is a note！',
        'This is a note！2'
      ]
    }
    // 添加一个ref 用来获取input元素
    this.inputRef = createRef();
  }

  // 添加一条记录
  handleAddRemarksItem(){
    const {value} = this.inputRef.current;
    if (!value){
      alert('please input the value！');
      return ;
    }
    const {remarks} = this.state;
    remarks.push(value);
    this.inputRef.current.value = '';
    this.setState({
      remarks
    })
  }

  // 删除一条记录
  handleDelItem(index){
    const {remarks} = this.state;
    if (remarks.length > 0){
      if (remarks[index]){
        remarks.splice(index, 1)
      }
      this.setState({
        remarks
      })
    }
  }

  // 渲染视图方法，jsx语法
  render() {
    const {state:{remarks}, inputRef} = this;
    return (
      <div className='card'>
        <div className="card-header">
          <div className=' input-group'>
            <input type="text" ref={inputRef} className='form-control' />
            <button className='btn btn-success text-light' onClick={()=>this.handleAddRemarksItem()}>submit</button>
          </div>
        </div>
        <div className="card_body">
          {remarks.length>0 ? (
            <ul className='list-group'>
              {
                remarks.map((item, index)=>(
                  <RemarksItem
                    key={index}
                    value={item}
                    id={index}
                    onDelete={this.handleDelItem.bind(this)}
                  />
                ))
              }
            </ul>
          ) : (
            <div className='text-center'> No data </div>
          )}

        </div>
      </div>
    )
  }
}
