import { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@components/Collapsible";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    componentSubtitle:
      "A component to show or hide content through user interaction",
    docs: {
      description: {
        component:
          "The Collapsible component provides an expandable section for content, which can be toggled by a trigger.",
      },
    },
  },
  argTypes: {
    open: {
      description: "Whether the collapsible content should be open by default",
      control: "boolean",
      type: { name: "boolean", required: false },
    },
  },
  args: {
    open: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Collapsible> = ({ open }) => (
  <Collapsible defaultOpen={open}>
    <CollapsibleTrigger>Toggle Content</CollapsibleTrigger>
    <CollapsibleContent>
      <p>This is the content inside the Collapsible component.</p>
    </CollapsibleContent>
  </Collapsible>
);

export const Default: Story = {
  render: Template,
};

export const OpenByDefault: Story = {
  render: Template,
  args: {
    open: true,
  },
};
