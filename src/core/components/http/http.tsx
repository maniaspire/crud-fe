import { FunctionComponent, ReactNode, useEffect } from "react";
import { Axios } from "../../helpers";
import { AxiosError, AxiosResponse } from "axios";

interface HttpInterceptorProps {
    children: ReactNode
}

const HttpInterceptor: FunctionComponent<HttpInterceptorProps> = ({ children }) => {

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
        <>
            {children}
        </>
    )
}

export { HttpInterceptor };