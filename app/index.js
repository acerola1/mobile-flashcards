import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Constants } from 'expo';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import reducer from './reducers';
import getTabs from './config/routes';
import { Container } from './components/Container';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $activeColor: '#FFFFFF',
  $shadowColor: 'rgba(0, 0, 0, 0.24)',
});
export default class App extends React.Component {
  render() {
    const Tabs = getTabs();
    return (
      <Provider store={createStore(reducer)}>
        <Container>
          <Tabs />
        </Container>
      </Provider>
    );
  }
}
