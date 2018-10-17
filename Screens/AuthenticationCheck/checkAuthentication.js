import React from 'react';
import { checkTokenExpiry, propagationFailLogic } from './authenticationCheckLogic';
import AuthenticationLoader from '../../Components/WaitLoader/WaitLoader';
export default class CheckAuthenticationScreen extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <AuthenticationLoader propagationLogic = {()=>{return checkTokenExpiry;}} 
            propagationLogicSuccess = {()=>{return 'Login';}} 
            propagationTakeBackLogic = {propagationFailLogic}
            />
        );
    }
} 