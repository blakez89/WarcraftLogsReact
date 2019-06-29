import React from 'react';
import { SharedSnackbarConsumer } from './SharedSnackbarContext';

const SharedSnackbar = () => (
    <SharedSnackbarConsumer>
      {({ classData }) => (
        <div>
{/*         <p>Zone: {zone}</p>
        <p>ZoneID: {zoneId}</p>
        <p>Encounter: {encounter}</p>
        <p>EncounterId: {encounterId}</p> */}

        <p>Class: {classData[0]}</p>
        <p>ClassID: {classData[1]}</p>
        <p>Spec: {classData[2]}</p>
        <p>SpecID: {classData[3]}</p>
 
        </div>
      )}
    </SharedSnackbarConsumer>
  );



















export default SharedSnackbar;