import { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  Command,
} from "@components/Command";
import { Button } from "..";
import { useState } from "react";

const meta: Meta<typeof Command> = {
  title: "Components/Command",
  component: CommandDialog,
  parameters: {
    docs: {
      description: {
        component:
          "The Command component allows users to perform quick search and action commands through a specialized dialog.",
      },
    },
    componentSubtitle: "An advanced search command and dialog UI component",
  },
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Command> = (args) => {
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

export const Default: Story = {
  render: Template,
};
