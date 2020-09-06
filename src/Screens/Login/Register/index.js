import React from 'react';
import * as Styles from './styles';
import FormRegister from '../../../Components/Login/Register/index';
import ButtomRegister from '../../../Components/Bottoms/buttonLogin';

const Register = (props) => {
  return (
      <Styles.Container>
          <FormRegister 
            setName={name => props.setName(name)}
            name={props.name}
            setEmail={email => props.setEmail(email)}
            email={props.email}
            setPassword={password => props.setPassword(password)}
            password={props.password}
            confirmPassword={props.confirmPassword}
            setConfirmPassword={password => props.setConfirmPassword(password)}
          />
          <ButtomRegister
            title='Cadastrar'
          />
      </Styles.Container>
  )
}

export default Register;