import { cn } from '../../lib/cn.js'

const variants = {
  primary: 'bg-ink text-paper hover:bg-accent',
  outline: 'border border-line text-ink hover:border-ink',
  ghost: 'text-muted hover:text-ink',
}

export function Button({
  as: Tag = 'button',
  variant = 'primary',
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        'inline-flex items-center justify-center gap-2 h-11 px-5 text-sm font-medium rounded',
        'transition-colors duration-150',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}