import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
    shape: {
      control: "select",
      options: ["rounded", "square"],
    },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "default",
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Cancel",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Link: Story = {
  args: {
    children: "Learn more",
    variant: "link",
  },
};

export const Loading: Story = {
  args: {
    children: "Saving...",
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Not available",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};
