import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { getDeck } from '../reducers/selectors';
import { PlainButton } from '../components/Buttons';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  deckTitle: {
    fontSize: 50,
    color: '$white',
  },
  cardNum: {
    fontSize: 30,
    color: '$lighterBackground',
  },
});

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck.title,
  });

  render() {
    const { deck } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.deckTitle}> {deck.title} </Text>
          <Text style={styles.cardNum}> {`${deck.questions.length} cards`} </Text>
        </View>
        <View style={styles.buttonContainer}>
          <PlainButton text="Add Card" />
          <PlainButton text="Start Quiz" callToAction />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => ({
  deck: getDeck(props.navigation.state.params.deck.key, state),
});

export default connect(mapStateToProps)(DeckView);
