import initialState from './initialState';
import { ADD_CARD, ADD_DECK } from '../actions';

function deck(state, action) {
  switch (action.type) {
    case ADD_CARD:
      return { ...state, questions: [...state.questions, action.card] };
    default:
      return state;
  }
}

function decks(state = {}, action) {
  switch (action.type) {
    case ADD_CARD: {
      const { key } = action.deck;
      return { ...state, [key]: deck(state[key], action) };
    }
    case ADD_DECK: {
      const { key } = action.deck;
      return { ...state, [key]: action.deck };
    }
    default:
      return state;
  }
}

export default decks;
