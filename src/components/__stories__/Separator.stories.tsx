import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Separator } from "@components/Separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Separator> = (args) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <p>Text on left</p>
    <Separator {...args} />
    <p>Text on right</p>
  </div>
);

export const Horizontal: Story = {
  render: Template,
  args: { orientation: "horizontal" },
};

export const Vertical: Story = {
  render: Template,
  args: { orientation: "vertical" },
};
