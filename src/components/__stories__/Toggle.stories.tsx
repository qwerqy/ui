import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Toggle } from "@components/Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Toggle> = (args) => (
  <Toggle {...args}>Toggle</Toggle>
);

export const Default: Story = {
  render: Template,
  args: {},
};

export const Outline: Story = {
  render: Template,
  args: {
    variant: "outline",
  },
};

export const Small: Story = {
  render: Template,
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  render: Template,
  args: {
    size: "lg",
  },
};
