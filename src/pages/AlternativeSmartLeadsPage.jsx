import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO, { buildComparisonSchema, buildBreadcrumbSchema } from '../components/SEO'
import {
  ArrowRight, Zap, Shield, CheckCircle2, Layers,
  Target, ArrowDownRight, RefreshCw, Sparkles, Mail, Send, MailCheck
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const comparisonRows = [
  { feature: 'Primary Focus', smartlead: 'Cold email outreach at scale', scrubby: 'Risky / catch-all email validation' },
  { feature: 'Core Strength', smartlead: 'Unlimited mailboxes & email warmup', scrubby: '98.7% deliverability on risky emails' },
  { feature: 'Email Warmup', smartlead: 'Built-in auto warmup & rotation', scrubby: 'Not applicable (validation tool)' },
  { feature: 'Sending Volume', smartlead: 'Unlimited sending accounts', scrubby: 'Validates before you send' },
  { feature: 'Bounce Prevention', smartlead: 'Basic list hygiene features', scrubby: 'Deep inbox-level catch-all validation' },
  { feature: 'Catch-All Handling', smartlead: 'Cannot verify catch-all emails', scrubby: 'Validates each catch-all individually' },
  { feature: 'Pricing', smartlead: 'Plans from $39/mo', scrubby: 'Starting at $27/mo, 100 free credits' },
  { feature: 'Best For', smartlead: 'Scaling cold email campaigns', scrubby: 'Protecting sender reputation pre-send' },
]

const keyDifferences = [
  {
    icon: Send,
    title: 'Sending vs Validating',
    description: 'SmartLead is built for sending cold emails at scale with unlimited mailboxes and auto-rotation. Scrubby ensures the emails you load into SmartLead are deliverable, preventing bounces that damage your sender reputation.',
  },
  {
    icon: Shield,
    title: 'Reputation Protection',
    description: 'SmartLead warms up your mailboxes and rotates sending accounts to protect deliverability. Scrubby protects from the other side by validating risky emails before they enter your campaigns, preventing bounces at the source.',
  },
  {
    icon: MailCheck,
    title: 'Catch-All Resolution',
    description: 'SmartLead cannot determine if catch-all domain emails are real inboxes. Scrubby specializes in exactly this, validating each catch-all address individually so you only send to real people through SmartLead.',
  },
]

const workflowSteps = [
  {
    step: '01',
    title: 'Build Campaigns in SmartLead',
    description: 'Set up your cold email campaigns in SmartLead with sequences, mailboxes, and warmup schedules.',
    icon: Mail,
  },
  {
    step: '02',
    title: 'Export Risky Emails',
    description: 'Before loading contacts, filter out risky and catch-all emails that could bounce and damage sender reputation.',
    icon: ArrowDownRight,
  },
  {
    step: '03',
    title: 'Validate with Scrubby',
    description: 'Send risky emails to Scrubby for deep inbox-level validation. Within 48-72 hours, know which addresses are safe to send to.',
    icon: Shield,
  },
  {
    step: '04',
    title: 'Send with Confidence',
    description: 'Load Scrubby-validated contacts into SmartLead campaigns. Send at scale knowing every email reaches a real inbox.',
    icon: Sparkles,
  },
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
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-8">
            <Zap size={12} />
            Scrubby + SmartLead
          </div>

          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">SmartLead + Scrubby: </span>
            <span className="text-gradient-light">Better Together</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
            SmartLead scales your cold email outreach. Scrubby validates the risky emails
            before they enter your campaigns, protecting your sender reputation at scale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
              Try Scrubby Free
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
   COMPARISON TABLE SECTION
   ═══════════════════════════════════════════════════════ */

function ComparisonSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Layers size={12} />
            Feature Comparison
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            How They{' '}
            <span className="text-gradient">Compare</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            SmartLead is a cold email sending platform while Scrubby is an email validation specialist.
            They serve different but complementary roles in your outreach stack.
          </p>
        </div>

        <div className="reveal">
          <div className="card overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 border-b border-surface-border">
              <div className="px-6 py-4 text-[11px] font-display font-600 text-ink-muted uppercase tracking-wider">
                Feature
              </div>
              <div className="px-6 py-4 text-[11px] font-display font-600 text-ink-muted uppercase tracking-wider text-center bg-surface-secondary/50">
                SmartLead
              </div>
              <div className="px-6 py-4 text-[11px] font-display font-600 uppercase tracking-wider text-center" style={{ background: 'rgba(45,206,142,0.05)', color: '#1BA872' }}>
                Scrubby
              </div>
            </div>

            {/* Table Rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 ${i < comparisonRows.length - 1 ? 'border-b border-surface-border/50' : ''} hover:bg-surface-secondary/30 transition-colors`}
              >
                <div className="px-6 py-4 text-sm font-display font-600 text-ink">
                  {row.feature}
                </div>
                <div className="px-6 py-4 text-sm text-ink-secondary font-body text-center bg-surface-secondary/20">
                  {row.smartlead}
                </div>
                <div className="px-6 py-4 text-sm text-ink-secondary font-body text-center" style={{ background: 'rgba(45,206,142,0.02)' }}>
                  {row.scrubby}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   KEY DIFFERENCES SECTION
   ═══════════════════════════════════════════════════════ */

function KeyDifferencesSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Target size={12} />
            Key Differences
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            What Sets Them{' '}
            <span className="text-gradient">Apart</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            SmartLead and Scrubby are different tools that work powerfully together.
            Understanding their strengths helps you maximize every campaign.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {keyDifferences.map((diff, i) => {
            const Icon = diff.icon
            return (
              <div
                key={diff.title}
                className="card p-8 reveal group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-green-bg flex items-center justify-center mb-6 group-hover:shadow-green-glow transition-shadow duration-300">
                  <Icon size={24} className="text-brand-green-dark" />
                </div>
                <h3 className="font-display font-700 text-xl text-ink mb-3">
                  {diff.title}
                </h3>
                <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                  {diff.description}
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
   RECOMMENDED WORKFLOW SECTION
   ═══════════════════════════════════════════════════════ */

function WorkflowSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <RefreshCw size={12} />
            Recommended Workflow
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Use Them{' '}
            <span className="text-gradient">Together</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Validate risky emails with Scrubby before loading them into SmartLead.
            Protect your sender reputation and maximize campaign performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {workflowSteps.map((step, i) => {
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

                <h3 className="font-display font-700 text-lg text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                  {step.description}
                </p>

                {i < workflowSteps.length - 1 && (
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
   CTA SECTION
   ═══════════════════════════════════════════════════════ */

function CtaSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="divider mb-24" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="reveal">
          <div className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden" style={{ background: '#18181B' }}>
            <div className="absolute inset-0 grid-bg opacity-30" />

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
                Try Scrubby{' '}
                <span className="text-gradient-light">Free</span>
              </h2>

              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
                Start with 100 free credits. Validate your risky emails before sending them
                through SmartLead and protect your sender reputation from day one.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
                  Start Free Trial
                  <ArrowRight size={18} />
                </a>
                <Link to="/pricing" className="btn-secondary-dark text-base px-8 py-4">
                  View Pricing
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-display font-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-brand-green" />
                  100 Free Credits
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-brand-green" />
                  No Credit Card Required
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-brand-green" />
                  98.7% Accuracy
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
   PAGE EXPORT
   ═══════════════════════════════════════════════════════ */

export default function AlternativeSmartLeadsPage() {
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
        title="Scrubby vs SmartLeads — Email Validation Comparison"
        description="Compare Scrubby and SmartLeads for email validation. See how Scrubby complements SmartLeads to validate catch-all and risky emails with 98.7% accuracy."
        path="/alternatives/smartleads"
        schema={buildComparisonSchema("SmartLeads")}
      />
      <HeroSection />
      <ComparisonSection />
      <KeyDifferencesSection />
      <WorkflowSection />
      <CtaSection />
    </main>
  )
}
