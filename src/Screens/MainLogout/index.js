import React, { useContext, useEffect } from 'react';
import * as Styles from './styles';
import Header from '../../Components/MainLogout/Cabecalho';
import Lists from '../../Components/Lists/listOptions';
import ButtonSignin from '../../Components/Bottoms/buttonSigninHeader';
import EquipamentosContext from "../../Contexts/Equipamentos";
import ImageDesignBottom from "../../Components/Main/imageBottom";

const MainLogout = (props) => {
  const { locaisAdicionados } = useContext(EquipamentosContext);
  const { locaisProximos } = useContext(EquipamentosContext);

  return (
      <Styles.Container>
      <Styles.SubContainer>
        <Header
          ButtonConfig={
            <ButtonSignin
            onPressConfig={()=>props.navigation.navigate('Login')}
            />
          }
        />
        <Lists
            title='LOCAIS ADICIONADOS'
            navigation={props.navigation}
            data={locaisAdicionados}
        />
        <Lists
            title='LOCAIS PRÓXIMOS'
            navigation={props.navigation}
            data={locaisProximos}
        />
        <ImageDesignBottom/>
        </Styles.SubContainer>
      </Styles.Container>
  )
}

export default MainLogout;