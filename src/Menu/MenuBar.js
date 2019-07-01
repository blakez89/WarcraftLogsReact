import React from "react";
import MenuMainElement from "./MenuMainElement";
import "./MenuBar.css";
import { Zones, Classes } from "../Logic/WowData";
import { WowContextConsumer } from "../Context/WowContextProvider";

export default class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.zones = Zones;
    this.classes = Classes;
    this.state = {
      isHovering: false
    };
  }

  getLoadingText = valueTest => {
    if (valueTest) {
      return <h1>Now Loading...</h1>;
    } else {
      return <h1>Warcraft Logs: React</h1>;
    }
  };

  render() {
    return (
      <WowContextConsumer>
        {({ classData, zoneData, loading }) => (
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
            </div>
            <div className="loadingtext">{this.getLoadingText(loading)}</div>
          </div>
        )}
      </WowContextConsumer>
    );
  }
}
