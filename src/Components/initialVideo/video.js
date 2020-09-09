import React from 'react';
import * as Styles from "./styles";
import { Video } from 'expo-av';

const initialVideo = (props) => {
  return (
    <Styles.ContainerView>
    <Styles.ViewVideo>
    <Video
    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
    rate={1.0}
    volume={2.0}
    isMuted={false}
    resizeMode="cover"
    shouldPlay={false}
    isLooping
    useNativeControls
    style={{ flex:1,borderRadius:2 }}
    />
    </Styles.ViewVideo>
    <Styles.ViewSubContainer>
        <Styles.TitleCode>
            Código do equipamento
        </Styles.TitleCode>
        <Styles.InputCode
            placeholder='Digite o código...'
            returnKeyType="done"
            value={props.video}
            onChangeText={props.onChangeText}
            onSubmitEditing={props.doneCode}
        />
    </Styles.ViewSubContainer>
    </Styles.ContainerView>
  )
}

export default initialVideo;