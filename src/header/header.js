import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./style.css";

export default class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav
            className="navbar navbar-expand-md navbar-light bg-light sticky-top"
            id="home"
          >
            <div className="wrap">
              <Link to="/Home" className="Docplanner-title">
                <span>Docplanner</span> Group
              </Link>
              <div className="nav-link">
                <Link to="/Home" className="About">
                  About-us
                </Link>
                <Link to="/Home" className="Career">
                  Career
                </Link>
                <Link
                  to="/Home"
                  onMouseEnter={this.toggleDiv}
                  onMouseLeave={this.toggleDiv}
                  className="Departement"
                >
                  Departement
                  {this.state.show && <Box />}
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </BrowserRouter>
    );
  }
}
class Box extends React.Component {
  render() {
    return (
      <div className="forr">
        <ul className="dropdown-content">
          <li>
            <Link className="sublnk" to="/Services2">
              Marketing & PR
            </Link>
          </li>
          <li>
            <Link className="sublnk" to="/Services1">
              Customer Success & Sales
            </Link>
          </li>
          <li>
            <Link className="sublnk" to="/Services3">
              IT, Product, Design & UX
            </Link>
          </li>
          <li>
            <Link className="sublnk" to="/Services3">
              Finance & Administration
            </Link>
          </li>
          <li>
            <Link className="sublnk" to="/Services3">
              HR & more
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
