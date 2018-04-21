export const ADD_CARD = 'ADD_CARD';

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
