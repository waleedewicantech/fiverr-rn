import React from 'react';
import { StyleSheet,Image, View } from 'react-native';
import {SOURCES} from '../../Common';

const materialTextInput = null;
export default class LoginScreen extends React.Component {
    constructor(props){
        super(props);
        materialTextInput = getMaterialTextInput.getMaterialTextInput(
            this.props.materialTextInputLoginUser
        )
    }
    render() {
      return (
        <View style={{flex: 1}}>
            <Image source={{uri: SOURCES.LOGO}}/>
        {/* <this.MaterialTextImput />   */}
      </View>
      );
    };
  }