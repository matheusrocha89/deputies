import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {ListDeputies, DeputyDetails, ListExpenses} from '../screens';

const AppNavigator = createStackNavigator(
  {
    ListDeputies: {
      screen: ListDeputies,
    },
    DeputyDetails: {
      screen: DeputyDetails,
    },
    ListExpenses: {
      screen: ListExpenses,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#78D679',
      },
      headerTintColor: '#FFFFFF',
    },
  },
);

export default createAppContainer(AppNavigator);
