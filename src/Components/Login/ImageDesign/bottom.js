import React from 'react';
import * as Styles from './styles';

const Bottom = (props) => {
  return (
    <Styles.ImageDesignBottom
    source={require('../../../../assets/imageBottomDesign.png')}
    resizeMode="cover"
    style={{maxHeight:200}}
    />
  )
}

export default React.memo(Bottom);