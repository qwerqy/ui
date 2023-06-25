import { AnchorButton } from "@root/anchor-button/AnchorButton";
import { Hero } from "../Hero";
import type { Meta, StoryObj, StoryFn } from "@storybook/react";

const meta = {
  title: "Marketing/Sections/Hero",
  component: Hero,
  parameters: {
    docs: {
      canvas: {
        layout: "fullscreen",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ overflowX: "hidden" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  args: {
    heroTitle: "Data to enrich your online business",
    heroSubtitle: `Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
    lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
    fugiat aliqua.`,
    heroNotifier: (
      <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Announcing our next round of funding.{" "}
        <a
          href="#"
          className="font-semibold text-indigo-600 dark:text-indigo-400"
        >
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

export const SimpleWithBackgroundImage: Story = {
  render: Template,
  args: {
    backgroundImage:
      "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
    backgroundFilterClassName: "backdrop-blur-sm",
    backgroundImageClassName: "opacity-20",
  },
};

export const SplitWithBackgroundImage: Story = {
  render: Template,
  args: {
    backgroundImage:
      "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
    backgroundFilterClassName: "backdrop-blur-sm",
    backgroundImageClassName: "opacity-20",
    variant: "split",
    previewComponent: (
      <div className="absolute -right-64 drop-shadow-lg">
        <img
          className="w-full h-full object-cover rounded-xl "
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2378&q=80"
        />
      </div>
    ),
  },
};

export const VariantSimple: Story = {
  name: "Variant: Simple",
  render: Template,
  args: {
    variant: "simple",
  },
};

export const VariantSplit: Story = {
  name: "Variant: Split",
  render: Template,
  args: {
    variant: "split",
    previewComponent: (
      <div className="absolute -right-64 drop-shadow-lg">
        <img
          className="w-full h-full object-cover rounded-xl "
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2378&q=80"
        />
      </div>
    ),
  },
};

export const SimpleWithHeader: Story = {
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

export const SplitWithHeader: Story = {
  render: Template,
  args: {
    withHeader: true,
    variant: "split",
    navigationItems: [
      { name: "Product", href: "#" },
      { name: "Features", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Company", href: "#" },
    ],
    previewComponent: (
      <div className="absolute -right-64 shadow-lg">
        <img
          className="w-full h-full object-cover rounded-xl "
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2378&q=80"
        />
      </div>
    ),
  },
};
