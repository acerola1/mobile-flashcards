import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Color from 'color';

import reducer from './reducers';
import getMainNavigator from './config/routes';
import { MainContainer } from './components/Containers';
import asyncStorageMiddleware from './reducers/asyncStorageMiddleware';

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
  $red: 'rgba(256, 150, 150, 0.9)',
  $white: '#FFFFFF',
  $shadowColor: 'rgba(0, 0, 0, 0.24)',
});

console.disableYellowBox = true;

const App = () => {
  const MainNavigator = getMainNavigator();
  return (
    <Provider store={createStore(reducer, applyMiddleware(asyncStorageMiddleware))}>
      <MainContainer>
        <MainNavigator />
      </MainContainer>
    </Provider>
  );
};

export default App;
