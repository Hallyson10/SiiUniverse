import React,{ createContext, useState, useEffect } from 'react';

const PreferenciasContext = createContext({
    preferencias : [],
    setPreferencia : ()=>{},
    preferencyAtived : false,
    subListPreferencyAtived : []
});

export const PreferenciaProvider = ( {children} ) => {
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

    return(
        <PreferenciasContext.Provider 
        value={{
            preferencias : preferencia,
            setPreferencia : (value) => AtivedSubList(value),
            preferencyAtived : preferencyAtived,
            subListPreferencyAtived : subListPreferencyAtived
            }}>
            {children}
        </PreferenciasContext.Provider>
        )
}
export default PreferenciasContext;