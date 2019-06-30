import React from 'react';
import { WowContext } from '../Context/WowContextProvider'
import "./NavBar.css";

export default class NavBar extends React.Component{


    getLoadingText= () =>{
      if(this.context.loading){
        return<p>hey im loading now</p>
      }
      else{
        return<p>im not loading now</p>
      }

    }

    render(){
        return(

          <div className="debugdiv">
          <h1>{this.getLoadingText()}</h1>  
          <div className="bered">
          <h2>Class Name: {this.context.classData[0]}</h2>
          <h2>Class ID: {this.context.classData[1]}</h2>
          <h2>Spec Name:{this.context.classData[2]}</h2>
          <h2>Spec ID {this.context.classData[3]}</h2>
          </div>
          <div className="beblue">
          <h2>Zone Name: {this.context.zoneData[0]}</h2>
          <h2>Zone ID: {this.context.zoneData[1]}</h2>
          <h2>Encounter Name:{this.context.zoneData[2]}</h2>
          <h2>Encounter ID {this.context.zoneData[3]}</h2>
          </div>
          </div>
        )
    }

}

NavBar.contextType = WowContext