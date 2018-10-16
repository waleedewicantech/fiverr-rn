import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../Login/login';
import RegisterScreen from '../Register/register';

export default createStackNavigator({
    // Splash: {
    //   screen: HomeScreen
    // },
    Login:{
        screen: LoginScreen
    },
    Register:{
        screen:RegisterScreen
    }
  },
  {
    initialRouteName: 'Login',
});