import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Label } from "@components/Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    componentSubtitle: "A custom label component",
    docs: {
      description: {
        component:
          "This component is used to render labels with variant styles.",
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional class name for the label",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Template component that will be referred to by all the stories
const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

// Default story
export const Default: Story = {
  render: Template,
  args: {
    children: "Default Label",
  },
};
