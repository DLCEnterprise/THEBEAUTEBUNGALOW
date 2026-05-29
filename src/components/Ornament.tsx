/**
 * Refined rose-gold divider flourish: tapered gradient lines flanking the
 * brand heart, with small accent dots. Replaces the plain line–♥–line motif.
 */
export default function Ornament({
  className = '',
  width = 'w-16',
  tone = 'gold',
}: {
  className?: string
  /** Tailwind width class for each line, e.g. 'w-12' | 'w-16' | 'w-20' */
  width?: string
  /** 'gold' for dark backgrounds, 'soft' for light backgrounds */
  tone?: 'gold' | 'soft'
}) {
  const line = tone === 'soft' ? 'via-rg-300/70' : 'via-rg-400/55'
  const dot  = tone === 'soft' ? 'bg-rg-300/70'  : 'bg-rg-400/55'
  const heart = tone === 'soft' ? 'text-rg-400'  : 'text-rg-400/80'

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className={`block w-1 h-1 rotate-45 ${dot}`} />
      <span className={`block h-px ${width} bg-gradient-to-r from-transparent ${line} to-transparent`} />
      <span className={`text-[11px] leading-none ${heart}`}>&#9829;</span>
      <span className={`block h-px ${width} bg-gradient-to-r from-transparent ${line} to-transparent`} />
      <span className={`block w-1 h-1 rotate-45 ${dot}`} />
    </div>
  )
}
