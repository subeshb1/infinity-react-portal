import * as React from "react";
export interface NotificationProps {
    title?: string;
    message?: string;
    children?: any;
}
export declare const Title: ({ children, ...otherProps }: {
    children: string;
}) => JSX.Element;
export declare const Body: ({ children, ...otherProps }: {
    children: React.ReactElement<any>;
}) => JSX.Element;
export declare function Notification({ title, children, ...otherProps }: NotificationProps): JSX.Element;
export declare namespace Notification {
    var Title: (({ children, ...otherProps }: {
        children: string;
    }) => JSX.Element) | (({ children, ...otherProps }: {
        children: React.ReactElement<any>;
    }) => JSX.Element);
}
