import { Meta, Story } from "@storybook/react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from "./Command";
import { Button } from "..";
import { useState } from "react";

export default {
  title: "Components/Command",
  component: CommandDialog,
  componentSubtitle: "An advanced search command and dialog UI component",
  description:
    "The Command component allows users to perform quick search and action commands through a specialized dialog.",
  argTypes: {
    open: {
      description: "Whether the command dialog should be open by default",
      control: "boolean",
      type: { name: "boolean", required: false },
    },
  },
  args: {
    open: false,
  },
} as Meta;

const Template: Story = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Command</Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandGroup>
            <CommandItem>
              Item 1<CommandShortcut>Ctrl+1</CommandShortcut>
            </CommandItem>
            <CommandItem>
              Item 2<CommandShortcut>Ctrl+2</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandEmpty>No results</CommandEmpty>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
