import React, { useState } from 'react';
import * as Styles from './styles';
import Header from '../../Components/MainLogout/Cabecalho';
import Lists from '../../Components/Lists/listOptions';
import ButtonSignin from '../../Components/Bottoms/buttonSigninHeader';

const MainLogout = (props) => {
   const [locaisAdicionados,setLocaisAdicionados] = useState([
          {id :'1',title:'Quarto',image : require('../../../assets/items.png')}
    ]);
       const [locaisProximos,setLocaisProximos] = useState([
          {id :'1',title:'Quarto',image : require('../../../assets/items.png'),subTitle:'Texto'},
          {id :'2',title:'Quarto',image : require('../../../assets/items.png'),subTitle:'Texto'},
          {id :'3',title:'Quarto',image : require('../../../assets/items.png'),subTitle:'Texto'}
    ]);
  return (
      <Styles.Container>
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
      </Styles.Container>
  )
}

export default MainLogout;