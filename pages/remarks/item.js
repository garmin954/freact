import React,{Component, } from 'react';
import classNames from "classnames";
import $styles from './item.module.scss';
import PropTypes from 'prop-types';

export default class RemarksItem extends Component{

  static propTypes = {
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    check: PropTypes.bool.isRequired,
    onCheck: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const {state:{}, props:{value, index, check, onCheck, onDelete}} = this;
    return (
      <li className='list-group-item' >
        <input type="checkbox"
               checked={check}
               className='form-check-input'
               id={`flexCheckDisabled-${index}`}
               onChange={()=> onCheck(index)}
        />
        <label className="form-check-label ms-1" htmlFor={`flexCheckDisabled-${index}`}>
          {value}
        </label>
        <button className='btn btn-sm btn-danger float-end' onClick={()=>onDelete(index)}>del</button>
      </li>
    )
  }
}
