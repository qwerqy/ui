import type { StoryFn, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@components/Dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    componentSubtitle:
      "A Dialog component with a header, footer, title, and description.",
    docs: {
      description: {
        component:
          "This Dialog component can be used to show a modal or popup dialog. It contains a header, footer, title, and description sections.",
      },
    },
  },
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls whether the Dialog is open or not.",
    },
    onClose: {
      action: "closed",
      description: "Callback function to be called when the Dialog is closed.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Dialog> = () => (
  <Dialog>
    <DialogTrigger>Open</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you sure absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

export const Default: Story = {
  render: Template,
};
