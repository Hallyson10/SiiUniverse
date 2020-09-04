import React from 'react';
import * as Styles from './styles';
import HeaderComponentLogin from '../../Components/Login/ImageDesign/index';
import BottomComponentLogin from '../../Components/Login/ImageDesign/bottom';
import Buttom from "../../Components/Bottoms/buttonLogin";

const ResertCode = () => {
  return (
      <Styles.Container>
      <Styles.SubContainer>
        <HeaderComponentLogin/>
        <Styles.TextTitle>Confirme o código enviado para seu e-mail.</Styles.TextTitle>
        <Styles.InputCode
          placeholder="Digite o código..."
        />
        <Buttom title="Concluir"/>
        <BottomComponentLogin/>
        </Styles.SubContainer>
      </Styles.Container>
  )
}

export default ResertCode;