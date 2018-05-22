import React, { Component } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps } from "redux";
import { fetchPokemon } from "../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchPokemon(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <input
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default connect(null, { fetchPokemon })(SearchBar);