import React,{Component} from 'react';
import classNames from "classnames";
import store from "../../store";
import {getUserInfo} from "../../store/actions/user";
import Cookies from 'js-cookie';
// import $styles from './user.module.scss';

export default class User extends Component{

  static propsTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  async componentDidMount() {
    await store.dispatch(getUserInfo())
    const {user} = store.getState();
    this.setState(user)
  }

  handleLogout(){
    Cookies.remove('_token');
    alert('logout success')
    this.props.history.push('/');
  }

  render() {
    const {state:{}} = this;
    return (
      <div className={classNames()}>
        <h3>User</h3>
        <div className='list-group'>
          {
            Object.keys(this.state).map(index=>(
              <div className='list-group-item text-start'>
                <div className='text-primary d-inline'>{index}: </div>{this.state[index]}
              </div>
            ))
          }
          <div className='list-group-item'>
            <div className='btn-link btn' onClick={()=> this.handleLogout()}> logout </div>
          </div>
        </div>
      </div>
    )
  }
}
