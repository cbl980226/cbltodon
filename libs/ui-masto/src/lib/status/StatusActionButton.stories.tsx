import { Meta, StoryObj } from '@storybook/react'
import StatusActionButton from './StatusActionButton'

const meta: Meta<typeof StatusActionButton> = {
  title: 'Status/StatusActionButton',
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
      text={1}
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
      text={2}
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
      text={3}
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
