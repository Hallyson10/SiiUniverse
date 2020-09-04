import React from 'react';
import * as Styles from './styles';

const MainLogout = (props) => {
  return (
      <Styles.ContainerCabecalho
      source={require('../../../assets/conceito.png')}
      resizeMode='cover'
      >
      {props.ButtonConfig}
      <Styles.SubContainerCabecalho>
        <Styles.TitleDescriptionCabecalho>
        Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        </Styles.TitleDescriptionCabecalho>
        <Styles.TitleDescriptionType>
          Listas de Ambientes
        </Styles.TitleDescriptionType>
      </Styles.SubContainerCabecalho>
      </Styles.ContainerCabecalho>
  )
}

export default MainLogout;