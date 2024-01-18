import { FunctionComponent, ReactNode } from "react";
import { RouteProps } from "react-router-dom";

export type PrivateRouteProps = RouteProps & {
    scope?: string;
    children?: ReactNode;
};