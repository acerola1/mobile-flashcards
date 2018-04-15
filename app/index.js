import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Color from 'color';

import reducer from './reducers';
import getTabs from './config/routes';
import { Container } from './components/Container';

EStyleSheet.build({
  $background: '#4F6D7A',
  $slightlyLightBackground: () =>
    Color('#4F6D7A')
      .lighten(0.2)
      .hex(),
  $lightBackground: () =>
    Color('#4F6D7A')
      .lighten(0.5)
      .hex(),
  $lighterBackground: () =>
    Color('#4F6D7A')
      .lighten(0.7)
      .hex(),
  $white: '#FFFFFF',
  $shadowColor: 'rgba(0, 0, 0, 0.24)',
});

const App = () => {
  const Tabs = getTabs();
  return (
    <Provider store={createStore(reducer)}>
      <Container>
        <Tabs />
      </Container>
    </Provider>
  );
};

export default App;
