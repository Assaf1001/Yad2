import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/">
                <Redirect to="/home" />
            </Route>
            <Route path="/home" />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;
