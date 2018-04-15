import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  deckTitle: {
    fontSize: 40,
  },
  cardNum: {
    fontSize: 20,
  },
});

class DeckListView extends Component {
  onPress = item => item;

  renderSeparator = () => (
    <View
      style={{
        height: 1,
        width: '86%',
        backgroundColor: '#CED0CE',
        marginRight: '14%',
      }}
    />
  );

  render() {
    const { decks } = this.props;
    return (
      <View>
        <FlatList
          data={Object.values(decks).map(item => ({ key: item.title, ...item }))}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({ item, separators }) => (
            <TouchableHighlight
              onPress={() => this.onPress(item)}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
            >
              <View>
                <Text style={styles.deckTitle}>{item.title}</Text>
                <Text style={styles.cardNum}>{`${item.questions.length} cards`}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  decks: state,
});

export default connect(mapStateToProps)(DeckListView);
