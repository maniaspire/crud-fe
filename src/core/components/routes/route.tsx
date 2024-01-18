import { FunctionComponent } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginComponent, UserComponent, UserForm } from "../../../components";
import { PrivateRoute } from "../private-route";

import { NotFoundComponent } from "../not-found";

interface RouterComponentProps {

}

const RouterComponent: FunctionComponent<RouterComponentProps> = () => {

    const getPrivateRoute = (Component: FunctionComponent, scope?: string) => {
        return (<PrivateRoute scope={scope} >
            <Component />
        </PrivateRoute>)
    }

    const privateComponents = [{
        path: '/list-user',
        component: UserComponent,
        scope: 'USER_COMPONENT',
    }, {
        path: '/create-user',
        component: UserForm,
    }, {
        path: '/edit-user',
        component: UserForm,
    }]

    return (
        <>
            <Routes >
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path='/login' element={<LoginComponent />} />

                {/* Private routes */}
                {privateComponents.map(props => <Route key={props.path} path={props.path} element={getPrivateRoute(props.component, props?.scope)} />)}

                {/* Not found route */}
                <Route path="*" element={<NotFoundComponent />} />
            </Routes>
        </>);
}

export { RouterComponent };