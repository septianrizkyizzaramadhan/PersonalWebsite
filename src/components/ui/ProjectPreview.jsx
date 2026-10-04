export function ProjectPreview({ variant = 'coffee' }) {
  if (variant === 'coffee') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#2f1810] via-[#653620] to-[#2f1810] relative overflow-hidden">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Mock navbar */}
        <div className="relative flex items-center justify-between px-6 py-4">
          <span className="text-[10px] font-semibold text-[#faf6f0] tracking-tight">
            Kopi Senja Solo
          </span>
          <div className="flex gap-3">
            <span className="text-[8px] text-[#faf6f0]/60">Tentang</span>
            <span className="text-[8px] text-[#faf6f0]/60">Menu</span>
            <span className="text-[8px] text-[#faf6f0]/60">Lokasi</span>
          </div>
        </div>

        {/* Mock hero content */}
        <div className="relative px-6 pt-6 pb-8 max-w-[70%]">
          <div className="w-8 h-px bg-[#c08552] mb-3" />
          <p className="text-[8px] uppercase tracking-[0.2em] text-[#c08552] mb-2">
            Kedai Kopi · Surakarta
          </p>
          <h2 className="text-[#faf6f0] font-serif text-2xl leading-tight">
            Setiap senja
            <br />
            <span className="italic text-[#c08552]">punya cerita.</span>
          </h2>
          <p className="text-[9px] text-[#faf6f0]/70 mt-3 leading-relaxed max-w-[280px]">
            Kedai kopi di jantung Surakarta. Tempat pelajar, mahasiswa, dan
            keluarga muda berkumpul.
          </p>

          {/* Mock buttons */}
          <div className="flex gap-2 mt-4">
            <div className="px-3 py-1.5 bg-[#c08552] rounded-sm">
              <span className="text-[8px] text-[#2f1810] font-medium">
                Pesan via WhatsApp
              </span>
            </div>
            <div className="px-3 py-1.5 border border-[#faf6f0]/30 rounded-sm">
              <span className="text-[8px] text-[#faf6f0]">Lihat Lokasi</span>
            </div>
          </div>
        </div>

        {/* Mock image block */}
        <div className="absolute right-6 bottom-8 w-[35%] aspect-[3/4] rounded-sm bg-[#c08552]/20 border border-[#c08552]/30" />
      </div>
    )
  }

  // Fallback: generic placeholder
  return (
    <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent-deep/10 flex items-center justify-center">
      <span className="font-mono text-xs text-muted">Preview</span>
    </div>
  )
}   