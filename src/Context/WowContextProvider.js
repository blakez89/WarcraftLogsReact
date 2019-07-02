import React, { createContext, Component } from "react";
import { getJsonData } from "../Logic/WowFunctions";
export const WowContext = createContext();

export default class WowContextProvider extends Component {
  state = {
    zoneData: ["Battle for Dazar'alor", 21, "Champion of the Light", 2265],
    classData: ["Warlock", 10, "Destruction", 3],
    difficultyData: ["Mythic", 5],
    rankings: [],
    loading: false
  };

  manageState = (arg, [...args]) => {
    if (arg === "Classes") {
      this.setState({ classData: args, loading: true });
      getJsonData(
        this.state.zoneData[3],
        args[1],
        args[3],
        this.state.difficultyData[1]
      ).then(response => {
        this.setState({
          rankings: response,
          loading: false
        });
      });
    }

    if (arg === "Zones") {
      this.setState({ zoneData: args, loading: true });
      getJsonData(
        args[3],
        this.state.classData[1],
        this.state.classData[3],
        this.state.difficultyData[1]
      ).then(response => {
        if (response) {
          this.setState({
            rankings: response,
            loading: false
          });
        }
        if (!response) {
          alert(
            `Sorry,there was an error retrieving information for ${
              this.state.zoneData[2]
            } `
          );
          this.setState({
            zoneData: [
              "Battle for Dazar'alor",
              21,
              "Champion of the Light",
              2265
            ],
            loading: false
          });
        }
      });
    }

    if (arg === "Difficulty") {
      this.setState({ difficultyData: args, loading: true });
      getJsonData(
        this.state.zoneData[3],
        this.state.classData[1],
        this.state.classData[3],
        args[1]
      ).then(response => {
        this.setState({
          rankings: response,
          loading: false
        });
      });
    }
  };

  componentDidMount() {
    this.setState({ loading: true });
    getJsonData(
      this.state.zoneData[3],
      this.state.classData[1],
      this.state.classData[3],
      this.state.difficultyData[1]
    ).then(response => {
      if (response) {
        this.setState({
          rankings: response,
          loading: false
        });
      }
    });
  }

  render() {
    return (
      <WowContext.Provider
        value={{
          manageState: this.manageState,
          classData: this.state.classData,
          rankings: this.state.rankings,
          zoneData: this.state.zoneData,
          loading: this.state.loading,
          difficultyData: this.state.difficultyData
        }}
      >
        {this.props.children}
      </WowContext.Provider>
    );
  }
}

export const WowContextConsumer = WowContext.Consumer;
