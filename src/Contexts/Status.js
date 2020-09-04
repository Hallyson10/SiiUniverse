import React,{ createContext, useState, useEffect } from 'react';

const StatusContext = createContext({
    status : []
});

export const StatusProvider = ( {children} ) => {

    return(
        <StatusContext.Provider 
        value={{
                
            }}>
            {children}
        </StatusContext.Provider>
        )
}
export default StatusContext;