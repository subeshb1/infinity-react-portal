import * as React from "react";
import { createPortal } from "./Portal";
import {
  Notification,
  NotificationProps,
  NotificationType
} from "./Notification";
import { Transition } from "infinity-react-transition";
interface NotificationData extends NotificationProps {
  id?: string;
  unmount?: boolean;
}
interface NotificationContext {
  notifications: Array<NotificationData>;
  push(notification: NotificationData): void;
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
document.body.appendChild(fixed);
fixed.appendChild(container);

const Portal = createPortal(container);

export class Provider extends React.Component<
  ProviderProps,
  { notifications: Array<NotificationData> }
> {
  state = {
    notifications: [
      {
        type: NotificationType.ERROR,
        title: "Hello",
        message: "awesome",
        id: "0",
        icon: true
      }
    ]
  };
  push = (notification: NotificationData) => {
    this.setState(({ notifications }) => {
      return {
        notifications: [...notifications, notification]
      };
    });
  };
  delete = (key: number) => {
    this.setState(({ notifications }) => {
      return {
        notifications: notifications.filter((_, i) => i !== key)
      };
    });
  };
  unmount = (key: number) => () => {
    this.setState(({ notifications }) => {
      return {
        notifications: notifications.map((x, i) => {
          if (i === key) return { ...x, unmount: true };
          return x;
        })
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
          .map((x: NotificationData, i: number) => {
            return (
              <Portal key={this.state.notifications.length - i}>
                <Transition
                  duration="0.2s"
                  event={x.unmount ? "unmount" : undefined}
                  mount={{ style: { animationName: "t-slide-right " } }}
                  unmount={{ style: { animationName: "t-slide-left" } }}
                  onTransitionEnd={(event, name) => {
                    if (name === "unmount")
                      this.delete(this.state.notifications.length - 1 - i);
                  }}
                >
                  <Notification
                    {...x}
                    onClose={this.unmount(
                      this.state.notifications.length - 1 - i
                    )}
                  />
                </Transition>
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
    props: React.ComponentType<P & NotificationData>
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
