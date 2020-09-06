import React,{ createContext, useState, useEffect } from 'react';

const UserContext = createContext({
    user : {},
    name : "",
    email : "",
    password : "",
    confirmPassword : "",
    isLogged: false,
    Login : ()=>{},
    Register : ()=>{},
    setName : () => {},
    setEmail : () => {},
    setPassword : () => {},
    setConfirmPassword : () => {}
});

export const UserProvider = ( {children} ) => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [isLogged,setIsLogged] = useState(false);
    function Login(){
        setIsLogged(true)
        return true;
    }
    function Register(){
            return true;
    }

    return(
        <UserContext.Provider 
        value={{
                name : name,
                setName : (name) => setName(name),
                email : email,
                setEmail : (email) => setEmail(email),
                password : password,
                setPassword : (password) => setPassword(password),
                isLogged : isLogged,
                confirmPassword : confirmPassword,
                setConfirmPassword : (password) => setConfirmPassword(password),
                setIsLogged : (isLogged) => setIsLogged(isLogged),
                Login : () => Login(),
                Register : () => Register() 
            }}>
            {children}
        </UserContext.Provider>
        )
}
export default UserContext;