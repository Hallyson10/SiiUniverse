import React from 'react';
import * as Styles from "./styles";

const initialVideo = (props) => {
  return (
      <Styles.ImageDesignTop
                  source={require('../../../assets/mainTop.png')}
                  resizeMode="cover"
      />
  )
}

export default initialVideo;