import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const PlainButton = ({ text, callToAction }) => (
  <TouchableOpacity>
    <Text>{text}</Text>
  </TouchableOpacity>
);

PlainButton.propTypes = {
  text: PropTypes.string,
  callToAction: PropTypes.bool,
};

export default PlainButton;
