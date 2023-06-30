import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { AspectRatio } from "./AspectRatio";

const meta = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  args: {
    asChild: false,
    ratio: 1,
  },
} as Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof AspectRatio>;

const Template: StoryFn<typeof AspectRatio> = (args) => (
  <AspectRatio {...args}>
    <img src="https://images.unsplash.com/photo-1688059618839-256b51167f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" />
  </AspectRatio>
);

export const Default: Story = {
  render: Template,
};

export const Ratio: Story = {
  render: Template,
  args: {
    ratio: 16 / 9,
  },
};
