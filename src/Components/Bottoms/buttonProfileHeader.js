import React from 'react';
import * as Styles from './styles';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

const Bottoms = (props) => {
  return (
      <Styles.ViewButtonProfile>
        <Menu>
      <MenuTrigger >
      <Styles.IconButtonProfile
              source={require('../../../assets/user.png')}
          />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption style={{height:40,justifyContent:'center'}} onSelect={() => alert(`Configurações`)} text={props.titleOption1} />
        <MenuOption style={{height:40,justifyContent:'center'}} text={props.titleOption2} onSelect={() => alert(`saindo...`)} />
      </MenuOptions>
    </Menu>
      </Styles.ViewButtonProfile>
        )
}

export default React.memo(Bottoms);