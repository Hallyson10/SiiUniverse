import React,{ useState,useContext} from 'react';
import * as Styles from './styles';
import Cabecalho from '../../Components/Profile/Cabecalho';
import Lists from '../../Components/Lists/listOptions';
import SubList from "../../Components/Lists/List";
import ImageMainBottom from '../../Components/Main/imageBottom';
import ScenesContext from "../../Contexts/Scenes";
import ControlsContext from "../../Contexts/Controls";

const Profile = (props) => {
  const { scenes } = useContext(ScenesContext);
  const { 
    controls, 
    subListControlsAtived, 
    controlsAtived,
    AtivedSubList,
    AtivedSubSubList,
    subSubControlsAtived } = useContext(ControlsContext);

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
          data={scenes}
          onPressAtived={()=>{}}
        />
        <Lists 
          title='CONTROLS'
          data={controls}
          onPressAtived={(id)=>AtivedSubList(id)}
        />

        {controlsAtived ? <SubList
            data={subListControlsAtived}
            onPressAtived={(id) => AtivedSubSubList(id)}
        /> : null}

        {subSubControlsAtived ? <SubList 
          data={[{id:"1",title:"Canal",imageTitle:"1"},{id:"2",title:"Canal",imageTitle:"2"}]}
          onPressAtived={(id) => alert(JSON.stringify(id))}
        /> : null}

        <Lists 
          title='STATUS'
          data={status}
          onPressAtived={()=>{}}
        />
        <Lists 
          title='SERVICE'
          data={services}
          onPressAtived={()=>{}}
        />
        <ImageMainBottom/>
        </Styles.SubContainer>
      </Styles.Container>
  )
}

export default Profile;