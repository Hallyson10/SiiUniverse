import React from 'react';
import * as Styles from './styles';

const Header = (props) => {
  return (
      <>
    <Styles.ImageDesignTop
    source={require('../../../../assets/imageDesignTop.png')}
    resizeMode='cover'
    style={{maxHeight:120}}
    />
    <Styles.TextLogo>LOGO</Styles.TextLogo>
    </>
  )
}

export default Header;