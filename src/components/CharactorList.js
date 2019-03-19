import React, { Component } from "react";
import { connect } from "react-redux";
import { addCharaterById } from "../actions";
// remember ----> this.props.something <-----
class CharactorList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.CharactorList.map(character => {
            return (
              <li key={character.id}>
                {character.name}
                <div onClick={() => this.props.addCharaterById(character.id)}>
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
