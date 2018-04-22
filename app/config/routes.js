import { TabNavigator, StackNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import DeckListView from '../screens/DeckListView';
import NewDeckView from '../screens/NewDeckView';
import DeckView from '../screens/DeckView';
import AddCardView from '../screens/AddCardView';
import QuizView from '../screens/QuizView';

const style = EStyleSheet.create({
  $backgroundCol: '$background',
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
      Decks: {
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

const getMainNavigator = () =>
  StackNavigator(
    {
      Home: {
        screen: getTabNavigator(),
      },
      Deck: {
        screen: DeckView,
        navigationOptions: {
          headerTintColor: style.activeTintColor,
          headerStyle: {
            backgroundColor: style.$backgroundCol,
          },
        },
      },
      NewCard: {
        screen: AddCardView,
        navigationOptions: {
          headerTintColor: style.activeTintColor,
          headerStyle: {
            backgroundColor: style.$backgroundCol,
          },
        },
      },
      Quiz: {
        screen: QuizView,
        navigationOptions: {
          headerTintColor: style.activeTintColor,
          headerStyle: {
            backgroundColor: style.$backgroundCol,
          },
        },
      },
    },
    {
      cardStyle: { backgroundColor: style.$backgroundCol },
    },
  );

export default getMainNavigator;
