import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Input } from "@components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    componentSubtitle: "A customizable input component",
    docs: {
      description: {
        component: "The Input component is used for accepting user input.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    placeholder: "Enter text",
  },
};

export const Password: Story = {
  render: Template,
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};
