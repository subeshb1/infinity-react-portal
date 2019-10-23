import * as React from "react";
import "./notification.css";
export enum NotificationType {
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning",
  INFO = "info",
  BASIC = "basic"
}
export interface NotificationProps {
  /**
   * The Title of Notification
   *
   * @default  ""
   * */
  title?: React.ReactNode;
  message?: React.ReactNode;
  children?: React.ReactNode;
  type?: NotificationType;
  /**
   * Display Icons on respective type
   *
   * @default  true
   * */
  icon?: boolean;
   /**
   * Extra Class Name. Primarily added for Transition Support but can be used for adding extra class
   *
   * @default  true
   * */
  className?: string;
  onClose?: ((event: React.MouseEvent<HTMLDivElement>) => void);
}

/**
 *
 * @component - Title
 *
 */
export const Title = ({ children, ...otherProps }: { children: string }) => (
  <div className="iui-notification__title" {...otherProps}>
    {children}
  </div>
);
Title.displayName = "NotificationTitle";

/**
 *
 * @component - Message
 */
export const Message = ({
  children,
  ...otherProps
}: {
  children: React.ReactNode;
}) => (
  <div className="iui-notification__message" {...otherProps}>
    {children}
  </div>
);
Message.displayName = "NotificationMessage";

/**
 *
 * @function - iconSelector
 */

const getIcon = (type: NotificationType): React.ReactNode => {
  switch (type) {
    case NotificationType.INFO:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
        </svg>
      );
    case NotificationType.WARNING:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z" />
        </svg>
      );
    case NotificationType.ERROR:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path opacity=".87" fill="none" d="M0 0h24v24H0V0z" />
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 12 7.7 9.11c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z" />
        </svg>
      );
    case NotificationType.SUCCESS:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z" />
        </svg>
      );
    default:
      return "";
  }
};

/**
 *
 * @function - extractData
 */
const extractData = (
  children: React.ReactNode
): { title: React.ReactNode; message: React.ReactNode } => {
  let title = "";
  let message = "";
  React.Children.forEach(children, child => {
    if ((child as React.ReactElement<any>).type === Title) {
      title = (child as React.ReactElement<any>).props.children;
    }
    if ((child as React.ReactElement<any>).type === Message) {
      message = (child as React.ReactElement<any>).props.children;
    }
  });
  return {
    title,
    message
  };
};
/**
 *
 * @component Notification
 */

export function Notification({
  title = "",
  message = "",
  children,
  type = NotificationType.SUCCESS,
  icon = true,
  onClose = () => {},
  className,
  ...otherProps
}: NotificationProps) {
  let displayTitle: React.ReactNode = title;
  let displayMessage: React.ReactNode = message;

  if (title === "" || message === "") {
    const { title: jsxTitle, message: jsxMessage } = extractData(children);
    if (displayTitle === "") displayTitle = jsxTitle;
    if (displayMessage === "") displayMessage = jsxMessage;
  }
  return (
    <div
      className={`iui-notification iui-notification--${type} ${className ||
        ""}`}
      {...otherProps}
    >
      <div className="iui-notification__top">
        <div className="iui-notification__title">
          {displayTitle}
          {icon && (
            <div className="iui-notification__icon">{getIcon(type)}</div>
          )}
        </div>
        <div className="iui-notification__message">{displayMessage}</div>
      </div>
      <div className="iui-notification__actions">
        <div className="iui-notification__cross" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#a7a5a5"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
      </div>
    </div>
  );
}

Notification.Title = Title;
Notification.Message = Message;
Notification.defaultProps = {
  title: "",
  message: "",
  type: NotificationType.SUCCESS,
  icon: true,
  onClose: () => {}
};
