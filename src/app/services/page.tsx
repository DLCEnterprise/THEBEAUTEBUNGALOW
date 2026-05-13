import Link from 'next/link'

const services = [
  {
    id: 'face',
    number: '01',
    title: 'Face Contouring',
    subtitle: 'Sculpt. Define. Refine.',
    description:
      'Our signature face contouring treatments use advanced manual and tool-assisted techniques to sculpt and define your facial structure without surgery or downtime. We target the jawline, cheekbones, brow, and neck area to create a lifted, defined, and harmonious appearance that photographs beautifully and feels even better in person.',
    benefits: [
      'Sharper, more defined jawline',
      'Lifted and sculpted cheekbones',
      'Reduced facial puffiness and bloating',
      'Improved lymphatic drainage and circulation',
      'Natural, non-surgical sculpted results',
    ],
    idealFor:
      'Clients seeking facial definition, those experiencing puffiness or water retention, and anyone wanting a non-surgical lifted or more sculpted appearance.',
    results:
      'Visible definition and lift after the first session, with progressive sculpting and toning results over a recommended series of treatments.',
    duration: '60 – 90 min',
    sessions: '4 – 6 recommended',
  },
  {
    id: 'body',
    number: '02',
    title: 'Body Contouring',
    subtitle: 'Sculpt. Slim. Celebrate.',
    description:
      'Our body contouring treatments combine manual sculpting, targeted massage, and specialized tools to break down stubborn fat deposits, improve skin texture, and celebrate your natural curves. Completely non-invasive with zero downtime, these treatments are designed to sculpt the body you already have into its most refined expression.',
    benefits: [
      'Reduced appearance of stubborn fat pockets',
      'Improved skin tone and surface texture',
      'Enhanced natural curves and silhouette',
      'Reduced appearance of cellulite',
      'Improved circulation and lymphatic flow',
    ],
    idealFor:
      'Clients targeting areas such as the abdomen, flanks, thighs, arms, or back. Ideal for those seeking body definition and sculpting without surgery or recovery time.',
    results:
      'Measurable inch loss and improved tone after each session, with optimal sculpting results achieved over a full recommended treatment series.',
    duration: '60 – 120 min',
    sessions: '6 – 10 recommended',
  },
  {
    id: 'tightening',
    number: '03',
    title: 'Skin Tightening',
    subtitle: 'Firm. Lift. Renew.',
    description:
      'Our advanced skin tightening protocols target skin laxity on the face and body, stimulating collagen and elastin production for firmer, more youthful-looking skin. Using cutting-edge technology combined with expert manual technique, we deliver results that are both visible and lasting — restoring a lifted, toned appearance with no needles and no downtime.',
    benefits: [
      'Visibly firmer and tighter skin',
      'Stimulated collagen and elastin production',
      'Reduced fine lines and crepey texture',
      'Lifted and toned appearance',
      'Improved skin elasticity and resilience',
    ],
    idealFor:
      'Clients experiencing skin laxity due to aging, weight loss, or lifestyle factors. Suitable for face, neck, décolletage, arms, abdomen, and inner thighs.',
    results:
      'Progressive tightening and firming with continued improvement for weeks after each treatment. Full transformative results typically visible after completing a series.',
    duration: '45 – 90 min',
    sessions: '4 – 8 recommended',
  },
  {
    id: 'sculpting',
    number: '04',
    title: 'Sculpting Treatments',
    subtitle: 'Reshape. Redefine. Reveal.',
    description:
      'Our specialized sculpting treatments incorporate wood therapy, lymphatic drainage, and deep-tissue sculpting techniques to reshape and redefine your silhouette from the inside out. These powerful protocols address stubborn areas, accelerate detoxification, and reveal the contours that have always been uniquely yours.',
    benefits: [
      'Deep sculpting and measurable body reshaping',
      'Accelerated lymphatic drainage and detox',
      'Significant reduction in fluid retention and bloating',
      'Improved body proportions and silhouette',
      'Enhanced post-workout recovery and muscle definition',
    ],
    idealFor:
      'Clients looking for intensive sculpting, those dealing with chronic swelling or fluid retention, and those seeking accelerated body composition and reshaping results.',
    results:
      'Immediate visible reduction in puffiness and improved shape definition after the first session, with progressive and dramatic sculpting results achieved over the full treatment series.',
    duration: '60 – 90 min',
    sessions: '6 – 12 recommended',
  },
]

