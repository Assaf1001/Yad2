import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import LoginContextProvider from "../context/LoginContext";
import Header from "../components/main/header/Header";
import HomePage from "../components/pages/HomePage";
import NotFoundPage from "../components/pages/NotFoundPage";

const AppRouter = () => (
    <BrowserRouter>
        <LoginContextProvider>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" component={HomePage} />
                <Route path="/forSale" />
                <Route component={NotFoundPage} />
            </Switch>
        </LoginContextProvider>
    </BrowserRouter>
);

export default AppRouter;
