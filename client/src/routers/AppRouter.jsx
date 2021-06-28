import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import UserContextProvider from "../context/UserContext";
import ConnectionContextProvider from "../context/ConnectionContext";
import Header from "../components/main/header/Header";
import HomePage from "../components/pages/HomePage";
import NotFoundPage from "../components/pages/NotFoundPage";
import ForSalePage from "../components/pages/forSale/ForSalePage";

const AppRouter = () => (
    <BrowserRouter>
        <UserContextProvider>
            <ConnectionContextProvider>
                <Header />
            </ConnectionContextProvider>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" component={HomePage} />
                <Route path="/forSale" component={ForSalePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </UserContextProvider>
    </BrowserRouter>
);

export default AppRouter;
