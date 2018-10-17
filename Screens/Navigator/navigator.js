import { createStackNavigator,createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../Login/login';
import RegisterScreen from '../Register/register';
import CheckAuthenticationScreen from '../AuthenticationCheck/checkAuthentication';
import WaitLoader from '../../Components/WaitLoader/WaitLoader';
const appNavigation = createStackNavigator({
    // Splash: {
    //   screen: HomeScreen
    // },
    Login:{
        screen: LoginScreen
    },
    Register:{
        screen:RegisterScreen
    },
    WaitLoader:{
        screen:WaitLoader
    }
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
        header:null
    }
  }
);

const authNavigation = createStackNavigator({
    // Splash: {
    //   screen: HomeScreen
    // },
    // Authenticate:{
    //     screen:AuthScreen
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
    navigationOptions: {
        header:null
    }
  }
);

export default createSwitchNavigator({
    Auth: {
        screen:CheckAuthenticationScreen
    },
    appNavigation: appNavigation
},{
    initialRouteName:'Auth'
}
);