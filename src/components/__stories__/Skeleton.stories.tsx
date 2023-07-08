import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Skeleton } from "@components/Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Skeleton> = (args) => (
  <Skeleton className={args.className} />
);

export const Default: Story = {
  render: Template,
  args: { className: "" },
};

export const Rounded: Story = {
  render: Template,
  args: { className: "rounded" },
};

export const Large: Story = {
  render: Template,
  args: { className: "h-20 w-20" },
};

export const FullWidth: Story = {
  render: Template,
  args: { className: "w-full" },
};
