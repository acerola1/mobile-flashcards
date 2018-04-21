import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    height: 100,
  },
  textInput: {
    fontSize: 25,
    color: '$white',
    borderWidth: 1,
    borderColor: '$white',
    borderRadius: 2,
    padding: 10,
  },
  textInputError: {
    borderColor: '$red',
    borderWidth: 3,
  },
  error: {
    color: '$red',
    fontSize: 20,
  },
});
