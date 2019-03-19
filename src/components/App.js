import React, { Component } from "react";
import CharactorList from "./CharactorList";
import HeroList from "./HerosList";
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <CharactorList />
        <HeroList />
      </div>
    );
  }
}

export default App;
