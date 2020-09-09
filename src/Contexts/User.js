import React,{ createContext, useState } from 'react';
import { Alert } from "react-native";

const UserContext = createContext({
    user : {},
    name : "",
    email : "",
    password : "",
    confirmPassword : "",
    isLogged : false,
    LoginUser : ()=>{},
    LogoutUser : ()=>{},
    RegisterUser : ()=>{},
    setName : () => {},
    setEmail : () => {},
    setPassword : () => {},
    setConfirmPassword : () => {}
});

export const UserProvider = ({children}) => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [isLogged,setIsLogged] = useState(false);
    const [existEquipament,setExistEquipament] = useState(false);
    const [userAtual,setUserAtual] = useState(null);
    const [user1,setUser1] = useState({meusLocais : [],locaisAdicionados : []});
    const [user2,setUser2] = useState({meusLocais : [
        {id :'1',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
        {id :'2',title:'Sala',image : require('../../assets/items.png'),subTitle:'Texto'},
        {id :'3',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
        {id :'4',title:'Cozinha',image : require('../../assets/items.png'),subTitle:'Texto'},
    ],locaisAdicionados : [
    {id :'4',title:'Cozinha',image : require('../../assets/items.png'),subTitle:'Texto'},
    {id :'5',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
    {id :'6',title:'Escritório',image : require('../../assets/items.png'),subTitle:'Texto'}
    ]});

    function RegisterUser(){
            return true;
    }
    function LoginUser(){
        if(email === "adm1" && password === "123"){
            setUserAtual(user1);
            setIsLogged(true);
            setEmail("");
            setPassword("");
            setName("");
        }else if(email === "adm2" && password === "321"){
            setUserAtual(user2);
            setIsLogged(true);
            setEmail("");
            setPassword("");
            setName("");
        }else{
            Alert.alert("Ops!!!","usuário não existente")
        }
    }
    function LogoutUser(){
        setUserAtual(null);
        setIsLogged(false);
    }
    return(
        <UserContext.Provider 
        value={{
                isLogged : isLogged,
                name : name,
                setName : (name) => setName(name),
                email : email,
                setEmail : (email) => setEmail(email),
                password : password,
                setPassword : (password) => setPassword(password),
                confirmPassword : confirmPassword,
                setConfirmPassword : (password) => setConfirmPassword(password),
                LoginUser : LoginUser,
                LogoutUser : LogoutUser,
                RegisterUser : () => RegisterUser() 
            }}>
            {children}
        </UserContext.Provider>
        )
}
export default UserContext;