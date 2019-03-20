import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCharaterById } from "../actions";
class HerosList extends Component {
  render() {
    return (
      <div className="container">
        <h4>Heros</h4>
        <ul className="list-group">
          {this.props.heros.map(hero => {
            return (
              <li
                className="list-group-item list-group-item-info"
                key={hero.id}
              >
                {hero.name}
                <button
                  type="button"
                  className="btn btn-danger float-right"
                  onClick={() => this.props.deleteCharaterById(hero.id)}
                >
                  -
                </button>
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
