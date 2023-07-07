import { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  args: {
    type: "single",
    collapsible: false,
    asChild: false,
    value: undefined,
    defaultValue: undefined,
    onValueChange: undefined,
    disabled: false,
    dir: "ltr",
    orientation: "vertical",
  },
  argTypes: {
    type: {
      control: "inline-radio",
      options: ["single", "multiple"],
      description: "Type of accordion",
    },
    collapsible: {
      control: "boolean",
      description: "Allows the accordion to collapse all items",
    },
    asChild: {
      control: "boolean",
      description: "Whether the accordion is a child component",
    },
    disabled: {
      control: "boolean",
      description: "Disables the accordion",
    },
    dir: {
      control: "inline-radio",
      options: ["ltr", "rtl"],
      description: "Direction of the content",
    },
    orientation: {
      control: "inline-radio",
      options: ["vertical", "horizontal"],
      description: "Orientation of the accordion",
    },
  },
  parameters: {
    componentSubtitle: "Accordion",
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const Template: StoryFn<typeof Accordion> = (args) => {
  return (
    <Accordion {...args}>
      <AccordionItem value={"item-1"}>
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>Content for item 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value={"item-2"}>
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>Content for item 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export const Default: Story = {
  render: Template,
};

export const OpenByDefault: Story = {
  render: Template,
  args: {
    defaultValue: "item-1",
  },
};

export const MultipleOpen: Story = {
  render: Template,
  args: {
    type: "multiple",
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
  },
};

export const Collapsible: Story = {
  render: Template,
  args: {
    collapsible: true,
  },
};

export const WithRTLDirection: Story = {
  render: Template,
  args: {
    dir: "rtl",
  },
};

export const WithLTRDirection: Story = {
  render: Template,
  args: {
    dir: "ltr",
  },
};

export const HorizontalOrientation: Story = {
  render: Template,
  args: {
    orientation: "horizontal",
  },
};

export const VerticalOrientation: Story = {
  render: Template,
  args: {
    orientation: "vertical",
  },
};
