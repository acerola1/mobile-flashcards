import PropTypes from 'prop-types';
import React from 'react';
import { View, FlatList, TouchableHighlight, Text } from 'react-native';

import styles from './styles';

const renderSeparator = () => <View style={styles.separator} />;

const DeckList = ({ onPress, data }) => (
  <View>
    <FlatList
      data={data}
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
  onPress: PropTypes.func,
  data: PropTypes.array,
};

export default DeckList;
