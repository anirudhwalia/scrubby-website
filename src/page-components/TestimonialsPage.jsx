import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  Star, Quote, ArrowRight, Zap, Users, Shield,
  CheckCircle2, TrendingUp, Code, Headphones, BarChart3,
  ExternalLink
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const testimonials = [
  {
    name: 'Pedro A.',
    role: 'Sales Director',
    text: "It's simply the best tool to verify emails that others can't. Instead of wasting emails that could be delivered, try verifying them first with Scrubby! They have an API too.",
    rating: 5,
    initials: 'PA',
    color: 'from-brand-green/20 to-brand-green/5',
  },
  {
    name: 'Koa M.',
    role: 'Head of Growth',
    text: 'Verifying all our emails at scale is something that separates Scrubby from the rest of the validation tool pack.',
    rating: 5,
    initials: 'KM',
    color: 'from-blue-400/20 to-blue-400/5',
  },
  {
    name: 'Shane W.',
    role: 'CEO',
    text: "We've been working with Scrubby for some time now and we're very happy with their service.",
    rating: 5,
    initials: 'SW',
    color: 'from-amber-400/20 to-amber-400/5',
  },
  {
    name: 'Blaise G.',
    role: 'VP of Sales',
    text: "Scrubby is the only email validation software that doesn't give you 'unknown' emails.",
    rating: 5,
    initials: 'BG',
    color: 'from-purple-400/20 to-purple-400/5',
  },
  {
    name: 'Rachel T.',
    role: 'Data Operations Lead',
    text: 'Our data quality improved dramatically after switching to Scrubby. We went from 60% deliverability on catch-all domains to over 97%. The difference in our campaign performance has been night and day.',
    rating: 5,
    initials: 'RT',
    color: 'from-rose-400/20 to-rose-400/5',
  },
  {
    name: 'Marcus L.',
    role: 'CTO',
    text: 'The API integration took us less than an hour. Clean documentation, reliable webhooks, and consistent response times. Exactly what an engineering team needs from a validation service.',
    rating: 5,
    initials: 'ML',
    color: 'from-teal-400/20 to-teal-400/5',
  },
  {
    name: 'Priya D.',
    role: 'Customer Success Manager',
    text: 'Whenever we have a question or need help optimizing our workflow, the Scrubby support team responds within minutes. The level of care and attention is rare in this space.',
    rating: 5,
    initials: 'PD',
    color: 'from-indigo-400/20 to-indigo-400/5',
  },
  {
    name: 'James K.',
    role: 'Revenue Operations',
    text: 'Scrubby paid for itself within the first week. We recovered thousands of leads that other tools had written off as unverifiable. The ROI is undeniable.',
    rating: 5,
    initials: 'JK',
    color: 'from-orange-400/20 to-orange-400/5',
  },
  {
    name: 'Sofia M.',
    role: 'Marketing Director',
    text: 'We used to lose 30-40% of our purchased lead lists to unknown emails. With Scrubby, we recover most of those and our bounce rates have dropped below 2%. Game changer for our outbound campaigns.',
    rating: 5,
    initials: 'SM',
    color: 'from-cyan-400/20 to-cyan-400/5',
  },
]

const stats = [
  { value: '98%', label: 'Deliverability', icon: CheckCircle2 },
  { value: '10M+', label: 'Emails Validated', icon: Zap },
  { value: '2,500+', label: 'Customers', icon: Users },
  { value: '4.85/5', label: 'G2 Rating', icon: Star },
]

const clientLogos = [
  { name: 'Gorgias', logo: 'gorgias' },
  { name: 'Revolut', logo: 'revolut' },
  { name: 'Oracle', logo: 'oracle' },
  { name: 'IBM', logo: 'ibm' },
  { name: 'Samsara', logo: 'samsara' },
  { name: 'Stensul', logo: 'stensul' },
  { name: 'OakNorth', logo: 'oaknorth' },
  { name: 'Trilogy', logo: 'trilogy' },
  { name: 'Wellspring', logo: 'wellspring' },
  { name: 'Fiddler.ai', logo: 'fiddler' },
  { name: 'XoXoday', logo: 'xoxoday' },
]

/* ═══════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden" style={{ background: '#18181B' }}>
      {/* Background effects */}
      <div
        className="absolute w-[600px] h-[600px] -top-40 -left-40 rounded-full blur-3xl animate-pulse opacity-60"
        style={{ background: 'rgba(45, 206, 142, 0.08)' }}
      />
      <div
        className="absolute w-[400px] h-[400px] top-20 right-0 rounded-full blur-3xl animate-pulse"
        style={{ background: 'rgba(45, 206, 142, 0.05)', animationDelay: '2s' }}
      />
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Decorative dots */}
      <div className="absolute top-12 left-12 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" />
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="reveal">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-8">
            <Star size={12} />
            What Our Users Say
          </div>

          {/* Heading */}
          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">Trusted by </span>
            <span className="text-gradient-light">2,500+ Teams</span>
            <span className="text-white"> Worldwide</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-body">
            See why leading companies choose Scrubby for their email validation needs.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   G2 RATING SECTION
   ═══════════════════════════════════════════════════════ */

