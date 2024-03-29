import { mastodon } from 'masto'
import { FC } from 'react'
import CommonRichContent from '../common/CommonRichContent'

interface StatusBodyProps {
  status: mastodon.v1.Status
}

export const StatusBody: FC<StatusBodyProps> = ({ status }) => {
  return <CommonRichContent html={status.content} />
}

export default StatusBody
