import React from "react";
import MenuBar from "./Menu/MenuBar";
import WowContextProvider from "./Context/WowContextProvider";
import WowTable from "./WowTable/WowTable";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WowContextProvider>
        <div className="infoPanel">
          {/* TODO */}
          <h2>Top Talents</h2>

          <li>Talent 1 99% </li>
          <li>Talent 2 98%</li>
          <li>Talent 3 100%</li>
          <li>Talent 4 97%</li>
          <li>Talent 5 100%</li>
          <li>Talent 6 99%</li>

          <h2>Top Azerite Power</h2>

          <li>Azerite Power 1</li>
          <li>Azerite Power 2</li>
          <li>Azerite Power 3</li>
          <li>Azerite Power 4</li>
          <li>Azerite Power 5</li>
          <li>Azerite Power 6</li>
          <br></br>
          <button>Click here to hide this panel</button>
          {/* TODO */}
        </div>

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
