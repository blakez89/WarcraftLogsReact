import "./InfoPanel.css";
import {getTopTalents} from '../Logic/WowFunctions'
import React from "react";
import { WowContext } from "../Context/WowContextProvider";
import uuid from "uuid/v1";


class InfoPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    makeSimpleList = (mylist) => {
        const mynewlist = mylist.map(num=>(<p key={uuid()}>{num}</p>))
        return mynewlist;

    }


    render() { 
        return ( 
            <div className="infoPanel">
            <h1> TODO  </h1>
            {/* {this.displayTopTalents()} */}
{/*             <h2>Talent Summary</h2>
            <p>Talent 1 99% </p>
            <p>Talent 2 98%</p>
            <p>Talent 3 100%</p>
            <p>Talent 4 97%</p>
            <p>Talent 5 100%</p>
            <p>Talent 6 99%</p>
            <p>Talent 7 99%</p> */}
            {/* TODO */}
          </div>
         );
    }
}

InfoPanel.contextType = WowContext;
export default InfoPanel;

