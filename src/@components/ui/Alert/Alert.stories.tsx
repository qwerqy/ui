import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  subcomponents: { AlertTitle, AlertDescription },
  args: {
    variant: "default",
  },
  argTypes: {
    variant: {
      options: ["default", "destructive"],
      control: { type: "radio" },
    },
  },
} as Meta<typeof Alert>;

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
