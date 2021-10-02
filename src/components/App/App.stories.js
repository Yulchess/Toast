import React from "react";

import { App } from "./App";

export default {
  title: "TestComponent",
  component: App,
};

export const Template = (args) => <App {...args} />;
