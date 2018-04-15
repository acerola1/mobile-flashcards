import { TabNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import DeckListView from '../screens/DeckListView';
import NewDeckView from '../screens/NewDeckView';

const style = EStyleSheet.create({
  background: '$background',
  activeTintColor: 'white',
  indicator: { backgroundColor: '$lightBackground' },
  tabRoot: {
    height: 56,
    backgroundColor: '$background',
    shadowColor: '$shadowColor',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
});

// EStyleSheet must be called from a function
const getTabNavigator = () =>
  TabNavigator(
    {
      History: {
        screen: DeckListView,
        navigationOptions: {
          tabBarLabel: 'Decks',
        },
      },
      AddEntry: {
        screen: NewDeckView,
        navigationOptions: {
          tabBarLabel: 'New Deck',
        },
      },
    },
    {
      navigationOptions: {
        header: null,
      },
      tabBarOptions: {
        activeTintColor: style.activeTintColor,
        style: style.tabRoot,
        indicatorStyle: style.indicator,
      },
    },
  );

/* const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
}); */

export default getTabNavigator;
