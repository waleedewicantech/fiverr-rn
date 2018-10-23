import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import ChatScreen from '../../Screens/Chat/chat';
import AlertScreen from '../../Screens/Alerts/alerts';

export default createMaterialBottomTabNavigator({
    Chat: { screen: ChatScreen },
    Alert: { screen: AlertScreen },
  }, {
    initialRouteName: 'Chat',
    activeColor: '#e3cca1',
    navigationOptions: {
        header:null
    }
  });