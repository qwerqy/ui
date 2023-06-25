import { AnchorButton } from "@root/anchor-button/AnchorButton";
import { Hero } from "../Hero";
import type { Meta, StoryObj, StoryFn } from "@storybook/react";

const meta = {
  title: "Marketing/Sections/Hero",
  component: Hero,
  tags: ["autodocs"],
  args: {
    heroTitle: "Data to enrich your online business",
    heroSubtitle: `Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
    lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
    fugiat aliqua.`,
    heroNotifier: (
      <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Announcing our next round of funding.{" "}
        <a href="#" className="font-semibold text-indigo-600">
          <span className="absolute inset-0" aria-hidden="true" />
          Read more <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    ),
    actions: [
      <AnchorButton variant="button">Get started</AnchorButton>,
      <AnchorButton>
        Learn more <span aria-hidden="true">→</span>
      </AnchorButton>,
    ],
  },
  argTypes: {},
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Hero> = (args) => <Hero {...args} />;

export const Default: Story = {
  render: Template,
  args: {},
};

export const WithHeader: Story = {
  render: Template,
  args: {
    withHeader: true,
    navigationItems: [
      { name: "Product", href: "#" },
      { name: "Features", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Company", href: "#" },
    ],
  },
};
