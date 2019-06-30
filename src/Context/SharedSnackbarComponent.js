import React from 'react';
import { SharedSnackbarConsumer } from './SharedSnackbarContext';

 const SharedSnackbar = () => (
    <SharedSnackbarConsumer>
      {({ classData }) => (
        <div>


        <p>Class: {classData[0]}</p>
        <p>ClassID: {classData[1]}</p>
        <p>Spec: {classData[2]}</p>
        <p>SpecID: {classData[3]}</p>
 
        </div>
      )}
    </SharedSnackbarConsumer>
  );



export default SharedSnackbar; 
/* 
export default class SharedSnackbarComponent extends React.Component{
    


  render(){
      return(
        <SharedSnackbarConsumer>
        {classData => (
          <div>
        <p>Class: {classData[0]}</p>
        <p>ClassID: {classData[1]}</p>
        <p>Spec: {classData[2]}</p>
        <p>SpecID: {classData[3]}</p>
        </div>
        )}
       
        </SharedSnackbarConsumer>
      )
  }

}
 */
