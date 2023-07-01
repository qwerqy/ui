import * as React from "react";
import { Meta, Story } from "@storybook/react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

// Meta information for the component
const meta: Meta = {
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
    disabled: {
      control: "boolean",
      description: "Disable the label",
    },
  },
};

export default meta;

// Args for the component
const args = {
  className: "",
  disabled: false,
  // Set default values for the props here
};

// Template component that will be referred to by all the stories
const Template: Story<React.ComponentProps<typeof Label>> = (args) => (
  <Label {...args} />
);

// Default story
export const Default = Template.bind({});
Default.args = {
  children: "Default Label",
};
