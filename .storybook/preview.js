import React from "react";
import { addDecorator } from "@storybook/react";

import { ControlPadding } from "./decorators";


import "../src/index.css";


addDecorator((story) => <ControlPadding story={story} />);