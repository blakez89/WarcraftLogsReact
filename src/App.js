import React from 'react';
import MenuBar from './Menu/MenuBar'
import WowContextProvider from './Context/WowContextProvider'
import WowTable from './WowTable/WowTable'
import "./App.css";

function App() {
  return (
    <div className="App">
      <WowContextProvider>     
      <MenuBar className="theMenuBar"/>
      <div className="goUnder">
       <WowTable />
       </div>
       </WowContextProvider>
    </div>
  );
}

export default App;
