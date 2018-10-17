module.exports = {
    checkTokenExpiry: () =>{
        return true;
    },

    propagationFailLogic: function(el){
        el.prop.navigation.navigate('Login');
    },

    authenticationSuccessful:function(_this){
        this.props.navigation.navigate('Login');
    }
}