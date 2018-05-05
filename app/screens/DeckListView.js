import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import { DeckList } from '../components/DeckList';
import { PlainButton } from '../components/Buttons';
import { fetchDecks } from '../utils/asyncStorageApi';
import { decksReceived } from '../actions';
import { setLocalNotification } from '../utils/notification';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  button: {
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: '$white',
    margin: 20,
    paddingTop: 40,
    paddingBottom: 40,
    textAlign: 'center',
  },
});

class DeckListView extends Component {
  static propTypes = {
    decks: PropTypes.object,
    navigation: PropTypes.object,
    decksReceived: PropTypes.func,
  };

  componentDidMount() {
    fetchDecks().then((decks) => {
      this.props.decksReceived(decks);
    });
    setLocalNotification();
  }

  onPress = (deck) => {
    const { navigation } = this.props;
    navigation.navigate('Deck', { deck });
  };

  render() {
    const { decks } = this.props;
    const hasDeck = Object.keys(decks).length > 0;
    return (
      <View style={styles.container}>
        {hasDeck && (
          <DeckList data={Object.keys(decks).map(key => decks[key])} onPress={this.onPress} />
        )}
        {!hasDeck && (
          <View>
            <Text style={styles.text}>There is no deck added yet.</Text>
            <PlainButton
              style={styles.button}
              text="New Deck"
              onPress={() => this.props.navigation.navigate('NewDeck')}
            />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  decks: state,
});

function mapDispatchToProps(dispatch) {
  return {
    decksReceived: decks => dispatch(decksReceived(decks)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListView);
