import React,{ useState,useContext} from 'react';
import * as Styles from './styles';
import Cabecalho from '../../Components/Profile/Cabecalho';
import Lists from '../../Components/Lists/listOptions';
import SubList from "../../Components/Lists/List";
import ImageMainBottom from '../../Components/Main/imageBottom';
import EquipamentosContext from "../../Contexts/Equipamentos";
import ControlsContext from "../../Contexts/Controls";
import UserContext from '../../Contexts/User';

const Profile = (props) => {
  const { scenes,services,status } = useContext(EquipamentosContext);
  const { LogoutUser } = useContext(UserContext);
  const { 
    controls, 
    subListControlsAtived, 
    controlsAtived,
    AtivedSubList,
    AtivedSubSubList,
    subSubControlsAtived } = useContext(ControlsContext);

  return (
      <Styles.Container>
      <Styles.SubContainer>
        <Cabecalho
        goBack={()=>props.navigation.goBack()}
        onPressLogout={LogoutUser}
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