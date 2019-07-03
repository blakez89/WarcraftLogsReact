import React from "react";
import "./WowTable.css";
import WowTableRow from "./WowTableRow";
import { WowContext } from "../Context/WowContextProvider";
import uuid from "uuid/v1";

export default class WoWTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 25,
      currentPage: 1
    };
  }


  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }


  nextPage = () => {
    let booltest = this.state.currentPage * this.state.pageSize <this.context.rankings.length;
    if (booltest) {
      return <span className="activeSpan" onClick={()=>this.setState({ currentPage: this.state.currentPage + 1 })}> Next &gt;</span>;
    }
    
    return <span className="placeholderSpan">  Next &nbsp; </span>
  };


  prevPage = () => {
    let booltest = (this.state.currentPage > 1);
    if (booltest) {
      return <span className="activeSpan" onClick={()=>this.setState({ currentPage: this.state.currentPage - 1 })}> &lt; Previous </span>;
    }
    return <span className="placeholderSpan"> &nbsp; Previous  </span>
  };




  // make the prev not appear if on first page, make the next not appear if on the last page
  makePageButtons = () => {
    return (


      <div className="prevAndnext">
     {this.prevPage()}
     &nbsp;&nbsp;
     {this.nextPage()} 
    </div>
    
    
    )
  }

  maketheTablerows = () => {
    return this.context.rankings
      .map((rank, i) => <WowTableRow parserank={++i} row={rank} key={uuid()} />)
      .filter((data, index) => {
        let start = (this.state.currentPage - 1) * this.state.pageSize;
        let end = this.state.currentPage * this.state.pageSize;
        if (index >= start && index < end) return true;
      });
  };

  render() {
    return (
      <div className="wowtable">
        <table className="container" border="1">
          <tbody>
            <tr>
              <th>Rank</th>
              <th className="widerColumn">Character Name</th>
              <th className="widerColumn">Guild</th>
              <th className="widerColumn">Server</th>
              <th>Region</th>
              <th>Duration</th>
              <th>Details</th>
            </tr>

            {this.maketheTablerows()}
          </tbody>
        </table>

        <div className="buttonPanel">
          {this.makePageButtons()}

          <div className="adjusters">
            Current page:{"  " + this.state.currentPage}
            {/* Results per page:{this.state.pageSize} */}
          </div>

          <span>
            Made with <a href="https://www.warcraftlogs.com">Warcraft Logs</a>{" "}
            API
          </span>
        </div>
      </div>
    );
  }
}

WoWTable.contextType = WowContext;
