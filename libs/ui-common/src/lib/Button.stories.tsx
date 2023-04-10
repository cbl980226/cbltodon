import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['default', 'outline', 'ghost', 'link'],
      control: { type: 'select' }
    },
    size: {
      options: ['default', 'sm', 'lg'],
      control: { type: 'select', defaultValue: 'default' }
    }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: args => <Button {...args}>Button</Button>
}

export const Outline: Story = {
  render: args => (
    <Button variant="outline" {...args}>
      Outline Button
    </Button>
  )
}

export const Ghost: Story = {
  render: args => (
    <Button variant="ghost" {...args}>
      Ghost Button
    </Button>
  )
}

export const Link: Story = {
  render: args => (
    <Button variant="link" {...args}>
      Link Button
    </Button>
  )
}
