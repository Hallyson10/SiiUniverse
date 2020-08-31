import React from 'react';
import * as Styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const MainLogout = (props) => {
  return (
    <LinearGradient
          // Button Linear Gradient
          colors={['#A7518A', '#A7518A', '#B9E2F3']}>
      <Styles.ContainerCabecalho
      source={require('../../../assets/casaProfile.png')}
      resizeMode='cover'
      >
      <Styles.ViewButtonsTop>
        <AntDesign size={30} name='left' color='#F9F9F9' onPress={props.goBack} />
        <Styles.ImageProfileOption
          source={require('../../../assets/user.png')}
        />
      </Styles.ViewButtonsTop>
      <Styles.SubContainerCabecalho>
        <Styles.TitleDescriptionCabecalho>
        Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        </Styles.TitleDescriptionCabecalho>
        <Styles.TitleDescriptionType>
          Quarto do Hotel
        </Styles.TitleDescriptionType>
      </Styles.SubContainerCabecalho>
      </Styles.ContainerCabecalho>
      </LinearGradient>
  )
}

export default MainLogout;