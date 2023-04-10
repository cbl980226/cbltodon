import { mastodon } from 'masto'
import { FC } from 'react'
import StatusActionButton from './StatusActionButton'

interface StatusActionProps {
  status: mastodon.v1.Status
}

export const StatusAction: FC<StatusActionProps> = ({ status }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <StatusActionButton
          icon="ri:chat-1-line"
          hover="blue"
          text={status.repliesCount || ''}
          content="Reply"
        />
      </div>
      <div className="flex-1">
        <StatusActionButton
          icon="ri:repeat-line"
          active={!!status.reblogged}
          activeIcon="ri:repeat-fill"
          hover="green"
          text={status.reblogsCount || ''}
          content="Boost"
        />
      </div>
      <div className="flex-1">
        <StatusActionButton
          icon="ri:heart-3-line"
          active={!!status.favourited}
          activeIcon="ri:heart-3-fill"
          hover="rose"
          text={status.favouritesCount || ''}
          content="Favorite"
        />
      </div>
      <div className="flex-1">
        <StatusActionButton
          icon="ri:bookmark-line"
          active={!!status.bookmarked}
          activeIcon="ri:bookmark-fill"
          hover="yellow"
          content="Favorite"
        />
      </div>
    </div>
  )
}

export default StatusAction
