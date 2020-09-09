import React,{ createContext, useState } from 'react';

const EquipamentosContext = createContext({
    locaisAdicionados : [],
    locaisProximos : [],
    scenes : [],
    services : [],
    status : [],
    meusLocais : [],
    preferencias : [],
    setPreferencia : ()=>{},
    preferencyAtived : false,
    subListPreferencyAtived : [],
    FindEquipament : ()=>{}
});

export const EquipamentosProvider = ( {children} ) => {
    const [locaisAdd,setLocaisAdicionados] = useState([
    {id :'1',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
    {id :'2',title:'Sala',image : require('../../assets/items.png'),subTitle:'Texto'},
    {id :'3',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
    ]);
    const [locaisProx,setLocaisProximos] = useState([
        {id :'1',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
        {id :'2',title:'Sala',image : require('../../assets/items.png'),subTitle:'Texto'},
        ]);
    const [scenes,setScene] = useState([
        {id :'1',title:'Master Off',image : require('../../assets/off.png'),subTitleOption:true},
        {id :'2',title:'Relax',image : require('../../assets/relax.png'),subTitleOption:true},
        {id :'3',title:'Sleep',image : require('../../assets/sleep.png'),subTitleOption:true},
        ]);
        const [services,setServices] = useState([
            {id :'1',title:'Suporte',image : require('../../assets/suporte.png'),subTitleOption:true},
            {id :'2',title:'Bounty',image : require('../../assets/bountry.png'),subTitleOption:true},
            {id :'3',title:'Room Maid',image : require('../../assets/room.png'),subTitleOption:true},
          ]);
          const [status,setStatus] = useState([
            {id :'1',title:'Temperature',image : require('../../assets/temperature.png'),subTitle:"12Cº"},
            {id :'2',title:'Energy',image : require('../../assets/energy.png'),subTitle:"150W"},
        ]);
        const [meusLocais,setMeusLocais] = useState([
            {id :'1',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
            {id :'2',title:'Sala',image : require('../../assets/items.png'),subTitle:'Texto'},
            {id :'3',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
            ]);
        const [preferencia,setPreferencia] = useState([
            {id :'1',title:'Light',image : require('../../assets/light.png'),subTitleOption:true, atived : false,subList:[{id:"2"}]},
            {id :'2',title:'Temperature',image : require('../../assets/temperature.png'),subTitleOption:true, atived:false},
            {id :'3',title:'TV',image : require('../../assets/tv.png'),subTitleOption:true, atived:false},
            {id :'4',title:'Não pertube',image : require('../../assets/pertube.png'),subTitleOption:true,atived : false}
            ]);
        const [preferencyAtived,setPreferency] = useState(false);
        const [subListPreferencyAtived,setSubListPreferencyAtived] = useState([]);
        const [AtualAtived,setAtualAtived] = useState("");

        function AtivedSubList(value){
            const newData = preferencia.filter((res)=>{
                if(res.id === value && value !== AtualAtived){
                    res.atived = true;
                    setSubListPreferencyAtived(res.subList);
                    setAtualAtived(value);
                }else{
                    res.atived = false;
                }
                return res;
            })
            setPreferencia(newData);
            if(value === AtualAtived && preferencyAtived){
                setPreferency(false);
                setSubListPreferencyAtived([]);
                setAtualAtived("");
            }else{
                setPreferency(true);
            }
        }
        function FindEquipament(code){
            if(code === ""){
                return false;
            }else{
                return true;
            }
        }
    return(
        <EquipamentosContext.Provider 
        value={{
            locaisAdicionados: locaisAdd,
            locaisProximos : locaisProx,
            scenes : scenes,
            services : services,
            status : status,
            meusLocais : meusLocais,
            preferencias : preferencia,
            setPreferencia : (value) => AtivedSubList(value),
            preferencyAtived : preferencyAtived,
            subListPreferencyAtived : subListPreferencyAtived,
            FindEquipament : FindEquipament
            }}>
            {children}
        </EquipamentosContext.Provider>
        )
}
export default EquipamentosContext;