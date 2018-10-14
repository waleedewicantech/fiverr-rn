import React from 'react';
import { View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import {defaultStyles} from './MaterialTextStyles';
export default class MaterialTextInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            inputText: '',
        };
    }
    
    render() {
    //   this.props.styles = Object.assign({},defaultStyles,this.props.styles);
      let { inputText } = this.state;
      return (
          <View>
            <TextField
                label='User Name'
                value={inputText}
                onChangeText={ (inputText) => this.setState({ inputText }) }
            />
          </View>
      );
    }
  }
  