import React,{Component} from 'react';
import classNames from "classnames";
import store from "../../store";
import {getUserInfo} from "../../store/actions/user";
import Cookies from 'js-cookie';
import {connect} from 'react-redux'
// import $styles from './user.module.scss';

 class User extends Component{

  static propsTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {}
    console.log('this.props====>', this.state);

  }

  async componentDidMount() {
    await store.dispatch(getUserInfo())
    // const {user} = store.getState();
    // this.setState(user)
    console.log('this.props====>', this.state);
    console.log('this.props====>', this.props);
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
            Object.keys(this.props.user).map(index=>(
              <div className='list-group-item text-start' key={index}>
                <div className='text-primary d-inline'>{index}: </div>{this.props.user[index]}
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


const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(User)
