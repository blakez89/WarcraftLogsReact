import React from "react";
import MenuSubElement from "./MenuSubElement";
import "./MenuMainElement.css";

export default class MenuMainElement extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  getJsonLevelTwo(aobject, astring) {
    return aobject[astring];
  }

  // need to use SPREAD operator
  createList = () => {
    const filteredJson = this.props.jsonObject.map(jsonData => (
      <MenuSubElement
        title={this.props.title}
        jsonArrayLevelOne={jsonData}
        jsonArrayLevelTwo={this.getJsonLevelTwo(jsonData, this.props.theString)}
        key={jsonData.name.toString()}
      />
    ));

    return filteredJson;
  };

  render() {
    return (
      <div className="forcegrid">
      <div
        className="mainaccordionbutton"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        {this.props.display}

        <div className="sublists">
        {this.state.isHovering && this.createList()}
        </div>
      </div>
      </div>
    );
  }

}
