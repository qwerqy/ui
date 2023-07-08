// Toast.stories.tsx

import { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from "@components/Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Toast> = (args) => (
  <ToastProvider>
    <ToastViewport>
      <Toast {...args}>
        <ToastTitle>Title</ToastTitle>
        <ToastDescription>Description</ToastDescription>
        <ToastClose />
        <ToastAction altText="action">Action</ToastAction>
      </Toast>
    </ToastViewport>
  </ToastProvider>
);

export const Default: Story = {
  render: Template,
  args: {},
};

export const Destructive: Story = {
  render: Template,
  args: {
    variant: "destructive",
  },
};
