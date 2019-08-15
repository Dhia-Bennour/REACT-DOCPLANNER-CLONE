import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import "./style.css";
export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
      className={this.props.c.class}
        style={{ backgroundColor: this.props.c.background }}
      >
        <p className="for">{this.props.c.for}</p>
        <h2 className="service-card-title">
          <p>{this.props.c.title}</p>
        </h2>
        <div className="service-card-content">
          <select className="service-card-select" style={{ display: this.props.c.showOptions }}>
            <option value="">choose a country</option>
            <option value="">tunisia</option>
            <option value="">france</option>
            <option value="">Italy</option>
            <option value="">Spain</option>
          </select>
          <img className="service-card-img" src={this.props.c.img} />
        </div>
      </div>
    );
  }
}
