import { cn } from '../../lib/cn.js'

export function Container({ className, children, ...props }) {
  return (
    <div
      className={cn('mx-auto w-full max-w-5xl px-6 sm:px-8', className)}
      {...props}
    >
      {children}
    </div>
  )
}