import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  Shield, Users, TrendingUp, ArrowRight, Zap, Building2,
  Clock, UserCheck, Tag, Palette, CheckCircle2, Star,
  AlertTriangle, XCircle, ChevronRight
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const heroStats = [
  { value: '42%', label: 'Avg Risky Emails in Lists', icon: AlertTriangle },
  { value: '98%', label: 'Deliverability Rate', icon: CheckCircle2 },
  { value: '2,500+', label: 'Happy Customers', icon: Users },
]

const painPoints = [
  {
    icon: XCircle,
    iconColor: 'text-red-400',
    iconBg: 'bg-red-50',
    title: 'High Bounce Rates',
    problem: 'Your emails are bouncing because catch-all and risky addresses slip through standard verification tools, damaging your sender reputation.',
    solution: 'Scrubby validates every risky email with real inbox-level checks, reducing bounce rates by up to 85% and protecting your domain health.',
    solutionIcon: Shield,
  },
  {
    icon: AlertTriangle,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50',
    title: 'Unknown Emails',
    problem: 'Other verification tools return 40% of your list as "unknown" or "risky" leaving you guessing which leads are actually valid.',
    solution: 'Scrubby resolves those unknowns into definitive valid or invalid results, recovering up to 30% more usable leads from every list.',
    solutionIcon: CheckCircle2,
  },
  {
    icon: TrendingUp,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
    title: 'Data Gaps',
    problem: 'Incomplete contact data means missed opportunities. Without enrichment you are sending blind and your outreach falls flat.',
    solution: 'Scrubby enriches validated contacts with job titles, company data, and LinkedIn profiles so every lead comes with actionable context.',
    solutionIcon: Star,
  },
]

const clientLogos = [
  { name: 'Gorgias', logo: 'gorgias' },
  { name: 'OakNorth', logo: 'oaknorth' },
  { name: 'Trilogy', logo: 'trilogy' },
  { name: 'Wellspring', logo: 'wellspring' },
  { name: 'Stensul', logo: 'stensul' },
  { name: 'Fiddler.ai', logo: 'fiddler' },
  { name: 'XoXoday', logo: 'xoxoday' },
  { name: 'Samsara', logo: 'samsara' },
  { name: 'Revolut', logo: 'revolut' },
  { name: 'Oracle', logo: 'oracle' },
  { name: 'IBM', logo: 'ibm' },
]

const enterpriseFeatures = [
  {
    icon: Clock,
    title: 'Custom SLAs & Uptime Guarantee',
    description: 'Get contractual uptime guarantees with 99.99% availability SLAs, priority queue processing, and dedicated infrastructure for mission-critical validation workflows.',
    highlights: ['99.99% uptime SLA', 'Priority processing queue', 'Incident response guarantees'],
  },
  {
    icon: UserCheck,
    title: 'Dedicated Account Manager',
    description: 'Your own success manager who understands your business, provides strategic guidance, and ensures you get maximum value from the platform.',
    highlights: ['Personalized onboarding', 'Quarterly business reviews', '24/7 priority support'],
  },
  {
    icon: Tag,
    title: 'Volume Pricing & Discounts',
    description: 'Custom pricing that scales with your needs. Starting from just 1 cent per credit for high-volume teams, with flexible billing and no hidden fees.',
    highlights: ['Starting from 1\u00A2/credit', 'Flexible billing cycles', 'No hidden fees'],
  },
  {
    icon: Palette,
    title: 'White-Label Solutions',
    description: 'Offer Scrubby\'s validation technology under your own brand. Perfect for agencies and SaaS platforms that want to embed email validation into their product.',
    highlights: ['Custom branding', 'Embeddable widgets', 'Full API white-labeling'],
  },
]

/* ═══════════════════════════════════════════════════════
   UTILITY: ANIMATED COUNTER
   ═══════════════════════════════════════════════════════ */

function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const start = performance.now()
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

