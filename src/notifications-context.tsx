import * as React from "react";
import { createPortal } from "./Portal";

interface NotificationType {
  type: string;
  content: string;
  id?: string;
}
interface NotificationContext {
  notifications: Array<NotificationType>;
  push(notification: NotificationType): void;
}
const Context = React.createContext({
  notifications: [],
  push() {}
} as NotificationContext);

export interface ProviderProps {
  children: React.ReactNode;
}
const fixed = document.createElement("div");
fixed.id = "iui-notification-portal";
fixed.className = "iui-fixed iui-fixed--bottom iui-fixed--right";
const container = document.createElement("div");
container.className = "iui-fixed__container";
document.body.prepend(fixed);
fixed.appendChild(container);

const Portal = createPortal(container);

export class Provider extends React.Component<
  ProviderProps,
  { notifications: Array<NotificationType> }
> {
  state = {
    notifications: [{ type: "Hello", content: "Hello" }]
  };
  push = (notification: NotificationType) => {
    this.setState(({ notifications }) => {
      return {
        notifications: [...notifications, notification]
      };
    });
  };

  public render() {
    return (
      <Context.Provider
        value={
          {
            notifications: this.state.notifications,
            push: this.push
          } as NotificationContext
        }
      >
        {this.props.children}
        {this.state.notifications
          .map(x => x)
          .reverse()
          .map((x: NotificationType, i: number) => {
            return (
              <Portal key={i}>
                <div className="iui-fixed__toast">{x.content}</div>
              </Portal>
            );
          })}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

export const withNotifications = <P extends object>(
  Element: React.ComponentType<P>
) => {
  return function NotificationConsumer(
    props: React.ComponentType<P & NotificationType>
  ) {
    return (
      <Consumer>
        {({ push, notifications }) => (
          <Element {...{ ...(props as P), push, notifications }} />
        )}
      </Consumer>
    );
  };
};
