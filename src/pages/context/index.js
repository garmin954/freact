import React,{Component, createContext} from 'react';
import classNames from "classnames";
import MarkDown from "../../components/MarkDown";
import Son from "./son";
export const MyContext = createContext('Garmin')

export default class Index extends Component{

  static propsTypes = {

  }

  constructor(props) {
    super(props);


    this.state = {
      name: 'Garmin'
    }
  }

  render() {
    const {state:{name}} = this;
    return (
      <>
        <MyContext.Provider value={name}>
          <div className={classNames()}>
            <Son />
          </div>
        </MyContext.Provider>

        <MarkDown
            sourcePos={true}
            sources={require(`!!raw-loader!./index.md`).default}/>
      </>
    )
  }
}
