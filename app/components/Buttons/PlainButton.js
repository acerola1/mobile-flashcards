import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const PlainButton = ({
  text, callToAction = false, onPress, style,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.androidSubmitBtn, callToAction && styles.actionButton, style]}
  >
    <Text style={[styles.submitBtnText, callToAction && styles.actionText]}>{text}</Text>
  </TouchableOpacity>
);

PlainButton.propTypes = {
  text: PropTypes.string,
  callToAction: PropTypes.bool,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

export default PlainButton;
