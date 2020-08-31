import React,{ useState } from 'react';
import { Modal,Alert } from 'react-native';
import * as Styles from "./styles";
import { Video } from 'expo-av';


const RegisterEquipament = (props) => {
    const [modalVisible, setModalVisible] = useState(true);
  return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}
        >
        <Styles.Container>
        <Styles.ContainerView>
            <Styles.ViewVideo>
            <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            rate={1.0}
            volume={2.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            useNativeControls
            style={{ flex:1 }}
            />
            </Styles.ViewVideo>
            <Styles.ViewSubContainer>
                <Styles.TitleCode>
                    Código do equipamento
                </Styles.TitleCode>
                <Styles.InputCode
                    placeholder='Digite o código...'
                />
            </Styles.ViewSubContainer>
            </Styles.ContainerView>
        </Styles.Container>
      </Modal>      
  )
}

export default RegisterEquipament;