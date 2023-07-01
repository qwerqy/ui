import { HoverCard, HoverCardTrigger, HoverCardContent } from "./HoverCard";
import type { Story, Meta } from "@storybook/react";

// This is the template component
const Template: Story = (args) => (
  <HoverCard>
    <HoverCardTrigger>
      <button>Hover me!</button>
    </HoverCardTrigger>
    <HoverCardContent {...args}>Hover card content</HoverCardContent>
  </HoverCard>
);

// This is the default export with metadata about the stories and component
export default {
  title: "Components/HoverCard",
  component: HoverCard,
  argTypes: {
    align: {
      name: "align",
      type: { name: "string", required: false },
      description: "Alignment of the hover card content.",
      control: {
        type: "radio",
        options: ["start", "center", "end"],
      },
    },
    sideOffset: {
      name: "sideOffset",
      type: { name: "number", required: false },
      description: "Side offset of the hover card content.",
      control: "number",
    },
    className: {
      name: "className",
      type: { name: "string", required: false },
      description: "CSS class to apply to the hover card content.",
    },
  },
  args: {
    align: "center",
    sideOffset: 4,
  },
  parameters: {
    componentSubtitle: "A customizable Hover Card component",
    docs: {
      description: {
        component:
          "This component includes a Hover Card that displays content when the user hovers over the trigger element.",
      },
    },
  },
} as Meta;

// This is an example story
export const DefaultHoverCard = Template.bind({});
DefaultHoverCard.args = {
  align: "center",
  sideOffset: 4,
};
