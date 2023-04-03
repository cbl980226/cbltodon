import { Meta, StoryObj } from '@storybook/react'
import { login } from 'masto'
import CommonPaginator from '../common/common-paginator'
import StatusBody from './status-body'

const masto = await login({
  url: 'https://mastodon.social/'
})

const paginator = masto.v1.timelines.listPublic({ limit: 10 })

const meta: Meta = {
  title: 'Status/StatusBody'
}

export default meta

type Story = StoryObj<typeof StatusBody>

export const Default: Story = {
  render: () => (
    <CommonPaginator paginator={paginator}>
      {status => <StatusBody status={status} />}
    </CommonPaginator>
  )
}
