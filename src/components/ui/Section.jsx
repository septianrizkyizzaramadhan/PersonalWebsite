import { cn } from '../../lib/cn.js'

export function Section({ id, className, children, ...props }) {
  return (
    <section
      id={id}
      className={cn('py-20 sm:py-28 scroll-mt-20', className)}
      {...props}
    >
      {children}
    </section>
  )
}