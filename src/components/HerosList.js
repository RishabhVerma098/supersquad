import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCharaterById } from "../actions";
class HerosList extends Component {
  render() {
    return (
      <div>
        <h2>Heros</h2>
        <ul>
          {this.props.heros.map(hero => {
            return (
              <li key={hero.id}>
                {hero.name}
                <div onClick={() => this.props.deleteCharaterById(hero.id)}>
                  -
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapsStateToProps = state => {
  return {
    heros: state.heros
  };
};

export default connect(
  mapsStateToProps,
  { deleteCharaterById }
)(HerosList);
