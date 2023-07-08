import { Meta, StoryObj, StoryFn } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@components/Card";

// This default export determines where your story goes in the story list
const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    componentSubtitle: "Displays content within a card with a shadow",
    docs: {
      description: {
        component:
          "The Card component is used to display content within a bounded container with an optional header and footer.",
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "CSS class to apply custom styles to the card.",
    },
    title: {
      control: "text",
      description: "The title to be displayed in the CardHeader.",
    },
  },
  args: {
    className: "",
    title: "Card Title",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => (
  <Card className={args.className}>
    <CardHeader>
      <CardTitle>{args.title}</CardTitle>
      <CardDescription>title description</CardDescription>
    </CardHeader>
    <CardContent>Card Content goes here</CardContent>
    <CardFooter>Card Footer</CardFooter>
  </Card>
);

export const Default: Story = {
  render: Template,
};
