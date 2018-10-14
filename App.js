import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { LoginScreen } from './Screens/Login/login'
import { MaterialTextInput } from './Components/Material-text-field/MaterialText';
export default class App extends React.Component {
  state = {
    phone: '',
  };
 
  render() {
    return (
      <MaterialTextInput />
    );
  }
}
