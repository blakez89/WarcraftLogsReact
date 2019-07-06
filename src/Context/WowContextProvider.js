import React, { createContext, Component } from "react";
import { getJsonData, getTopTalents} from "../Logic/WowFunctions";
export const WowContext = createContext();

export default class WowContextProvider extends Component {
  state = {
    zoneData: ["Battle for Dazar'alor", 21, "Champion of the Light", 2265],
    classData: ["Warlock", 10, "Destruction", 3],
    difficultyData: ["Mythic", 5],
    region: 'US',
    rankings: [],
    topTalents: [],
    loading: false
  };

  manageState = (arg, [...args]) => {
    if (arg === "Classes") {
      this.setState({ classData: args, loading: true });
      getJsonData(
        this.state.zoneData[3],
        args[1],
        args[3],
        this.state.difficultyData[1],
        this.state.region
      ).then(response => {
        this.setState({
          topTalents: getTopTalents(response),
          rankings: response,
          loading: false
        });
      });
      return true;
    }

    if (arg === "Zones") {
      this.setState({ zoneData: args, loading: true });
      getJsonData(
        args[3],
        this.state.classData[1],
        this.state.classData[3],
        this.state.difficultyData[1],
        this.state.region
      ).then(response => {
        if (response) {
          this.setState({
            topTalents: getTopTalents(response),
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
      return true;
    }

    if (arg === "Difficulty") {
      this.setState({ difficultyData: args, loading: true });
      getJsonData(
        this.state.zoneData[3],
        this.state.classData[1],
        this.state.classData[3],
        args[1],
        this.state.region
      ).then(response => {
        this.setState({
          topTalents: getTopTalents(response),
          rankings: response,
          loading: false
        });
      });
      return true;
    }
    

    if (arg === "Region"){
      this.setState({ region: args[0], loading: true });
      getJsonData(
        this.state.zoneData[3],
        this.state.classData[1],
        this.state.classData[3],
        this.state.difficultyData[1],
        args[0]
      ).then(response => {
        this.setState({
          topTalents: getTopTalents(response),
          rankings: response,
          loading: false
        });
      });
      return true;
    }

  };

  componentDidMount() {
    this.setState({ loading: true });
    getJsonData(
      this.state.zoneData[3],
      this.state.classData[1],
      this.state.classData[3],
      this.state.difficultyData[1],
      this.state.region
    ).then(response => {
      if (response) {
        this.setState({
          topTalents: getTopTalents(response),
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
          difficultyData: this.state.difficultyData,
          region: this.state.region,
          topTalents: this.state.topTalents
        }}
      >
        {this.props.children}
      </WowContext.Provider>
    );
  }
}

export const WowContextConsumer = WowContext.Consumer;
