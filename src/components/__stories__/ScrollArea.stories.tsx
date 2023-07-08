import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { ScrollArea, ScrollBar } from "@components/ScrollArea";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof ScrollArea> = (args) => (
  <ScrollArea {...args}>
    <div style={{ height: "200px", width: "200px" }}>
      <p>Scrollable content...</p>
    </div>
    <ScrollBar orientation="vertical" />
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
);

export const Default: Story = {
  render: Template,
};
