import React from "react";
import ReactDOM from "react-dom";
import OfficeImg from "../stats/img";
export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        id: 1,
        link: "https://www.docplanner.com/images/warsaw.png",
        name: "Warsaw"
      },
      {
        id: 2,
        link: "https://www.docplanner.com/images/barcelona.png",
        name: "Barcelona"
      },
      {
        id: 3,
        link: "https://www.docplanner.com/images/istanbul.png",
        name: "istanbul"
      },
      {
        id: 4,
        link: "https://www.docplanner.com/images/rome.png",
        name: "Rome"
      },
      {
        id: 5,
        link: "https://www.docplanner.com/images/mexico-city.png",
        name: "Mexico-city"
      },
      {
        id: 6,
        link: "https://www.docplanner.com/images/curitiba.png",
        name: "Curitiba"
      }
    ];
  }
  render() {
    return (
      <div>
        <div className="p1">
          <p className="stat-text">Improve the lives of millions. </p>
          <p className="stat-text">Change yours forever </p>
        </div>
        <div className="p2">
          <p className="stat-text2">
            More than 500 team mates share our same vision, goals and passion.
          </p>
          <p className="stat-text2">
            With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and
          </p>
          <p className="stat-text2">
            Curitiba, our search for great talent never stops.
          </p>
        </div>
        <section className="offices-section">
          {this.state.map(e => <OfficeImg obj={e} />)}
        </section>
      </div>
    );
  }
}
