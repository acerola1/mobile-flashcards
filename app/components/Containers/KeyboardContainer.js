import PropTypes from 'prop-types';
import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';

const KeyboardContainer = ({ children, style = {} }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={[styles.container, style]}>{children}</View>
  </TouchableWithoutFeedback>
);

KeyboardContainer.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};

export default KeyboardContainer;
