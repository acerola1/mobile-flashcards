import EStyleSheet from 'react-native-extended-stylesheet';
import Color from 'color';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$primaryBlue',
  },
  deckTitle: {
    fontSize: 40,
    color: '$white',
  },
  cardNum: {
    fontSize: 20,
    color: () =>
      Color(EStyleSheet.value('$white'))
        .darken(0.2)
        .hex(),
  },
  separator: {
    height: 1,
    width: '72%',
    backgroundColor: '#CED0CE',
    marginRight: '14%',
    marginLeft: '14%',
  },
});
