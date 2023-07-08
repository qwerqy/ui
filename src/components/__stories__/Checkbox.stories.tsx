import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Checkbox } from "@components/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    componentSubtitle: "Displays a customizable Checkbox component",
    docs: {
      description: {
        component: "This component is a Checkbox with customizable styles.",
      },
    },
  },
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
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default: Story = {
  render: Template,
};

export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
  },
};
