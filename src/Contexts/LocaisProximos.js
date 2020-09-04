import React,{ createContext, useState, useEffect } from 'react';

const LocaisProximosContext = createContext({
    locaisProximos : []
});

export const LocaisProximosProvider = ( {children} ) => {
    const [locaisProx,setLocaisProximos] = useState([
        {id :'1',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
        {id :'2',title:'Sala',image : require('../../assets/items.png'),subTitle:'Texto'},
        {id :'3',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
        {id :'4',title:'Cozinha',image : require('../../assets/items.png'),subTitle:'Texto'},
        {id :'5',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
        {id :'6',title:'Escritório',image : require('../../assets/items.png'),subTitle:'Texto'}
        ]);
    return(
        <LocaisProximosContext.Provider 
        value={{
            locaisProximos : locaisProx
            }}>
            {children}
        </LocaisProximosContext.Provider>
        )
}
export default LocaisProximosContext;