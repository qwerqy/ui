import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Progress } from "@components/Progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Progress> = (args) => <Progress {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    value: 50,
    max: 100,
  },
};
