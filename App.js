import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/Login/login';
import Navigator from './Screens/Navigator/navigator';
export default class App extends React.Component {
 
  render() {
    return (
        <Navigator />
    );
  }
}
