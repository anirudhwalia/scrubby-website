import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Zap, CheckCircle2, Shield, AlertTriangle,
  Target, Users, Plug, Search, XCircle, TrendingUp,
  Sparkles, ArrowDownRight, ArrowRightCircle
} from 'lucide-react'
import SEO from '../components/SEO'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const featureCards = [
  {
    icon: Target,
    iconBg: 'bg-brand-green-bg',
    iconColor: 'text-brand-green-dark',
    title: "Don't Miss Valuable Leads",
    description:
      'Expand your reach with leads you might otherwise discard. Risky emails often belong to high-value decision makers at enterprise companies using catch-all domains.',
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    title: 'From Rejection to Discovery',
    description:
      'Stop discarding risky emails. Harness them for 2x more effective campaigns. What other tools reject, Scrubby validates and delivers.',
  },
  {
    icon: Plug,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    title: 'Seamless Stack Integration',
    description:
      'Complements Apollo, ZoomInfo, and all major data providers. Just add Scrubby as an extra verification layer to your existing workflow.',
  },
]

const flowSteps = [
  { label: 'Your Email List', sublabel: '10,000 emails', icon: Users, color: 'text-ink-secondary', bg: 'bg-surface-secondary' },
  { label: 'Standard Tool', sublabel: '4,200 marked risky', icon: AlertTriangle, color: 'text-amber-500', bg: 'bg-amber-50' },
  { label: 'Scrubby Validates', sublabel: 'Deep verification', icon: Search, color: 'text-brand-green-dark', bg: 'bg-brand-green-bg', highlight: true },
  { label: '3,500 Deliverable', sublabel: 'Recovered leads', icon: CheckCircle2, color: 'text-brand-green', bg: 'bg-brand-green-bg' },
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
            <Search size={12} />
            Risky Email Finder
          </div>

          {/* Heading */}
          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">Expand Your Reach by Validating </span>
            <span className="text-gradient-light">Your Full Email List</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
            Unlock untapped revenue and missed opportunities. Risky emails can be
            your most valuable ones.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
              Get Started Today
              <ArrowRight size={18} />
            </a>
            <Link to="/pricing" className="btn-secondary-dark text-base px-8 py-4">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   KEY BENEFIT / FEATURE SPOTLIGHT
   ═══════════════════════════════════════════════════════ */

function FeatureSpotlightSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Sparkles size={12} />
            The Scrubby Difference
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            What others call risky,{' '}
            <span className="text-gradient">we call opportunity</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Most email finder tools uncover hidden addresses, but they cannot verify
            catch-all emails. Scrubby can.
          </p>
        </div>

        {/* Visual Flow */}
        <div className="reveal max-w-4xl mx-auto mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {flowSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.label} className="relative">
                  <div
                    className={`glass-card p-6 text-center ${
                      step.highlight ? 'ring-2 ring-brand-green shadow-green-glow' : ''
                    }`}
                  >
                    <div className={`w-12 h-12 mx-auto rounded-xl ${step.bg} flex items-center justify-center mb-4`}>
                      <Icon size={22} className={step.color} />
                    </div>
                    <h3 className="font-display font-700 text-sm text-ink mb-1">
                      {step.label}
                    </h3>
                    <p className="text-xs text-ink-tertiary font-body">
                      {step.sublabel}
                    </p>
                  </div>

                  {/* Arrow connector (desktop) */}
                  {i < flowSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <ArrowRight size={16} className="text-ink-muted" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Before/After callout */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="glass-card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                <XCircle size={18} className="text-red-400" />
              </div>
              <div>
                <h4 className="font-display font-600 text-sm text-ink mb-1">Without Scrubby</h4>
                <p className="text-xs text-ink-tertiary font-body leading-relaxed">
                  42% of your list is marked as risky or unknown. You discard them and miss potential revenue.
                </p>
              </div>
            </div>
            <div className="glass-card p-5 flex items-start gap-4 ring-1 ring-brand-green/20">
              <div className="w-10 h-10 rounded-xl bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={18} className="text-brand-green-dark" />
              </div>
              <div>
                <h4 className="font-display font-600 text-sm text-ink mb-1">With Scrubby</h4>
                <p className="text-xs text-ink-tertiary font-body leading-relaxed">
                  Scrubby validates those risky emails and recovers up to 83% of them as deliverable, usable leads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   FEATURE CARDS SECTION
   ═══════════════════════════════════════════════════════ */

function FeatureCardsSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Zap size={12} />
            Features
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Why teams choose{' '}
            <span className="text-gradient">Scrubby</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Turn your risky emails into validated leads and unlock revenue you never knew existed.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {featureCards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="glass-card p-8 reveal group"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
                  <Icon size={24} className={card.iconColor} />
                </div>
                <h3 className="font-display font-700 text-lg text-ink mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Integration mention */}
        <div className="mt-16 text-center reveal">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Plug size={20} className="text-brand-green-dark" />
              <h3 className="font-display font-700 text-lg text-ink">
                Fits right into your workflow
              </h3>
            </div>
            <p className="text-sm text-ink-tertiary leading-relaxed font-body mb-6">
              Scrubby works alongside your existing email verification and outreach tools.
              Add it as an extra layer to validate what others cannot.
            </p>
            <Link to="/integrations" className="btn-secondary text-sm">
              View All Integrations
              <ArrowRight size={14} />
            </Link>
          </div>
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

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-6">
            <Zap size={12} />
            Unlock Your Leads
          </div>

          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
            Unlock Your Full{' '}
            <span className="text-gradient-light">List Potential</span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-10 font-body">
            Stop leaving money on the table. Validate your risky emails and recover
            leads that other tools would throw away.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
              Get Started Today
              <ArrowRight size={18} />
            </a>
            <Link to="/pricing" className="btn-secondary-dark text-base px-8 py-4">
              View Pricing
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-slate-400 font-display font-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-brand-green" />
              100 Free Credits
            </div>
            <div className="flex items-center gap-1.5">
              <Shield size={13} className="text-brand-green" />
              98% Deliverability
            </div>
            <div className="flex items-center gap-1.5">
              <TrendingUp size={13} className="text-brand-green" />
              42% More Usable Emails
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   RISKY EMAIL FINDER PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function RiskyEmailFinderPage() {
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
        title="Risky Email Finder"
        description="Find and validate risky catch-all emails that other tools can't verify. Recover more leads with 98.7% accuracy."
        path="/risky-email-finder"
      />
      <HeroSection />
      <FeatureSpotlightSection />
      <FeatureCardsSection />
      <CtaSection />
    </main>
  )
}
