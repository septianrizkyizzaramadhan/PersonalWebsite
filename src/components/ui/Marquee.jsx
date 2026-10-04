const items = [
  'Web Developer',
  'Boyolali',
  'React',
  'Next.js',
  'Node.js',
  'Linux',
  'Tailwind CSS',
  'JavaScript',
]

export function Marquee() {
  const strip = [...items, ...items]

  return (
    <div className="border-y border-ink bg-accent overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-4">
        {strip.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-mono text-sm sm:text-base uppercase tracking-[0.15em] text-ink"
          >
            {item}
            <span className="mx-6 inline-block w-1.5 h-1.5 rounded-full bg-ink" />
          </span>
        ))}
      </div>
    </div>
  )
}