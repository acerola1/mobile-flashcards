import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DeckList } from '../components/DeckList';

class DeckListView extends Component {
  static propTypes = {
    decks: PropTypes.object,
  };

  onPress = deck => deck;

  render() {
    const { decks } = this.props;
    return (
      <View>
        <DeckList decks={decks} onPress={this.onPress} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  decks: state,
});

export default connect(mapStateToProps)(DeckListView);
