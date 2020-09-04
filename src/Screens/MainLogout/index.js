import React, { useContext } from 'react';
import * as Styles from './styles';
import Header from '../../Components/MainLogout/Cabecalho';
import Lists from '../../Components/Lists/listOptions';
import ButtonSignin from '../../Components/Bottoms/buttonSigninHeader';
import LocaisAdicionadosContext from "../../Contexts/LocaisAdicionados";
import LocaisProximosContext from "../../Contexts/LocaisProximos";
import ImageDesignBottom from "../../Components/Main/imageBottom";

const MainLogout = (props) => {
  const { locaisAdicionados } = useContext(LocaisAdicionadosContext);
  const { locaisProximos } = useContext(LocaisProximosContext);

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