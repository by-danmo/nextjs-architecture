import type { Meta, StoryObj } from "@storybook/nextjs";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    error: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter value...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    type: "email",
  },
};

export const WithError: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    type: "email",
    error: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "••••••••",
    type: "password",
  },
};
