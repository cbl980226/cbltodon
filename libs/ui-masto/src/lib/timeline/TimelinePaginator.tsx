import { mastodon, Paginator } from 'masto'
import { FC } from 'react'
import CommonPaginator from '../common/CommonPaginator'

interface TimelinePaginatorProps {
  paginator: Paginator<
    mastodon.v1.Status[],
    mastodon.v1.ListAccountStatusesParams
  >
}

const TimelinePaginator: FC<TimelinePaginatorProps> = ({ paginator }) => {
  return (
    <CommonPaginator paginator={paginator}>
      {status => <div>{JSON.stringify(status)}</div>}
    </CommonPaginator>
  )
}

export default TimelinePaginator
