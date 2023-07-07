import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    variant: "default",
    size: "default",
  },
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "Buttons allow users to take actions, and make choices, with a single tap.",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Click me</Button>
);

export const Default: Story = {
  render: Template,
};

export const Destructive: Story = {
  render: Template,
  args: { variant: "destructive" },
};

export const Outline: Story = {
  render: Template,
  args: { variant: "outline" },
};

export const Secondary: Story = {
  render: Template,
  args: { variant: "secondary" },
};

export const Ghost: Story = {
  render: Template,
  args: { variant: "ghost" },
};

export const Link: Story = {
  render: Template,
  args: { variant: "link" },
};

export const Small: Story = {
  render: Template,
  args: { size: "sm" },
};

export const Large: Story = {
  render: Template,
  args: { size: "lg" },
};

export const Icon: Story = {
  render: Template,
  args: { size: "icon" },
};

export const AsChild: Story = {
  render: (args) => (
    <Button {...args}>
      <a>Click me</a>
    </Button>
  ),
  args: {
    asChild: true,
  },
};
