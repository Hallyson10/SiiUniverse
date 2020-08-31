import React,{ useState } from 'react';
import * as Styles from './styles';
import Lists from '../../Components/Lists/listOptions';
import Cabecalho from '../../Components/MainLogout/Cabecalho';
import ButtonProfile from '../../Components/Bottoms/buttonProfileHeader';
import ModalRegister from "../RegisterEquipament/index";
import ImageMainBottom from '../../Components/Main/imageBottom';

const Main = (props) => {
  const [locaisAdicionados,setLocaisAdicionados] = useState([
    {id :'1',title:'Quarto',image : require('../../../assets/items.png'),subTitle:'Texto'},
    {id :'2',title:'Sala',image : require('../../../assets/items.png'),subTitle:'Texto'},
    {id :'3',title:'Quarto',image : require('../../../assets/items.png'),subTitle:'Texto'},
    {id :'4',title:'Cozinha',image : require('../../../assets/items.png'),subTitle:'Texto'},
    {id :'5',title:'Quarto',image : require('../../../assets/items.png'),subTitle:'Texto'},
    {id :'6',title:'Escritório',image : require('../../../assets/items.png'),subTitle:'Texto'}
    ]);
    const [locaisProximos,setLocaisProximos] = useState([
      {id :'1',title:'Quarto',image : require('../../../assets/items.png'),subTitle:'Texto'},
      {id :'2',title:'Sala',image : require('../../../assets/items.png'),subTitle:'Texto'},
      {id :'3',title:'Quarto',image : require('../../../assets/items.png'),subTitle:'Texto'},
      {id :'4',title:'Cozinha',image : require('../../../assets/items.png'),subTitle:'Texto'},
      {id :'5',title:'Quarto',image : require('../../../assets/items.png'),subTitle:'Texto'},
      {id :'6',title:'Escritório',image : require('../../../assets/items.png'),subTitle:'Texto'}
      ]);
      const [meusLocais,setMeusLocais] = useState([
        {id :'1',title:'Quarto',image : require('../../../assets/items.png'),subTitle:'Texto'},
        {id :'2',title:'Sala',image : require('../../../assets/items.png'),subTitle:'Texto'},
        {id :'3',title:'Quarto',image : require('../../../assets/items.png'),subTitle:'Texto'},
        {id :'4',title:'Cozinha',image : require('../../../assets/items.png'),subTitle:'Texto'},
        {id :'5',title:'Quarto',image : require('../../../assets/items.png'),subTitle:'Texto'},
        {id :'6',title:'Escritório',image : require('../../../assets/items.png'),subTitle:'Texto'}
        ]);
        const [preferencia,setPreferencia] = useState([
          {id :'1',title:'Light',image : require('../../../assets/light.png'),subTitleOption:true},
          {id :'2',title:'Temperature',image : require('../../../assets/temperature.png'),subTitleOption:true},
          {id :'3',title:'TV',image : require('../../../assets/tv.png'),subTitleOption:true},
          {id :'4',title:'Não pertube',image : require('../../../assets/pertube.png'),subTitleOption:true}
          ]);
  return (
      <Styles.Container>
      <Styles.SubContainer>
      <Cabecalho
        ButtonConfig={<ButtonProfile/>}
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
            data={preferencia}
            onPress={()=>props.navigation.navigate('Profile')}
          />
          <ModalRegister/>
          <ImageMainBottom/>
          </Styles.SubContainer>
      </Styles.Container>
  )
}

export default React.memo(Main);