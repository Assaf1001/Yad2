import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
    const [headerClassName, setHeaderClassName] = useState("header");

    return (
        <GlobalContext.Provider value={{ headerClassName, setHeaderClassName }}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
