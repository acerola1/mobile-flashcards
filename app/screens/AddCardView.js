import React, { Component } from 'react';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import { PlainButton } from '../components/Buttons';
import Container from '../components/Container/Container';
import { addCard } from '../actions';
import { getDeck } from '../reducers/selectors';
import { PlainTextInput } from '../components/Inputs';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },

  buttonStyle: {
    margin: 20,
  },
});

class AddCardView extends Component {
  static navigationOptions = () => ({
    title: 'Add Card',
  });

  static propTypes = {
    deck: PropTypes.object,
    navigation: PropTypes.object,
    addCard: PropTypes.func,
  };

  state = {
    question: '',
    answer: '',
  };

  handleAddCard = () => {
    this.props.addCard(this.props.deck, this.state.question, this.state.answer);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <Container style={styles.container}>
        <PlainTextInput
          placeholder="Question"
          value={this.state.question}
          onChangeText={val => this.setState({ question: val })}
        />
        <PlainTextInput
          placeholder="Answer"
          value={this.state.answer}
          onChangeText={val => this.setState({ answer: val })}
        />
        <PlainButton
          style={styles.buttonStyle}
          text="Submit"
          onPress={this.handleAddCard}
          callToAction
        />
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCard: (deck, question, answer) => dispatch(addCard(deck, question, answer)),
  };
}

const mapStateToProps = (state, props) => ({
  deck: getDeck(props.navigation.state.params.deck.key, state),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCardView);
