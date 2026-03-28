import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  ArrowRight, Upload, CheckCircle2, Download, Zap,
  Shield, BarChart3, Trash2, AlertTriangle, TrendingUp,
  FileSpreadsheet, RefreshCw, Plug
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const whyCards = [
  {
    icon: Trash2,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-400',
    title: 'Remove Invalid Addresses',
    description:
      'Over time, lists accumulate temporary addresses, inactive accounts, role-based emails, and misspelled entries. Scrubby identifies and removes them all.',
  },
  {
    icon: Shield,
    iconBg: 'bg-brand-green-bg',
    iconColor: 'text-brand-green-dark',
    title: 'Protect Sender Reputation',
    description:
      'Invalid emails damage your sender score and waste resources on messages that never arrive. Keep your domain healthy and your deliverability high.',
  },
  {
    icon: BarChart3,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    title: 'Below 2% Bounce Rate',
    description:
      'Maintain performance below the industry standard 2% bounce rate threshold. Clean lists mean fewer bounces and better campaign results.',
  },
]

const howSteps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload Your Email List',
    description:
      'Upload your list via CSV or connect directly through one of our many integrations. Support for files up to 1M+ contacts.',
  },
  {
    number: '02',
    icon: RefreshCw,
    title: 'Scrubby Cleans Your List',
    description:
      'Scrubby identifies and removes invalid, temporary, and risky addresses using multi-layer verification technology.',
  },
  {
    number: '03',
    icon: Download,
    title: 'Download Your Clean List',
    description:
      'Download your clean list as a CSV or sync directly to your tools. Only verified, deliverable emails remain.',
  },
]

const resultStats = [
  { value: '98%', label: 'Accuracy', icon: CheckCircle2 },
  { value: '<2%', label: 'Bounce Rate', icon: BarChart3 },
  { value: '42%', label: 'More Usable Emails', icon: TrendingUp },
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
            <FileSpreadsheet size={12} />
            Bulk Email Cleaning
          </div>

          {/* Heading */}
          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">Revitalize Your Email Campaigns with </span>
            <span className="text-gradient-light">List Cleaning</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
            Effectively remove invalid and non-responsive addresses from your email lists,
            improving engagement and maintaining sender reputation.
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
   WHY IT MATTERS SECTION
   ═══════════════════════════════════════════════════════ */

function WhyItMattersSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <AlertTriangle size={12} />
            Why It Matters
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Dirty lists are{' '}
            <span className="text-gradient">costing you</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Invalid emails hurt your deliverability, waste your budget, and damage the reputation
            you have worked hard to build. Scrubby fixes that.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {whyCards.map((card, i) => {
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
            Three simple{' '}
            <span className="text-gradient">steps</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Cleaning your email list takes minutes, not hours. Upload, clean, and download.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   RESULTS SECTION
   ═══════════════════════════════════════════════════════ */

function ResultsSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <TrendingUp size={12} />
            Proven Results
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Results that{' '}
            <span className="text-gradient">speak for themselves</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Thousands of teams trust Scrubby to keep their email lists clean and their campaigns performing.
          </p>
        </div>

        {/* Stats grid */}
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

        {/* Integration mention */}
        <div className="mt-16 text-center reveal">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Plug size={20} className="text-brand-green-dark" />
              <h3 className="font-display font-700 text-lg text-ink">
                Works with your existing tools
              </h3>
            </div>
            <p className="text-sm text-ink-tertiary leading-relaxed font-body mb-6">
              Connect Scrubby with Apollo, ZoomInfo, HubSpot, Clay, Instantly, SmartLead, and many more.
              Clean your lists wherever they live.
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
            Get Started
          </div>

          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
            Start Cleaning Your{' '}
            <span className="text-gradient-light">List Today</span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-10 font-body">
            Get started with 100 free credits. No credit card required.
            See the difference a clean list makes in your next campaign.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
              Start Cleaning
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
              No Credit Card Required
            </div>
            <div className="flex items-center gap-1.5">
              <Zap size={13} className="text-brand-green" />
              Results in Minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   BULK CLEANING PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function BulkCleaningPage() {
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
        title="Bulk Email Cleaning"
        description="Clean and validate large email lists with Scrubby. Upload CSV files with millions of emails and get results in 48-72 hours."
        path="/bulk-cleaning"
      />
      <HeroSection />
      <WhyItMattersSection />
      <HowItWorksSection />
      <ResultsSection />
      <CtaSection />
    </main>
  )
}
