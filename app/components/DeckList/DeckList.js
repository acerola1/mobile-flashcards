import PropTypes from 'prop-types';
import React from 'react';
import { View, FlatList, TouchableHighlight, Text } from 'react-native';

import styles from './styles';

const renderSeparator = () => <View style={styles.separator} />;

const DeckList = ({ decks, onPress }) => (
  <View>
    <FlatList
      data={Object.values(decks).map(item => ({ key: item.title, ...item }))}
      ItemSeparatorComponent={renderSeparator}
      renderItem={({ item, separators }) => (
        <TouchableHighlight
          style={{ paddingVertical: 15 }}
          onPress={onPress}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}
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
