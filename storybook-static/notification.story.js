import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs";
import {
  Provider,
  Consumer,
  withNotifications
} from "../src/notifications-context";
import JSXAddon from "storybook-addon-jsx";

storiesOf("Notification", module).add("Usage", () => {
  return "Hello";
});
