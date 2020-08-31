import React,{ useState } from 'react';
import * as Styles from './styles';
import Form from '../../Components/Login/Form/index';
import Buttons from '../../Components/Login/Buttoms/index';
import ButtomLogin from '../../Components/Bottoms/buttonLogin';
import Register from './Register/index';
import HeaderComponentLogin from '../../Components/Login/ImageDesign/index';
import BottomComponentLogin from '../../Components/Login/ImageDesign/bottom';

const Login = (props) => {
    const [login,setLogin] = useState(true);
    const [register, setRegister] = useState(false);

  return (

      <Styles.Container>
    <Styles.SubContainer>

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
            <Form/>
            <ButtomLogin 
            title='Entrar'
            onPress={()=>props.navigation.navigate('Main')}/>
            </>
            :
            <Register/>
            }
            <BottomComponentLogin/>
            </Styles.SubContainer>

      </Styles.Container>

  )
}

export default React.memo(Login);