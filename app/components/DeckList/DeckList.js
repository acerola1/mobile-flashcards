import PropTypes from 'prop-types';
import React from 'react';
import { View, FlatList, TouchableHighlight, Text } from 'react-native';

import styles from './styles';

const renderSeparator = () => <View style={styles.separator} />;

const DeckList = ({ decks, onPress }) => (
  <View>
    <FlatList
      data={Object.entries(decks).map(([key, item]) => ({ key, ...item }))}
      ItemSeparatorComponent={renderSeparator}
      renderItem={({ item }) => (
        <TouchableHighlight
          style={{ paddingVertical: 15 }}
          onPress={() => onPress(item)}
          underlayColor={styles.$underlayColor}
        >
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.deckTitle}>{item.title}</Text>
            <Text style={styles.cardNum}>{`${item.questions.length} cards`}</Text>
          </View>
        </TouchableHighlight>
      )}
    />
  </View>
);

DeckList.propTypes = {
  decks: PropTypes.object,
  onPress: PropTypes.func,
};

export default DeckList;
