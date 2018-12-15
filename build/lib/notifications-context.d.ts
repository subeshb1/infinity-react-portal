import * as React from "react";
interface NotificationType {
    type: string;
    content: string;
    id?: string;
}
interface NotificationContext {
    notifications: Array<NotificationType>;
    push(notification: NotificationType): void;
}
export interface ProviderProps {
    children: React.ReactNode;
}
export declare class Provider extends React.Component<ProviderProps, {
    notifications: Array<NotificationType>;
}> {
    state: {
        notifications: {
            type: string;
            content: string;
        }[];
    };
    push: (notification: NotificationType) => void;
    render(): JSX.Element;
}
export declare const Consumer: React.ExoticComponent<React.ConsumerProps<NotificationContext>>;
export declare const withNotifications: <P extends object>(Element: React.ComponentType<P>) => (props: React.ComponentType<P & NotificationType>) => JSX.Element;
export {};
