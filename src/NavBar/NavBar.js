import React from 'react';
import { WowContext } from '../Context/WowContextProvider'


export default class NavBar extends React.Component{
    static contextType = WowContext

    render(){
        return(
          <div>
          <h1>{this.context.classData[0]}</h1>
          <h1>{this.context.classData[1]}</h1>
          <h1>{this.context.classData[2]}</h1>
          <h1>{this.context.classData[3]}</h1>
          </div>
        )
    }

}