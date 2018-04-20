import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getDeck } from '../reducers/selectors';
import { PlainButton } from '../components/Buttons';

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck.title,
  });

  render() {
    const { deck } = this.props;
    return (
      <View>
        <Text> {deck.title} </Text>
        <Text> {deck.questions.length} </Text>
        <PlainButton text="Add Card" />
        <PlainButton text="Start Quiz" />
      </View>
    );
  }
}

const mapStateToProps = (state, props) => ({
  deck: getDeck(props.navigation.state.params.deck.key, state),
});

export default connect(mapStateToProps)(DeckView);
