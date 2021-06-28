import React,{Component, Consumer} from 'react';
import classNames from "classnames";
import {MyContext} from './index'
export default class Grandson extends Component{

  static propsTypes = {

  }

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const {state:{}} = this;
    return (
      <MyContext.Consumer>
        {value=>console.log("context====>",value)}
      </MyContext.Consumer>
    )
  }
}
