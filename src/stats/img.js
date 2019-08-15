import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
export default class OfficeImg extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <img src={this.props.obj.link} />
        <div className="bar">
          <p className="p">{this.props.obj.name}</p>
          <button className="btn btn-primary">see openings</button>
        </div>
      </div>
    );
  }
}
