import { cn } from '../../lib/cn.js'

export function BrowserMockup({ url, children, className }) {
  return (
    <div
      className={cn(
        'rounded-lg overflow-hidden border border-line bg-white shadow-sm',
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-neutral-100 border-b border-line">
        {/* Traffic lights */}
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>

        {/* URL bar */}
        <div className="flex-1 ml-3">
          <div className="flex items-center gap-2 px-3 py-1 bg-white rounded border border-line/60 text-xs text-muted font-mono truncate">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="shrink-0"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="truncate">{url}</span>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="aspect-[16/10] bg-neutral-50 overflow-hidden">
        {children}
      </div>
    </div>
  )
}