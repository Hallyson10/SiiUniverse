import React from 'react';
import * as Styles from './styles';
import Cabecalho from '../../Components/MainLogout/Cabecalho';
import Lists from '../../Components/Lists/listOptions';

const MainLogout = () => {
  return (
      <Styles.Container>
        <Cabecalho/>
        <Lists
            title='LOCAIS ADICIONADOS'
        />
        <Lists
            title='LOCAIS PRÓXIMOS'
        />
      </Styles.Container>
  )
}

export default MainLogout;