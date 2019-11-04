import {createAppContainer} from 'react-navigation';
import {createStackNavigator,} from 'react-navigation-stack';
import SearchScreen from '@screens/SearchScreen';
import DetailScreen from '@screens/DetailScreen';

const rootNavigator = createStackNavigator(
  {
    Search: SearchScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Restaurant Search'
    }
  }
);

export default createAppContainer(rootNavigator);
