import React,{ useState, useContext } from 'react';
import * as Styles from './styles';
import Lists from '../../Components/Lists/listOptions';
import SubLists from "../../Components/Lists/List";
import Cabecalho from '../../Components/MainLogout/Cabecalho';
import ButtonProfile from '../../Components/Bottoms/buttonProfileHeader';
import ModalRegister from "../RegisterEquipament/index";
import ImageMainBottom from '../../Components/Main/imageBottom';
import LocaisAdicionadosContext from "../../Contexts/LocaisAdicionados";
import PreferenciasContext from "../../Contexts/Preferencias";
import LocaisProximosContext from "../../Contexts/LocaisProximos";
import MeusLocaisContext from "../../Contexts/MeusLocais";


const Main = (props) => {
  const { locaisAdicionados } = useContext(LocaisAdicionadosContext);
  const { preferencias,setPreferencia,preferencyAtived,subListPreferencyAtived } = useContext(PreferenciasContext);
  const { locaisProximos } = useContext(LocaisProximosContext);
  const { meusLocais } = useContext(MeusLocaisContext);

    
  return (
      <Styles.Container>
      <Styles.SubContainer>
      <Cabecalho
        ButtonConfig={<ButtonProfile
          titleOption1="Configurações"
          titleOption2="Sair"
        />}
      />
          <Lists
            title='LOCAIS ADICIONADOS'
            data={locaisAdicionados}
            navigation={props.navigation}
            onPress={()=>props.navigation.navigate('Profile')}
          />
          <Lists
            title='LOCAIS PRÓXIMOS'
            navigation={props.navigation}
            data={locaisProximos}
            onPress={()=>props.navigation.navigate('Profile')}
          />
          <Lists
            title='MEUS LOCAIS'
            data={meusLocais}
            navigation={props.navigation}
            onPress={()=>props.navigation.navigate('Profile')}
          />
          <Lists
            title='PREFERÊNCIAS'
            navigation={props.navigation}
            data={preferencias}
            onPress={()=>props.navigation.navigate('Profile')}
            onPressAtived={(id)=>setPreferencia(id)}
          />
          {preferencyAtived ? <SubLists
              data={subListPreferencyAtived}
          /> : null}
          <ModalRegister/>
          <ImageMainBottom/>
          </Styles.SubContainer>
      </Styles.Container>
  )
}

export default React.memo(Main);