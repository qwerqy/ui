import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { AnchorButton } from "./AnchorButton";

const meta = {
  title: "Root/AnchorButton",
  component: AnchorButton,
  tags: ["autodocs"],
  args: {
    href: undefined,
    variant: "link",
    children: "AnchorButton",
  },
  argTypes: {},
} satisfies Meta<typeof AnchorButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof AnchorButton> = (args) => (
  <AnchorButton {...args} />
);

export const Default: Story = {
  render: Template,
  args: {
    href: "#",
  },
};

export const VariantLink: Story = {
  name: "Variant: Link",
  render: Template,
  args: {
    href: "#",
    variant: "link",
    children: "Link AnchorButton",
  },
};

export const VariantButton: Story = {
  name: "Variant: Button",
  render: Template,
  args: {
    href: "#",
    variant: "button",
    children: "Button AnchorButton",
  },
};
