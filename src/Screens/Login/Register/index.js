import React from 'react';
import * as Styles from './styles';
import FormRegister from '../../../Components/Login/Register/index';
import ButtomRegister from '../../../Components/Bottoms/buttonLogin';

const Register = () => {
  return (
      <Styles.Container>
          <FormRegister />
          <ButtomRegister
            title='Cadastrar'
          />
      </Styles.Container>
  )
}

export default Register;