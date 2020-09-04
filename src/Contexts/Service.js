import React,{ createContext, useState, useEffect } from 'react';

const ServiceContext = createContext({
    services : []
});

export const ServiceProvider = ( {children} ) => {

    return(
        <ServiceContext.Provider 
        value={{
                
            }}>
            {children}
        </ServiceContext.Provider>
        )
}
export default ServiceContext;