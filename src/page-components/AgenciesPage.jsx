import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  Users, ShieldCheck, Zap, TrendingUp, AlertTriangle, ShieldOff,
  Target, ArrowRight, Star, CheckCircle2, Building2, ChevronRight,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const heroStats = [
  { value: '98%', label: 'Accuracy', icon: ShieldCheck },
  { value: '42%', label: 'More Leads', icon: TrendingUp },
  { value: '2x', label: 'Campaign ROI', icon: Zap },
]

const painPoints = [
  {
    icon: AlertTriangle,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50',
    title: 'Wasted Leads',
    description:
      'Most verification tools mark catch-all emails as risky, forcing agencies to discard up to 42% of their list — that is untapped revenue left on the table.',
  },
  {
    icon: ShieldOff,
    iconColor: 'text-red-400',
    iconBg: 'bg-red-50',
    title: 'Domain Reputation Risk',
    description:
      'Sending to unvalidated risky emails burns domains and triggers account shutdowns, costing you time, money, and client trust.',
  },
  {
    icon: Target,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
    title: 'Client Expectations',
    description:
      'Your clients expect maximum deliverability and ROI from every campaign you manage. Falling short means lost accounts.',
  },
]

const features = [
  {
    icon: TrendingUp,
    title: 'Recover Lost Revenue',
    description:
      'Stop throwing away catch-all emails. Validate them and add up to 42% more deliverable leads to every campaign.',
    highlights: ['Validate catch-all emails', 'Recover up to 42% more leads', 'Boost campaign performance'],
  },
  {
    icon: ShieldCheck,
    title: 'Protect Client Domains',
    description:
      'Ensure every email you send meets deliverability standards. Keep client sender scores pristine and avoid account shutdowns.',
    highlights: ['Maintain sender reputation', 'Prevent bounces', 'Safeguard client accounts'],
  },
  {
    icon: Zap,
    title: 'Scale Without Limits',
    description:
      'Unlimited plans available for agencies. Handle any volume for any number of clients without worrying about caps.',
    highlights: ['Unlimited validation plans', 'Multi-client support', 'No volume restrictions'],
  },
  {
    icon: Building2,
    title: 'Stack Compatible',
    description:
      'Works with Apollo, ZoomInfo, Clay, and all major email tools your agency already uses. No workflow disruption.',
    highlights: ['Apollo & ZoomInfo', 'Clay & Instantly', 'API & CSV support'],
  },
]

const testimonials = [
  {
    name: 'Koa M.',
    role: 'Head of Growth',
    company: 'Leadbird',
    text: 'Verifying all our emails at scale is something that separates Scrubby from the rest of the validation tool pack.',
    rating: 5,
    initials: 'KM',
    color: 'from-brand-green/20 to-brand-green/5',
  },
  {
    name: 'Shane W.',
    role: 'CEO',
    company: 'LinkedHacker',
    text: "We've been working with Scrubby for some time now and we're very happy with their service.",
    rating: 5,
    initials: 'SW',
    color: 'from-amber-400/20 to-amber-400/5',
  },
  {
    name: 'Blaise G.',
    role: 'VP of Sales',
    company: 'Neptik',
    text: "Scrubby is the only email validation software that doesn't give you 'unknown' emails.",
    rating: 5,
    initials: 'BG',
    color: 'from-blue-400/20 to-blue-400/5',
  },
]

const agencyClientLogos = [
  { name: 'BetterContact', logo: 'bettercontact' },
  { name: 'Leadbird', logo: 'leadbird' },
  { name: 'Pitchlane', logo: 'pitchlane' },
]

