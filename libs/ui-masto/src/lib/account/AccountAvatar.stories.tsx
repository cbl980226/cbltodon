import { Meta, StoryObj } from '@storybook/react'
import AccountAvatar from './AccountAvatar'
import { mastodon } from 'masto'

const meta: Meta = {
  title: 'Account/AccountAvatar'
}

export default meta

type Story = StoryObj<typeof AccountAvatar>

export const Default: Story = {
  render: () => {
    const account = {
      avatar:
        'https://files.mastodon.social/accounts/avatars/110/004/666/820/516/876/original/e8f60a844296ebb6.jpg'
    } as mastodon.v1.Account
    return <AccountAvatar account={account} />
  }
}

export const Square: Story = {
  render: () => {
    const account = {
      avatar:
        'https://files.mastodon.social/accounts/avatars/110/004/666/820/516/876/original/e8f60a844296ebb6.jpg'
    } as mastodon.v1.Account
    return <AccountAvatar account={account} square />
  }
}

export const ErrorOrNotLoaded: Story = {
  render: () => {
    const account = { avatar: '' } as mastodon.v1.Account
    return <AccountAvatar account={account} />
  }
}
