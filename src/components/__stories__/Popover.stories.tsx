import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Popover, PopoverTrigger, PopoverContent } from "@components/Popover";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Popover> = (args) => (
  <Popover {...args}>
    <PopoverTrigger>Trigger</PopoverTrigger>
    <PopoverContent>Content</PopoverContent>
  </Popover>
);

export const Default: Story = {
  render: Template,
};
