import Image from 'next/image'
import Link from 'next/link'
import Ornament from '@/components/Ornament'

const services = [
  {
    number: '01',
    title: 'Face Contouring',
    desc: 'Sculpt defining cheekbones and a refined jawline using our signature non-invasive facial techniques.',
    href: '/services#face',
  },
  {
    number: '02',
    title: 'Body Contouring',
    desc: 'Targeted treatments that sculpt, define, and celebrate your natural curves without surgery or downtime.',
    href: '/services#body',
  },
  {
    number: '03',
    title: 'Skin Tightening',
    desc: 'Advanced technology to firm, lift, and tighten for visibly youthful, luminous skin.',
    href: '/services#tightening',
  },
  {
    number: '04',
    title: 'Sculpting Treatments',
    desc: 'Specialized lymphatic and sculpting protocols designed to reshape and redefine your silhouette.',
    href: '/services#sculpting',
  },
]

const testimonials = [
  {
    quote: 'The results exceeded every expectation. My jawline has never looked so defined. I feel like the best version of myself.',
    name: 'Amara K.',
    treatment: 'Face Contouring',
  },
  {
    quote: "The Beaute Bungalow is unlike any studio I've visited. The attention to detail, the results, the entire experience — simply exceptional.",
    name: 'Priya M.',
    treatment: 'Body Sculpting',
  },
  {
    quote: "I came in skeptical and left completely transformed. Worth every penny and then some. I won't go anywhere else.",
    name: 'Danielle R.',
    treatment: 'Skin Tightening',
  },
]

const beforeAfter = [
  { label: 'Face Contouring',  note: 'Defined jawline & sculpted cheekbones' },
  { label: 'Body Sculpting',   note: 'Reduced circumference & improved tone'  },
  { label: 'Skin Tightening',  note: 'Firmer, smoother, visibly lifted skin'  },
]

