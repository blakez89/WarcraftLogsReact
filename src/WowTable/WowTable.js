import React from 'react';
import "./WowTable.css";
import WowTableRow from './WowTableRow'
import { WowContext } from '../Context/WowContextProvider'
import uuid from 'uuid/v1'


export default class WoWTable extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      pageSize: 10,
      currentPage: 1,
    };

}

handleMouseHover() {
  this.setState(this.toggleHoverState);
}

toggleHoverState(state) {
  return {
    isHovering: !state.isHovering,
  };
}
  
nextPage = () => {
  if( (this.state.currentPage*this.state.pageSize) < this.context.rankings.length) {this.setState({currentPage : this.state.currentPage + 1})};
}

prevPage = () => {
  if(this.state.currentPage > 1) { this.setState({currentPage : this.state.currentPage - 1}) };
}    



    maketheTablerows = () =>{          
      return this.context.rankings.map((rank,i)=>
          <WowTableRow parserank={++i} row={rank} key={uuid()} />
            ).filter((data,index) => {
              let start = (this.state.currentPage-1)*this.state.pageSize;
              let end = this.state.currentPage*this.state.pageSize;
              if(index >= start && index < end) return true;            
            })
            
          }

 
    render(){
        
        return(
            <div className="wowtable">

            <table className="container" border="1">
            <tbody>
                <tr>
                <th>Rank</th>
                <th>Character Name</th>
                <th>Guild</th>
                <th>Server</th>
                <th>Region</th>
                <th>Click Me</th>
                </tr>              
              
              {this.maketheTablerows()}
              </tbody>
            </table>
        
        <div className="buttonPanel">

        <div className="prevAndnext">
        <button onClick={this.prevPage.bind(this)}>Previous</button> 
        <button onClick={this.nextPage.bind(this)}>Next</button>

  

        </div> 

          <div className="adjusters">
        Current page:{"  "+ this.state.currentPage}
        {/* Results per page:{this.state.pageSize} */}
              
              </div>

          <span>
          Made with <a href="https://www.warcraftlogs.com">Warcraft Logs</a> API
          </span>
          </div>

                  

          </div>


        )
    }

}

WoWTable.contextType = WowContext