import React from "react";
class Index extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      data:{
        name:'alien',
        age:28
      }
    }
  }
  handerClick= () =>{
    const { data } = this.state
    data.age++
    this.setState({ data })
  }
  render(){
    const { data } = this.state
    return <div className="box" >
      <div className="show" >
        <div> 你的姓名是: { data.name } </div>
        <div> 年龄： { data.age  }</div>
        <button onClick={ this.handerClick } >age++</button>
      </div>
    </div>
  }
}
