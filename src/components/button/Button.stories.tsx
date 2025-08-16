import type { Meta, StoryObj } from '@storybook/nextjs';

import { fn } from 'storybook/test';

import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const AsChild: Story = {
  args: {
    children: <span>Button</span>,
    asChild: true,
  },
};
