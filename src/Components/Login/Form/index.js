import React from 'react';
import * as Styles from './styles';
const Form = (props) => {
  return (
      <>
      <Styles.Container>
          <Styles.InputSub placeholder='E-mail'>
               
          </Styles.InputSub>
          <Styles.Input placeholder='Senha'>
              
          </Styles.Input>
      </Styles.Container>
      <Styles.TitleResetPassword onPress={props.onPressResetPassword}>Esqueci minha senha</Styles.TitleResetPassword>
  </>
  )
}

export default React.memo(Form);