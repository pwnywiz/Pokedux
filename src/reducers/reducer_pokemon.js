import { FETCH_POKEMON } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POKEMON:
      return action.payload.data;
    default:
      return state;
  }
}