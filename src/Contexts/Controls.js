import React,{ createContext, useState } from 'react';

const ControlsContext = createContext({
    controls : [],
    AtivedSubList : ()=>{},
    subListControlsAtived : [],
    controlsAtived : false,
    AtivedSubSubList : ()=>{},
    subSubControlsAtived : false
});

export const ControlsProvider = ( {children} ) => {
    const [controls,setControls] = useState([
        {id :'1',title:'TV',image : require('../../assets/tv.png'),
        subTitleOption:true,
        subList : [
            {id:"1",image: require("../../assets/volume.png"),
            title:"Volume",subTitleOption:true,atived : false, volume : []},
            { id:"2",canais:[],
            title:"Canais",
            image : require("../../assets/canais.png") ,
            subTitleOption:true,
            atived : false  }
            ]
        },
        {id :'2',title:'Sound',image : require('../../assets/items.png'),subTitleOption:true,subList : []},
        {id :'3',title:'Light',image : require('../../assets/light.png'),subTitleOption:true,subList : []},
        {id :'4',title:'Hmac',image : require('../../assets/hmac.png'),subTitleOption:true,subList : []},
      ]);
      const [subSubControlsAtived,setSubSubControlsAtived] = useState(false);

      
      const [controlsAtived,setControlsAtived] = useState(false);
      const [subListControlsAtived,setSubListControlsAtived] = useState([]);
      const [AtualAtived,setAtualAtived] = useState("");

      function AtivedSubList(value){
        const newData = controls.filter((res)=>{
            if(res.id === value && value !== AtualAtived){
                res.atived = true;
                setSubListControlsAtived(res.subList);
                setAtualAtived(value);
            }else{
                res.atived = false;
            }
            return res;
        })
        setControls(newData);
        if(value === AtualAtived && controlsAtived){
            setControlsAtived(false);
            setSubListControlsAtived([]);
            setAtualAtived("");
            setSubSubControlsAtived(false);
        }else{
            setControlsAtived(true);
            setSubSubControlsAtived(false);
        }
    }

    function AtivedSubSubList(value){
        subSubControlsAtived ? setSubSubControlsAtived(false) : setSubSubControlsAtived(true)
    }

    return(
        <ControlsContext.Provider 
        value={{
                controls : controls,
                AtivedSubList : (id) => AtivedSubList(id),
                subListControlsAtived : subListControlsAtived,
                controlsAtived : controlsAtived,
                AtivedSubSubList : (id)=>AtivedSubSubList(id),
                subSubControlsAtived : subSubControlsAtived
            }}>
            {children}
        </ControlsContext.Provider>
        )
}
export default ControlsContext;