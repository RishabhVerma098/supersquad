import React, { Component } from "react";
import { connect } from "react-redux";

class Stats extends Component {
  strength() {
    let strength = 0;
    this.props.hero.forEach(hero => (strength += hero.strength));
    return strength;
  }
  speed() {
    let speed = 0;
    this.props.hero.forEach(hero => (speed += hero.speed));
    return speed;
  }
  intelligence() {
    let intelligence = 0;
    this.props.hero.forEach(hero => (intelligence += hero.intelligence));
    return intelligence;
  }

  render() {
    return (
      <div>
        <h4>Statistics</h4>
        <p>Overall strength :{this.strength()}</p>
        <p>Overall speed :{this.speed()}</p>
        <p>Overall inteligence :{this.intelligence()}</p>
      </div>
    );
  }
}

const mapsStateToProps = state => {
  return {
    hero: state.heros
  };
};

export default connect(
  mapsStateToProps,
  null
)(Stats);
