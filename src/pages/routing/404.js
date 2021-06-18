import React,{Component} from 'react';
// import classNames from "classnames";
// import $styles from './not_find.module.scss';

export default class NotFind extends Component{

  static propsTypes = {

  }

  constructor(props) {
    super(props);


    this.state = {

    }
  }

  componentDidMount() {
    console.log('this===>', this)
  }

  render() {
    return (
      <div> 404 </div>
    )
  }
}
