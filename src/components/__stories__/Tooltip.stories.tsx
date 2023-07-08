import { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@components/Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Tooltip> = (args) => (
  <TooltipProvider>
    <Tooltip {...args}>
      <TooltipTrigger>Hover me</TooltipTrigger>
      <TooltipContent>Tooltip text</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export const Default: Story = {
  render: Template,
  args: {},
};
