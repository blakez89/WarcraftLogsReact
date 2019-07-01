import React from "react";
import "./MenuSubElement.css";
import "./MenuMainElement.css";
import {WowContextConsumer} from '../Context/WowContextProvider'

export default class MenuSubElement extends React.Component{
    constructor(props){
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {isHovering: false};    
}

// see if we can inherit these methods from MenuMainElement????
handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }



createList = () =>{
    const numberList = this.props.jsonArrayLevelTwo.map( (data)=>
                <WowContextConsumer key={data.name.toString()}>

                { ({ manageState })  => (
        <div className="accordion-content-item" onClick={()=>
        {manageState(this.props.title,[this.props.jsonArrayLevelOne.name, this.props.jsonArrayLevelOne.id,data.name, data.id])} }>
                     {data.name}
                </div>
                )}


            </WowContextConsumer>
    );
    return (
        <ul className="accordion-content">{numberList}</ul>
    ); 
}



    render(){
    return(
        <div className="mydiv"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
        >

    <div className="maindiv">
    <div className="accordion">

        {/* This always needs to be displayed*/}
    {this.props.jsonArrayLevelOne.name} 
    </div>
     </div>



        <div>
             {/* This needs to be hidden depending on what we are hovering over*/}
        {this.state.isHovering &&this.createList()}
        </div>
        
        
        
        </div>
    )
}



}