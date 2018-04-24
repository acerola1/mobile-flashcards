import { ADD_CARD, ADD_DECK } from '../actions';
import { persistState } from '../utils/asyncStorageApi';

const asyncStorageMiddleware = store => next => (action) => {
  const result = next(action);

  switch (action.type) {
    case ADD_CARD:
    case ADD_DECK: {
      const { key } = action.deck;
      persistState(key, store.getState());
      break;
    }
    default:
      break;
  }

  return result;
};

export default asyncStorageMiddleware;
