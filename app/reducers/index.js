function decks(state = initialState, action) {
  return state;
}

const initialState = {
  React: {
    title: 'React1',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
  Question2: {
    title: 'JavaScript',
    questions: [],
  },
  Question3: {
    title: 'JavaScript',
    questions: [],
  },
  Question4: {
    title: 'JavaScript',
    questions: [],
  },
  Question5: {
    title: 'JavaScript',
    questions: [],
  },
  Question6: {
    title: 'JavaScript',
    questions: [],
  },
  Question7: {
    title: 'JavaScript',
    questions: [],
  },
  Question8: {
    title: 'JavaScript',
    questions: [],
  },
};

export default decks;
