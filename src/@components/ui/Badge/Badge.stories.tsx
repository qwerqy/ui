import { Badge, BadgeProps } from "./Badge";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          "Badge is a versatile component that can be used to display statuses, labels, or tags in various styles.",
        componentSubtitle: "A simple and customizable badge component.",
      },
    },
  },
  argTypes: {
    variant: {
      description:
        "Defines the style variant of the badge. It can be 'default', 'secondary', 'destructive', or 'outline'.",
      options: ["default", "secondary", "destructive", "outline"],
      control: { type: "radio" },
    },
    className: {
      description: "Additional CSS classes to be applied to the badge.",
      control: { type: "text" },
    },
    children: {
      description: "Content to be displayed inside the badge.",
      control: { type: "text" },
    },
  },
  args: {
    variant: "default",
    className: "",
    children: "Badge Content",
  },
} as Meta<BadgeProps>;

export default meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const DefaultBadge: StoryObj<BadgeProps> = {
  render: Template,
};

export const SecondaryBadge: StoryObj<BadgeProps> = {
  render: Template,
  args: {
    variant: "secondary",
  },
};

export const DestructiveBadge: StoryObj<BadgeProps> = {
  render: Template,
  args: {
    variant: "destructive",
  },
};

export const OutlineBadge: StoryObj<BadgeProps> = {
  render: Template,
  args: {
    variant: "outline",
  },
};
