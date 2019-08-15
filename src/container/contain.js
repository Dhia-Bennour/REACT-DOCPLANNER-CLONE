import React from "react";
import ReactDOM from "react-dom";
import Ad from "../container/ad";
export default class Contain extends React.Component {
  constructor(props) {
    super(props);
    

    this.ads = [
      {
        id: 1,
        img: "https://www.docplanner.com/img/flag.png",
        title: "Leader in 8 countries",
        quote:
          "Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile",
          class: "one"
      },
      {
        id: 2,
        img: "https://www.docplanner.com/img/visits.png",
        title: "600 000 appointments",
        quote: "booked last month",
        class: "two"
      },
      {
        id: 3,
        img: "https://www.docplanner.com/img/patients.png",
        title: "20 million unique patients",
        quote: "visit us every month",
        class: "three"
      },
      {
        id: 4,
        img: "https://www.docplanner.com/img/doctors.png",
        title: "35 000 active doctors",
        quote: "trust in our solutions",
        class: "four"
      }
    ];
  }
  render() {
    return (
      <div className="contain">
        <div className="doc-img">
          <h2>The world's biggest healthcare platform</h2>
          <p>
            We work from 6 offices all over the world, bringing Docplanner Group
            to life in almost 20 countries.
          </p>
          <img src="https://www.docplanner.com/img/logo.png" />
        </div>
        <div className="ads">{this.ads.map(e => <Ad ad={e} />)}</div>
      </div>
    );
  }
}

