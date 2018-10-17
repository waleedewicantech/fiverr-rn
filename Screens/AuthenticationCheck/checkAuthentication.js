import React from 'react';
import { checkTokenExpiry, propagationFailLogic , authenticationSuccessful } from './authenticationCheckLogic';
import AuthenticationLoader from '../../Components/WaitLoader/WaitLoader';
export default class CheckAuthenticationScreen extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        if(checkTokenExpiry()){
            this.props.navigation.navigate('Login');
        }else{
            this.props.navigation.navigate('Login');
        }
    }

    render(){
        return (
            <AuthenticationLoader />
        );
    }
} 