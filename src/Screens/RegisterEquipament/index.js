import React,{ useState } from 'react';
import { Modal } from 'react-native';
import * as Styles from "./styles";


const RegisterEquipament = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
        >
        <Styles.Container></Styles.Container>
      </Modal>      
  )
}

export default RegisterEquipament;