function G2RatingSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal">
          <div className="max-w-2xl mx-auto text-center">
            {/* Large rating display */}
            <div className="mb-6">
              <div className="font-display font-800 text-7xl sm:text-8xl text-ink mb-4">
                4.85<span className="text-3xl sm:text-4xl text-ink-tertiary">/5</span>
              </div>

              {/* 5 gold stars */}
              <div className="flex items-center justify-center gap-1.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={28}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-ink-secondary font-display font-600 text-lg mb-6">
                Based on G2 Reviews
              </p>
            </div>

            {/* CTA */}
            <div className="inline-flex items-center gap-3">
              <a
                href="https://www.g2.com/products/scrubby/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Leave a Review &amp; Get Free Credits
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   TESTIMONIALS GRID
   ═══════════════════════════════════════════════════════ */

function TestimonialsGridSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Quote size={12} />
            Testimonials
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Hear From Our{' '}
            <span className="text-gradient">Customers</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Real stories from real teams who transformed their email deliverability with Scrubby.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className="glass-card p-7 reveal group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-ink-secondary leading-relaxed font-body mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center border border-surface-border`}>
                  <span className="font-display font-700 text-xs text-ink">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-display font-700 text-sm text-ink">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-ink-tertiary font-display font-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider mt-24" />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   STATS SECTION
   ═══════════════════════════════════════════════════════ */

function StatsSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-green-bg mb-4">
                    <Icon size={22} className="text-brand-green-dark" />
                  </div>
                  <div className="font-display font-800 text-3xl sm:text-4xl text-ink mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm text-ink-tertiary font-display font-500">
                    {stat.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   CLIENT LOGOS MARQUEE
   ═══════════════════════════════════════════════════════ */

function LogoItem({ name, logo }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border border-surface-border shadow-card flex-shrink-0">
      <img
        src={`/logos/clients/${logo}.png`}
        alt={name}
        className="w-6 h-6 rounded object-contain"
      />
      <span className="text-sm font-display font-600 text-ink-secondary whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

function ClientLogosSection() {
  const allLogos = [...clientLogos, ...clientLogos]

  return (
    <section className="relative py-20 bg-surface-secondary">
      <div className="divider mb-20" />

      <div className="max-w-7xl mx-auto px-6 reveal">
        <div className="text-center mb-12">
          <p className="text-xs font-display font-600 text-ink-muted uppercase tracking-widest mb-2">
            Trusted by Leading Companies
          </p>
          <p className="text-sm text-ink-tertiary font-body">
            From high-growth startups to global enterprises
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-secondary to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-secondary to-transparent z-10" />
          <div className="marquee-track animate-marquee">
            {allLogos.map(({ name, logo }, i) => (
              <LogoItem key={`logo-${i}`} name={name} logo={logo} />
            ))}
          </div>
        </div>
      </div>

      <div className="divider mt-20" />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   CTA SECTION
   ═══════════════════════════════════════════════════════ */

function CtaSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="reveal">
          <div className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden" style={{ background: '#18181B' }}>
            {/* Grid background */}
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Decorative dots */}
            <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" />
            <div className="absolute top-12 right-16 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-16 left-20 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '0.5s' }} />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-6">
                <Zap size={12} />
                Get Started
              </div>

              <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Join 2,500+{' '}
                <span className="text-gradient-light">Happy Teams</span>
              </h2>

              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
                Start validating your email lists today with 100 free credits.
                No credit card required.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
                  Start Free
                  <ArrowRight size={18} />
                </a>
                <Link to="/pricing" className="btn-secondary-dark text-base px-8 py-4">
                  View Pricing
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-display font-500">
                <div className="flex items-center gap-1.5">
                  <Shield size={13} className="text-brand-green" />
                  GDPR Compliant
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={13} className="text-brand-green" />
                  2,500+ Customers
                </div>
                <div className="flex items-center gap-1.5">
                  <Star size={13} className="text-brand-green" />
                  4.85/5 on G2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   TESTIMONIALS PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function TestimonialsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <SEO
        title="Customer Testimonials"
        description="See what customers say about Scrubby. Rated 4.85/5 on G2 with 120+ reviews."
        path="/testimonials"
      />
      <HeroSection />
      <G2RatingSection />
      <TestimonialsGridSection />
      <StatsSection />
      <ClientLogosSection />
      <CtaSection />
    </main>
  )
}
