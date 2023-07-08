import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "@components/Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  args: {
    variant: "default",
  },
  argTypes: {
    variant: {
      options: ["default", "destructive"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

const Template: StoryFn<typeof Alert> = (args) => (
  <Alert {...args}>
    <AlertTitle>Title</AlertTitle>
    <AlertDescription>This is a description of the alert.</AlertDescription>
  </Alert>
);

export const Default: Story = {
  render: Template,
};

export const Destructive: Story = {
  render: Template,
  args: {
    variant: "destructive",
  },
};
