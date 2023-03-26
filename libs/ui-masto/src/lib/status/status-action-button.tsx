import { ButtonHTMLAttributes, FC } from 'react'
import { Icon, IconifyIcon } from '@iconify/react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@cbltodon/utils'
import { Tooltip } from '@cbltodon/ui-common'

const iconVariants = cva('', {
  variants: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

const groupHoverColorVariants = cva('', {
  variants: {
    hover: {
      blue: 'group-hover:bg-blue-400/10',
      green: 'group-hover:bg-green-400/10',
      rose: 'group-hover:bg-rose-400/10',
      yellow: 'group-hover:bg-yellow-400/10'
    }
  }
})

const statusActionButtonVariants = cva(
  [
    'flex gap-1 items-center w-fit rounded transition-all select-none focus:outline-none group',
    'text-secondary opacity-50 hover:opacity-100'
  ],
  {
    variants: {
      active: {
        true: 'opacity-100'
      },
      disabled: {
        true: 'pointer-events-none'
      },
      hover: {
        blue: 'hover:text-blue-400 focus-visible:text-blue-400',
        green: 'hover:text-green-400 focus-visible:text-green-400',
        rose: 'hover:text-rose-400 focus-visible:text-rose-400',
        yellow: 'hover:text-yellow-400 focus-visible:text-yellow-400'
      }
    },
    compoundVariants: [
      {
        active: true,
        hover: 'blue',
        className: 'text-blue-400'
      },
      {
        active: true,
        hover: 'green',
        className: 'text-green-400'
      },
      {
        active: true,
        hover: 'rose',
        className: 'text-rose-400'
      },
      {
        active: true,
        hover: 'yellow',
        className: 'text-yellow-400'
      }
    ]
  }
)

export interface StatusActionButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof iconVariants>,
    VariantProps<typeof statusActionButtonVariants> {
  icon: IconifyIcon | string
  activeIcon?: IconifyIcon | string
  content?: string
  count?: number
  className?: string
}

export const StatusActionButton: FC<StatusActionButtonProps> = ({
  hover,
  size,
  icon,
  active,
  disabled,
  activeIcon,
  className,
  content,
  count
}) => {
  return (
    <Tooltip.Common className="text-xs" content={content}>
      <button
        className={cn(
          statusActionButtonVariants({
            active,
            disabled,
            hover,
            className
          })
        )}
        aria-label={content}
        disabled={!!disabled}
      >
        <div
          className={cn(
            groupHoverColorVariants({
              hover: hover,
              className: 'rounded-full p-1'
            })
          )}
        >
          <Icon
            icon={active && activeIcon ? activeIcon : icon}
            className={cn(iconVariants({ size }))}
          />
        </div>

        <span className="text-secondary-light hover:text-secondary-light">
          {count}
        </span>
      </button>
    </Tooltip.Common>
  )
}

export default StatusActionButton
