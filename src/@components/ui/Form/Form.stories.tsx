import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "./Form";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import * as z from "zod";
import { Button } from "..";
import { toast } from "../use-toast";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

// This is the template component
const Template: StoryFn = (args) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

// This is the default export with metadata about the stories and component
export default {
  title: "Components/Form",
  component: Template,
  argTypes: {
    className: {
      name: "className",
      type: { name: "string", required: false },
      description: "CSS class to apply to the form item.",
    },
  },
  args: {
    className: "custom-class",
  },
  parameters: {
    componentSubtitle: "Collection of form related components",
    docs: {
      description: {
        component:
          "This collection includes several form-related components, like FormItem, FormLabel, FormControl, FormDescription, and FormMessage.",
      },
    },
  },
} as Meta;

// This is an example story
export const Default: StoryObj<typeof Template> = Template.bind({});
Default.args = {
  className: "default-class",
};
