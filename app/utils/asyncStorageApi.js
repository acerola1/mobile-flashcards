import { AsyncStorage } from 'react-native';

export const STORAGE_KEY = '@FlashCard:decks';

export function fetchDecks() {
  return AsyncStorage.getItem(STORAGE_KEY).then((response) => {
    if (response) {
      return JSON.parse(response);
    }
    return {};
  });
}

export function persistState(key, state) {
  // TODO: refactor using key
  return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
