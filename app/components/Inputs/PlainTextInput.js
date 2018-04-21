import React from 'react';
import { TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const PlainTextInput = ({
  placeholder, value, onChangeText, error = '',
}) => (
  <View style={styles.container}>
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={[styles.textInput, error && styles.textInputError]}
    />
    <Text style={styles.error}>{error}</Text>
  </View>
);

PlainTextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  error: PropTypes.string,
};

export default PlainTextInput;
