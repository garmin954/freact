import React, { Component } from 'react'
import {Redirect,Route} from "react-router-dom"
import Cookies from 'js-cookie';
import store from "../store";
import {loginState} from "../store/actions/user";
export default class AuthRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login_state: true
    }
    this.unsubscribe = null;
  }

  componentDidMount() {
    store.subscribe(()=>{
      this.getLoginState()
    })
  }

  componentWillUnmount() {
    this.unsubscribe?.();
  }

  getLoginState(){
    const {login_state} = store.getState()
    this.setState = {login_state};
  }

  render() {
    const token = Cookies.get('_token') || ''
    return (
      <div>
        {/*<Route*/}
        {/*  render = {props => {*/}
        {/*    console.log('props=========>', this.state.login_state)*/}
        {/*    return this.state.login_state ? (<Component {...this.props}/>) :(*/}
        {/*      <Redirect to={{*/}
        {/*        pathname:"/login",*/}
        {/*        state:{from:props.location}*/}
        {/*      }}/>*/}
        {/*    )*/}
        {/*  }*/}
        {/*  }*/}
        {/*>*/}

        {/*</Route>*/}
        {
          token ? <Route {...this.props}></Route>:
            <Redirect to="/login"></Redirect>
        }
      </div>
    )
  }
}
