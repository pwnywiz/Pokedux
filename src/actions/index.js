import axios from "axios";

export const FETCH_POKEMON = "fetch_pokemon";

const ROOT_URL = "https://pokeapi.co/api/v2";
const POKEMON_DETAILS = "/pokemon";
const ABILITY_DETAILS = "/ability";

export function fetchPokemon(id) {
  const request = axios.get(`${ROOT_URL}${POKEMON_DETAILS}/${id}/`);

  return {
    type: FETCH_POKEMON,
    payload: request
  }
}