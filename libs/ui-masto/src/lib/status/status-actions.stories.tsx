import { Meta, StoryObj } from '@storybook/react'
import { login } from 'masto'
import CommonPaginator from '../common/common-paginator'
import StatusAction from './status-actions'

const masto = await login({
  url: 'https://mastodon.social/'
})

const paginator = masto.v1.timelines.listPublic({ limit: 10 })

const meta: Meta = {
  title: 'Status/StatusAction'
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
