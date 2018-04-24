export const ADD_CARD = 'ADD_CARD';
export const ADD_DECK = 'ADD_DECK';
export const DECKS_RECEIVED = 'DECKS_RECEIVED';

export function addCard(deck, question, answer) {
  return {
    type: ADD_CARD,
    deck,
    card: {
      question,
      answer,
    },
  };
}

export function addDeck(title, key) {
  return {
    type: ADD_DECK,
    deck: {
      key,
      title,
      questions: [],
    },
  };
}

export function decksReceived(decks) {
  return {
    type: DECKS_RECEIVED,
    decks,
  };
}
