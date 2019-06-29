import React from 'react';
import { SharedSnackbarConsumer } from '../Context/SharedSnackbarContext'


export default class ButtonTestComponent extends React.Component{
    

    render(){
        return(
        <SharedSnackbarConsumer>
        
        { ({ openSnackbar })  => (
        <div>
        <button onClick={()=>openSnackbar('You clicked Button 1')}>
      
             i am button 1
          </button>

  <button onClick={()=>openSnackbar('You clicked Button 2')}>
      
    i am button 2
        </button>
        </div>
      
      )}
        
       
          
        
        
        </SharedSnackbarConsumer>
        )
    }

}