import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Zap, CheckCircle2, Shield, TrendingUp,
  AlertTriangle, Search, XCircle, Target, Mail,
  Server, Eye, ArrowDownRight, Plug, BarChart3, Sparkles
} from 'lucide-react'
import SEO from '../components/SEO'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const riskyTypes = [
  {
    icon: Server,
    title: 'Catch-All Domains',
    description: 'Domains configured to accept any email address, whether or not a specific mailbox exists. Standard SMTP checks return a positive result for every address, making it impossible to distinguish valid from invalid.',
  },
  {
    icon: AlertTriangle,
    title: 'Accept-All Addresses',
    description: 'Similar to catch-all, these servers accept all incoming emails without rejection. They produce false positives during verification, leaving you with unresolved data.',
  },
  {
    icon: Search,
    title: 'Unknown Status Emails',
    description: 'Addresses that verification tools cannot conclusively classify. The server may be temporarily unavailable, rate-limited, or using anti-verification measures.',
  },
  {
    icon: Eye,
    title: 'Low-Confidence Results',
    description: 'Emails returned with a low confidence score by verification providers. These fall into a gray area where the tool suspects validity but cannot confirm it.',
  },
]

const whyToolsFail = [
  {
    step: '01',
    title: 'SMTP Handshake Limitation',
    description: 'Standard tools connect to the mail server and ask if an address exists. Catch-all servers always say yes, regardless of whether the mailbox is real.',
  },
  {
    step: '02',
    title: 'No Actual Delivery Test',
    description: 'Traditional verification never sends a real email. It relies on server responses that can be misleading, especially with catch-all and greylisting configurations.',
  },
  {
    step: '03',
    title: 'Result: Unresolved Data',
    description: 'The tool marks these addresses as risky, unknown, or unverifiable. You are left to guess whether to include or exclude them from your campaigns.',
  },
]

const howScrubbyWorks = [
  {
    step: '01',
    icon: ArrowDownRight,
    title: 'Import Risky Emails',
    description: 'Upload the risky segment from your existing verification tool via CSV or connect through our API. Only the risky emails need processing.',
  },
  {
    step: '02',
    icon: Mail,
    title: 'Blank Email Testing',
    description: 'Scrubby sends carefully crafted blank test emails to each address. This is the only way to definitively determine if a catch-all mailbox actually exists and accepts delivery.',
  },
  {
    step: '03',
    icon: Search,
    title: 'Bounce Analysis',
    description: 'We monitor server responses and bounce-back patterns over 2-3 days. Hard bounces indicate invalid addresses. Successful deliveries confirm the mailbox is real and active.',
  },
  {
    step: '04',
    icon: CheckCircle2,
    title: 'Definitive Results',
    description: 'Each email receives a clear valid or invalid classification. No more risky, no more unknown. Just actionable data you can confidently use in your campaigns.',
  },
]

const resultStats = [
  { value: '98.7%', label: 'Accuracy Rate', icon: Target },
  { value: '83%', label: 'Risky Emails Recovered', icon: TrendingUp },
  { value: '<2%', label: 'Post-Validation Bounce Rate', icon: BarChart3 },
]

const integrations = [
  'ZeroBounce', 'NeverBounce', 'BriteVerify', 'MillionVerifier', 'DeBounce', 'Bouncer',
  'Kickbox', 'EmailListVerify', 'Clearout', 'Emailable',
]

/* ═══════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden" style={{ background: '#18181B' }}>
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
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-8">
            <Shield size={12} />
            Risky Email Validation
          </div>

          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">Stop Discarding Your </span>
            <span className="text-gradient-light">Most Valuable Leads</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
            Up to 42% of your email list is marked risky by standard tools. Scrubby validates
            these addresses with real delivery tests and recovers leads that would otherwise be lost.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
              Start Validating
              <ArrowRight size={18} />
            </a>
            <Link to="/how-it-works" className="btn-secondary-dark text-base px-8 py-4">
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   WHAT ARE RISKY EMAILS SECTION
   ═══════════════════════════════════════════════════════ */

