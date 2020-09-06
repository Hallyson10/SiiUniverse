import React from 'react';
import * as Styles from './styles';
import { Platform } from "react-native";

const Register = (props) => {
  return (
      <Styles.Container
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
          <Styles.Input2
          placeholder='Nome'
          value={props.name}
          onChangeText={name => props.setName(name)}
          autoCapitalize="words"
          >

          </Styles.Input2>
          <Styles.Input2
            placeholder='E-mail'
            value={props.email}
            onChangeText={email => props.setEmail(email)}
            autoCapitalize="words"
          >

          </Styles.Input2>
          <Styles.Input2
            placeholder='Senha'
            value={props.password}
            onChangeText={password => props.setPassword(password)}
            secureTextEntry
          >

          </Styles.Input2>
          <Styles.Input1
            placeholder='Confirmar senha'
            value={props.confirmPassword}
            onChangeText={password => props.setConfirmPassword(password)}
            secureTextEntry
          >

          </Styles.Input1>
      </Styles.Container>
  )
}

export default React.memo(Register);