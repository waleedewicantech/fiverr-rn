import React from 'react';
import { Text,View,ActivityIndicator } from 'react-native';

export default class WaitLoader extends React.Component{
    

    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        if(this.props.propagationLogic()){
            this.props.navigation.navigate(this.props.propagationLogicSuccess);
        }else{
            this.props.propagationTakeBackLogic(this);
        }
    }

    render(){
        return(
            <View style={{
                flexDirection:'column',
                flex: 1,
                justifyContent: 'center',
                alignContent:'center',
                alignItems: 'stretch'
                }}>
                <Text style={{color: '#e3cca1', textAlign:'center',fontSize:20,paddingBottom:15}}>{'Loading'}</Text>
                <ActivityIndicator size="large" color="#e3cca1"/>
            </View>
        );
    }
}