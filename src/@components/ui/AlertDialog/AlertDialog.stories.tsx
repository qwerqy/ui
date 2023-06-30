import { StoryFn } from "@storybook/react";
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
} from "./AlertDialog";
import { useState } from "react";

export default {
  title: "Components/AlertDialog",
  component: AlertDialog,
  subcomponents: {
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
  },
  args: {
    open: false,
    onClose: () => console.log("Dialog closed"),
  },
  argTypes: {
    open: { control: "boolean" },
    onClose: { action: "closed" },
  },
};

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

export const Default = Template.bind({});
Default.args = {};

export const Customized = Template.bind({});
Customized.args = {
  open: false,
};
