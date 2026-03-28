import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO, { buildComparisonSchema, buildBreadcrumbSchema } from '../components/SEO'
import {
  ArrowRight, Zap, Shield, CheckCircle2, TrendingUp, Layers,
  Target, ArrowDownRight, Eye, Sparkles, RefreshCw, Building2
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const comparisonRows = [
  { feature: 'Primary Focus', zoominfo: 'Enterprise B2B data & sales intelligence', scrubby: 'Risky / catch-all email validation' },
  { feature: 'Contact Database', zoominfo: '100M+ business contacts', scrubby: 'Validates your existing contacts' },
  { feature: 'Key Features', zoominfo: 'Intent data, visitor tracking, alerts', scrubby: 'Deep inbox-level email verification' },
  { feature: 'Processing Speed', zoominfo: 'Real-time data access & alerts', scrubby: '48-72 hours (deep inbox checks)' },
  { feature: 'Catch-All Handling', zoominfo: 'Flags as unverifiable', scrubby: 'Validates each address individually' },
  { feature: 'Pricing', zoominfo: 'Enterprise pricing (custom quotes)', scrubby: 'Starting at $27/mo, 100 free credits' },
  { feature: 'Platform Scope', zoominfo: 'Full sales & marketing platform', scrubby: 'Specialized email validation' },
  { feature: 'Best For', zoominfo: 'Enterprise prospecting & intent data', scrubby: 'Validating risky emails at any scale' },
]

const keyDifferences = [
  {
    icon: Building2,
    title: 'Enterprise Platform vs Specialist',
    description: 'ZoomInfo is a comprehensive enterprise sales intelligence platform with contact data, intent signals, website visitor tracking, and real-time alerts. Scrubby is a focused email validation specialist that handles the risky and catch-all emails ZoomInfo cannot verify.',
  },
  {
    icon: TrendingUp,
    title: 'Scale & Affordability',
    description: 'ZoomInfo serves enterprise teams with custom pricing and annual contracts. Scrubby offers accessible plans starting at $27/month with 100 free credits, making deep email validation available to teams of any size without enterprise budgets.',
  },
  {
    icon: Eye,
    title: 'Intent Data + Deliverability',
    description: 'ZoomInfo excels at identifying buyer intent and providing actionable sales signals. Scrubby ensures the emails you act on actually reach their recipients, boosting the ROI of every intent-driven outreach campaign.',
  },
]

const workflowSteps = [
  {
    step: '01',
    title: 'Prospect with ZoomInfo',
    description: 'Use ZoomInfo to identify high-intent prospects with their 100M+ contact database, intent data, and real-time buying signals.',
    icon: Eye,
  },
  {
    step: '02',
    title: 'Export Risky Emails',
    description: 'Filter your ZoomInfo exports for contacts with unverifiable or risky email addresses that ZoomInfo could not confirm.',
    icon: ArrowDownRight,
  },
  {
    step: '03',
    title: 'Validate with Scrubby',
    description: 'Upload the risky segment to Scrubby for inbox-level validation. Within 48-72 hours, get definitive valid or invalid results.',
    icon: Shield,
  },
  {
    step: '04',
    title: 'Boost Deliverability',
    description: 'Merge Scrubby-validated emails back into ZoomInfo workflows. Launch outreach with confidence that every email will reach its inbox.',
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
            Scrubby vs ZoomInfo
          </div>

          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">ZoomInfo + Scrubby: </span>
            <span className="text-gradient-light">Maximum Deliverability</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
            ZoomInfo powers enterprise prospecting with intent data and 100M+ contacts.
            Scrubby validates the risky and catch-all emails that ZoomInfo cannot verify.
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
            ZoomInfo is an enterprise sales platform while Scrubby is a specialized email validator.
            They serve different roles that combine for maximum impact.
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
                ZoomInfo
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
                  {row.zoominfo}
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
            ZoomInfo and Scrubby target different parts of the sales process.
            Together, they ensure your prospecting investment delivers maximum ROI.
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
            Combine ZoomInfo&apos;s enterprise intelligence with Scrubby&apos;s deep
            email validation for unstoppable outreach deliverability.
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
                Start with 100 free credits. Validate your ZoomInfo risky emails and boost
                your outreach deliverability without an enterprise budget.
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

export default function AlternativeZoomInfoPage() {
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
        title="Scrubby vs ZoomInfo — Email Validation Comparison"
        description="Compare Scrubby and ZoomInfo for email validation. See how Scrubby complements ZoomInfo to validate catch-all and risky emails with 98.7% accuracy."
        path="/alternatives/zoominfo"
        schema={buildComparisonSchema("ZoomInfo")}
      />
      <HeroSection />
      <ComparisonSection />
      <KeyDifferencesSection />
      <WorkflowSection />
      <CtaSection />
    </main>
  )
}
