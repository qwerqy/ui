import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Slider } from "@components/Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Slider> = (args) => (
  <Slider className={args.className} />
);

export const Default: Story = {
  render: Template,
  args: { className: "" },
};

export const CustomSize: Story = {
  render: Template,
  args: { className: "h-10 w-10" },
};

export const FullWidth: Story = {
  render: Template,
  args: { className: "w-full" },
};
