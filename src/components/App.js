import React, { Component } from "react";
import SearchBar from "./search_bar";
import PokemonDetails from "./pokemon_details";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Pokedux</h1>
        <SearchBar />
        <PokemonDetails />
      </div>
    );
  }
}

export default App;