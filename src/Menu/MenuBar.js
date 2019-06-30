import React from 'react';
import MenuMainElement from './MenuMainElement'
import "./MenuBar.css";
import {Zones,Classes} from '../Logic/WowData'


export default class MenuBar extends React.Component{
    constructor(props){
        super(props);
        this.zones = Zones;
        this.classes = Classes;
        this.state = {
      isHovering: false,
    };
    }

    render(){
        return(
            <div className="menuitems">
        <MenuMainElement jsonObject={this.zones} theString={'encounters'} title="Zones" />
        <MenuMainElement jsonObject={this.classes} theString={'specs'} title="Classes" />
            
       
        </div> 
        )
    }

}