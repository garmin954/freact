import React,{Component} from 'react';
import classNames from "classnames";

export default class Grandson extends Component{

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
      <div className={classNames()}> Grandson </div>
    )
  }
}
