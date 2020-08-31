import React from 'react';
import * as Styles from './styles';
const imageAdd = require('../../../../assets/AddOption.png');

const Itemcomponent = (props) => {
  return (
        <Styles.Container
          activeOpacity={0.9}
        onPress={props.onPress}
        >
            <Styles.SubContainer>
            <Styles.ImageItems
                source={imageAdd}
                resizeMode='cover'
              />
               <Styles.TitleButtonOption>
                Adicionar
              </Styles.TitleButtonOption>
            </Styles.SubContainer>
        </Styles.Container>
  )
}

export default Itemcomponent;