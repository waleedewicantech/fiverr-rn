import React from 'react';
import { StyleSheet,Image, View, Text, TouchableOpacity } from 'react-native';
import {SOURCES} from '../../Common';
import {MaterialTextField} from '../../Components/Material-text-field';
import {MaterialTextPasswordInput} from '../../Components/Material-password-field';
import {MaterialButton} from '../../Components/MaterialButton';
export default class RegisterScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loginText: 'Register'
        }
    }
    render() {
      return (
        <View style={{flex: 1,flexDirection: 'column',
            justifyContent: 'center',
            padding:20
            }}>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Image 
            style={{
                width: 40, height: 40,
                marginBottom:10
            }}
            source={{uri: SOURCES.LOGO}}/>
        </View>
        <Text style={{fontSize:20,paddingLeft:5}}>
          {this.state.loginText}
        </Text>    
        <MaterialTextField label="First Name" />
        <MaterialTextField label="Last Name" />
        <MaterialTextField label="Email Address" />
        <MaterialTextPasswordInput label="Password"/>
        <View style={{ 
            flexDirection: 'row',
            justifyContent:'flex-end'
        }}>
            <MaterialButton text="Register"/>
            <MaterialButton text="Login"/>
        </View> 
      </View>
      );
    };
  }