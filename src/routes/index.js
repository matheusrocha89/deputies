import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {ListDeputies, DeputyDetails} from '../screens';

const AppNavigator = createStackNavigator(
  {
    ListDeputies: {
      screen: ListDeputies,
    },
    DeputyDetails: {
      screen: DeputyDetails,
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
