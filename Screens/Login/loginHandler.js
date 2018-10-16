import {Alert } from 'react-native';

module.exports = {
    authenticate:()=>{
        if(false){
            this.props.navigation.navigate('Home');
        }else{
           Alert.alert('Login Failed','The username/password provided is incorrect. Please try again'); 
        }
    },

    navigateToRegisteration:(_this)=>{
        _this.props.navigation.navigate('Register');
    }
};