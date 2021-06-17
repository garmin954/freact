import React,{Component, createRef} from 'react';
import classNames from "classnames";
import $styles from './index.module.scss';
// import request from "../../utils/request";
import {login} from "../../store/actions/user";
import store from "../../store";
export default class Index extends Component{

  constructor(props) {
    super(props);

    this.state = {
      disabledSubmit: false,
    }

    console.log('this.props=======>', this.props);
    this.accountRef = createRef();
    this.passwordRef = createRef();
  }
  // login operating
  async handleSubmit(){
    let name = this.accountRef.current.value;
    let password = this.passwordRef.current.value;
    await store.dispatch(login({name, password}));

    const {user} = store.getState();
    if (Object.keys(user).length){
      alert('success');
      this.props.history.push('/guide')
    }
  }

  render() {
    const {state:{disabledSubmit}, accountRef, passwordRef} = this;
    return (
      <div className={classNames({[$styles['login-box']]: true})}>
        <div className='card'>
          <div className='card-header text-center'>
            Login
          </div>
          <div className='card-body'>
            <div className="mb-3">
              <label htmlFor="account" className="form-label">Account</label>
              <input type="text" ref={accountRef} defaultValue={'garmin'} onChange={console.log('a')} className="form-control" id="account" placeholder="account" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" ref={passwordRef} defaultValue={'123456'} onChange={console.log('p')} className="form-control" id="password" placeholder="password" />
            </div>
            <div className="mb-3 mx-auto">
              <button className='btn btn-success w-100' type='button' disabled={disabledSubmit} onClick={()=>this.handleSubmit()}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
