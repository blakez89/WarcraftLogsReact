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
      <tr>
        {/*Fix magic number 6 here */}
        <td colSpan={6}>
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
      <React.Fragment>
        <tr>
          {/*Add color styles to rank, 1st is orange 10 top purple etc */}
          <td>{this.props.parserank}</td>
          <td>{this.props.row.title}</td>
          <td>{this.props.row.value}</td>
          <td>{this.props.row.server}</td>
          <td>{this.props.row.region}</td>

          <td>
            <button onClick={this.handleClick}>Click Me</button>
          </td>
        </tr>

        {this.state.shouldShow && this.createInfoDiv()}
      </React.Fragment>
    );
  }
}
