import {Alert } from 'react-native';

module.exports = {
    register:(_this)=>{
        if(false){
            _this.props.navigation.navigate('Home');
        }else{
           Alert.alert('Registeration Failed','The username/password provided is incorrect. Please try again'); 
        }
    },

    navigateToLogin:(_this)=>{
        _this.props.navigation.navigate('Register');
    }
};