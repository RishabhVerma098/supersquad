import React, { Component } from "react";
import { connect } from "react-redux";
class CharactorList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Charactor List</h1>
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
  null
)(CharactorList);
