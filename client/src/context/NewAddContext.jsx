import React, { createContext, useReducer } from "react";
import newAddReducer, { initialNewAddState } from "../reducers/newAddReducer";

export const NewAddContext = createContext();

const NewAddContextProvider = (props) => {
    const [newAddData, dispatchNewAddData] = useReducer(
        newAddReducer,
        initialNewAddState
    );

    return (
        <NewAddContext.Provider value={{ newAddData, dispatchNewAddData }}>
            {props.children}
        </NewAddContext.Provider>
    );
};

export default NewAddContextProvider;
