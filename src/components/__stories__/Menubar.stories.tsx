import { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  Menubar,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
} from "@components/Menubar";

const meta: Meta<typeof Menubar> = {
  title: "Components/Menubar",
  component: Menubar,
  parameters: {
    componentSubtitle: "Menubar component with multiple subcomponents",
    docs: {
      description: {
        component:
          "This is a component for displaying a menubar with its items.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Menubar>;

const Template: StoryFn<typeof Menubar> = (args) => (
  <Menubar {...args}>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>New Window</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Share</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Print</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

export const Default: Story = {
  render: Template,
};
