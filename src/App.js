import React from 'react';
import MenuBar from './Menu/MenuBar'
import { SharedSnackbarProvider } from './Context/SharedSnackbarContext'
import SharedSnackbarComponent from './Context/SharedSnackbarComponent'
import WowContextProvider from './Context/WowContextProvider'
import NavBar from './NavBar/NavBar'
import WowTable from './WowTable/WowTable'
import "./App.css";

function App() {
  return (
    <div className="App">
      <WowContextProvider>
      <NavBar />      
      <MenuBar className="theMenuBar"/>
      <div className="goUnder">
       <WowTable />
       </div>
       </WowContextProvider>
    </div>
  );
}

export default App;
