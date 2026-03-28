import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Zap, CheckCircle2, Shield, AlertTriangle,
  Bell, Eye, Globe, Lock, Activity, ShieldAlert,
  Plug, Radio, ServerCrash, ShieldCheck
} from 'lucide-react'
import SEO from '../components/SEO'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const featureCards = [
  {
    icon: Eye,
    iconBg: 'bg-brand-green-bg',
    iconColor: 'text-brand-green-dark',
    title: 'Real-Time Monitoring',
    description:
      'Continuous monitoring identifies threats before they impact your campaigns. Stay ahead of issues with 24/7 surveillance of your sending domains and IPs.',
  },
  {
    icon: Shield,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    title: 'Domain Protection',
    description:
      'Prevent list compromise and account shutdowns with proactive validation. Keep your domains off blacklists and your email accounts in good standing.',
  },
  {
    icon: Bell,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    title: 'Advance Notifications',
    description:
      'Get alerted before your IP or domain lands on a blacklist. Receive actionable notifications so you can take corrective action before damage is done.',
  },
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
            <ShieldAlert size={12} />
            Blacklist Monitoring
          </div>

          {/* Heading */}
          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">No More Stress About </span>
            <span className="text-gradient-light">Burning Domains</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
            Proactively monitor your email list to protect your IP reputation.
            Get notified before serious issues occur.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
              Scrub Your List
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
   PROBLEM / SOLUTION SECTION
   ═══════════════════════════════════════════════════════ */

function ProblemSolutionSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Activity size={12} />
            The Challenge
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Blacklists can{' '}
            <span className="text-gradient">destroy your outreach</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Understanding the problem is the first step to solving it. Here is why blacklist
            monitoring matters.
          </p>
        </div>

        {/* Problem / Solution Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problem */}
          <div className="reveal">
            <div className="glass-card p-0 overflow-hidden h-full">
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                  <ServerCrash size={22} className="text-red-400" />
                </div>
                <h3 className="font-display font-700 text-lg text-ink mb-3">
                  The Problem
                </h3>
                <p className="text-sm text-ink-tertiary leading-relaxed font-body mb-5">
                  When your domains or IPs get blacklisted, email deliverability suffers significantly.
                  Traditional tools do not catch this until it is too late.
                </p>
                <div className="space-y-3">
                  {[
                    'Emails silently land in spam folders',
                    'Sender reputation drops without warning',
                    'Accounts get suspended or shut down',
                    'Campaigns fail with no clear explanation',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <AlertTriangle size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-ink-secondary font-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="glass-card p-0 overflow-hidden h-full ring-1 ring-brand-green/20">
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-brand-green-bg flex items-center justify-center mb-5">
                  <ShieldCheck size={22} className="text-brand-green-dark" />
                </div>
                <h3 className="font-display font-700 text-lg text-ink mb-3">
                  The Scrubby Solution
                </h3>
                <p className="text-sm text-ink-tertiary leading-relaxed font-body mb-5">
                  Scrubby&apos;s monitoring identifies potential threats and keeps your email lists
                  healthy, ensuring seamless delivery every time.
                </p>
                <div className="space-y-3">
                  {[
                    'Proactive threat detection before issues arise',
                    'Continuous IP and domain reputation tracking',
                    'Instant alerts when risk levels change',
                    'Actionable recommendations to stay protected',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-ink-secondary font-body">{item}</span>
                    </div>
                  ))}
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
   FEATURES SECTION
   ═══════════════════════════════════════════════════════ */

function FeaturesSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Zap size={12} />
            Key Features
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Stay protected,{' '}
            <span className="text-gradient">stay delivered</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Everything you need to keep your domains off blacklists and your deliverability high.
          </p>
        </div>

        {/* Feature Cards */}
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

        {/* How it works visual */}
        <div className="mt-20 max-w-4xl mx-auto reveal">
          <div className="text-center mb-10">
            <h3 className="font-display font-800 text-2xl sm:text-3xl text-ink mb-3">
              How monitoring works
            </h3>
            <p className="text-ink-secondary text-base max-w-lg mx-auto font-body">
              Set it up once and let Scrubby handle the rest. Continuous protection for all your sending domains.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                number: '01',
                icon: Globe,
                title: 'Add Your Domains',
                description: 'Register the domains and IPs you use for email outreach. Setup takes less than a minute.',
              },
              {
                number: '02',
                icon: Radio,
                title: 'Continuous Scanning',
                description: 'Scrubby monitors 100+ blacklist databases around the clock, checking your reputation continuously.',
              },
              {
                number: '03',
                icon: Bell,
                title: 'Instant Alerts',
                description: 'Get notified immediately if any issue is detected, with clear steps to resolve it quickly.',
              },
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="glass-card p-6 text-center"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-green/10 border border-brand-green/20 mb-4">
                    <span className="text-xs font-display font-700 text-brand-green">{step.number}</span>
                  </div>
                  <div className="w-12 h-12 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-4">
                    <Icon size={22} className="text-brand-green-dark" />
                  </div>
                  <h4 className="font-display font-700 text-sm text-ink mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-ink-tertiary font-body leading-relaxed">
                    {step.description}
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
                Works alongside your existing tools
              </h3>
            </div>
            <p className="text-sm text-ink-tertiary leading-relaxed font-body mb-6 max-w-lg mx-auto">
              Scrubby&apos;s blacklist monitoring adds an extra layer of protection on top of your
              current email stack. Integrate with your verification tools, CRMs, and outreach platforms.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {['Apollo', 'ZoomInfo', 'HubSpot', 'Instantly', 'SmartLead', 'Clay'].map((tool) => (
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
            <Shield size={12} />
            Protect Your Domains
          </div>

          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
            Protect Your Domains{' '}
            <span className="text-gradient-light">Today</span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-10 font-body">
            Do not wait until your domain is blacklisted. Start monitoring now and
            keep your email deliverability at its peak.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
              Start Monitoring
              <ArrowRight size={18} />
            </a>
            <Link to="/contact" className="btn-secondary-dark text-base px-8 py-4">
              Contact Sales
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-slate-400 font-display font-500">
            <div className="flex items-center gap-1.5">
              <Eye size={13} className="text-brand-green" />
              24/7 Monitoring
            </div>
            <div className="flex items-center gap-1.5">
              <Bell size={13} className="text-brand-green" />
              Instant Alerts
            </div>
            <div className="flex items-center gap-1.5">
              <Lock size={13} className="text-brand-green" />
              100+ Blacklists Checked
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   BLACKLIST MONITOR PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function BlacklistMonitorPage() {
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
        title="Blacklist Monitor"
        description="Monitor your email domain and IP against 100+ blacklists. Get instant alerts when you're blacklisted."
        path="/blacklist-monitor"
      />
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <IntegrationSection />
      <CtaSection />
    </main>
  )
}
