import { Button } from 'react-native-material-ui';
import React from 'react';
import { View } from 'react-native';
import {defaultStyles} from './MaterialButtonStyles';

export default class MaterialButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let styles = Object.assign({},defaultStyles,this.props.styles);
        return(
            <View style={{padding:3}}>
                <Button onPress={() =>this.props.onPress(this)} raised primary style={{ container: { backgroundColor: '#e3cca1',width:100 } }} text={this.props.text}/>
            </View>
        );
    }
}