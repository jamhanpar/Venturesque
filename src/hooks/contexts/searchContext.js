import React, { createContext, useState, useContext } from 'react';

export const SearchContext = createContext();

export const useSearchContext = () => {
    return useContext(SearchContext);
}

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState('lala');
    const [cuisine, setCuisine] = useState();

    return (
        <SearchContext.Provider value={{search, setSearch, cuisine, setCuisine}}>
            {children}
        </SearchContext.Provider>
    )
}
