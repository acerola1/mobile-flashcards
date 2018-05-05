import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import { getDeck } from '../reducers/selectors';
import { PlainButton } from '../components/Buttons';

const styles = EStyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  counter: {
    fontSize: 20,
    color: '$white',
    textAlign: 'left',
    margin: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  question: {
    fontSize: 35,
    color: '$white',
    textAlign: 'center',
  },
  switch: {
    fontSize: 20,
    color: '$white',
    margin: 5,
    textAlign: 'center',
  },
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  resultText: {
    fontSize: 30,
    color: '$white',
    textAlign: 'center',
    margin: 5,
  },
});

const defaultState = {
  currentCard: 0,
  correct: 0,
  showFront: true,
};

class QuizView extends Component {
  static navigationOptions = () => ({
    title: 'Quiz',
  });

  static propTypes = {
    deck: PropTypes.object,
    navigation: PropTypes.object,
  };

  state = defaultState;

  handleCorrect = () => {
    this.setState(prevState => ({ correct: prevState.correct + 1 }));
    this.nextCard();
  };

  nextCard = () => {
    this.setState(prevState => ({ currentCard: prevState.currentCard + 1, showFront: true }));
  };

  turnCard = () => {
    this.setState(prevState => ({ showFront: !prevState.showFront }));
  };

  handleRestart = () => {
    this.setState(defaultState);
  };

  render() {
    const { questions } = this.props.deck;
    const { currentCard, showFront, correct } = this.state;
    const ended = currentCard === questions.length;
    return (
      <View style={styles.outerContainer}>
        <Text style={styles.counter}>{!ended && `${currentCard + 1}/${questions.length}`}</Text>
        {!ended && (
          <View style={styles.container}>
            <TouchableWithoutFeedback style={styles.textContainer} onPress={this.turnCard}>
              <View>
                <Text style={styles.question}>
                  {' '}
                  {questions[currentCard][showFront ? 'question' : 'answer']}{' '}
                </Text>
                <Text style={styles.switch}>{`show ${showFront ? 'answer' : 'question'}`}</Text>
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.buttonContainer}>
              <PlainButton text="Incorrect" onPress={this.nextCard} />
              <PlainButton text="Correct" onPress={this.handleCorrect} callToAction />
            </View>
          </View>
        )}
        {ended && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{`Result: ${correct}/${questions.length}`}</Text>
            <View style={styles.buttonContainer}>
              <PlainButton text="Restart Quiz" onPress={this.handleRestart} />
              <PlainButton
                text="Back to Deck"
                onPress={() => this.props.navigation.goBack()}
                callToAction
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state, props) => ({
  deck: getDeck(props.navigation.state.params.deck.key, state),
});

export default connect(mapStateToProps)(QuizView);
