import React from "react";
import MenuBar from "./Menu/MenuBar";
import WowContextProvider from "./Context/WowContextProvider";
import WowTable from "./WowTable/WowTable";
import InfoPanel from "./InfoPanel/InfoPanel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WowContextProvider>
      <InfoPanel/>

        <div className="mainContent">
          <MenuBar className="theMenuBar" />
          <div className="goUnder">
            <WowTable />
          </div>
        </div>

        {/* 
       <div className="infoPanel">
        <h1>Hey, I'm a placeholder for more content that will be added later</h1>
          </div>     */}
      </WowContextProvider>
    </div>
  );
}

export default App;
