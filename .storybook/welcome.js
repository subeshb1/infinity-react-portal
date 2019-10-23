import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { setOptions } from "@storybook/addon-options";
import { themes } from "@storybook/components";
import md from "../docs/notification.md";
storiesOf("Welcome", module).add(
  "to Infinity React Transition",
  withInfo({ inline: true, markdown: md, source: false })(() => "")
);
