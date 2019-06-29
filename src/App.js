import React from 'react';
import MenuBar from './Menu/MenuBar'
import { SharedSnackbarProvider } from './Context/SharedSnackbarContext'
import WowTable from './WowTable/WowTable'
import "./App.css";

function App() {
  return (
    <div className="App">
      <SharedSnackbarProvider>      
      <MenuBar className="theMenuBar"/>
      <div className="goUnder">
       <WowTable />
       </div>
       </SharedSnackbarProvider>
    </div>
  );
}

export default App;
