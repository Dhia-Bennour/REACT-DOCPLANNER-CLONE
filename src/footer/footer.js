import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import "./style.css";
export default class Footer extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Footer">
          <hr />
          <p>
            We are leaders in 8 countries:
            <NavLink to="">Poland</NavLink>,
            <NavLink to="">Turkey</NavLink>,
            <NavLink to="">Spain</NavLink>,
            <NavLink to="">Italy</NavLink>,
            <NavLink to="">Mexico</NavLink>,
            <NavLink to="">Brazil</NavLink>,
            <NavLink to="">Argentina</NavLink>
            <NavLink to="">Chile</NavLink>
          </p>
          <p>
            This site uses cookies to deliver services in accordance with this
            Privacy Policy. You can specify the conditions for storing or
            accessing cookies on your browser. www.docplanner.com © 2018
          </p>
        </div>
      </BrowserRouter>
    );
  }
}
