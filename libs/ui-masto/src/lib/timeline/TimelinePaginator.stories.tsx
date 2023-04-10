import { Meta, StoryObj } from '@storybook/react'
import TimelinePaginator from './TimelinePaginator'
import { login } from 'masto'

const masto = await login({
  url: 'https://mastodon.social/'
})

const paginator = masto.v1.timelines.listPublic({ limit: 10 })

const meta: Meta = {
  title: 'Timeline/Paginator'
}

export default meta

type Story = StoryObj<typeof TimelinePaginator>

export const Demo: Story = {
  render: () => <TimelinePaginator paginator={paginator} />
}
