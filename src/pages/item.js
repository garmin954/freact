import React,{Component} from 'react';
import propTypes from 'prop-types'

export default class Item extends Component{

  // 约束props
  static propsTypes = {
    id: propTypes.number.isRequired,
    value: propTypes.string.isRequired,
    onDelete: propTypes.func.isRequired,
  }

  // 默认props
  static defaultProps = {
    id: 0,
    value: 'empty'
  }

  render() {
    const {props:{id, value}} = this;
    return (
      <li className='list-group-item'>
        <div className='d-flex justify-content-between align-items-center'>
          <span className='text-start'>{value}</span>
          <button className='btn btn-danger btn-sm' onClick={()=> this.props.onDelete(id)}>del</button>
        </div>
      </li>
    )
  }
}
