import React from 'react';
import * as Styles from './styles';

const Bottoms = (props) => {
  return (
      <Styles.ViewBottomInitialLogin activeOpacity={0.9} onPress={props.onPress}>
        <Styles.TitleButtonInitial>
            {props.title}
        </Styles.TitleButtonInitial>
      </Styles.ViewBottomInitialLogin>
  )
}

export default React.memo(Bottoms);