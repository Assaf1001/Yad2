import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import LoginContextProvider from "../context/LoginContext";
import Header from "../components/main/Header";

const AppRouter = () => (
    <BrowserRouter>
        <LoginContextProvider>
            <Header />
            <Switch>
                <Route path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" />
                <Route path="/login" />
            </Switch>
        </LoginContextProvider>
    </BrowserRouter>
);

export default AppRouter;
