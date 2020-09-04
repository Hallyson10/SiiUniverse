import React,{ createContext, useState, useEffect } from 'react';

const AdicionadosContext = createContext({
    locaisAdicionados : []
});

export const LocaisAdicionadosProvider = ( {children} ) => {
    const [locaisAdd,setLocaisAdicionados] = useState([
    {id :'1',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
    {id :'2',title:'Sala',image : require('../../assets/items.png'),subTitle:'Texto'},
    {id :'3',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
    {id :'4',title:'Cozinha',image : require('../../assets/items.png'),subTitle:'Texto'},
    {id :'5',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
    {id :'6',title:'Escritório',image : require('../../assets/items.png'),subTitle:'Texto'}
    ]);

    return(
        <AdicionadosContext.Provider 
        value={{
            locaisAdicionados: locaisAdd
            }}>
            {children}
        </AdicionadosContext.Provider>
        )
}
export default AdicionadosContext;