import React from 'react';
import * as Styles from './styles';

const Bottoms = (props) => {
  return (
    <Styles.ButtonEntrar activeOpacity={0.9} onPress={props.onPressConfig}>
    <Styles.TitleButtonEntrar>
      Entrar
    </Styles.TitleButtonEntrar>
    </Styles.ButtonEntrar>
  )
}

export default React.memo(Bottoms);