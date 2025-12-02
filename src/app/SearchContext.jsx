"use client";

import { useState,createContext, useContext } from "react";

const SearchContext = createContext();

export default function SearchProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState("");

    return(
        <SearchContext.Provider value={{searchQuery,setSearchQuery}}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    return useContext(SearchContext);
}