import React,{Component, } from 'react';
// import classNames from "classnames";
// import $styles from './item.module.scss';
import PropTypes from 'prop-types';
import store from "../../store";
import {checkRemarksItemCreater, delRemarksCreater} from "../../store/actions/remarks";

export default class RemarksItem extends Component{

  static propTypes = {
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    check: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleCheckItem(val){
    store.dispatch(checkRemarksItemCreater(val))

  }
  handleDeleteItem(key){
    store.dispatch(delRemarksCreater(key))
  }


  render() {
    const { props:{value, index, check}} = this;
    return (
      <li className='list-group-item' >
        <input type="checkbox"
               checked={check}
               className='form-check-input'
               id={`flexCheckDisabled-${index}`}
               onChange={()=> this.handleCheckItem(index)}
        />
        <label className="form-check-label ms-1" htmlFor={`flexCheckDisabled-${index}`}>
          {value}
        </label>
        <button className='btn btn-sm btn-danger float-end' onClick={()=>this.handleDeleteItem(index)}>del</button>
      </li>
    )
  }
}
