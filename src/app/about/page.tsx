import Link from 'next/link'
import Ornament from '@/components/Ornament'

const pillars = [
  {
    title: 'Precision',
    desc: 'Every treatment is mapped to your unique anatomy, ensuring results that look natural, feel intentional, and exceed expectation.',
  },
  {
    title: 'Luxury',
    desc: 'Your experience should be as extraordinary as your results. We curate every detail — from atmosphere to aftercare.',
  },
  {
    title: 'Results',
    desc: "We don't just promise transformation — we deliver it. Measurable, visible, and confidence-affirming results, every time.",
  },
]

const credentials = [
  'Certified Contouring Specialist',
  'Advanced Skin Therapy Certification',
  'Non-Invasive Body Sculpting Certified',
  'Lymphatic Drainage Therapy Certified',
  'Member, Professional Beauty Association',
  'First Aid & Safety Certified',
]

export default function About() {
  return (
    <main>

      {/* ══════════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════════ */}
      <section className="relative bg-charcoal pt-40 pb-28 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 65% 55% at 50% 30%, #2b1a0e 0%, #111111 75%)' }}
        />
        <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.06] mix-blend-soft-light pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rg-400/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rg-400/25 to-transparent" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-5">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-rg-400">Our Story</p>
          <h1 className="font-display text-5xl md:text-7xl text-white font-light leading-tight">
            Where Science<br />
            <span className="italic text-rg-gradient">Meets Elegance</span>
          </h1>
          <Ornament width="w-14" className="mt-2" />
          <p className="font-body text-[13px] text-white/47 leading-relaxed max-w-md">
            Born from a passion for precision beauty and an unwavering commitment to transformative results.
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          BRAND STORY
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <p className="overline-label">The Beaute Bungalow Story</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal font-light leading-snug">
              A Studio Built on Passion &amp; Precision
            </h2>
            <div className="w-10 h-px bg-rg-400" />
          </div>

          <div className="flex flex-col gap-6 font-body text-[15px] text-charcoal/58 leading-relaxed">
            <p>
              The Beaute Bungalow was founded on a simple but powerful belief: that every woman
              deserves to see herself through the lens of her highest potential. We created a space
              where cutting-edge contouring techniques meet the warmth and intimacy of a boutique
              studio — a sanctuary where science and luxury coexist beautifully.
            </p>
            <p>
              Our founder's journey began with a deep fascination for the art of the human form and
              the transformative power of skilled, intentional touch. After years of training,
              certification, and refinement, The Beaute Bungalow was born — a place where every
              client is treated as a work of art in progress.
            </p>
            <p>
              Today, we are proud to be the destination of choice for women who refuse to compromise
              on the quality of their care or the caliber of their results. We don't follow
              trends — we set them.
            </p>
            <p>
              Every client who walks through our doors leaves not just looking different, but
              feeling fundamentally different — more confident, more radiant, more themselves.
              That transformation is what drives everything we do.
            </p>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          THREE PILLARS
      ══════════════════════════════════════════════ */}
      <section className="bg-cream py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="overline-label mb-3">What Drives Us</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal font-light">Our Three Pillars</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map(({ title, desc }) => (
              <div key={title} className="bg-white p-10 flex flex-col gap-4 border-b-2 border-rg-400">
                <h3 className="font-display text-2xl text-charcoal">{title}</h3>
                <div className="w-8 h-px bg-rg-300" />
                <p className="font-body text-[14px] text-charcoal/58 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          PRACTITIONER BIO
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Portrait placeholder */}
          <div className="relative aspect-[3/4] bg-gradient-to-br from-rg-100 via-rg-200/60 to-rg-100 overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="w-14 h-px bg-rg-400" />
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rg-500/80">Practitioner Portrait</p>
              <p className="font-body text-[9px] text-rg-400/50">Coming Soon</p>
              <div className="w-14 h-px bg-rg-400" />
            </div>
            <div className="absolute top-5 left-5 w-9 h-9 border-l border-t border-rg-400/35" />
            <div className="absolute bottom-5 right-5 w-9 h-9 border-r border-b border-rg-400/35" />
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-6">
            <p className="overline-label">Meet Your Specialist</p>
            <h2 className="font-display text-4xl text-charcoal font-light">[Practitioner Name]</h2>
            <p className="font-display text-xl italic text-rg-500">Lead Contouring Specialist &amp; Founder</p>
            <div className="w-10 h-px bg-rg-400" />
            <p className="font-body text-[15px] text-charcoal/58 leading-relaxed">
              With [X] years of experience in advanced aesthetic treatments, [Name] has dedicated
              her career to mastering the art of non-invasive contouring. Her philosophy is rooted
              in the belief that true beauty is precise, intentional, and deeply personal.
            </p>
            <p className="font-body text-[15px] text-charcoal/58 leading-relaxed">
              Trained in the most sought-after sculpting techniques, [Name] combines a clinical eye
              with an artist's touch — delivering results that feel like the very best version of you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase text-charcoal hover:text-rg-500 transition-colors group mt-2"
            >
              Book with [Name]
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          CREDENTIALS
      ══════════════════════════════════════════════ */}
      <section className="relative bg-charcoal py-28 px-6 overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-soft-light pointer-events-none" />
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-64 blur-3xl opacity-40 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(166,120,78,0.14) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rg-400 mb-3">Trust &amp; Expertise</p>
          <h2 className="font-display text-4xl text-white font-light mb-14">Certifications &amp; Credentials</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {credentials.map(cred => (
              <div
                key={cred}
                className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] px-6 py-4 text-left"
              >
                <span className="text-rg-400 text-xs flex-shrink-0">♥</span>
                <span className="font-body text-[13px] text-white/55">{cred}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-block font-body text-[11px] tracking-[0.22em] uppercase px-10 py-4 bg-rg-400 text-white hover:bg-rg-500 transition-all duration-300 mt-14"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>

    </main>
  )
}
