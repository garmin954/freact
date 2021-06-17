import React, {Component, createRef} from 'react';
import styles from './index.module.scss';
import classNames from "classnames";
import RemarksItem from "./item";
import store from '../../store/index';
import Back from "./back";
import {
  addRemarksCreater,
  checkRemarksAllCreater,
  delCheckRemarksCreater
} from '../../store/actions/remarks';

export default class Remarks extends Component{
  constructor(props) {
    super(props);
    this.state = {
      remarks: [],
      checkCount: 0,
      allCheck: false,
    }

    this.addValRef = createRef();
  }

  componentDidMount() {
    this.storeStateChange()
    // subscribe可以监听redux state的变化, 返回一个函数可以结束监听
    let unsubscribe = store.subscribe(() => {
      this.storeStateChange()
    });

    // unsubscribe(); // 结束监听
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevState);

  }

  componentWillUnmount() {
    // unsubscribe();
  }

  // 添加
  addRemarks(){
    const value = this.addValRef.current.value;
    if (value){
      store.dispatch(addRemarksCreater(value));
      this.addValRef.current.value = ''
    }
  }
  // 获取state
  storeStateChange(){
    // store.getState可以获取redux的state
    const {remarks} = store.getState();
    this.setState(remarks)
  }

  // 全选
  handleCheckAll(){
    store.dispatch(checkRemarksAllCreater())
  }


  // 多选删除item
  handleCheckDeleteItem(){
    if (this.state.checkCount <= 0){
      alert('No items selected to be deleted！');
      return ;
    }
    store.dispatch(delCheckRemarksCreater())
  }

  render() {
    const {state:{checkCount, remarks, allCheck}, addValRef} = this
    return (
      <div>
        <Back />
        <div className={classNames({'card': true, [styles['gm-card']]: true})}>
          <div className='card-header '>
            <div className=' input-group'>
              <input
                ref={addValRef}
                onKeyDown={(e)=> e.keyCode === 13 && this.addRemarks()}
                type="text"
                className='form-control'
              />
              <button
                className='btn link-light btn-primary btn-outline-secondary'
                type="button"
                onClick={()=>this.addRemarks()}
              >
                submit
              </button>
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
      </div>
    )
  }
}
