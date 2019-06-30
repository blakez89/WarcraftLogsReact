import React, {createContext,Component} from 'react';

export const WowContext = createContext()


export default class WowContextProvider extends Component{


    state = {
        classData : ['a','b','c','d']
      };

      manageClassState = (...args) => {
        this.setState({
          classData : args
        });
    };

      render(){
        return( <WowContext.Provider value={{ manageClassState: this.manageClassState,
            classData: this.state.classData}}>
            {this.props.children}
        </WowContext.Provider>

        );

      }


}

export const WowContextConsumer = WowContext.Consumer;

