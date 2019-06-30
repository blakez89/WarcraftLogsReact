import React from 'react';
import {getJsonData} from '../Logic/WowFunctions'
import "./WowTable.css";
import WowTableRow from './WowTableRow'
import { SharedSnackbarConsumer } from '../Context/SharedSnackbarContext'



export default class WoWTable extends React.Component{

    // each table row needs its own state
    constructor(props){
        super(props);
        this.state = {
          trymockJsonData: [],
        };
        
    }

     componentDidMount(){
      getJsonData(2265,10,3).then(response=>{
        this.setState(
            {
              trymockJsonData: response
            }


        )


      })


    } 

/*      createWorkingData = (myArray) => {
        let myNewArray = []

        myArray.forEach(char =>
            myNewArray.push({
              title: char.name,
              value: char.guildName,
              server: char.serverName,
              region: char.regionName,
              talents: char.talents.map(talent => talent.name),
              azeritepowers: char.azeritePowers
                .filter(
                  azeritePower => azeritePower.ring === 3 || azeritePower === 2
                )
                .map(azeritePower => azeritePower.name),
                gear: char.gear.map(gear=>gear.name)
            })
          );

        return myNewArray;    
    }  */
    
    maketheTablerows = () =>{            
      return this.state.trymockJsonData.map((rank,i)=>
          <WowTableRow parserank={++i} row={rank} key={rank.title} />
            )

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
        
        <button>Previous</button> 
        <button>Next</button>
         
          </div>

                  




        )
    }

}