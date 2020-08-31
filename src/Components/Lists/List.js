import React from 'react';
import { FlatList,TouchableOpacity } from 'react-native';
import ItemAddComponent from '../Items/Itemcomponent/itemAdd';
import ItemComponent from '../Items/Itemcomponent/index';

const Lists = (props) => {
  return (
    <FlatList 
    data={props.data}
    horizontal
    ListFooterComponent={<ItemAddComponent/>}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    style={{paddingLeft:24}}
    key = {props => props.id}
    ListFooterComponentStyle={{marginRight:24}}
    keyExtractor = { props => props.id}
    renderItem={({item,position})=>(
      <TouchableOpacity 
      onPress={props.onPress}
      activeOpacity={0.9}
      >
        <ItemComponent
            uri={item.image}
            title={item.title}
            subTitle={item.subTitle}
            subTitleOption={item.subTitleOption}
        />
        </TouchableOpacity>
    )}
    />
  )
}

export default React.memo(Lists);