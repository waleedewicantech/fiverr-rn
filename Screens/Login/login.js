import React from 'react';
import { StyleSheet,Image, View, Text, TouchableOpacity } from 'react-native';
import {SOURCES} from '../../Common';
import {MaterialTextField} from '../../Components/Material-text-field';
import {MaterialTextPasswordInput} from '../../Components/Material-password-field';
import {MaterialButton} from '../../Components/MaterialButton';
export default class LoginScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loginText: 'Login'
        }
    }
    render() {
      return (
        <View style={{flex: 1,flexDirection: 'column',
            justifyContent: 'center',
            padding:50
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
        <MaterialTextField label="User Name" />
        <MaterialTextPasswordInput label="Password"/>
        <View style={{ 
            flexDirection: 'row',
            justifyContent:'flex-end'
        }}>
            <MaterialButton text="login"/>
        </View> 
      </View>
      );
    };
  }