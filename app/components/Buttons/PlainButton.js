import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const PlainButton = ({ text, callToAction = false }) => (
  <TouchableOpacity style={styles.androidSubmitBtn}>
    <Text style={[styles.submitBtnText, callToAction && styles.callToAction]}>{text}</Text>
  </TouchableOpacity>
);

PlainButton.propTypes = {
  text: PropTypes.string,
  callToAction: PropTypes.bool,
};

export default PlainButton;
