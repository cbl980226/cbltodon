import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@cbltodon/utils'

export const buttonVariants = cva(
  'inline-flex justify-center items-center rounded-md text-sm font-medium transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      // prettier-ignore
      variant: {
        default: 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100',
        outline: 'bg-slate-900 hover:bg-slate-800 dark:bg-slate-200 dark:hover:bg-slate-100 text-white dark:text-slate-900  border border-slate-200 dark:border-slate-700',
        ghost: 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state-open]:bg-transparent dark:data-[state-open]:bg-transparent',
        link: 'bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100'
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, isLoading, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    )
  }
)

export default Button
