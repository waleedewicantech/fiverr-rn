import React from 'react';
import { StyleSheet, Image, View, Text, Alert } from 'react-native';
import { SOURCES } from '../../Common';
import { MaterialTextField } from '../../Components/Material-text-field';
import { MaterialTextPasswordInput } from '../../Components/Material-password-field';
import { MaterialButton } from '../../Components/MaterialButton';
import { authenticate, navigateToRegisteration } from './loginHandler';
import { login } from '../../redux/actions/auth';
import { connect } from 'react-redux';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginText: 'Login',
      email:'',
      pass:''
    };
  }

  getEmail = (email)=>{
    this.setState({_email:email});
  }

  getPassword = ()=>{
    this.setState({_password:password});
  }

  authenticateUser=(e)=>{
    this.props.onLogin(this.state._email,this.state._password);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 40
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            style={{
              width: 40,
              height: 40,
              marginBottom: 10
            }}
            source={{ uri: SOURCES.LOGO }}
          />
        </View>
        <Text style={{ fontSize: 20, paddingLeft: 5 }}>
          {this.state.loginText}
        </Text>
        <MaterialTextField label="Email" onTextChange ={this.getEmail}/>
        <MaterialTextPasswordInput label="Password" onTextChange ={this.getPassword}/>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}
        >
          <MaterialButton
            text="Register"
            onPress={() => navigateToRegisteration(this)}
          />
          <MaterialButton text="Login" onPress={(e)=>this.authenticateUser(e)} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state,ownProps) =>{
  return{
    //TODO IMPLEMENT THE STATE LOGIC HERE
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onLogin: (email,password) =>{dispatch(login(email,password))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);