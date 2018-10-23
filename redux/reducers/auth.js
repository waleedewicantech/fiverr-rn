const defaultState = {
    isLoggedIn: false,
    email:'',
    password:'',
    token:''
}

export default function reducer(state = defaultStatus, action){
    switch(action.type){
        case 'CHECKTOKEN':
            return {...state, isLoggedIn:true};
        case 'LOGIN':
            return {...state, email:action.email,password:action.password,isLoggedIn:true};
        case 'LOGOUT':
            return {...state, email:'',password:''};
        default:
            return state;
    }
}

function checkTokenExists(){
    //IMPLEMENT THE LOGIC TO GET THE TOKEN FROM THE OS LOCAL STORAGE
    //return true if exists else return null
    return true;
}