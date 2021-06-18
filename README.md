# Garmin learns React process and knowledge points

## create react app
**1. 安装create-react-app**
`> npm install -g create-react-app`
**2. 创建项目**
`> create-react-app project`
## 创建一个页面
### 初识组件结构
**1. 在`src`目录下创建`pages`目录，pages下创建一个`index.js`文件,具体代码结构如下：**
``` javascript
import React,{Component} from 'react';
// 创建一个Index类组件，继承 React的Component组件类的方法属性
export default class Index extends Component{
  // 构造函数
  constructor(props) {
    // 继承
    super(props);
    // 变量
    this.state = {
    }
  }

  // 渲染视图方法，jsx语法
  render() {
    const {state:{}} = this;
    return (
      <div> Index </div>
    )
  }
}
```
### 认识jsx语法
> jsx语法React.createElement 三个参数 元素类型（div,img,span...）,元素属性（value, src ...）， 子元素. 注意没有`text`类型

**1. 普通属性值把引号换成大括号即可：**
```
<img src={srcPath} alt={altTitle}/>
```
* 像class的话vue里面是`:class={{obj}}`,在react里是不行的需要安装`classname`插件 `class={className({obj})}`*

**2. 事件属性 和原生的使用差不多，差别是react的事件名是驼峰式的`onChange, onClick`**
* 事件里直接调用方法是不正确的`this`会丢失指向 解决方法：
    * 使用箭头函数
    * 在构造函数里对方法进行this 绑定， `this.clickActionOperating = this.clickActionOperating.bind(this)`**
    
**3. 判断可以使用三元运算符**
```
<div>
  {
    true ? <span>tue</span> : <span>false</span>
  }
</div>
```    

**4. 循环可以利用`map`会返回一个新数组实现**
```
<div>
  {
    [1,2,3].map(num=>(
      <div>num</div>
    ))
  }
</div>
```






















```

```
> 好了现在已经熟悉了一个基础react的组件
### 组件Props传值
1. 约束props，需要用到`prop-types`插件
```
import PropTypes from 'prop-types';
export default class Index extends Component{
  static propTypes = {
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    check: PropTypes.bool.isRequired,
  }
})
```
2. 默认props
```
 static defaultProps = {
    value:'Garmin',
  }
```
### 写一个小案例
> 根据上面的知识点我们足以写一个备注列表的小组件了。
** 1. 需求 功能**
* 备注列表
* 添加备注
* 删除备注
```
import React,{Component, createRef} from 'react';
// 创建一个Index类组件，继承 React的Component组件类的方法属性
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
                  <li className='list-group-item'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <span className='text-start'>{item}</span>
                      <button className='btn btn-danger btn-sm' onClick={()=> this.handleDelItem(index)}>del</button>
                    </div>
                  </li>
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
```

## 使用状态管理器
> 安装`npm install --save react-redux`
### 
## 使用路由
> 路由需要安装`react-router-dom`
## 插件安装
### 使用`Bootstrap` SCSS样式
1. 安装Bootstrap
`npm i bootstrap`
2. 安装sass插件
> react 默认可以使用sass，只要安装sass即可。
`npm i node-sass -D`
3. 在项目中引入bootstrap scss
在入口文件index.js引入
```
// 全局引入 bootstrap ，组件中都可以使用bootstrap提供的样式表
import 'bootstrap/scss/bootstrap.scss';
```
### classnames 
1. 安装：`npm install classnames`
2. 使用：
```
 var classNames = require('classnames');

var Button = React.createClass({
  // ...
  render () {
    var btnClass = classNames({
      'btn': true,
      'btn-pressed': this.state.isPressed,
      'btn-over': !this.state.isPressed && this.state.isHovered
    });
    return <button className={btnClass}>{this.props.label}</button>;
  }
});
```
