import React from 'react';
import * as Styles from './styles';

const Bottoms = (props) => {
  return (
      <Styles.ViewButtonProfile>
          <Styles.IconButtonProfile
              source={require('../../../assets/user.png')}
          />
      </Styles.ViewButtonProfile>
  )
}

export default React.memo(Bottoms);