export default function Home() {
  return (
    <main>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-charcoal flex flex-col items-center justify-center text-center px-6 overflow-hidden">

        {/* Radial atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, #2b1a0e 0%, #111111 75%)' }}
        />

        {/* Ambient corner glows */}
        <div
          aria-hidden
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-50 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(166,120,78,0.20) 0%, transparent 70%)' }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,168,130,0.16) 0%, transparent 70%)' }}
        />

        {/* Film grain */}
        <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.06] mix-blend-soft-light pointer-events-none" />

        {/* Floating sparkles */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <span className="absolute top-[18%] left-[14%] w-1 h-1 rounded-full bg-rg-300/40 blur-[0.5px] animate-float-slow" />
          <span className="absolute top-[26%] right-[16%] w-[3px] h-[3px] rounded-full bg-rg-200/30 blur-[0.5px] animate-float-slow [animation-delay:1.5s]" />
          <span className="absolute bottom-[24%] left-[22%] w-[2px] h-[2px] rounded-full bg-rg-300/30 animate-float-slow [animation-delay:3s]" />
          <span className="absolute bottom-[30%] right-[24%] w-1 h-1 rounded-full bg-rg-400/30 blur-[0.5px] animate-float-slow [animation-delay:4.5s]" />
          <span className="absolute top-[44%] left-[9%] w-[2px] h-[2px] rounded-full bg-rg-200/25 animate-float-slow [animation-delay:2.2s]" />
          <span className="absolute top-[38%] right-[10%] w-1 h-1 rounded-full bg-rg-300/25 blur-[0.5px] animate-float-slow [animation-delay:5.5s]" />
        </div>

        {/* Top / bottom shimmer lines */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rg-400/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rg-400/30 to-transparent" />

        <div className="relative z-10 flex flex-col items-center gap-7 max-w-xl mx-auto animate-fade-in">

          {/* Eyebrow */}
          <p className="font-body text-[10px] tracking-[0.45em] uppercase text-rg-300">
            Luxury Face &amp; Body Contouring
          </p>

          {/* Logo emblem — floats on the background with a soft glow halo */}
          <div className="relative flex items-center justify-center w-60 h-60 md:w-72 md:h-72">

            {/* Glow halo */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-full blur-2xl animate-glow-pulse motion-reduce:animate-none"
              style={{ background: 'radial-gradient(circle, rgba(201,168,130,0.42) 0%, rgba(166,120,78,0.12) 45%, transparent 70%)' }}
            />

            {/* Concentric rings */}
            <div aria-hidden className="absolute inset-1 rounded-full border border-rg-400/15" />
            <div aria-hidden className="absolute inset-[18px] rounded-full border border-rg-300/10" />

            {/* Orbiting accents */}
            <div aria-hidden className="absolute inset-0 animate-spin-slow motion-reduce:animate-none">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-rg-300/70 blur-[0.5px]" />
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-rg-400/50" />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-rg-300/45" />
              <span className="absolute right-1 top-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-rg-200/40" />
            </div>

            {/* Emblem */}
            <div className="relative w-44 h-44 md:w-52 md:h-52 drop-shadow-[0_2px_20px_rgba(201,168,130,0.22)]">
              <Image
                src="/logo-emblem-dark.png"
                alt="The Beaute Bungalow"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Ornament */}
          <Ornament width="w-16" className="mt-1" />

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl text-white font-light leading-tight">
            Sculpt.{' '}
            <em className="not-italic italic">Refine.</em>{' '}
            <span className="text-rg-shimmer animate-shimmer">Radiate.</span>
          </h1>

          {/* Sub */}
          <p className="font-body text-[13px] text-white/52 font-light leading-relaxed max-w-sm">
            Non-invasive contouring treatments crafted for women who demand excellence.
            Your transformation is our art.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-3">
            <Link
              href="/services"
              className="font-body text-[11px] tracking-[0.22em] uppercase px-8 py-4 border border-rg-300/60 text-rg-300 hover:bg-rg-400 hover:border-rg-400 hover:text-white transition-all duration-300"
            >
              Explore Treatments
            </Link>
            <Link
              href="/contact"
              className="font-body text-[11px] tracking-[0.22em] uppercase px-8 py-4 bg-rg-400 text-white hover:bg-rg-500 transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-rg-400/60 to-transparent" />
          <span className="font-body text-[9px] tracking-[0.3em] uppercase text-white/22">Scroll</span>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          TRUST BAR
      ══════════════════════════════════════════════ */}
      <section className="bg-white border-b border-rg-100/60">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-rg-100">
            {[
              { number: '500+', label: 'Transformations'  },
              { number: '5.0 ★', label: 'Average Rating'  },
              { number: '100%',  label: 'Non-Invasive'    },
            ].map(({ number, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 py-8 md:py-0">
                <span className="font-display text-4xl md:text-5xl text-rg-gradient font-light">{number}</span>
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal/38">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          SERVICES OVERVIEW
      ══════════════════════════════════════════════ */}
      <section className="bg-cream py-28 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="overline-label mb-3">What We Offer</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal font-light">Our Signature Treatments</h2>
            <div className="flex items-center gap-4 max-w-[180px] mx-auto mt-6">
              <div className="flex-1 h-px bg-rg-300/70" />
              <span className="text-rg-400 text-xs">♥</span>
              <div className="flex-1 h-px bg-rg-300/70" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ number, title, desc, href }) => (
              <Link
                key={number}
                href={href}
                className="group bg-white p-8 border-t-2 border-rg-300 hover:border-rg-500 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <span className="font-display text-5xl text-rg-200 font-light group-hover:text-rg-300 transition-colors duration-300">
                  {number}
                </span>
                <h3 className="font-display text-xl text-charcoal mt-5 mb-3">{title}</h3>
                <p className="font-body text-[13px] text-charcoal/55 leading-relaxed flex-1">{desc}</p>
                <span className="mt-6 font-body text-[11px] tracking-[0.2em] uppercase text-rg-500 inline-flex items-center gap-2 group-hover:text-rg-600 transition-colors">
                  Learn More
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          ABOUT PREVIEW
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image placeholder */}
          <div className="relative aspect-[3/4] bg-gradient-to-br from-rg-100 via-rg-200/70 to-rg-100 overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="w-14 h-px bg-rg-400" />
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rg-500/80">Studio Photography</p>
              <p className="font-body text-[9px] text-rg-400/50 tracking-wider">Coming Soon</p>
              <div className="w-14 h-px bg-rg-400" />
            </div>
            <div className="absolute top-5 left-5 w-9 h-9 border-l border-t border-rg-400/35" />
            <div className="absolute top-5 right-5 w-9 h-9 border-r border-t border-rg-400/35" />
            <div className="absolute bottom-5 left-5 w-9 h-9 border-l border-b border-rg-400/35" />
            <div className="absolute bottom-5 right-5 w-9 h-9 border-r border-b border-rg-400/35" />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <p className="overline-label">Our Philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal font-light leading-snug">
              Beauty Elevated<br />to an Art Form
            </h2>
            <div className="w-10 h-px bg-rg-400" />
            <p className="font-body text-[15px] text-charcoal/58 leading-relaxed">
              At The Beaute Bungalow, we believe that confidence begins with feeling beautiful in
              your own skin. Our approach merges the precision of medical aesthetics with the
              intimacy of a boutique studio — because you deserve nothing less than perfection.
            </p>
            <p className="font-body text-[15px] text-charcoal/58 leading-relaxed">
              Every treatment is carefully choreographed and tailored to your unique anatomy,
              your goals, and your vision of yourself at your most radiant.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase text-charcoal hover:text-rg-500 transition-colors group mt-2"
            >
              Discover Our Story
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          BEFORE & AFTER
      ══════════════════════════════════════════════ */}
      <section className="relative bg-charcoal py-28 px-6 overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-soft-light pointer-events-none" />
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-72 blur-3xl opacity-40 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(166,120,78,0.16) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rg-400 mb-3">Real Results</p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light">Client Transformations</h2>
            <Ornament width="w-16" className="mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfter.map(({ label, note }) => (
              <div key={label} className="flex flex-col gap-3">
                <div className="flex gap-1.5">
                  <div className="flex-1 aspect-square bg-white/[0.04] border border-white/10 flex items-end justify-start p-3">
                    <span className="font-body text-[9px] tracking-[0.3em] uppercase text-white/22">Before</span>
                  </div>
                  <div className="flex-1 aspect-square bg-rg-400/[0.08] border border-rg-400/22 flex items-end justify-start p-3">
                    <span className="font-body text-[9px] tracking-[0.3em] uppercase text-rg-400/45">After</span>
                  </div>
                </div>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/35">{label}</p>
                <p className="font-display text-[13px] italic text-white/25">{note}</p>
              </div>
            ))}
          </div>

          <p className="text-center font-body text-[9px] tracking-[0.35em] text-white/14 uppercase mt-14">
            Client Transformation Photography Coming Soon
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════ */}
      <section className="bg-cream py-28 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="overline-label mb-3">Client Love</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal font-light">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, treatment }) => (
              <div key={name} className="bg-white p-8 flex flex-col gap-4">
                <span className="font-display text-6xl text-rg-200 leading-none -mb-2">&ldquo;</span>
                <p className="font-display text-[18px] italic text-charcoal/72 leading-relaxed">{quote}</p>
                <div className="mt-auto pt-5 border-t border-rg-100 flex flex-col gap-1">
                  <p className="font-body text-sm font-medium text-charcoal">{name}</p>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-rg-400">{treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════ */}
      <section className="relative bg-charcoal py-32 px-6 text-center overflow-hidden">

        {/* Ghosted emblem watermark */}
        <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[26rem] h-[26rem] opacity-[0.04]">
            <Image src="/logo-emblem-dark.png" alt="" fill className="object-contain" />
          </div>
        </div>

        {/* Grain + ambient glow */}
        <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-soft-light pointer-events-none" />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-64 blur-3xl opacity-50 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,130,0.14) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-7">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-rg-400">Begin Your Journey</p>
          <h2 className="font-display text-4xl md:text-6xl text-white font-light leading-tight">
            Begin Your<br />Transformation
          </h2>
          <Ornament width="w-16" />
          <p className="font-body text-[13px] text-white/42 leading-relaxed max-w-sm">
            Every body is unique. Every treatment is personal. Begin your journey to your most
            confident, sculpted self.
          </p>
          <Link
            href="/contact"
            className="font-body text-[11px] tracking-[0.22em] uppercase px-12 py-4 bg-rg-400 text-white hover:bg-rg-500 transition-all duration-300 mt-3"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>

    </main>
  )
}
