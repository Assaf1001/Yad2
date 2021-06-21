import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const PrivateRoute = ({ Component: component, ...rest }) => {
    const { userData } = useContext(LoginContext);

    return (
        <Route
            {...rest}
            component={(props) =>
                !!userData.user ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
