import React from 'react';
import * as Styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const Itemcomponent = (props) => {
  return (
        <Styles.Container
        >
            <Styles.SubContainer
              atived={props.atived}
            >
            <Styles.ViewOptions>
              {props.uri ? <Styles.ImageItems
                source={props.uri}
                resizeMode='contain'
              /> : 
              <Styles.TextVolume>
                {props.imageTitle}
              </Styles.TextVolume>
              }
              <Styles.TitleButtonOption>
                {props.title}
              </Styles.TitleButtonOption>
              </Styles.ViewOptions>
              {props.subTitle !== "" ? <Styles.SubTitle>
                {props.subTitle}
              </Styles.SubTitle> : null}
            { props.subTitleOption ? <Styles.ContainerViewTitleItem
            onPress={props.onPressAtived}
            activeOpacity={0.9}
            >
              <Styles.View>{props.atived ? 
              <Styles.SubTitleButtonOption>
                Ligado
              </Styles.SubTitleButtonOption> : 
              <Styles.SubTitleOptionDesatived>
                Desligado
              </Styles.SubTitleOptionDesatived>}
              </Styles.View>
              <Styles.IconOptionTitle>
                {props.atived ? <AntDesign name='up' size={18} color='#A7518A'/> : <AntDesign name='down' size={18} color='#A7518A'/>}
              </Styles.IconOptionTitle>
              </Styles.ContainerViewTitleItem> : null}
            </Styles.SubContainer>
        </Styles.Container>
  )
}

export default Itemcomponent;