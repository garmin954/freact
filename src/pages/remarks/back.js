import React,{Component} from 'react';
import classNames from "classnames";
import $styles from './back.module.scss';

export default class Back extends Component{

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
      <div className={classNames({'row': true, })}>
        <div className='col-5'>
            <button type='button' className='btn btn-light'>《= back</button>
        </div>
      </div>
    )
  }
}
