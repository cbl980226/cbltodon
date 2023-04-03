import { mastodon } from 'masto'
import { FC, useState } from 'react'
import Image from 'next/image'
import { cn } from '@cbltodon/utils'

interface AccountAvatarProps {
  account: mastodon.v1.Account
  square?: boolean
}

export const AccountAvatar: FC<AccountAvatarProps> = ({ account, square }) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <Image
      className={cn(
        loaded ? 'bg-slate-100' : 'bg-gray-400',
        square || 'rounded-full'
      )}
      src={
        error || !loaded
          ? 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
          : account.avatar
      }
      alt={account.username}
      width={40}
      height={40}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      onError={() => setError(true)}
    />
  )
}

export default AccountAvatar
