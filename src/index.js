import React from "react";
import ReactDOM from "react-dom";
import Head from "./header/header";
import Intro from "./intro";
import Wrapper from "./card/wrapper";
import Banner from "./brand/banner";
import Footer from "./footer/footer";
import Stats from "./stats/stats";
import Contain from "./container/contain";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <Head />
        <Intro />
        <Wrapper />
        <Banner />
        <Contain />
        <Stats />
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