function WhatAreRiskySection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <AlertTriangle size={12} />
            What Are Risky Emails
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            The emails others{' '}
            <span className="text-gradient">cannot verify</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Risky emails are addresses that standard verification tools cannot definitively
            classify as valid or invalid. Here are the most common types.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {riskyTypes.map((type, i) => {
            const Icon = type.icon
            return (
              <div
                key={type.title}
                className="glass-card p-7 reveal group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-5 group-hover:shadow-lg transition-shadow duration-300">
                  <Icon size={22} className="text-amber-500" />
                </div>
                <h3 className="font-display font-700 text-base text-ink mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                  {type.description}
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
   WHY STANDARD TOOLS FAIL SECTION
   ═══════════════════════════════════════════════════════ */

function WhyToolsFailSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <XCircle size={12} />
            The Problem
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Why standard tools{' '}
            <span className="text-gradient">fall short</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Traditional email verification relies on SMTP handshakes, which
            fundamentally cannot resolve catch-all domains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {whyToolsFail.map((step, i) => (
            <div
              key={step.step}
              className="relative reveal"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {i < whyToolsFail.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-red-200 to-red-100" />
              )}

              <div className="glass-card p-8 text-center h-full">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50 border border-red-100 mb-5">
                  <span className="text-xs font-display font-700 text-red-400">{step.step}</span>
                </div>
                <h3 className="font-display font-700 text-lg text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   HOW SCRUBBY WORKS SECTION
   ═══════════════════════════════════════════════════════ */

function HowScrubbyWorksSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Zap size={12} />
            How Scrubby Works
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Real delivery tests,{' '}
            <span className="text-gradient">real results</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Unlike SMTP-based tools, Scrubby sends actual blank test emails
            to determine if a mailbox truly exists and accepts delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {howScrubbyWorks.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.step}
                className="card p-7 reveal text-center relative group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-5xl font-display font-800 text-surface-tertiary mb-4 group-hover:text-brand-green/20 transition-colors duration-300">
                  {step.step}
                </div>

                <div className="w-12 h-12 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-green-dark" />
                </div>

                <h3 className="font-display font-700 text-base text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                  {step.description}
                </p>

                {i < howScrubbyWorks.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight size={16} className="text-ink-muted" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   RESULTS SECTION
   ═══════════════════════════════════════════════════════ */

function ResultsSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Sparkles size={12} />
            Proven Results
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Numbers that{' '}
            <span className="text-gradient">matter</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Thousands of teams trust Scrubby to validate their risky emails and
            recover leads other tools leave behind.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto reveal">
          {resultStats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="glass-card p-8 text-center"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-green-bg mb-4">
                  <Icon size={22} className="text-brand-green-dark" />
                </div>
                <div className="font-display font-800 text-4xl text-ink mb-2">
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

      <div className="divider mt-24" />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   INTEGRATIONS SECTION
   ═══════════════════════════════════════════════════════ */

function IntegrationsSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Plug size={12} />
            Works With Your Tools
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Complement your{' '}
            <span className="text-gradient">existing stack</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Scrubby integrates with the verification tools you already use. Export
            your risky segment and let Scrubby handle the rest.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto reveal">
          {integrations.map((name) => (
            <div
              key={name}
              className="card px-5 py-3 text-sm font-display font-600 text-ink-secondary hover:text-ink hover:shadow-md transition-all duration-300"
            >
              {name}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <Link to="/integrations" className="btn-secondary text-sm">
            View All Integrations
            <ArrowRight size={14} />
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
    <section className="relative py-24 overflow-hidden" style={{ background: '#18181B' }}>
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute w-[500px] h-[500px] -bottom-40 -right-40 rounded-full blur-3xl animate-pulse"
        style={{ background: 'rgba(45, 206, 142, 0.06)' }}
      />
      <div
        className="absolute w-[400px] h-[400px] -top-20 -left-20 rounded-full blur-3xl animate-pulse"
        style={{ background: 'rgba(45, 206, 142, 0.04)', animationDelay: '2s' }}
      />

      <div className="absolute top-12 left-12 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" />
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-12 right-12 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '0.5s' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-6">
            <Zap size={12} />
            Start Validating
          </div>

          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
            Recover Your{' '}
            <span className="text-gradient-light">Risky Leads</span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-10 font-body">
            Start with 100 free credits. Upload your risky emails and see how many
            valid, deliverable addresses Scrubby can recover.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
              Start Free Trial
              <ArrowRight size={18} />
            </a>
            <Link to="/pricing" className="btn-secondary-dark text-base px-8 py-4">
              View Pricing
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-slate-400 font-display font-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-brand-green" />
              100 Free Credits
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-brand-green" />
              98.7% Accuracy
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-brand-green" />
              No Credit Card Required
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   RISKY EMAIL VALIDATION PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function RiskyEmailValidationPage() {
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
        title="Risky Email Validation"
        description="Validate risky and catch-all emails with Scrubby's proprietary inbox-level testing. Get definitive valid/invalid results."
        path="/risky-email-validation"
      />
      <HeroSection />
      <WhatAreRiskySection />
      <WhyToolsFailSection />
      <HowScrubbyWorksSection />
      <ResultsSection />
      <IntegrationsSection />
      <CtaSection />
    </main>
  )
}
