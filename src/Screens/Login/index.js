import React,{ useState } from 'react';
import * as Styles from './styles';
import Form from '../../Components/Login/Form/index';
import Buttons from '../../Components/Login/Buttoms/index';
import ButtomLogin from '../../Components/Bottoms/buttonLogin';
import Register from './Register/index';
import CabecalhoComponentLogin from '../../Components/Login/Header/index';

const Login = () => {
    const [login,setLogin] = useState(true);
    const [register, setRegister] = useState(false);

  return (
      <Styles.Container>
      <CabecalhoComponentLogin/>
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
            <Form/>
            <ButtomLogin/>
            </>
            :
            <Register/>
            }
      </Styles.Container>
  )
}

export default Login;