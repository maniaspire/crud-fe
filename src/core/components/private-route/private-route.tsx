import { FunctionComponent } from "react";
import { PrivateRouteProps } from "./private-route.interface";

import { Navigate } from "react-router-dom";

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({ children, scope }) => {
    return (
        <>
            {true ? children : <Navigate to='/login'></Navigate>}
        </>);
}

export { PrivateRoute };