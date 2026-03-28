import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  Calendar, ArrowRight, Zap, Shield, Clock, Users,
  CheckCircle2, Monitor, Puzzle, Tag, MessageSquare,
  BarChart3, Send, ChevronDown, Star
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const benefits = [
  {
    icon: Monitor,
    title: 'Personalized walkthrough of the platform',
    description: 'See how Scrubby validates catch-all and risky emails with a live demonstration tailored to your use case.',
  },
  {
    icon: Puzzle,
    title: 'Learn how to integrate with your existing tools',
    description: 'We will show you how Scrubby connects with your CRM, outreach tools, and existing verification stack.',
  },
  {
    icon: Tag,
    title: 'Custom pricing for your volume needs',
    description: 'Get a pricing plan built around your actual email volume, with no hidden fees or surprises.',
  },
  {
    icon: MessageSquare,
    title: 'Q&A with our product experts',
    description: 'Ask anything about our technology, deliverability rates, data security, or compliance capabilities.',
  },
  {
    icon: BarChart3,
    title: 'See real results from companies like yours',
    description: 'We will walk you through case studies and benchmarks from teams in your industry and at your scale.',
  },
]

const companySizes = ['1-10', '11-50', '51-200', '201-1000', '1000+']
const emailVolumes = ['< 10K', '10K - 100K', '100K - 1M', '1M+']

const trustLogos = [
  { name: 'Revolut', logo: 'revolut' },
  { name: 'Oracle', logo: 'oracle' },
  { name: 'Gorgias', logo: 'gorgias' },
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
      <div className="absolute bottom-16 left-1/3 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="reveal">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-8">
            <Calendar size={12} />
            Book a Demo
          </div>

          {/* Heading */}
          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">See Scrubby </span>
            <span className="text-gradient-light">in Action</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-body">
            Schedule a personalized demo with our team to see how Scrubby can
            transform your email deliverability.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   DEMO FORM SECTION (SPLIT LAYOUT)
   ═══════════════════════════════════════════════════════ */

function DemoFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    companySize: '',
    emailVolume: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Visual-only form, no backend submission
  }

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left Side: Benefits ── */}
          <div className="reveal">
            <div className="badge mb-6">
              <Zap size={12} />
              Why Book a Demo
            </div>

            <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink mb-5">
              Everything you need to{' '}
              <span className="text-gradient">get started</span>
            </h2>

            <p className="text-ink-secondary text-base leading-relaxed font-body mb-10">
              In 30 minutes, our team will walk you through Scrubby&apos;s capabilities
              and show you exactly how it fits into your workflow.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-green-bg flex items-center justify-center flex-shrink-0 group-hover:shadow-green-glow transition-shadow duration-300">
                      <Icon size={20} className="text-brand-green-dark" />
                    </div>
                    <div>
                      <h3 className="font-display font-700 text-base text-ink mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── Right Side: Contact Form ── */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="card p-8 md:p-10">
              <h3 className="font-display font-700 text-xl text-ink mb-1">
                Schedule Your Demo
              </h3>
              <p className="text-sm text-ink-secondary font-body mb-8">
                Fill out the form below and we&apos;ll be in touch within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-display font-600 text-ink-secondary mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-display font-600 text-ink-secondary mb-1.5"
                  >
                    Work Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-display font-600 text-ink-secondary mb-1.5"
                  >
                    Company *
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="w-full px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                  />
                </div>

                {/* Company Size + Email Volume row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Company Size */}
                  <div>
                    <label
                      htmlFor="companySize"
                      className="block text-xs font-display font-600 text-ink-secondary mb-1.5"
                    >
                      Company Size
                    </label>
                    <div className="relative">
                      <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select size</option>
                        {companySizes.map((size) => (
                          <option key={size} value={size}>{size} employees</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none" />
                    </div>
                  </div>

                  {/* Monthly Email Volume */}
                  <div>
                    <label
                      htmlFor="emailVolume"
                      className="block text-xs font-display font-600 text-ink-secondary mb-1.5"
                    >
                      Monthly Email Volume
                    </label>
                    <div className="relative">
                      <select
                        id="emailVolume"
                        name="emailVolume"
                        value={formData.emailVolume}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select volume</option>
                        {emailVolumes.map((vol) => (
                          <option key={vol} value={vol}>{vol}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-display font-600 text-ink-secondary mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your email validation needs..."
                    className="w-full px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary w-full justify-center text-base py-3.5">
                  Book My Demo
                  <Send size={16} />
                </button>
              </form>

              <p className="text-[11px] text-ink-muted mt-4 text-center font-body">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-brand-green-dark underline hover:no-underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   TRUST SECTION
   ═══════════════════════════════════════════════════════ */

function TrustSection() {
  return (
    <section className="relative py-20 bg-surface-secondary">
      <div className="divider mb-20" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal">
          <div className="text-center mb-10">
            <p className="text-xs font-display font-600 text-ink-muted uppercase tracking-widest mb-2">
              Trusted by 2,500+ Companies
            </p>
          </div>

          {/* Client logos */}
          <div className="flex items-center justify-center gap-6 mb-10">
            {trustLogos.map(({ name, logo }) => (
              <div
                key={name}
                className="card px-5 py-3 flex items-center gap-2.5 hover:shadow-card-hover transition-all duration-300"
              >
                <img
                  src={`/logos/clients/${logo}.png`}
                  alt={name}
                  className="w-6 h-6 rounded object-contain"
                />
                <span className="text-sm font-display font-600 text-ink-secondary">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-green-bg flex items-center justify-center">
                <Clock size={16} className="text-brand-green-dark" />
              </div>
              <div>
                <p className="text-sm font-display font-700 text-ink">Response within 24 hours</p>
                <p className="text-xs text-ink-tertiary font-body">Our team will get back to you fast</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-surface-border" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-green-bg flex items-center justify-center">
                <Shield size={16} className="text-brand-green-dark" />
              </div>
              <div>
                <p className="text-sm font-display font-700 text-ink">No commitment required</p>
                <p className="text-xs text-ink-tertiary font-body">Explore freely with zero pressure</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-surface-border" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-green-bg flex items-center justify-center">
                <Star size={16} className="text-brand-green-dark" />
              </div>
              <div>
                <p className="text-sm font-display font-700 text-ink">4.85/5 on G2</p>
                <p className="text-xs text-ink-tertiary font-body">Rated by 2,500+ happy teams</p>
              </div>
            </div>
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
                Try It Now
              </div>

              <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Not Ready for a Demo?{' '}
                <span className="text-gradient-light">Try Scrubby Free</span>
              </h2>

              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
                Get 100 free credits and start validating emails instantly.
                No credit card required, no commitment needed.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
                  Start Free
                  <ArrowRight size={18} />
                </a>
                <Link to="/pricing" className="btn-secondary-dark text-base px-8 py-4">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   BOOK DEMO PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function BookDemoPage() {
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
        title="Book a Demo"
        description="Schedule a personalized demo to see how Scrubby can help you recover up to 42% more leads from your email lists."
        path="/book-demo"
      />
      <HeroSection />
      <DemoFormSection />
      <TrustSection />
      <CtaSection />
    </main>
  )
}
