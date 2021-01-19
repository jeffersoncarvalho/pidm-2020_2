import NavegacaoApp from './NavegacaoApp';
import About from './About';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Home: NavegacaoApp,
            About: About,
        },
        { initialRouteName:'Home'}
    )
);
export default Routes;