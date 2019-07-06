import React from "react";
import "./WowTableRow.css";

export default class WowTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShow: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  createData = (dataArray, title) => {
    let tags = dataArray.map((data, i) => <li key={data + i++}>{data}</li>);

    return (
      <div>
        <h1>{title}</h1>
        <ul>{tags}</ul>
      </div>
    );
  };

 


  createInfoDiv = () => {
    return (
      <tr className="noHover">
        <td colSpan={7}>
          {/*Make the below div into a flex row */}
          <div className="infodiv">
            {this.createData(this.props.row.azeritepowers, "Azerite Powers")}

            {this.createData(this.props.row.talents, "Talents")}

            {/*Add color styles to gear quality type */}
            {this.createData(this.props.row.gear, "Gear")}
          </div>
        </td>
      </tr>
    );
  };

  handleClick() {
    this.setState(state => ({
      shouldShow: !state.shouldShow
    }));
  }

  render() {
    return (
      <React.Fragment >
        <tr className="special">
          {/*Add color styles to rank, 1st is orange 10 top purple etc */}
          <td >{this.props.parserank}</td>
          <td className="widerColumn">{this.props.row.title}</td>
          <td className="widerColumn">{this.props.row.value}</td>
          <td className="widerColumn">{this.props.row.server}</td>
          <td>{this.props.row.region}</td>
          <td>{this.props.row.time}</td>
          <td>
          <div onClick={this.handleClick}><i className={this.state.shouldShow ? 'up' : 'down'}></i></div>
          </td>
        </tr>

        {this.state.shouldShow &&  this.createInfoDiv()}
      </React.Fragment>
    );
  }
}
