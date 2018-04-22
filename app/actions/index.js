export const ADD_CARD = 'ADD_CARD';
export const ADD_DECK = 'ADD_DECK';

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
