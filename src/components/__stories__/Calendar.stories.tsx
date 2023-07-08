import { Calendar } from "@components/Calendar";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component:
          "The Calendar component is a customizable and versatile component for date selection and navigation between months.",
        componentSubtitle: "A user-friendly Calendar component.",
      },
    },
  },
  argTypes: {
    showOutsideDays: {
      description: "Show the days from the previous and next month.",
      control: { type: "boolean" },
    },
    className: {
      description: "Additional CSS classes to be applied to the Calendar.",
      control: { type: "text" },
    },
    selected: {
      description: "The selected date or range of dates.",
      control: { type: "date" },
    },
  },
  args: {
    showOutsideDays: true,
    className: "",
    selected: undefined,
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

const Template: StoryFn<typeof Calendar> = (args) => <Calendar {...args} />;

// Story definitions using StoryObj
export const DefaultCalendar: Story = Template.bind({});

export const CalendarWithDateSelected: Story = Template.bind({});
CalendarWithDateSelected.args = {
  selected: new Date(2023, 6, 1), // 1st July 2023
};

export const CalendarWithoutOutsideDays: Story = Template.bind({});
CalendarWithoutOutsideDays.args = {
  showOutsideDays: false,
};
