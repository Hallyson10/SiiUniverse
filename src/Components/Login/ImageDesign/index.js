import React from 'react';
import * as Styles from './styles';

const Header = (props) => {
  return (
      <>
    <Styles.ImageDesignTop
    source={require('../../../../assets/imageTopDesign.png')}
    resizeMode='cover'
    style={{maxHeight:200}}
    />
    <Styles.TextLogo>LOGO</Styles.TextLogo>
    </>
  )
}

export default Header;