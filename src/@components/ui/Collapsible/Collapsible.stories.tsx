import { Meta, Story } from "@storybook/react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./Collapsible";

export default {
  title: "Components/Collapsible",
  component: Collapsible,
  componentSubtitle:
    "A component to show or hide content through user interaction",
  description:
    "The Collapsible component provides an expandable section for content, which can be toggled by a trigger.",
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
} as Meta;

const Template: Story = ({ open }) => (
  <Collapsible defaultOpen={open}>
    <CollapsibleTrigger>Toggle Content</CollapsibleTrigger>
    <CollapsibleContent>
      <p>This is the content inside the Collapsible component.</p>
    </CollapsibleContent>
  </Collapsible>
);

export const Default = Template.bind({});
Default.args = {};

export const OpenByDefault = Template.bind({});
OpenByDefault.args = {
  open: true,
};
