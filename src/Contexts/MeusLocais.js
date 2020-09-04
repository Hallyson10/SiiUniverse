import React,{ createContext, useState, useEffect } from 'react';

const MeusLocaisContext = createContext({
    meusLocais : []
});

export const MeusLocaisProvider = ( {children} ) => {
    const [meusLocais,setMeusLocais] = useState([
        {id :'1',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
        {id :'2',title:'Sala',image : require('../../assets/items.png'),subTitle:'Texto'},
        {id :'3',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
        {id :'4',title:'Cozinha',image : require('../../assets/items.png'),subTitle:'Texto'},
        {id :'5',title:'Quarto',image : require('../../assets/items.png'),subTitle:'Texto'},
        {id :'6',title:'Escritório',image : require('../../assets/items.png'),subTitle:'Texto'}
        ]);

    return(
        <MeusLocaisContext.Provider 
        value={{
                meusLocais : meusLocais
            }}>
            {children}
        </MeusLocaisContext.Provider>
        )
}
export default MeusLocaisContext;