import React, { Component } from "react";
import { connect } from "react-redux";

class PokemonDetails extends Component {
  render() {
    const { pokemon } = this.props;

    console.log(pokemon);

    if (!Object.keys(pokemon).length) {
      return null;
    }

    return(
      <div className="pokemon_details">
        <img src={pokemon.sprites.front_default} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon
  }
}

export default connect(mapStateToProps)(PokemonDetails);