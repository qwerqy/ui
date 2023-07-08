import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Switch } from "@components/Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Switch> = (args) => (
  <Switch className={args.className} />
);

export const Default: Story = {
  render: Template,
  args: { className: "" },
};

export const CustomSize: Story = {
  render: Template,
  args: { className: "h-10 w-10" },
};

export const Disabled: Story = {
  render: Template,
  args: { className: "disabled:cursor-not-allowed" },
};
