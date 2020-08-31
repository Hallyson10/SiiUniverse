import React from 'react';
import * as Styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const Itemcomponent = (props) => {
  return (
        <Styles.Container
        >
            <Styles.SubContainer>
            <Styles.ViewOptions>
              <Styles.ImageItems
                source={props.uri}
                resizeMode='contain'
              />
              <Styles.TitleButtonOption>
                {props.title}
              </Styles.TitleButtonOption>
              </Styles.ViewOptions>
              {props.subTitle ?<Styles.SubTitle>
                Ligado
              </Styles.SubTitle> : null}
            { props.subTitleOption ? <Styles.ContainerViewTitleItem
            onPress={props.onPress}
            >
              <Styles.View>
              <Styles.SubTitleButtonOption>
                Ligado
              </Styles.SubTitleButtonOption>
              </Styles.View>
              <Styles.IconOptionTitle>
                <AntDesign name='down' size={18} color='#A7518A'/>
              </Styles.IconOptionTitle>
              </Styles.ContainerViewTitleItem> : null}
            </Styles.SubContainer>
        </Styles.Container>
  )
}

export default Itemcomponent;