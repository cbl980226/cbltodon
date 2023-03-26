import { Meta, StoryObj } from '@storybook/react'
import StatusActionButton from './status-action-button'

const meta: Meta<typeof StatusActionButton> = {
  title: 'StatusActionButton',
  component: StatusActionButton
}

export default meta

type Story = StoryObj<typeof StatusActionButton>

export const Reply: Story = {
  render: () => (
    <StatusActionButton
      icon="ri:chat-1-line"
      active={true}
      hover="blue"
      count={1}
      content="Reply"
    />
  )
}

export const Boost: Story = {
  render: () => (
    <StatusActionButton
      icon="ri:repeat-line"
      active={true}
      activeIcon="ri:repeat-fill"
      hover="green"
      count={2}
      content="Boost"
    />
  )
}

export const Favorite: Story = {
  render: () => (
    <StatusActionButton
      icon="ri:heart-3-line"
      active={true}
      activeIcon="ri:heart-3-fill"
      hover="rose"
      count={3}
      content="Favorite"
    />
  )
}

export const Bookmark: Story = {
  render: () => (
    <StatusActionButton
      icon="ri:bookmark-line"
      active={true}
      activeIcon="ri:bookmark-fill"
      hover="yellow"
      content="Favorite"
    />
  )
}
