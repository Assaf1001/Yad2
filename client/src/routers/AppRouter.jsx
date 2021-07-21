import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import UserContextProvider from "../context/UserContext";
import ConnectionContextProvider from "../context/ConnectionContext";
import Header from "../components/main/header/Header";
import HomePage from "../components/pages/HomePage";
import NotFoundPage from "../components/pages/NotFoundPage";
import ForSalePage from "../components/pages/forSale/ForSalePage";
import Footer from "../components/main/footer/Footer";
import GlobalContextProvider from "../context/GlobalContext";
import PublishAddPage from "../components/pages/publishAdd/PublishAddPage";
import NewAddPage from "../components/pages/newAdd/NewAddPage";

const AppRouter = () => (
    <BrowserRouter>
        <GlobalContextProvider>
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
                    <Route path="/publishAdd" component={PublishAddPage} />
                    <Route path="/newAdd" component={NewAddPage} />
                    <Route component={NotFoundPage} />
                </Switch>
                <Footer />
            </UserContextProvider>
        </GlobalContextProvider>
    </BrowserRouter>
);

export default AppRouter;
