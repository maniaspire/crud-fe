import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginComponent, UserComponent, UserForm } from "../../../components";
import { PrivateRoute } from "../private-route";

import { HeaderComponent } from "../header";
import { NotFoundComponent } from "../not-found";

interface RouterComponentProps {

}

const RouterComponent: FunctionComponent<RouterComponentProps> = () => {

    const getPrivateRoute = (component: FunctionComponent, scope?: string) => {
        return <PrivateRoute component={component} scope={scope} />
    }

    const privateComponents = [{
        path: '/list-user',
        component: UserComponent,
        scope: 'USER_COMPONENT'
    }, {
        path: '/create-user',
        component: UserForm,
    }, {
        path: '/edit-user',
        component: UserForm,
    }]

    return (<>
        <BrowserRouter basename="/">
            <div>
                <HeaderComponent></HeaderComponent>
                <Routes >
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path='/login' element={<LoginComponent />} />

                    {/* Private routes */}
                    {privateComponents.map(props => <Route key={props.path} path={props.path} element={getPrivateRoute(props.component, props?.scope)} />)}

                    {/* Not found route */}
                    <Route path="*" element={<NotFoundComponent />} />
                </Routes>
            </div>
        </BrowserRouter></>);
}

export { RouterComponent };