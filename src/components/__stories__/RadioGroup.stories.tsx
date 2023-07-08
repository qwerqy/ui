import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "@components/RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof RadioGroup> = (args) => (
  <RadioGroup {...args}>
    <RadioGroupItem value="option1">Option 1</RadioGroupItem>
    <RadioGroupItem value="option2">Option 2</RadioGroupItem>
    <RadioGroupItem value="option3">Option 3</RadioGroupItem>
  </RadioGroup>
);

export const Default: Story = {
  render: Template,
  args: {
    value: "option1",
  },
};
