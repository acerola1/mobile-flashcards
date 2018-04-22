export function getDeck(key, state) {
  return state[key];
}

export function isUniqueKey(key, state) {
  return !state[key];
}
