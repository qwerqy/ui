import { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@components/AlertDialog";
import { useState } from "react";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  args: {
    open: false,
  },
  argTypes: {
    open: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

const Template: StoryFn<typeof AlertDialog> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog {...args} open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Title</AlertDialogTitle>
          <AlertDialogDescription>Description</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const Default: Story = {
  render: Template,
};

export const Customized: Story = {
  render: Template,
  args: {
    open: false,
  },
};
