import React,{useState} from 'react';
import * as Styles from './styles';
import List from './List';

const Lists = (props) => {
  return (
    <Styles.ContainerVertical>
    <Styles.ContainerTitleOption>
        <Styles.TitleOption>
            {props.title}
        </Styles.TitleOption>
    </Styles.ContainerTitleOption>
        <List 
            data={props.data}
            onPress={props.onPress}
        />
    </Styles.ContainerVertical>
  )
}

export default React.memo(Lists);