import React from 'react';
import * as Styles from './styles';
const Form = (props) => {
  return (
      <>
      <Styles.Container>
          <Styles.InputSub 
          onChangeText={(text) => props.setEmail(text)}
          placeholder='E-mail'
          value={props.email}
          keyboardType="email-address"
          autoCapitalize="none"
          >
               
          </Styles.InputSub>
          <Styles.Input 
          placeholder='Senha'
          onChangeText={(text) => props.setPassword(text)}
          value={props.password}
          secureTextEntry
          >
              
          </Styles.Input>
      </Styles.Container>
      <Styles.TitleResetPassword onPress={props.onPressResetPassword}>Esqueci minha senha</Styles.TitleResetPassword>
  </>
  )
}

export default React.memo(Form);