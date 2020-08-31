import React from 'react';
import * as Styles from './styles';

const Bottoms = (props) => {
  return (
      <Styles.ViewBottomLogin activeOpacity={0.9} onPress={props.onPress}>
        <Styles.TitleButtonLogin>
            {props.title}
        </Styles.TitleButtonLogin>
      </Styles.ViewBottomLogin>
  )
}

export default React.memo(Bottoms);