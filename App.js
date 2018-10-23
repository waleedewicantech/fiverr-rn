import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './Screens/Login/login';
import { Provider } from 'react-redux';
import store from './redux/reducers';
import Navigator from './Screens/Navigator/navigator';
import codePush from 'react-native-code-push';

@codePush
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
          <Navigator />
        </SafeAreaView>
      </Provider>
    );
  }
}
