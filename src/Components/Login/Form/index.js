import React from 'react';
import * as Styles from './styles';
const Form = () => {
  return (
      <>
      <Styles.Container>
          <Styles.ButtonBorder placeholder='E-mail'>
               
          </Styles.ButtonBorder>
          <Styles.Buttom placeholder='Senha'>
              
          </Styles.Buttom>
      </Styles.Container>
      <Styles.TitleResetPassword>Esqueci minha senha</Styles.TitleResetPassword>
  </>
  )
}

export default React.memo(Form);