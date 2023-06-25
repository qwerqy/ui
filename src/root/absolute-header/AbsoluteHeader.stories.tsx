import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { AbsoluteHeader } from "./AbsoluteHeader";

const meta = {
  title: "Root/AbsoluteHeader",
  component: AbsoluteHeader,
  parameters: {
    docs: {
      story: {
        iframeHeight: 300,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: "300px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  args: {
    items: [
      { name: "Product", href: "#" },
      { name: "Features", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Company", href: "#" },
    ],
  },
  argTypes: {},
} satisfies Meta<typeof AbsoluteHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof AbsoluteHeader> = (args) => (
  <AbsoluteHeader {...args} />
);

export const Default: Story = {
  render: Template,
  args: {},
};

export const ViewportMobile: Story = {
  name: "Viewport: Mobile",
  render: Template,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {},
};

export const ViewportTablet: Story = {
  name: "Viewport: Tablet",
  render: Template,
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  args: {},
};
