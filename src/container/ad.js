import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
export default class Ad extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.ad.class}>
        <img src={this.props.ad.img}/>
        <h4>{this.props.ad.title}</h4>
        <span>{this.props.ad.quote}</span>
      </div>
    );
  }
}
