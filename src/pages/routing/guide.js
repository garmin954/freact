import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom'

export default class Guide extends Component{

  static propsTypes = {

  }

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const {state:{}} = this;
    return (
      <div className='list-group'>
        <div className='list-group-item'>
          <Link to={'/remarks'}>redux ζ‘δΎ</Link>
        </div>
        <div className='list-group-item'>
          <Link to={'/user'}>mini ζη</Link>
        </div>
      </div>
    )
  }
}
