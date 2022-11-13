import { createContext, useState } from "react";

//configuration de defaultValue
const defaultValue ={
    token:'',
    userId:null,
    userIdLoggedIn:false,
    login:()=>{},
    logout:()=>{}
}
const tokenLocalStorage = localStorage.getItem('token');
const userIdLocalStorage= localStorage.getItem('userId')
 
//configuration de AuthContext
const AuthContext = createContext(defaultValue)

//configuration de AuthContextProvider
export const AuthContextProvider = (props)=>{

//state token
const [token,setToken] = useState(tokenLocalStorage)
const [userId,setUserId] = useState(userIdLocalStorage)

//fonction loginHandler(login)
const loginHandler=(token,userId)=>{
   setToken(token)
   setUserId(userId)
   localStorage.setItem('token',token)
   localStorage.setItem('userId',userId)
}

//fonction logout(decoonection)
const logoutHandler=()=>{
   setToken(null)
   setUserId(null)
   localStorage.clear()
}
//lorsque user est logger
const userIdLoggedIn = !!token

//configuration de contextValue
const contextValue = {
    tokrn:token,
    userId:userId,
    isLoggedIn:userIdLoggedIn,
    login:loginHandler,
    logout:logoutHandler
}
    return(
        <AuthContext.Provider value={contextValue} >
            {props.children}
        </AuthContext.Provider>
    )
}
//exportation
export default AuthContext