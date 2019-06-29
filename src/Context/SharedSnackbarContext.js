import React, { Component } from 'react';
import SharedSnackbar from './SharedSnackbarComponent'

const SharedSnackbarContext = React.createContext();

export class SharedSnackbarProvider extends Component {

  //this is where we need to store our WowJsonData, not in the table

  constructor(props) {
    super(props);

    this.state = {
      classData : []
    };
  }

  manageClassState = (...args) => {
    this.setState({
      classData : args
    });
};

  

  render() {
    const { children } = this.props;

    return (
      <SharedSnackbarContext.Provider
        value={{
          manageClassState: this.manageClassState,
          classData: this.state.classData
             
        }}
      >
        <SharedSnackbar />
      
        {children}
      </SharedSnackbarContext.Provider>
    );
  }
}

export const SharedSnackbarConsumer = SharedSnackbarContext.Consumer;