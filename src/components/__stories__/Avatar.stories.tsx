import { Meta, StoryFn, StoryObj } from "@storybook/react";

import { Avatar, AvatarImage, AvatarFallback } from "@components/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
};

export default meta;

const Template: StoryFn<typeof Avatar> = (args) => (
  <Avatar {...args}>
    <AvatarImage
      src="https://res.cloudinary.com/dslokuhdk/image/upload/v1688169013/avatar_hrniqz.png"
      alt="User Avatar"
    />
    <AvatarFallback>Fallback Text</AvatarFallback>
  </Avatar>
);

export const DefaultAvatar: StoryObj<typeof Avatar> = {
  render: Template,
};
