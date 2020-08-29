import React,{useState} from 'react';
import * as Styles from './styles';
import { FlatList,View } from 'react-native';
import ItemComponent from '../Items/Itemcomponent/index';

const Lists = (props) => {
    const [data,setData] = useState([
    {id :'1',title:'Quarto'},
    {id :'2',title:'Sala'},
    {id :'3',title:'Quarto'},
    {id :'4',title:'Sala'},
    {id :'5',title:'Quarto'},
    {id :'6',title:'Sala'}
    ]);

  return (
    <Styles.ContainerVertical>
    <Styles.ContainerTitleOption>
        <Styles.TitleOption>
            {props.title}
        </Styles.TitleOption>
    </Styles.ContainerTitleOption>
        <FlatList 
            data={data}
            horizontal
            style={{paddingLeft:24}}
            key = {props => props.id}
            ListFooterComponent={<View></View>}
            ListFooterComponentStyle={{marginLeft:24}}
            keyExtractor = { props => props.id}
            renderItem={({item,position})=>(
                <ItemComponent/>
            )}
        />
    </Styles.ContainerVertical>
  )
}

export default Lists;