import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="intro">
        <img
          className="introduction-logo"
          src="https://www.docplanner.com/img/sygnet.png"
        />
        <p class="introduction-title">
          Making the healthcare experience more human
        </p>
        <div class="introduction-text">
          <p class="introduction-paragraph">
            {/* {" "} */}
            We want patients to find the perfect doctor and book an appointment
            in the most easy way. The patient journey should be enjoyable, and
            that's why we are always next to them: to help them find the best
            possible care. Anytime, anywhere.
          </p>
          <p class="introduction-paragraph">
            {/* {" "} */}
            We also help doctors to better manage their practice and build their
            online reputation. With our integrated end-to-end solution, doctors
            are able not only to improve their online presence, but also to
            devote their time to what really matters: their patients
          </p>
        </div>
      </div>
    );
  }
}
