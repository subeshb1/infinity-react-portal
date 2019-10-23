import React from "react";
import { storiesOf, addDecorator, setAddon } from "@storybook/react";
import { Carousel, CarouselState } from "../src";
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

setAddon(JSXAddon);

addDecorator(withKnobs);
const Button = withNotifications(({ push, notifications }) => (
  <button
    onClick={() =>
      push({
        type: "success",
        title: "Success " + notifications.length,
        message: <button>Subesh</button>,
        icon: true
      })
    }
  >
    Hello
  </button>
));
storiesOf("First", module).addWithJSX("First Story", () => {
  return (
    <Provider>
      Subesh
      <Button />
    </Provider>
  );
});
