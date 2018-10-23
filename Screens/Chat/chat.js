import React from 'react';
import {View, Text} from 'react-native';
export default class ChatScreen extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View
            style={
                {
                    flex: 1,
                    justifyContent:'center',
                    alignContent:'center'
                }
            }
            >
                <Text>Chat screen</Text>
            </View>
        );
    }
};

