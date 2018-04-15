import PropTypes from 'prop-types';
import React from 'react';
import { Constants } from 'expo';
import { View, StatusBar } from 'react-native';

import styles from './styles';

const UdaciStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const Container = ({ children }) => (
  <View style={styles.container}>
    <UdaciStatusBar backgroundColor={styles.container.backgroundColor} barStyle="light-content" />
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