export default function Services() {
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
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rg-400/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rg-400/25 to-transparent" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-5">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-rg-400">What We Offer</p>
          <h1 className="font-display text-5xl md:text-7xl text-white font-light">Our Treatments</h1>
          <div className="flex items-center gap-4 w-40 mt-1">
            <div className="flex-1 h-px bg-rg-400/38" />
            <span className="text-rg-400/65 text-xs">♥</span>
            <div className="flex-1 h-px bg-rg-400/38" />
          </div>
          <p className="font-body text-[13px] text-white/47 leading-relaxed max-w-md">
            Every treatment at The Beaute Bungalow is a precision-crafted experience designed to
            reveal your most sculpted, radiant self.
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          SERVICE SECTIONS (alternating layout)
      ══════════════════════════════════════════════ */}
      {services.map(({ id, number, title, subtitle, description, benefits, idealFor, results, duration, sessions }, i) => (
        <section
          key={id}
          id={id}
          className={`py-28 px-6 ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Image placeholder */}
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''} relative aspect-[4/5] bg-gradient-to-br from-rg-100 via-rg-200/60 to-rg-100 overflow-hidden`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-14 h-px bg-rg-400" />
                  <p className="font-body text-[10px] tracking-[0.35em] uppercase text-rg-500/80">{title}</p>
                  <p className="font-body text-[9px] text-rg-400/50">Treatment Photography</p>
                  <div className="w-14 h-px bg-rg-400" />
                </div>
                <div className="absolute top-5 left-5 w-9 h-9 border-l-2 border-t-2 border-rg-400/28" />
                <div className="absolute bottom-5 right-5 w-9 h-9 border-r-2 border-b-2 border-rg-400/28" />
                <span className="absolute bottom-7 left-7 font-display text-7xl text-rg-400/15 font-light leading-none select-none">
                  {number}
                </span>
              </div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} flex flex-col gap-6`}>

                <div className="flex flex-col gap-1">
                  <p className="overline-label">{number} — Treatment</p>
                  <h2 className="font-display text-4xl md:text-5xl text-charcoal font-light">{title}</h2>
                  <p className="font-display text-xl italic text-rg-500">{subtitle}</p>
                </div>

                <div className="w-10 h-px bg-rg-400" />

                <p className="font-body text-[15px] text-charcoal/58 leading-relaxed">{description}</p>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4 py-5 border-y border-rg-100">
                  <div>
                    <p className="font-body text-[9px] tracking-[0.3em] uppercase text-rg-400 mb-1">Duration</p>
                    <p className="font-display text-lg text-charcoal">{duration}</p>
                  </div>
                  <div>
                    <p className="font-body text-[9px] tracking-[0.3em] uppercase text-rg-400 mb-1">Recommended</p>
                    <p className="font-display text-lg text-charcoal">{sessions}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-charcoal/70 mb-4">Key Benefits</p>
                  <ul className="flex flex-col gap-3">
                    {benefits.map(b => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="text-rg-400 text-xs flex-shrink-0 mt-[3px]">♥</span>
                        <span className="font-body text-[14px] text-charcoal/58">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal for + Results */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-cream p-5">
                    <p className="font-body text-[9px] tracking-[0.25em] uppercase text-rg-500 mb-2">Ideal For</p>
                    <p className="font-body text-[13px] text-charcoal/58 leading-relaxed">{idealFor}</p>
                  </div>
                  <div className="bg-rg-100/70 p-5">
                    <p className="font-body text-[9px] tracking-[0.25em] uppercase text-rg-500 mb-2">Expected Results</p>
                    <p className="font-body text-[13px] text-charcoal/58 leading-relaxed">{results}</p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="self-start font-body text-[11px] tracking-[0.22em] uppercase px-8 py-4 bg-rg-400 text-white hover:bg-rg-500 transition-all duration-300"
                >
                  Book This Treatment
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}


      {/* ══════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════ */}
      <section className="bg-charcoal py-28 px-6 text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-7">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-rg-400">Ready to Begin?</p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-light">
            Not Sure Where to Start?
          </h2>
          <p className="font-body text-[13px] text-white/42 leading-relaxed max-w-sm">
            Book a complimentary consultation and we'll design a bespoke treatment plan tailored
            specifically to your body, your goals, and your timeline.
          </p>
          <Link
            href="/contact"
            className="font-body text-[11px] tracking-[0.22em] uppercase px-10 py-4 bg-rg-400 text-white hover:bg-rg-500 transition-all duration-300 mt-2"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

    </main>
  )
}
