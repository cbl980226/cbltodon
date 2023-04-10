import * as React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'

import { cn } from '@cbltodon/utils'

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuRoot
 * -----------------------------------------------------------------------------------------------*/

export const Root = DropdownMenu.Root

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuTrigger
 * -----------------------------------------------------------------------------------------------*/

export const Trigger = DropdownMenu.Trigger

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuPortal
 * -----------------------------------------------------------------------------------------------*/

export const Portal = DropdownMenu.Portal

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuContent
 * -----------------------------------------------------------------------------------------------*/

export const Content = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenu.Portal>
    <DropdownMenu.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md p-1 shadow-md',
        'bg-white dark:bg-slate-800',
        'text-slate-700 dark:text-slate-400',
        'border border-slate-100 dark:border-slate-800',
        'animate-in data-[side=top]:slide-in-from-bottom-2 data-[side=right]:slide-in-from-left-2 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
        className
      )}
      {...props}
    />
  </DropdownMenu.Portal>
))
Content.displayName = DropdownMenu.Content.displayName

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuGroup
 * -----------------------------------------------------------------------------------------------*/

export const Group = DropdownMenu.Group

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuLabel
 * -----------------------------------------------------------------------------------------------*/

export const Label = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenu.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-300',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
Label.displayName = DropdownMenu.Label.displayName

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuItem
 * -----------------------------------------------------------------------------------------------*/

export const Item = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenu.Item
    ref={ref}
    className={cn(
      'relative flex items-center rounded-sm py-1.5 px-2',
      'font-medium text-base md:text-sm',
      'focus:bg-slate-100 dark:focus:bg-slate-700',
      'cursor-default select-none outline-none',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
Item.displayName = DropdownMenu.Item.displayName

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuCheckboxItem
 * -----------------------------------------------------------------------------------------------*/

export const CheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenu.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium',
      'focus:bg-slate-100 dark:focus:bg-slate-700',
      'cursor-default select-none outline-none',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenu.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenu.ItemIndicator>
    </span>
    {children}
  </DropdownMenu.CheckboxItem>
))
CheckboxItem.displayName = DropdownMenu.CheckboxItem.displayName

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuRadioGroup
 * -----------------------------------------------------------------------------------------------*/

export const RadioGroup = DropdownMenu.RadioGroup

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuRadioItem
 * -----------------------------------------------------------------------------------------------*/

export const RadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenu.RadioItem
    ref={ref}
    className={cn(
      'relative flex items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium',
      'focus:bg-slate-100 dark:focus:bg-slate-700',
      'cursor-default select-none outline-none',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="h-3.5 w-3.5 absolute left-2 flex items-center justify-center">
      <DropdownMenu.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenu.ItemIndicator>
    </span>
    {children}
  </DropdownMenu.RadioItem>
))
RadioItem.displayName = DropdownMenu.RadioItem.displayName

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuItemIndicator
 * -----------------------------------------------------------------------------------------------*/

export const ItemIndicator = DropdownMenu.ItemIndicator

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSeparator
 * -----------------------------------------------------------------------------------------------*/

export const Separator = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenu.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-700', className)}
    {...props}
  />
))
Separator.displayName = DropdownMenu.Separator.displayName

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuArrow
 * -----------------------------------------------------------------------------------------------*/

export const Arrow = DropdownMenu.Arrow

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSub
 * -----------------------------------------------------------------------------------------------*/

export const Sub = DropdownMenu.Sub

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSubTrigger
 * -----------------------------------------------------------------------------------------------*/

export const SubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenu.SubTrigger
    ref={ref}
    className={cn(
      'flex items-center rounded-sm py-1.5 px-2 text-sm font-medium',
      'focus:bg-slate-100 dark:focus:bg-slate-700',
      'data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-700',
      'cursor-default select-none outline-none',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenu.SubTrigger>
))
SubTrigger.displayName = DropdownMenu.SubTrigger.displayName

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSubContent
 * -----------------------------------------------------------------------------------------------*/

export const SubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenu.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md p-1 shadow-md',
      'bg-white dark:bg-slate-800',
      'text-slate-700 dark:text-slate-400',
      'border border-slate-100 dark:border-slate-800',
      'animate-in slide-in-from-left-1',
      className
    )}
    {...props}
  />
))
SubContent.displayName = DropdownMenu.SubContent.displayName

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSubContent
 * New
 * -----------------------------------------------------------------------------------------------*/

const Shortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-slate-500',
        className
      )}
      {...props}
    />
  )
}
Shortcut.displayName = 'DropdownMenuShortcut'
