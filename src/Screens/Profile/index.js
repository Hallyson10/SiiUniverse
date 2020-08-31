import React,{ useState } from 'react';
import * as Styles from './styles';
import Cabecalho from '../../Components/Profile/Cabecalho';
import Lists from '../../Components/Lists/listOptions';
import ImageMainBottom from '../../Components/Main/imageBottom';

const Profile = (props) => {
  const [scene,setScene] = useState([
    {id :'1',title:'Master Off',image : require('../../../assets/off.png'),subTitleOption:true},
    {id :'2',title:'Relax',image : require('../../../assets/relax.png'),subTitleOption:true},
    {id :'3',title:'Sleep',image : require('../../../assets/sleep.png'),subTitleOption:true},
  ]);

  const [controls,setControls] = useState([
    {id :'1',title:'TV',image : require('../../../assets/tv.png'),subTitleOption:true},
    {id :'2',title:'Sound',image : require('../../../assets/items.png'),subTitleOption:true},
    {id :'3',title:'Light',image : require('../../../assets/light.png'),subTitleOption:true},
    {id :'4',title:'Hmac',image : require('../../../assets/hmac.png'),subTitleOption:true},
  ]);

  const [status,setStatus] = useState([
      {id :'1',title:'Temperature',image : require('../../../assets/temperature.png'),subTitle:"12Cº"},
    {id :'2',title:'Energy',image : require('../../../assets/energy.png'),subTitle:"150W"},
  ]);
  
  const [services,setServices] = useState([
    {id :'1',title:'Suporte',image : require('../../../assets/suporte.png'),subTitleOption:true},
    {id :'2',title:'Bounty',image : require('../../../assets/bountry.png'),subTitleOption:true},
    {id :'3',title:'Room Maid',image : require('../../../assets/room.png'),subTitleOption:true},
  ]);


  return (
      <Styles.Container>
      <Styles.SubContainer>
        <Cabecalho
        goBack={()=>props.navigation.goBack()}
         />
        <Lists 
          title='SCENE'
          data={scene}
        />
        <Lists 
          title='CONTROLS'
          data={controls}
        />
        <Lists 
          title='STATUS'
          data={status}
        />
        <Lists 
          title='SERVICE'
          data={services}
        />
        <ImageMainBottom/>
        </Styles.SubContainer>
      </Styles.Container>
  )
}

export default Profile;