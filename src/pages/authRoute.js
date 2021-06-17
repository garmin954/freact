import React, { Component } from 'react'
import {Redirect,Route} from "react-router-dom"
import Cookies from 'js-cookie';
export default class AuthRoute extends Component {
  render() {
    let token = Cookies.get('_token') || ''
    return (
      <div>
        {
          token ? <Route {...this.props}></Route>:
            <Redirect to="/login"></Redirect>
        }
      </div>
    )
  }
}
