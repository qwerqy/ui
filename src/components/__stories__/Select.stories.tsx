import { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "@components/Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Select> = (args) => (
  <Select {...args}>
    <SelectValue defaultValue="1">
      <SelectTrigger>Select an option...</SelectTrigger>
    </SelectValue>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Group 1</SelectLabel>
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>Group 2</SelectLabel>
        <SelectItem value="3">Option 3</SelectItem>
        <SelectItem value="4">Option 4</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

export const Default: Story = {
  render: Template,
};
