import React,{ useState, useContext } from 'react';
import * as Styles from './styles';
import Form from '../../Components/Login/Form/index';
import Buttons from '../../Components/Login/Buttoms/index';
import ButtomLogin from '../../Components/Bottoms/buttonLogin';
import Register from './Register/index';
import HeaderComponentLogin from '../../Components/Login/ImageDesign/index';
import BottomComponentLogin from '../../Components/Login/ImageDesign/bottom';
import UserContext from "../../Contexts/User";
import { KeyboardAvoidingView } from "react-native";

const Login = (props) => {
    const [login,setLogin] = useState(true);
    const [register, setRegister] = useState(false);
    const { 
      setEmail, 
      setPassword, 
      setName,
      setConfirmPassword, 
      RegisterUser,
      LoginUser,
      email, 
      password,
      confirmPassword, 
      name
    } = useContext(UserContext);

  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} enabled>
    <Styles.Container>
    <Styles.SubContainer
    >
      <HeaderComponentLogin/>
            <Buttons
                onPressLogin={()=>{
                    setLogin(true)
                    setRegister(false)
                }}
                register={register}
                login={login}
                onPressRegister={()=>{
                setRegister(true)
                setLogin(false)
                }}
            />{
            login ?
            <> 
            <Form
              onPressResetPassword={()=>props.navigation.navigate("ResetCode")}
              setEmail={(email)=>setEmail(email)}
              email={email}
              password={password}
              setPassword={(password) => setPassword(password)}
            />
            <ButtomLogin 
            title='Entrar'
            onPress={LoginUser}/>
            </>
            :
            <Register
              setEmail={(email)=>setEmail(email)}
              email={email}
              setName={name => setName(name)}
              name={name}
              password={password}
              confirmPassword={confirmPassword}
              setPassword={(password) => setPassword(password)}
              setConfirmPassword={password => setConfirmPassword(password)}
            />
            }
            <BottomComponentLogin/>
            </Styles.SubContainer>
      </Styles.Container>
    </KeyboardAvoidingView>
  )
}

export default Login;