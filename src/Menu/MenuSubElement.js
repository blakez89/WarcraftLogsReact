import React from "react";
import "./MenuSubElement.css";
import "./MenuMainElement.css";
import { WowContextConsumer } from "../Context/WowContextProvider";

export default class MenuSubElement extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = { isHovering: false };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  createList = () => {
    if (!this.props.jsonArrayLevelTwo) return;
    const numberList = this.props.jsonArrayLevelTwo.map(data => (
      <WowContextConsumer key={data.name.toString()}>
        {({ manageState }) => (
          <div
            className="accordion-content-item"
            onClick={() => {
              manageState(this.props.title, [
                this.props.jsonArrayLevelOne.name,
                this.props.jsonArrayLevelOne.id,
                data.name,
                data.id
              ]);
            }}
          >
            {data.name}
          </div>
        )}
      </WowContextConsumer>
    ));
    return <ul className="accordion-content">{numberList}</ul>;
  };

  render() {
    return (
      <div
        className="mydiv"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <div className="maindiv">
          <WowContextConsumer>
            {({ manageState }) => (
              <div
                className="accordion"
                onClick={() => {
                  this.props.jsonArrayLevelTwo
                    ? console.log("I have no children")
                    : manageState(this.props.title, [
                        this.props.jsonArrayLevelOne.name,
                        this.props.jsonArrayLevelOne.id
                      ]);
                }}
              >
                {this.props.jsonArrayLevelOne.name}
              </div>
            )}
          </WowContextConsumer>
        </div>

        <div>
          {/* This needs to be hidden depending on what we are hovering over*/}
          {this.state.isHovering && this.createList()}
        </div>
      </div>
    );
  }
}
