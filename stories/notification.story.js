import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withMarkdownNotes } from "@storybook/addon-notes";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs";
import { Transition } from "infinity-react-transition";
import JSXAddon from "storybook-addon-jsx";
import { Notification, NotificationType } from "../src/Notification";

storiesOf("Notification/Usage", module)
  .add(
    "withProps",
    withInfo({ inline: true })(() => (
      <Notification
        type={select(
          "#1 Notification Type",
          NotificationType,
          NotificationType.SUCCESS,
          "#1"
        )}
        icon={boolean("#1 Show Icon: ", true, "#1")}
        message={text(
          "#1 Message: ",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, a nobis quod quasi quia consequuntur quas dolores rem ratione, mollitia veniam fugit! Aliquam hic nulla assumenda id quas harum ducimus!",
          "#1"
        )}
        title={text("#1 Title: ", "Success", "#1")}
        onClose={() => alert("#1 Notification Close")}
      />
    ))
  )
  .add(
    "withJSX",
    withInfo({ inline: true })(() => (
      <Notification
        type={select(
          "#2 Notification Type",
          NotificationType,
          NotificationType.BASIC,
          "#2"
        )}
        icon={boolean("#2 Show Icon: ", false, "#2")}
        onClose={() => alert("#2 Notification Close")}
      >
        <Notification.Title>Basic</Notification.Title>
        <Notification.Message>
          Display any Element Here.
          <p>Inject Elements or Plain Texts</p>
        </Notification.Message>
      </Notification>
    ))
  )
  .addWithJSX(
    "withTransition",
    withMarkdownNotes(`## View infinity-react-transition for more details`)(
      () => (
        <Transition mount={{ style: { animationName: "t-fade-in-slow" } }}>
          <Notification
            type={select(
              "#2 Notification Type",
              NotificationType,
              NotificationType.BASIC,
              "#2"
            )}
            icon={boolean("#2 Show Icon: ", false, "#2")}
            onClose={() => alert("#2 Notification Close")}
          >
            <Notification.Title>Basic</Notification.Title>
            <Notification.Message>
              infinity-react-transition for sweet animations and Transitions.
            </Notification.Message>
          </Notification>
        </Transition>
      )
    )
  );

storiesOf("Notification/props.type", module)
  .add(
    "basic",
    withInfo({ markdown: "Subesh", inline: true })(() => (
      <Notification
        type={"basic"}
        message={"I'm a Basic Notification"}
        title={"Basic"}
      />
    ))
  )
  .add(
    "success",
    withInfo({ markdown: "Subesh", inline: true })(() => (
      <Notification
        type={"success"}
        message={"I'm a Success Notification"}
        title={"Success"}
      />
    ))
  )
  .add(
    "error",
    withInfo({ markdown: "Subesh", inline: true })(() => (
      <Notification
        type={"error"}
        message={"I'm an Error Notification"}
        title={"Error"}
      />
    ))
  )
  .add(
    "warning",
    withInfo({ markdown: "Subesh", inline: true })(() => (
      <Notification
        type={"warning"}
        message={"I'm a Warning Notification"}
        title={"Warning"}
      />
    ))
  )
  .add(
    "info",
    withInfo({ markdown: "Subesh", inline: true })(() => (
      <Notification
        type={"info"}
        message={"I'm an Info Notification"}
        title={"Info"}
      />
    ))
  );
