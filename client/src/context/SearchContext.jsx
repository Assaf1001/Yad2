import React, { createContext, useReducer } from "react";
import searchReducer, { initialSearchState } from "../reducers/searchReducdr";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
    const [searchData, dispatchSearchData] = useReducer(
        searchReducer,
        initialSearchState
    );

    return (
        <SearchContext.Provider value={{ searchData, dispatchSearchData }}>
            {props.children}
        </SearchContext.Provider>
    );
};

export default SearchContextProvider;
