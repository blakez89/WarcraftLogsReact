import "./InfoPanel.css";
import {getTopTalents} from '../Logic/WowFunctions'
import React from "react";
import { WowContext } from "../Context/WowContextProvider";
import uuid from "uuid/v1";


class InfoPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mylist:[1,2,3,4,5]
        }
    }
    
    makeSimpleList = () => {
        return this.context.topTalents.map(talent=>(<p key={uuid()}>{talent}</p>))
        

    }


    render() { 
        return ( 
            <div className="infoPanel">
            <h1> Talent Analysis </h1>
            {this.makeSimpleList(this.state.mylist)}
          </div>
         );
    }
}

InfoPanel.contextType = WowContext;
export default InfoPanel;

