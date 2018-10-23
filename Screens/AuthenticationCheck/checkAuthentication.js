import React from 'react';
import { checkTokenExpiry } from '../../redux/actions/auth';
import AuthenticationLoader from '../../Components/WaitLoader/WaitLoader';
import { connect } from 'tls';

class CheckAuthenticationScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  userAlreadyLoggedIn(e){
    return this.props.onCheckToken();
  }

  componentDidMount() {
    if (this.userAlreadyLoggedIn()) {
      this.props.navigation.navigate('appNavigation');
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return <AuthenticationLoader />;
  }
}

const mapStateToProps = (state,ownProps) =>{
  return{
    isLoggedIn:state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckToken:()=>{dispatch(checkTokenExpiry())},
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckAuthenticationScreen);

