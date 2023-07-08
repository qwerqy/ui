import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { TextArea } from "@components/TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof TextArea> = (args) => (
  <TextArea placeholder="Type something..." {...args} />
);

export const Default: Story = {
  render: Template,
  args: {},
};

export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
  },
};

export const WithDefaultValue: Story = {
  render: Template,
  args: {
    defaultValue: "Default value",
  },
};
