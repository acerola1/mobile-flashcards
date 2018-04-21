import initialState from './initialState';
import { ADD_CARD } from '../actions';

function deck(state, action) {
  switch (action.type) {
    case ADD_CARD:
      return { ...state, questions: [...state.questions, action.card] };
    default:
      return state;
  }
}

function decks(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD: {
      const { key } = action.deck;
      return { ...state, [key]: deck(state[key], action) };
    }
    default:
      return state;
  }
}

export default decks;
