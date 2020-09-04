import React,{ createContext, useState, useEffect } from 'react';

const ScenesContext = createContext({
    scenes : []
});

export const ScenesProvider = ( {children} ) => {
    const [scenes,setScene] = useState([
        {id :'1',title:'Master Off',image : require('../../assets/off.png'),subTitleOption:true},
        {id :'2',title:'Relax',image : require('../../assets/relax.png'),subTitleOption:true},
        {id :'3',title:'Sleep',image : require('../../assets/sleep.png'),subTitleOption:true},
      ]);

    return(
        <ScenesContext.Provider 
        value={{
                scenes : scenes
            }}>
            {children}
        </ScenesContext.Provider>
        )
}
export default ScenesContext;