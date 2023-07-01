import { Story, Meta } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./Card";

// This default export determines where your story goes in the story list
export default {
  title: "Components/Card",
  component: Card,
  subcomponents: {
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
  },
  componentSubtitle: "Displays content within a card with a shadow",
  description:
    "The Card component is used to display content within a bounded container with an optional header and footer.",
  argTypes: {
    className: {
      control: "text",
      description: "CSS class to apply custom styles to the card.",
    },
    title: {
      control: "text",
      description: "The title to be displayed in the CardHeader.",
    },
    description: {
      control: "text",
      description: "The description to be displayed in the CardDescription.",
    },
  },
  args: {
    className: "",
    title: "Card Title",
    description: "This is a description of the card.",
  },
} as Meta;

const Template: Story = (args) => (
  <Card className={args.className}>
    <CardHeader>
      <CardTitle>{args.title}</CardTitle>
      <CardDescription>{args.description}</CardDescription>
    </CardHeader>
    <CardContent>Card Content goes here</CardContent>
    <CardFooter>Card Footer</CardFooter>
  </Card>
);

export const DefaultCard = Template.bind({});
DefaultCard.args = {};
