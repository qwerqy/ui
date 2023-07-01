import React from "react";
import { Meta, Story } from "@storybook/react";
import { cn } from "@utils";
import { Input, InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    componentSubtitle: "A customizable input component",
    docs: {
      description: {
        component: "The Input component is used for accepting user input.",
      },
    },
  },
} as Meta;

const argTypes = {
  className: {
    control: "text",
    description: "Additional class name(s) for styling",
  },
  type: {
    control: {
      type: "select",
      options: ["text", "number", "password", "email"],
    },
    description: "The type of input field",
  },
  onChange: {
    action: "changed",
    description: "Event triggered when the value of the input changes",
  },
  // Add other props and their descriptions as needed
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text",
};
Default.argTypes = argTypes;

export const Password = Template.bind({});
Password.args = {
  type: "password",
  placeholder: "Enter password",
};
Password.argTypes = argTypes;
