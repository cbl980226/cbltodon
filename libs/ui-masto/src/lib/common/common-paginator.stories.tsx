import { Meta, StoryObj } from '@storybook/react'
import CommonPaginator from './common-paginator'
import { login } from 'masto'

const masto = await login({
  url: 'https://mastodon.social/'
})

const paginator = masto.v1.timelines.listPublic({ limit: 10 })

const meta: Meta = {
  title: 'Common/Paginator'
}

export default meta

type Story = StoryObj<typeof CommonPaginator>

export const Demo: Story = {
  render: () => (
    <CommonPaginator paginator={paginator}>
      {status => <div>{JSON.stringify({ status })}</div>}
    </CommonPaginator>
  )
}
