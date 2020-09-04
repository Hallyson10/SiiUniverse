import React from 'react';
import * as Styles  from './styles';
import ImageDesignBottom from "../../Components/initialVideo/imageBottom";
import ImageDesignTop from "../../Components/initialVideo/imageTop";
import ButtonLoginInitial from "../../Components/Bottoms/buttonLoginInitial";
import VideoComponent from "../../Components/initialVideo/video";

const InitialVideo = (props) => {
  return (
      <Styles.Container>
      <Styles.SubContainer>
          <ImageDesignTop/>
          <ButtonLoginInitial
            title="Entrar"
            onPress={()=>props.navigation.navigate("Main")}
          />
          <VideoComponent/>
          </Styles.SubContainer>
          <ImageDesignBottom/>
          
      </Styles.Container>
  )
}

export default InitialVideo;