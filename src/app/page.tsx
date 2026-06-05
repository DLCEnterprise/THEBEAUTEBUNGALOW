import Image from 'next/image'

/* ──────────────────────────────────────────────────────────────
   TEMPORARY "COMING SOON" HOLDING PAGE
   The full marketing site is preserved in git history (commit
   7347fef) and can be restored with:  git show 7347fef:src/app/page.tsx

   Direction: DEPTH & SHADOW — an elevated rose-gold medallion on
   clean white. Legibility is fixed with a deeper, readable gradient
   on the brand name plus deeper label colors. Aliveness comes from
   two slow, restrained cues only: a breathing rose-gold glow halo
   and a gently breathing floor contact-shadow that sells the logo
   as floating. No spin, no bounce, no headline shimmer (kept static
   for legibility). Server component, pure CSS/Tailwind motion.
   Respects prefers-reduced-motion.
   ────────────────────────────────────────────────────────────── */

export default function ComingSoon() {
  return (
    <main className="relative min-h-screen bg-white flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">

      {/* Whisper-soft warm wash so the logo doesn't float in clinical white */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 62% 52% at 50% 40%, rgba(201,168,130,0.07) 0%, transparent 70%)' }}
      />

      {/* Hairline frame */}
      <div aria-hidden className="absolute inset-4 sm:inset-6 border border-rg-200/50 pointer-events-none" />

      {/* Drifting rose-gold motes — slow, for quiet life around the logo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <span className="absolute top-[16%] left-[26%] w-1.5 h-1.5 rounded-full bg-rg-300/70 blur-[1px] animate-float-slow motion-reduce:animate-none" />
        <span className="absolute top-[24%] right-[24%] w-1 h-1 rounded-full bg-rg-400/65 blur-[0.5px] animate-float-slow motion-reduce:animate-none [animation-delay:1.6s]" />
        <span className="absolute top-[40%] left-[18%] w-[5px] h-[5px] rounded-full bg-rg-300/65 blur-[1px] animate-float-slow motion-reduce:animate-none [animation-delay:3.2s]" />
        <span className="absolute top-[12%] right-[34%] w-1 h-1 rounded-full bg-rg-300/60 blur-[0.5px] animate-float-slow motion-reduce:animate-none [animation-delay:2.4s]" />
        <span className="absolute top-[34%] right-[16%] w-1.5 h-1.5 rounded-full bg-rg-300/65 blur-[1px] animate-float-slow motion-reduce:animate-none [animation-delay:4.4s]" />
        <span className="absolute top-[46%] left-[40%] w-1 h-1 rounded-full bg-rg-400/55 blur-[0.5px] animate-float-slow motion-reduce:animate-none [animation-delay:0.8s]" />
        <span className="absolute top-[20%] left-[44%] w-1 h-1 rounded-full bg-rg-300/55 blur-[0.5px] animate-float-slow motion-reduce:animate-none [animation-delay:5.6s]" />
        <span className="absolute top-[30%] left-[10%] w-1.5 h-1.5 rounded-full bg-rg-400/55 blur-[1px] animate-float-slow motion-reduce:animate-none [animation-delay:6.8s]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-7 max-w-xl mx-auto animate-fade-in motion-reduce:animate-none">

        {/* Eyebrow */}
        <p className="font-body text-[10px] sm:text-[11px] tracking-[0.5em] uppercase text-rg-700">
          Coming Soon
        </p>

        {/* Logo emblem — the elevated medallion centerpiece */}
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">

          {/* Breathing rose-gold glow halo behind the emblem (two layers,
              out of phase, for a richer, more present luminosity) */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full blur-2xl animate-glow-pulse motion-reduce:animate-none pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 45%, rgba(201,168,130,0.58) 0%, rgba(201,168,130,0.20) 45%, transparent 72%)' }}
          />
          <div
            aria-hidden
            className="absolute -inset-4 rounded-full blur-3xl animate-glow-pulse motion-reduce:animate-none pointer-events-none [animation-delay:3s]"
            style={{ background: 'radial-gradient(circle at 50% 52%, rgba(212,184,150,0.40) 0%, transparent 68%)' }}
          />

          {/* Elliptical floating contact shadow on the floor beneath the logo.
              Rose-gold-tinted + low opacity so the white stays pristine. */}
          <div
            aria-hidden
            className="absolute left-1/2 -bottom-6 sm:-bottom-7 h-7 w-[66%] -translate-x-1/2 rounded-[50%] blur-xl animate-shadow-breathe motion-reduce:animate-none pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(166,120,78,0.30) 0%, rgba(166,120,78,0.12) 45%, transparent 75%)' }}
          />

          {/* The emblem, lifted with two layered drop-shadows + a slow float */}
          <div className="relative h-full w-full drop-shadow-[0_6px_14px_rgba(138,96,64,0.18)] animate-float-emblem motion-reduce:animate-none">
            <div className="relative h-full w-full drop-shadow-[0_24px_50px_rgba(166,120,78,0.20)]">
              <Image
                src="/logo-emblem-dark.png"
                alt="The Beaute Bungalow"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Ornament divider */}
        <div className="flex items-center gap-4 w-full max-w-[210px]">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-rg-300" />
          <span className="text-rg-400 text-sm leading-none">&#9829;</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-rg-300" />
        </div>

        {/* Announcement */}
        <h1 className="font-display text-[1.75rem] sm:text-3xl md:text-[2.5rem] text-charcoal font-light leading-snug">
          We are happy to announce the future home of{' '}
          <span className="italic font-normal text-rg-shimmer-deep animate-shimmer motion-reduce:animate-none drop-shadow-[0_1px_2px_rgba(122,82,54,0.35)]">
            The&nbsp;Beaute&nbsp;Bungalow
          </span>
        </h1>

        {/* Status / location line */}
        <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal/65">
          Under Construction &nbsp;·&nbsp; Grapevine, Texas
        </p>

        {/* Contact */}
        <div className="mt-3 flex flex-col items-center gap-4">
          <p className="font-body text-[13px] text-charcoal/60">
            In the meantime, please contact us at:
          </p>

          <div className="flex flex-col items-center gap-2">
            <p className="font-display text-xl text-charcoal tracking-wide">Stephanie&nbsp;T.</p>

            <a
              href="mailto:Stephanie@beautebungalow.com"
              className="font-body text-[13px] tracking-wide text-rg-600 hover:text-rg-500 transition-colors underline-offset-4 hover:underline"
            >
              Stephanie@beautebungalow.com
            </a>

            <a
              href="https://maps.google.com/?q=215+W.+College+Street,+Grapevine,+TX+76051"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[13px] text-charcoal/60 leading-relaxed hover:text-rg-500 transition-colors"
            >
              215 W. College Street, Grapevine, TX 76051
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
