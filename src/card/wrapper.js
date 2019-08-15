import React from "react";
import ReactDOM from "react-dom";
import Card from "../card/card";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.wrap = [
      {
        for: "for patients",
        showOptions: "block",
        background: "#00b39b",
        title: "Find a doctor, book a visit and solve any health-related doubt",
        img: "https://www.docplanner.com/img/screen-marketplace@2x.png",
        class: "for-patient service-card"       },
      {
        for: "for doctors",
        showOptions: "none",
        background: "#3d83df",
        title: "Save time managing visits and cut no-shows by half",
        img: "https://www.docplanner.com/img/screen-saas@2x.png",
        class: "for-doctors service-card" 
      }
    ];
  }
  render() {
    return <div className="wrap">{this.wrap.map(e => <Card c={e} />)}</div>;
  }
}
