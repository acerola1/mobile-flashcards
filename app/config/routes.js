import { TabNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import DeckListView from '../screens/DeckListView';
import NewDeckView from '../screens/NewDeckView';

const style = EStyleSheet.create({
  tabBar: {
    height: 56,
    backgroundColor: '$primaryBlue',
    shadowColor: '$shadowColor',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  activeColor: '$activeColor',
});

export default TabNavigator(
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
      activeTintColor: style.activeColor,
      style: style.tabBar,
    },
  },
);

/* const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
}); */
