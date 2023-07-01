import { StoryFn } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./DropdownMenu";

// Meta configuration
export default {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    componentSubtitle: "A customizable dropdown menu component.",
    docs: {
      description: {
        component:
          "This component is a combination of primitive elements from Radix UI for creating a dropdown menu. It supports submenus, different types of items like checkboxes, radios, etc.",
      },
    },
  },
  argTypes: {
    inset: {
      control: "boolean",
      description:
        "This prop allows to set additional padding-left to the DropdownMenuItem when it is set to true.",
    },
  },
};

// Template for the Story
const Template: StoryFn<typeof DropdownMenu> = (args) => (
  <DropdownMenu>
    <DropdownMenuTrigger>Open</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const Default = Template.bind({});