/* ═══════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden" style={{ background: '#18181B' }}>
      {/* Background effects */}
      <div
        className="absolute w-[600px] h-[600px] -top-40 -left-40 rounded-full blur-3xl animate-pulse opacity-60"
        style={{ background: 'rgba(45, 206, 142, 0.08)' }}
      />
      <div
        className="absolute w-[400px] h-[400px] top-20 right-0 rounded-full blur-3xl animate-pulse"
        style={{ background: 'rgba(45, 206, 142, 0.05)', animationDelay: '2s' }}
      />
      <div
        className="absolute w-[300px] h-[300px] bottom-0 left-1/3 rounded-full blur-3xl animate-pulse"
        style={{ background: 'rgba(245, 166, 35, 0.04)', animationDelay: '3s' }}
      />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="reveal">
          {/* Tag */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-8">
            <Building2 size={12} />
            Enterprise Solutions
          </div>

          {/* Heading */}
          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">Email Validation at </span>
            <span className="text-gradient-light">Enterprise Scale</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
            Built for high-volume sales teams, lead gen agencies, and data-driven companies
            with custom validation needs. Unlock every lead in your pipeline with 98% deliverability.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Contact Sales
              <ArrowRight size={18} />
            </Link>
            <Link to="/pricing" className="btn-secondary-dark text-base px-8 py-4">
              View Pricing
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {heroStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/20 mb-3">
                    <Icon size={18} className="text-brand-green" />
                  </div>
                  <div className="font-display font-800 text-3xl sm:text-4xl text-white mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm text-slate-400 font-display font-500">
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
   PAIN POINTS SECTION
   ═══════════════════════════════════════════════════════ */

function PainPointsSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Shield size={12} />
            Enterprise Challenges
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Why Enterprise Teams{' '}
            <span className="text-gradient">Choose Scrubby</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Every enterprise faces the same email data challenges. Here is how Scrubby
            solves each one with precision and scale.
          </p>
        </div>

        {/* Pain Point Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {painPoints.map((point, i) => {
            const ProblemIcon = point.icon
            const SolutionIcon = point.solutionIcon
            return (
              <div
                key={point.title}
                className="card p-0 overflow-hidden reveal group"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Problem */}
                <div className="p-7 pb-5">
                  <div className={`w-12 h-12 rounded-xl ${point.iconBg} flex items-center justify-center mb-5`}>
                    <ProblemIcon size={22} className={point.iconColor} />
                  </div>
                  <h3 className="font-display font-700 text-lg text-ink mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                    {point.problem}
                  </p>
                </div>

                {/* Divider */}
                <div className="mx-7">
                  <div className="h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
                </div>

                {/* Solution */}
                <div className="p-7 pt-5 bg-brand-green/[0.02]">
                  <div className="flex items-center gap-2 mb-3">
                    <SolutionIcon size={14} className="text-brand-green" />
                    <span className="text-xs font-display font-600 text-brand-green-dark uppercase tracking-wider">
                      Scrubby Solution
                    </span>
                  </div>
                  <p className="text-sm text-ink-secondary leading-relaxed font-body">
                    {point.solution}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   CLIENT LOGOS SECTION
   ═══════════════════════════════════════════════════════ */

function ClientLogosSection() {
  return (
    <section className="relative py-16 bg-surface-secondary">
      <div className="divider mb-16" />

      <div className="max-w-6xl mx-auto px-6 reveal">
        <div className="text-center mb-12">
          <p className="text-xs font-display font-600 text-ink-muted uppercase tracking-widest mb-2">
            Trusted by Leading Companies
          </p>
          <p className="text-sm text-ink-tertiary font-body">
            From high-growth startups to global enterprises
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {clientLogos.map(({ name, logo }) => (
            <div
              key={name}
              className="card px-5 py-4 flex items-center justify-center gap-2.5 hover:shadow-card-hover transition-all duration-300 group"
            >
              <img
                src={`/logos/clients/${logo}.png`}
                alt={name}
                className="w-6 h-6 rounded object-contain"
              />
              <span className="text-sm font-display font-600 text-ink-secondary group-hover:text-ink transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="divider mt-16" />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   FEATURES GRID SECTION
   ═══════════════════════════════════════════════════════ */

function FeaturesGridSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Zap size={12} />
            Enterprise Features
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Everything you need to{' '}
            <span className="text-gradient">scale with confidence</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Enterprise-grade infrastructure, dedicated support, and flexible solutions
            designed for teams that process millions of emails.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {enterpriseFeatures.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="card p-8 reveal group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-green-bg flex items-center justify-center flex-shrink-0 group-hover:shadow-green-glow transition-shadow duration-300">
                    <Icon size={24} className="text-brand-green-dark" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-700 text-lg text-ink mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-ink-tertiary leading-relaxed font-body mb-4">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-brand-green flex-shrink-0" />
                          <span className="text-xs font-display font-500 text-ink-secondary">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   CTA / CONTACT FORM SECTION
   ═══════════════════════════════════════════════════════ */

function CtaFormSection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: '#18181B' }}>
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute w-[500px] h-[500px] -bottom-40 -right-40 rounded-full blur-3xl animate-pulse"
        style={{ background: 'rgba(45, 206, 142, 0.06)' }}
      />
      <div
        className="absolute w-[400px] h-[400px] -top-20 -left-20 rounded-full blur-3xl animate-pulse"
        style={{ background: 'rgba(45, 206, 142, 0.04)', animationDelay: '2s' }}
      />

      {/* Decorative dots */}
      <div className="absolute top-12 left-12 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" />
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-12 right-12 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '0.5s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left -- Content */}
          <div className="reveal">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-6">
              <Zap size={12} />
              Get Started
            </div>

            <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
              Ready to{' '}
              <span className="text-gradient-light">Scale?</span>
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 font-body">
              Tell us about your validation needs and our enterprise team will create
              a custom plan tailored to your volume, integrations, and compliance requirements.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 text-xs text-slate-400 font-display font-500">
              <div className="flex items-center gap-1.5">
                <Shield size={13} className="text-brand-green" />
                GDPR Compliant
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={13} className="text-brand-green" />
                24h Response Time
              </div>
              <div className="flex items-center gap-1.5">
                <UserCheck size={13} className="text-brand-green" />
                Dedicated Support
              </div>
            </div>
          </div>

          {/* Right -- Contact Form (visual only) */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="font-display font-700 text-lg text-white mb-6">
                Contact our Enterprise Team
              </h3>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-display font-500 text-slate-400 mb-1.5">
                    Full Name
                  </label>
                  <div className="w-full px-4 py-3 rounded-xl text-sm font-body text-slate-500 cursor-not-allowed" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    John Smith
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-display font-500 text-slate-400 mb-1.5">
                    Work Email
                  </label>
                  <div className="w-full px-4 py-3 rounded-xl text-sm font-body text-slate-500 cursor-not-allowed" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    john@company.com
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs font-display font-500 text-slate-400 mb-1.5">
                    Company
                  </label>
                  <div className="w-full px-4 py-3 rounded-xl text-sm font-body text-slate-500 cursor-not-allowed" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    Acme Inc.
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-display font-500 text-slate-400 mb-1.5">
                    How can we help?
                  </label>
                  <div className="w-full px-4 py-3 rounded-xl text-sm font-body text-slate-500 h-24 cursor-not-allowed" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    Tell us about your email validation needs...
                  </div>
                </div>

                {/* Submit */}
                <Link to="/contact" className="btn-primary w-full justify-center text-base py-3.5 mt-2">
                  Contact Sales
                  <ArrowRight size={16} />
                </Link>
              </div>

              <p className="text-[11px] text-slate-500 mt-4 text-center font-body">
                Typically responds within 24 hours. No commitment required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   ENTERPRISE PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function EnterprisePage() {
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
        title="Enterprise Email Validation"
        description="Enterprise-grade email validation for high-volume teams. Custom pricing, dedicated support, SLA guarantees, and advanced API access."
        path="/enterprise"
      />
      <HeroSection />
      <PainPointsSection />
      <ClientLogosSection />
      <FeaturesGridSection />
      <CtaFormSection />
    </main>
  )
}
