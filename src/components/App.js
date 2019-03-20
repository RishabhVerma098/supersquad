import React, { Component } from "react";
import CharactorList from "./CharactorList";
import HeroList from "./HerosList";
import "../css/index.css";
import Stats from "./stats";
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <CharactorList />
          </div>
          <div className="col-md-4">
            <HeroList />
          </div>
          <div className="col-md-4">
            <Stats />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
