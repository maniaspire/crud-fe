import { FunctionComponent, ReactNode, useEffect } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { useAppReducer, AppContext } from "../../reducer";
import { Axios } from "../../helpers";

interface HttpInterceptorProps {
    children: ReactNode
}

const HttpInterceptor: FunctionComponent<HttpInterceptorProps> = ({ children }) => {

    const { dispatch, getContextValue } = useAppReducer();

    const handleSuccessResponse = (response: AxiosResponse) => response;
    const handleFailureResponse = (data: AxiosError) => {
        const statusCode = data.response?.status;
        const statusMessage = data.response?.statusText || (data.response?.data as any)?.['error'];
        console.log(statusCode, statusMessage);
        throw data;
    }

    useEffect(() => {
        Axios.interceptors.request.use(config => {
            //TODO:- add authorization header here
            return { ...config }
        });

        Axios.interceptors.response.use(handleSuccessResponse, handleFailureResponse)
    }, [])

    return (
        <AppContext.Provider value={{ dispatch, getContextValue }}>
            {children}
        </AppContext.Provider>
    )
}

export { HttpInterceptor };