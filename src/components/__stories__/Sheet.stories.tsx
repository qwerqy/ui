import { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@components/Sheet";

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Sheet> = (args) => (
  <Sheet {...args}>
    <SheetTrigger>Open Sheet</SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Sheet Title</SheetTitle>
        <SheetDescription>Sheet description goes here...</SheetDescription>
      </SheetHeader>
      <SheetFooter>{/* Some content for the footer */}</SheetFooter>
    </SheetContent>
  </Sheet>
);

export const Right: Story = {
  render: Template,
};

export const Left: Story = {
  render: Template,
};

export const Top: Story = {
  render: Template,
};

export const Bottom: Story = {
  render: Template,
};
