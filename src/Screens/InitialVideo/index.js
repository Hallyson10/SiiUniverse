import React, { useState, useContext } from 'react';
import * as Styles  from './styles';
import { Alert } from "react-native";
import ImageDesignBottom from "../../Components/initialVideo/imageBottom";
import ImageDesignTop from "../../Components/initialVideo/imageTop";
import ButtonLoginInitial from "../../Components/Bottoms/buttonLoginInitial";
import VideoComponent from "../../Components/initialVideo/video";
import { KeyboardAvoidingView } from "react-native";
import EquipamentosContext from '../../Contexts/Equipamentos';

const InitialVideo = (props) => {
  const { FindEquipament } = useContext(EquipamentosContext);
  const [code,setCode] = useState("");

  async function FindEquipaments(){
      if(code === ""){
        Alert.alert("Ops!!!","Por favor digite um código válido!");
      }else{
        const response = await FindEquipament(code);
        if(response === true){
            props.navigation.navigate("MainLogout")
        }else{
          alert("Código inexistente!")
        }
      }
  }
  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} enabled>
      <Styles.Container>
      <Styles.SubContainer>
          <ImageDesignTop/>
          <ButtonLoginInitial
            title="Entrar"
            onPress={()=>props.navigation.navigate("Login")}
          />
          <VideoComponent
          doneCode={FindEquipaments}
          value={code}
          onChangeText={text => setCode(text)}
          />
          </Styles.SubContainer>
          <ImageDesignBottom/>
          
      </Styles.Container>
      </KeyboardAvoidingView>
  )
}

export default InitialVideo;