import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@components/HoverCard";
import type { Meta, StoryObj, StoryFn } from "@storybook/react";

const meta: Meta<typeof HoverCard> = {
  title: "Components/HoverCard",
  component: HoverCard,
  parameters: {
    componentSubtitle: "A customizable Hover Card component",
    docs: {
      description: {
        component:
          "This component includes a Hover Card that displays content when the user hovers over the trigger element.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof HoverCard> = (args) => (
  <HoverCard>
    <HoverCardTrigger>
      <button>Hover me!</button>
    </HoverCardTrigger>
    <HoverCardContent {...args}>Hover card content</HoverCardContent>
  </HoverCard>
);

// This is an example story
export const Default: Story = {
  render: Template,
  args: {},
};
