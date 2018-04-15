import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$background',
  },
  deckTitle: {
    fontSize: 40,
    color: '$white',
  },
  cardNum: {
    fontSize: 20,
    color: '$lighterBackground',
  },
  separator: {
    height: 1,
    width: '72%',
    backgroundColor: '$lightBackground',
    marginRight: '14%',
    marginLeft: '14%',
  },
});
