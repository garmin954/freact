import React,{Component} from 'react';
import classNames from "classnames";
import Grandson from "./grandson";
export default class Son extends Component{

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
      <div> Son
        <Grandson/>
      </div>
    )
  }
}
