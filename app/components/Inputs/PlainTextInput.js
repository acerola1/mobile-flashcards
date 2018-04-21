import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const PlainTextInput = ({ placeholder, value, onChangeText }) => (
  <TextInput
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    style={styles.textInput}
  />
);

PlainTextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
};

export default PlainTextInput;
