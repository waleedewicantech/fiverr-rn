export const checkTokenExpiry = ()=>{
    //CHECK IF TOKEN ALREADY EXISTS AND THEN MOVE WITH IT set isLoggedIn true
    return {
        type:'CHECKTOKEN',
    }
}

export const login = (email,password)=>{
    //TODO: IMPLEMENT LOGIN LOGIC HERE 
    //IF LOGIN SUCCESSFUL THEN SET ISLOGGEDIN TRUE AND SET THE user_token key/value in localStorage
    return {
        type:'LOGIN',
        email:email,
        password:password
    }
}

export const logout = ()=>{
    return {
        type:'LOGOUT'
    }
}

export const register = (email, password) =>{
    return (dispatch)=>{

    }
}