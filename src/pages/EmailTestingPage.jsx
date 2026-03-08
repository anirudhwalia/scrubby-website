import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Zap, CheckCircle2, Shield, AlertTriangle,
  TestTube2, Target, Eye, BarChart3, Plug, Mail,
  ShieldCheck, XCircle, TrendingUp, Sparkles
} from 'lucide-react'
import SEO from '../components/SEO'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const benefitCards = [
  {
    icon: Target,
    iconBg: 'bg-brand-green-bg',
    iconColor: 'text-brand-green-dark',
    title: 'No More Blind Campaigns',
    description:
      'Transform your strategy from guesswork into data-driven results. Ensure every email maximizes engagement and reaches a real inbox.',
  },
  {
    icon: AlertTriangle,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    title: 'Identify Issues Early',
    description:
      'Catch-all emails can harm performance and trigger spam filters. Scrubby catches them before you send, saving your reputation.',
  },
  {
    icon: Shield,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    title: 'Protect Sender Reputation',
    description:
      'Consistent validation prevents damage and account suspensions from high bounce rates and spam complaints.',
  },
]

const howSteps = [
  {
    number: '01',
    icon: Mail,
    title: 'Submit Your Emails',
    description: 'Enter single emails or upload your full list. Use the API for automated testing in your workflow.',
  },
  {
    number: '02',
    icon: TestTube2,
    title: 'Deep Validation Testing',
    description: 'Scrubby runs multi-layer verification including syntax, domain, MX, and inbox-level deliverability checks.',
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'Get Detailed Results',
    description: 'Receive a clear verdict for every email: valid, risky, or invalid, with confidence scores and risk flags.',
  },
]

const testingChecks = [
  { label: 'Syntax & format validation', icon: CheckCircle2 },
  { label: 'Domain & MX record checks', icon: CheckCircle2 },
  { label: 'Catch-all domain detection', icon: CheckCircle2 },
  { label: 'Inbox-level deliverability', icon: CheckCircle2 },
  { label: 'Disposable email detection', icon: CheckCircle2 },
  { label: 'Role-based address filtering', icon: CheckCircle2 },
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
            <TestTube2 size={12} />
            Email Testing
          </div>

          {/* Heading */}
          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">Don&apos;t Leave Your Campaigns </span>
            <span className="text-gradient-light">to Chance</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
            Comprehensive email validation ensures you have the best shot at success.
            Test every email before you send.
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
   BENEFITS SECTION
   ═══════════════════════════════════════════════════════ */

function BenefitsSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Sparkles size={12} />
            Why Test Your Emails
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Send with{' '}
            <span className="text-gradient">confidence</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Every email you send without validation is a gamble. Scrubby removes the guesswork
            so every campaign performs at its best.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefitCards.map((card, i) => {
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
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   HOW IT WORKS SECTION
   ═══════════════════════════════════════════════════════ */

function HowItWorksSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Zap size={12} />
            How It Works
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Test every email in{' '}
            <span className="text-gradient">three steps</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Fast, accurate, and thorough. Scrubby validates emails at every level to ensure
            maximum deliverability.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {howSteps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative reveal"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Connector line (desktop) */}
                {i < howSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-brand-green/30 to-brand-green/10" />
                )}

                <div className="glass-card p-8 text-center h-full">
                  {/* Number */}
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-green/10 border border-brand-green/20 mb-5">
                    <span className="text-xs font-display font-700 text-brand-green">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-green-bg flex items-center justify-center mb-5">
                    <Icon size={24} className="text-brand-green-dark" />
                  </div>

                  <h3 className="font-display font-700 text-lg text-ink mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* What we check */}
        <div className="max-w-3xl mx-auto reveal">
          <div className="glass-card p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="w-12 h-12 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-4">
                <ShieldCheck size={22} className="text-brand-green-dark" />
              </div>
              <h3 className="font-display font-700 text-xl text-ink mb-2">
                Comprehensive validation checks
              </h3>
              <p className="text-sm text-ink-tertiary font-body">
                Every email goes through multiple layers of verification.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {testingChecks.map((check) => {
                const Icon = check.icon
                return (
                  <div key={check.label} className="flex items-center gap-3 p-3 rounded-xl bg-surface-secondary">
                    <Icon size={16} className="text-brand-green flex-shrink-0" />
                    <span className="text-sm font-display font-500 text-ink-secondary">
                      {check.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   INTEGRATION SECTION
   ═══════════════════════════════════════════════════════ */

function IntegrationSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal">
          <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Plug size={20} className="text-brand-green-dark" />
              <h3 className="font-display font-700 text-xl text-ink">
                Works with your existing tech stack
              </h3>
            </div>
            <p className="text-sm text-ink-tertiary leading-relaxed font-body mb-6 max-w-lg mx-auto">
              Run alongside Apollo, ZoomInfo, and all major platforms. Scrubby integrates
              seamlessly into your workflow so you can test emails without disrupting your process.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {['Apollo', 'ZoomInfo', 'HubSpot', 'Clay', 'Instantly', 'SmartLead', 'Zapier'].map((tool) => (
                <span key={tool} className="badge text-[10px] py-0.5 px-2.5">
                  {tool}
                </span>
              ))}
            </div>
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
            <TestTube2 size={12} />
            Start Testing
          </div>

          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
            Start Testing{' '}
            <span className="text-gradient-light">Your Emails</span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-10 font-body">
            Do not leave your campaigns to chance. Validate every email before you hit
            send and watch your deliverability soar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
              Start Testing
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
              98% Accuracy
            </div>
            <div className="flex items-center gap-1.5">
              <Zap size={13} className="text-brand-green" />
              Instant Results
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   EMAIL TESTING PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function EmailTestingPage() {
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
        title="Email Testing"
        description="Test your email deliverability before sending. Check spam scores, authentication, and inbox placement."
        path="/email-testing"
      />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <IntegrationSection />
      <CtaSection />
    </main>
  )
}
