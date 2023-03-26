import * as React from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { cn } from '@cbltodon/utils'

/* -------------------------------------------------------------------------------------------------
 * TooltipProvider
 * -----------------------------------------------------------------------------------------------*/

export const Provider: React.FC<Tooltip.TooltipProviderProps> = ({
  children,
  delayDuration = 500,
  skipDelayDuration = 300,
  ...props
}) => (
  <Tooltip.Provider
    delayDuration={delayDuration}
    skipDelayDuration={skipDelayDuration}
    {...props}
  >
    {children}
  </Tooltip.Provider>
)
Provider.displayName = Tooltip.Provider.displayName

/* -------------------------------------------------------------------------------------------------
 * TooltipRoot
 * -----------------------------------------------------------------------------------------------*/

export const Root = Tooltip.Root

/* -------------------------------------------------------------------------------------------------
 * TooltipTrigger
 * -----------------------------------------------------------------------------------------------*/

export const Trigger = Tooltip.Trigger

/* -------------------------------------------------------------------------------------------------
 * TooltipPortal
 * -----------------------------------------------------------------------------------------------*/

export const Portal = Tooltip.Portal

/* -------------------------------------------------------------------------------------------------
 * TooltipContent
 * -----------------------------------------------------------------------------------------------*/

export const Content = React.forwardRef<
  React.ElementRef<typeof Tooltip.Content>,
  React.ComponentPropsWithoutRef<typeof Tooltip.Content>
>(({ className, sideOffset = 5, ...props }, ref) => (
  <Tooltip.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'select-none rounded px-3 py-2 text-sm leading-none',
      'bg-white dark:bg-slate-800',
      'text-slate-700 dark:text-slate-400',
      'shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]',
      'will-change-[transform,opacity]',
      'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade',
      'data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade',
      'data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade',
      'data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade',
      className
    )}
    {...props}
  ></Tooltip.Content>
))
Content.displayName = Tooltip.Content.displayName

/* -------------------------------------------------------------------------------------------------
 * TooltipArrow
 * -----------------------------------------------------------------------------------------------*/

export const Arrow = React.forwardRef<
  React.ElementRef<typeof Tooltip.Arrow>,
  React.ComponentPropsWithoutRef<typeof Tooltip.Arrow>
>(({ className, ...props }, ref) => (
  <Tooltip.Arrow
    ref={ref}
    className={cn('fill-white dark:fill-slate-800', className)}
    {...props}
  ></Tooltip.Arrow>
))
Arrow.displayName = Tooltip.Arrow.displayName

/* -------------------------------------------------------------------------------------------------
 * CommonTooltip
 * -----------------------------------------------------------------------------------------------*/

export interface CommonTooltipProps extends Tooltip.TooltipContentProps {
  content?: React.ReactNode
}

export const Common: React.FC<CommonTooltipProps> = ({
  className,
  children,
  content,
  ...props
}) => (
  <Provider>
    <Root>
      <Trigger asChild>{children}</Trigger>
      {content && (
        <Content {...props}>
          {content}
          <Arrow />
        </Content>
      )}
    </Root>
  </Provider>
)
Common.displayName = 'CommonTooltip'
