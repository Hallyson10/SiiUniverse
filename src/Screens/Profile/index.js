import React,{ useState } from 'react';
import * as Styles from './styles';
import Cabecalho from '../../Components/Profile/Cabecalho';
import Lists from '../../Components/Lists/listOptions';

const Profile = (props) => {
  const [scene,setScene] = useState([
    {id :'1',title:'Master Off',image : require('../../../assets/off.png')},
    {id :'2',title:'Relax',image : require('../../../assets/relax.png')},
    {id :'3',title:'Sleep',image : require('../../../assets/sleep.png')},
  ]);

  const [controls,setControls] = useState([
    {id :'1',title:'TV',image : require('../../../assets/tv.png')},
    {id :'2',title:'Sound',image : require('../../../assets/items.png')},
    {id :'3',title:'Light',image : require('../../../assets/light.png')},
    {id :'4',title:'Hmac',image : require('../../../assets/hmac.png')},
  ]);

  const [status,setStatus] = useState([
    {id :'1',title:'Temperature',image : require('../../../assets/temperature.png')},
    {id :'2',title:'Energy',image : require('../../../assets/energy.png')},
  ]);
  
  const [services,setServices] = useState([
    {id :'1',title:'Suporte',image : require('../../../assets/suporte.png')},
    {id :'2',title:'Bounty',image : require('../../../assets/bountry.png')},
  ]);


  return (
      <Styles.Container>
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
      </Styles.Container>
  )
}

export default Profile;