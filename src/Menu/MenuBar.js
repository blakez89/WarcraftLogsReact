import React from "react";
import MenuMainElement from "./MenuMainElement";
import "./MenuBar.css";
import { Zones, Classes, Difficulty } from "../Logic/WowData";
import { WowContextConsumer } from "../Context/WowContextProvider";

export default class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.zones = Zones;
    this.classes = Classes;
    this.difficulty = Difficulty;
    this.state = {
      isHovering: false
    };
  }

  getLoadingText = valueTest => {
    if (valueTest) {
      return <h2>Now Loading...</h2>;
    } else {
      return <h2>Warcraft Logs: React</h2>;
    }
  };

  render() {
    return (
      <WowContextConsumer>
        {({ classData, zoneData, loading,difficultyData }) => (
          <div className="mainMenu">
            <div className="menuitems">
              <MenuMainElement
                jsonObject={this.zones}
                theString={"encounters"}
                title="Zones"
                display={loading ? "..." : zoneData[2]}
              />
              <MenuMainElement
                jsonObject={this.classes}
                theString={"specs"}
                title="Classes"
                display={loading ? "..." : classData[2] + " " + classData[0]}
              />
                <MenuMainElement
                jsonObject={this.difficulty}
                title="Difficulty"
                display={loading ? "..." : difficultyData[0]}
              />  





            </div>
            <div className="loadingtext">{this.getLoadingText(loading)}</div>
          </div>
        )}
      </WowContextConsumer>
    );
  }
}
