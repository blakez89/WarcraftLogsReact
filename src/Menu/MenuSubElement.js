import React from "react";
import "./MenuSubElement.css";
import { SharedSnackbarConsumer } from '../Context/SharedSnackbarContext'

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
                <SharedSnackbarConsumer key={data.name.toString()}>
                { ({ manageClassState })  => (
        <div className="accordion-content-item" onClick={()=>manageClassState(data.name,data.id,this.props.jsonArrayLevelOne.name,this.props.jsonArrayLevelOne.id)}>
                     {data.name}
                </div>
                )}
            </SharedSnackbarConsumer>
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