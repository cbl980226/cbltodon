import type { FC } from 'react'
import type { Paginator, mastodon } from 'masto'
import { usePaginator } from '@cbltodon/hooks'
import { Icon } from '@iconify/react'
export interface CommonPaginatorProps {
  paginator: Paginator<
    mastodon.v1.Status[],
    mastodon.v1.ListAccountStatusesParams
  >
}

export const CommonPaginator: FC<CommonPaginatorProps> = ({ paginator }) => {
  const { items, state, endAnchor, error } = usePaginator(paginator)

  return (
    <>
      {items.map(status => {
        return (
          <div key={status.id} className="border-solid border-t">
            {JSON.stringify(status)}
          </div>
        )
      })}
      <div ref={endAnchor}></div>
      {state === 'loading' && (
        <div className="p-5 text-center flex flex-col items-center animate-pulse">
          <div className="opacity-50 animate-spin text-2xl">
            <Icon icon="ri:loader-2-fill" />
          </div>
          <span className="opacity-50">Loading...</span>
        </div>
      )}
      {state === 'done' && (
        <div className="p-5 opacity-50 italic text-center">End of list</div>
      )}
      {state === 'error' && (
        <div className="p-5 opacity-50">ERROR: {JSON.stringify(error)}</div>
      )}
    </>
  )
}

export default CommonPaginator
