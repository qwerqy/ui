import { Meta, Story } from "@storybook/react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  componentSubtitle: "Displays a customizable Checkbox component",
  description: "This component is a Checkbox with customizable styles.",
  argTypes: {
    className: {
      description: "Custom CSS classes to apply",
      control: "text",
      type: { name: "string", required: false },
    },
    disabled: {
      description: "Disable the Checkbox",
      control: "boolean",
      type: { name: "boolean", required: false },
    },
  },
  args: {
    className: "",
    disabled: false,
  },
} as Meta;

const Template: Story = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