const workflowSteps = [
  { label: 'Agency Workflow', sub: 'Upload risky lists', icon: Users },
  { label: 'Scrubby', sub: 'Validate catch-alls', icon: ShieldCheck },
  { label: 'Validated Lists', sub: '98% deliverability', icon: CheckCircle2 },
  { label: 'Client Campaigns', sub: 'Maximum ROI', icon: Target },
]

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
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-8">
            <Users size={12} />
            Built for Agencies
          </div>

          {/* Heading */}
          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">Maximize Campaign Performance </span>
            <span className="text-gradient-light">for Your Clients</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
            Agency success depends on efficiency and effectiveness. Scrubby verifies
            risky emails at scale to maximize results for your clients and grow your business.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link to="/signup" className="btn-primary text-base px-8 py-4">
              Try Free (100 emails)
              <ArrowRight size={18} />
            </Link>
            <Link to="/demo" className="btn-secondary-dark text-base px-8 py-4">
              Book a Demo
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
            <AlertTriangle size={12} />
            Agency Challenges
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Challenges agencies{' '}
            <span className="text-gradient">face daily</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Traditional email verification leaves agencies guessing, wasting leads, and risking
            client domains. There is a better way.
          </p>
        </div>

        {/* Pain Point Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {painPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="glass-card p-8 reveal group"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className={`w-12 h-12 rounded-xl ${point.iconBg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                  <Icon size={22} className={point.iconColor} />
                </div>
                <h3 className="font-display font-700 text-lg text-ink mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   SOLUTION / WORKFLOW SECTION
   ═══════════════════════════════════════════════════════ */

function SolutionSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Zap size={12} />
            How It Works
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Effortless{' '}
            <span className="text-gradient">Client Fulfillment</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            A user-friendly platform for swift filtering to discover viable leads and
            untapped revenue. Validate, deliver, and impress.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="reveal max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-7 gap-0 items-center">
            {workflowSteps.map((step, i) => {
              const StepIcon = step.icon
              return (
                <div key={step.label} className="contents">
                  <div className="sm:col-span-1">
                    <div className={`card p-6 text-center ${i === 1 ? 'border-brand-green/30 bg-brand-green/[0.02] shadow-[0_0_24px_rgba(45,206,142,0.08)]' : ''}`}>
                      <div
                        className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                          i === 1 ? 'bg-brand-green-bg' : 'bg-surface-secondary'
                        }`}
                      >
                        <StepIcon size={20} className={i === 1 ? 'text-brand-green-dark' : i === 2 ? 'text-brand-green' : 'text-ink-secondary'} />
                      </div>
                      <h4 className="font-display font-700 text-sm text-ink mb-1">
                        {step.label}
                      </h4>
                      <p className="text-xs text-ink-tertiary font-body">
                        {step.sub}
                      </p>
                    </div>
                  </div>
                  {/* Arrow between steps */}
                  {i < workflowSteps.length - 1 && (
                    <div className="hidden sm:flex sm:col-span-1 items-center justify-center text-ink-muted/40">
                      <ChevronRight size={20} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="divider mt-24" />
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
            <ShieldCheck size={12} />
            Agency Features
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Everything your agency needs to{' '}
            <span className="text-gradient">deliver results</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Purpose-built features that help agencies recover more leads, protect client
            domains, and scale operations effortlessly.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => {
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
   TESTIMONIALS SECTION
   ═══════════════════════════════════════════════════════ */

function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="badge mx-auto mb-5">
            <Star size={12} />
            Testimonials
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-4">
            Trusted by agencies{' '}
            <span className="text-gradient">worldwide</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-xl mx-auto font-body">
            See why leading agencies choose Scrubby for their email validation needs.
          </p>
        </div>

        {/* G2 Badge */}
        <div className="flex justify-center mb-10 reveal">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-surface-border shadow-sm">
            <div className="flex -space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-display font-600 text-ink">5/5</span>
            <span className="text-xs text-ink-tertiary font-body">on G2</span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="card p-7 reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={13} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-ink-secondary leading-relaxed font-body mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-surface-border/60">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center`}>
                  <span className="text-xs font-display font-700 text-ink">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-display font-600 text-ink">{t.name}</p>
                  <p className="text-xs text-ink-tertiary font-body">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Client Logos */}
        <div className="reveal">
          <p className="text-center text-xs font-display font-600 text-ink-muted uppercase tracking-widest mb-6">
            Trusted by Leading Agencies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {agencyClientLogos.map(({ name, logo }) => (
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
      </div>

      <div className="divider mt-24" />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   PRICING TEASER SECTION
   ═══════════════════════════════════════════════════════ */

function PricingTeaserSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <div className="badge mx-auto mb-5">
            <Zap size={12} />
            Pricing
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Exclusive{' '}
            <span className="text-gradient">Agency Plans</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-xl mx-auto font-body">
            Flexible pricing designed to grow with your agency.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 reveal">
          {/* Free Tier */}
          <div className="card p-7 text-center">
            <div className="w-12 h-12 rounded-xl bg-surface-secondary flex items-center justify-center mx-auto mb-4">
              <Users size={20} className="text-ink-secondary" />
            </div>
            <h3 className="font-display font-700 text-lg text-ink mb-2">Free Tier</h3>
            <p className="font-display font-800 text-3xl text-ink mb-1">
              100
              <span className="text-base font-600 text-ink-tertiary ml-1">emails</span>
            </p>
            <p className="text-xs text-ink-tertiary font-body">
              Perfect for testing the platform
            </p>
          </div>

          {/* Monthly Plans */}
          <div className="card p-7 text-center border-brand-green/30 bg-brand-green/[0.02] shadow-[0_0_24px_rgba(45,206,142,0.06)]">
            <div className="w-12 h-12 rounded-xl bg-brand-green-bg flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={20} className="text-brand-green-dark" />
            </div>
            <h3 className="font-display font-700 text-lg text-ink mb-2">Monthly Plans</h3>
            <p className="font-display font-800 text-3xl text-ink mb-1">
              $27
              <span className="text-base font-600 text-ink-tertiary ml-1">/mo</span>
            </p>
            <p className="text-xs text-ink-tertiary font-body">
              Starting price for growing agencies
            </p>
          </div>

          {/* Unlimited */}
          <div className="card p-7 text-center">
            <div className="w-12 h-12 rounded-xl bg-surface-secondary flex items-center justify-center mx-auto mb-4">
              <Zap size={20} className="text-ink-secondary" />
            </div>
            <h3 className="font-display font-700 text-lg text-ink mb-2">Unlimited</h3>
            <p className="font-display font-800 text-3xl text-ink mb-1">
              Custom
            </p>
            <p className="text-xs text-ink-tertiary font-body">
              For qualifying agencies at scale
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 reveal">
          <Link to="/pricing" className="btn-secondary">
            View Pricing
            <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn-primary">
            Apply for Unlimited
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   CTA SECTION
   ═══════════════════════════════════════════════════════ */

function CtaSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="divider mb-24" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="reveal">
          <div className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden" style={{ background: '#18181B' }}>
            {/* Grid background */}
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Decorative glowing dots */}
            <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" />
            <div className="absolute top-12 right-16 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-16 left-20 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '0.5s' }} />

            <div className="relative z-10">

              <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Ready to Supercharge{' '}
                <span className="text-gradient-light">Your Agency?</span>
              </h2>

              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
                Join 2,500+ agencies using Scrubby to deliver better results.
                Start with 100 free email credits today.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <Link to="/signup" className="btn-primary text-base px-8 py-4">
                  Get Started Free
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-secondary-dark text-base px-8 py-4">
                  Contact Sales
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-display font-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-brand-green" />
                  98% Deliverability
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={13} className="text-brand-green" />
                  2,500+ Agencies
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap size={13} className="text-brand-green" />
                  Free Trial
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
   AGENCIES PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function AgenciesPage() {
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
        title="For Agencies"
        description="Scrubby helps agencies validate risky emails at scale. White-label options, bulk pricing, and dedicated support for agency teams."
        path="/agencies"
      />
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <FeaturesGridSection />
      <TestimonialsSection />
      <PricingTeaserSection />
      <CtaSection />
    </main>
  )
}
