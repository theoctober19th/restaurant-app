import {createAppContainer} from 'react-navigation'
import {createStackNavigator,} from 'react-navigation-stack'
import SearchScreen from '@screens/SearchScreen'

const rootNavigator = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    intialRouteName: 'Search'
  }
);

export default createAppContainer(rootNavigator);
