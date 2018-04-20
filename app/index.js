import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Color from 'color';

import reducer from './reducers';
import getMainNavigator from './config/routes';
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
  const MainNavigator = getMainNavigator();
  return (
    <Provider store={createStore(reducer)}>
      <Container>
        <MainNavigator />
      </Container>
    </Provider>
  );
};

export default App;
