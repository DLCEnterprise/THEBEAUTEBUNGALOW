export default function Contact() {
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

        <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-5">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-rg-400">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-7xl text-white font-light">Book Your Visit</h1>
          <div className="flex items-center gap-4 w-40 mt-1">
            <div className="flex-1 h-px bg-rg-400/38" />
            <span className="text-rg-400/65 text-xs">♥</span>
            <div className="flex-1 h-px bg-rg-400/38" />
          </div>
          <p className="font-body text-[13px] text-white/47 leading-relaxed max-w-sm">
            We&apos;d love to learn more about your goals and design a treatment experience made just for you.
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          FORM + INFO
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

          {/* ── Contact form ── */}
          <div className="lg:col-span-3">
            <p className="overline-label mb-2">Send a Message</p>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal font-light mb-10">
              Start Your Journey
            </h2>

            <form className="flex flex-col gap-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                {[
                  { id: 'firstName', label: 'First Name', type: 'text',  placeholder: 'Your first name' },
                  { id: 'lastName',  label: 'Last Name',  type: 'text',  placeholder: 'Your last name'  },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} className="flex flex-col gap-2">
                    <label htmlFor={id} className="font-body text-[10px] tracking-[0.25em] uppercase text-charcoal/42">
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      className="border-b border-charcoal/18 focus:border-rg-400 outline-none pb-3 pt-1 font-body text-[14px] text-charcoal bg-transparent transition-colors duration-200 placeholder:text-charcoal/28"
                    />
                  </div>
                ))}
              </div>

              {[
                { id: 'email', label: 'Email',        type: 'email', placeholder: 'your@email.com'   },
                { id: 'phone', label: 'Phone Number', type: 'tel',   placeholder: '(000) 000-0000'    },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id} className="flex flex-col gap-2">
                  <label htmlFor={id} className="font-body text-[10px] tracking-[0.25em] uppercase text-charcoal/42">
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className="border-b border-charcoal/18 focus:border-rg-400 outline-none pb-3 pt-1 font-body text-[14px] text-charcoal bg-transparent transition-colors duration-200 placeholder:text-charcoal/28"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label htmlFor="treatment" className="font-body text-[10px] tracking-[0.25em] uppercase text-charcoal/42">
                  Treatment of Interest
                </label>
                <select
                  id="treatment"
                  className="border-b border-charcoal/18 focus:border-rg-400 outline-none pb-3 pt-1 font-body text-[14px] text-charcoal/60 bg-transparent transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="">Select a treatment…</option>
                  <option>Face Contouring</option>
                  <option>Body Contouring</option>
                  <option>Skin Tightening</option>
                  <option>Sculpting Treatments</option>
                  <option>Not sure — I'd like a consultation</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-body text-[10px] tracking-[0.25em] uppercase text-charcoal/42">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your goals…"
                  className="border-b border-charcoal/18 focus:border-rg-400 outline-none pb-3 pt-1 font-body text-[14px] text-charcoal bg-transparent transition-colors duration-200 placeholder:text-charcoal/28 resize-none"
                />
              </div>

              <button
                type="submit"
                className="self-start font-body text-[11px] tracking-[0.22em] uppercase px-10 py-4 bg-rg-400 text-white hover:bg-rg-500 transition-all duration-300 mt-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ── Info sidebar ── */}
          <aside className="lg:col-span-2 flex flex-col gap-9 lg:pt-20">

            <div>
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-rg-400 mb-3">Location</p>
              <p className="font-display text-xl text-charcoal font-light">Your City, State</p>
              <p className="font-body text-[13px] text-charcoal/48 leading-relaxed mt-2">
                Full address is provided upon booking confirmation.
              </p>
            </div>

            <div className="h-px bg-rg-100" />

            <div>
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-rg-400 mb-4">Studio Hours</p>
              <div className="flex flex-col gap-2.5">
                {[
                  ['Monday – Friday', '9:00 AM – 7:00 PM'],
                  ['Saturday',        '9:00 AM – 5:00 PM'],
                  ['Sunday',          'By Appointment'    ],
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between items-baseline gap-4">
                    <span className="font-body text-[13px] text-charcoal/65">{day}</span>
                    <span className="font-body text-[13px] text-charcoal/38">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px bg-rg-100" />

            <div>
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-rg-400 mb-4">Contact Us</p>
              <div className="flex flex-col gap-2.5">
                <a href="tel:+10000000000" className="font-body text-[13px] text-charcoal/55 hover:text-rg-500 transition-colors">
                  (000) 000-0000
                </a>
                <a href="mailto:hello@thebeautebungalow.com" className="font-body text-[13px] text-charcoal/55 hover:text-rg-500 transition-colors break-all">
                  hello@thebeautebungalow.com
                </a>
              </div>
            </div>

            <div className="h-px bg-rg-100" />

            <div>
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-rg-400 mb-4">Follow Us</p>
              <div className="flex gap-7">
                <a href="#" className="font-body text-[13px] text-charcoal/55 hover:text-rg-500 transition-colors">Instagram</a>
                <a href="#" className="font-body text-[13px] text-charcoal/55 hover:text-rg-500 transition-colors">Facebook</a>
              </div>
            </div>

          </aside>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          BOTTOM PROMISE BAR
      ══════════════════════════════════════════════ */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Complimentary Consultation', desc: 'Your first visit includes a thorough consultation at no charge.' },
            { title: 'Tailored to You',            desc: 'Every treatment plan is custom-built around your unique goals.' },
            { title: 'Zero Downtime',              desc: 'Leave looking and feeling better — no recovery required.'      },
          ].map(({ title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-3">
              <span className="text-rg-400 text-sm">♥</span>
              <h3 className="font-display text-xl text-charcoal">{title}</h3>
              <p className="font-body text-[13px] text-charcoal/52 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
