import { Meta, StoryObj } from '@storybook/react'
import { login } from 'masto'
import CommonPaginator from '../common/CommonPaginator'
import StatusAction from './StatusActions'

const masto = await login({
  url: 'https://mastodon.social/'
})

const paginator = masto.v1.timelines.listPublic({ limit: 10 })

const meta: Meta = {
  title: 'Status/StatusActions'
}

export default meta

type Story = StoryObj<typeof StatusAction>

export const Default: Story = {
  render: () => (
    <CommonPaginator paginator={paginator}>
      {status => <StatusAction status={status} />}
    </CommonPaginator>
  )
}
