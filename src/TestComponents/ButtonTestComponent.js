import React from "react";



export default class ButtonTestComponent extends React.Component{
    

  constructor(props){
    super(props);
    this.state = {
        value : 0
    }
}

handleClick(){
    this.setState({
        value : this.state.value + 1
    })
}

render(){
    return( <button type="button" onClick={this.handleClick.bind(this)}> {this.state.value} </button> )
}

}