import React, { useState, createContext, useReducer } from "react";
import {
    initLoginAction,
    initSignupAction,
} from "../actions/connectionActions";
import connectionReducer, {
    initialLoginState,
    initialSignupState,
} from "../reducers/connectionReducer";

export const ConnectionContext = createContext();

const ConnectionContextProvider = (props) => {
    const [loginData, dispatchLoginData] = useReducer(
        connectionReducer,
        initialLoginState
    );
    const [signupData, dispatchSignupData] = useReducer(
        connectionReducer,
        initialSignupState
    );

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const onClickToggleModal = () => {
        if (!isModalOpen) setIsModalOpen(true);
        else setIsModalOpen(false);
    };

    const onClickToggleLoginMode = () => {
        if (isLoginMode) {
            dispatchLoginData(initLoginAction());
            setIsLoginMode(false);
        } else {
            dispatchSignupData(initSignupAction());
            setIsLoginMode(true);
        }
    };

    return (
        <ConnectionContext.Provider
            value={{
                loginData,
                dispatchLoginData,
                signupData,
                dispatchSignupData,
                isModalOpen,
                onClickToggleModal,
                isLoginMode,
                onClickToggleLoginMode,
                errorMessage,
                setErrorMessage,
            }}
        >
            {props.children}
        </ConnectionContext.Provider>
    );
};

export default ConnectionContextProvider;
