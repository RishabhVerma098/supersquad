import React, { Component } from "react";
import { connect } from "react-redux";
import { addCharaterById } from "../actions";
import "../css/index.css";
// remember ----> this.props.something <-----
class CharactorList extends Component {
  render() {
    return (
      <div className="contanier">
        <h4>Character list</h4>
        <ul className="list-group">
          {this.props.CharactorList.map(character => {
            return (
              <li
                className="list-group-item list-group-item-info"
                key={character.id}
              >
                {character.name}
                <div
                  className="btn right-button"
                  onClick={() => this.props.addCharaterById(character.id)}
                >
                  +
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
    CharactorList: state.characters
  };
};

export default connect(
  mapsStateToProps,
  { addCharaterById }
)(CharactorList);
