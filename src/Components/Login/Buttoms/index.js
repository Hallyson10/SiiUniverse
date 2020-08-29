import React from 'react';
import * as Styles from './styles';

const Buttoms = (props) => {
  return (
      <Styles.Container>
          <Styles.ButtonOption onPress={props.onPressLogin} atived={props.login}>
          <Styles.TitleButtoms atived={props.login}>
                    ENTRAR
            </Styles.TitleButtoms>
          </Styles.ButtonOption>
          <Styles.ViewButtomRegister onPress={props.onPressRegister}  atived={props.register}>
          <Styles.TitleButtoms atived={props.register}>
                    CADASTRAR
            </Styles.TitleButtoms>
          </Styles.ViewButtomRegister>
      </Styles.Container>
  )
}

export default Buttoms;