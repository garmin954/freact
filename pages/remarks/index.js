import React, {Component, createRef} from 'react';
import styles from './index.module.scss';
import classNames from "classnames";
import RemarksItem from "./item";
import store from '@/store/index'

export default class Remarks extends Component{
  constructor(props) {
    super(props);
    this.state = {
      remarks:[],
      checkCount: 0,
      allCheck: false,
    }

    this.addValRef = createRef();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevState);
  }

  // 添加
  addRemarks(){
    const value = this.addValRef.current.value;
    if (value){
      let remarks = this.state.remarks
      remarks.push({
        check: false,
        value,
      })
      // console.log(remarks);
      this.setState({
        remarks
      })

      this.addValRef.current.value = ''
    }
  }

  // 选中item
  handleCheckState(val){
    let remarks = this.state.remarks;
    remarks[val].check = !remarks[val].check;

    const checkCount = remarks.filter((item) => {
      return item.check;
    }).length

    let allCheck = false;
    if (checkCount >= remarks.length){
      allCheck = true;
    }

    this.setState({
      remarks,
      checkCount,
      allCheck
    })
  }

  // 全选
  handleCheckAll(){
    let {remarks, checkCount, allCheck} = this.state;
    let check;
    if (!allCheck){
      allCheck = true;
      checkCount = remarks.length
      check = true;
    } else{
      check = false;
      allCheck = false;
      checkCount = 0;
    }
    remarks = remarks.map(item=>{
      item.check = check
      return item;
    })
    this.setState({
      remarks,
      checkCount,
      allCheck
    })
  }

  // 删除item
  handleDeleteItem(key){
    let remarks = this.state.remarks;
    remarks = remarks.filter((item, index)=> {
      if (index !== key){
        return  item;
      }
    })
    this.setState({
      remarks,
    })
  }

  // 多选删除item
  handleCheckDeleteItem(){
    let checkCount = this.state.checkCount;
    if (checkCount <= 0){
      alert('No items selected to be deleted！');
      return ;
    }

    let remarks = this.state.remarks;
    remarks = remarks.filter((item, index)=> {
      return !item.check;
    })
    checkCount = remarks.length;
    const allCheck = false;
    this.setState({
      remarks,
      checkCount,
      allCheck
    })
  }

  render() {
    const {state:{checkCount, remarks, allCheck}, addValRef} = this
    return (
      <div className={classNames({'card': true, [styles['gm-card']]: true})}>
        <div className='card-header '>
          <div className=' input-group'>
            <input ref={addValRef} type="text" className='form-control '/>
            <button className='btn link-light btn-primary btn-outline-secondary' type="button" onClick={()=>this.addRemarks()}>submit</button>
          </div>
        </div>
        <div className='card-body'>
          {remarks.length > 0 ? (
            <ul className='list-group text-start'>
              {
                remarks.map((item, index)=>{
                  return <RemarksItem
                            key={index}
                            value={item.value}
                            index={index}
                            check={item.check}
                            onCheck={this.handleCheckState.bind(this)}
                            onDelete={this.handleDeleteItem.bind(this)}
                          />
                })
              }
            </ul>
          ) : (<span className='text-center'> 暂时没有记录 </span>)}

        </div>
        <div className='card-footer d-flex justify-content-between align-items-center'>
          <div className='col-3 float-start'>
            <input type="checkbox" checked={allCheck} onChange={()=>this.handleCheckAll()} className='form-check-input' value=""  id='selectAllTarget'/>
            <label className='form-check-label ms-1' htmlFor="selectAllTarget" >
              全选
            </label>
          </div>
          <span className='text-info col-3 text-center'>选中了{checkCount}个</span>
          <button className='btn btn-danger col-3 float-end' onClick={()=>this.handleCheckDeleteItem()}> delete </button>
        </div>
      </div>
    )
  }
}
