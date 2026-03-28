import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  ArrowRight,
  Zap,
  CheckCircle2,
  Shield,
  Layers,
  Clock,
  TrendingUp,
  Sparkles,
} from 'lucide-react'

/* ─── Data ─── */

const steps = [
  {
    step: '01',
    title: 'Enrich with Clay',
    description:
      'Use Clay\'s waterfall enrichment and 75+ data providers to discover prospect emails. Identify which addresses are flagged as risky or catch-all.',
    icon: Layers,
  },
  {
    step: '02',
    title: 'Validate with Scrubby',
    description:
      'Send risky and catch-all emails from Clay to Scrubby for deep inbox-level validation. Get definitive valid or invalid results within 48-72 hours.',
    icon: Shield,
  },
  {
    step: '03',
    title: 'Clean Data, Ready to Send',
    description:
      'Merge Scrubby-validated results back into your Clay workflow. Launch campaigns with confidence knowing every address is deliverable.',
    icon: Sparkles,
  },
]

const benefits = [
  {
    icon: Shield,
    title: 'Validate Catch-All Emails in Clay',
    description:
      'Go beyond standard verification. Scrubby validates the risky emails that Clay\'s enrichment process flags as catch-all or uncertain, giving you definitive results.',
  },
  {
    icon: Zap,
    title: 'Automated Enrichment Workflows',
    description:
      'Connect Scrubby directly into your Clay tables. Automate the validation step so every enriched lead is verified before it reaches your outreach tools.',
  },
  {
    icon: TrendingUp,
    title: 'Boost Deliverability',
    description:
      'Recover up to 42% more usable leads from your risky email segment. Maintain bounce rates under 2% and protect your sender reputation.',
  },
  {
    icon: Clock,
    title: 'Save Time on Manual Cleaning',
    description:
      'Stop manually reviewing catch-all emails or discarding them entirely. Scrubby automates the deep validation that would otherwise take hours of manual effort.',
  },
]

/* ─── Page ─── */

export default function IntegrationClayPage() {
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
        title="Scrubby + Clay Integration - Validate Risky Emails in Clay"
        description="Integrate Scrubby with Clay to validate catch-all and risky emails within your enrichment workflows. Boost deliverability and recover more usable leads."
        path="/integrations/clay"
      />

      {/* ── Hero ── */}
      <section
        className="relative pt-40 pb-28 overflow-hidden"
        style={{ background: '#18181B' }}
      >
        <div
          className="absolute w-[600px] h-[600px] -top-40 -left-40 rounded-full blur-3xl animate-pulse opacity-60"
          style={{ background: 'rgba(45, 206, 142, 0.08)' }}
        />
        <div
          className="absolute w-[400px] h-[400px] top-20 right-0 rounded-full blur-3xl animate-pulse"
          style={{
            background: 'rgba(45, 206, 142, 0.05)',
            animationDelay: '2s',
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="absolute top-12 left-12 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" />
        <div
          className="absolute top-20 right-20 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse"
          style={{ animationDelay: '2s' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-8">
              <Zap size={12} />
              Integration
            </div>

            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
              <span className="text-white">Scrubby + </span>
              <span className="text-gradient-light">Clay Integration</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
              Validate risky and catch-all emails directly within your Clay
              enrichment workflows. Recover more leads and send with confidence.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://app.scrubby.io"
                className="btn-primary text-base px-8 py-4"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
              <Link
                to="/how-it-works"
                className="btn-secondary-dark text-base px-8 py-4"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works with Clay ── */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="badge mx-auto mb-5">
              <Layers size={12} />
              How It Works
            </div>
            <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
              How It Works with{' '}
              <span className="text-gradient">Clay</span>
            </h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
              A simple three-step process to validate risky emails from your
              Clay enrichment pipeline.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => {
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

                  {i < steps.length - 1 && (
                    <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight size={16} className="text-ink-muted" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Key Benefits ── */}
      <section className="relative py-24 bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="badge mx-auto mb-5">
              <CheckCircle2 size={12} />
              Key Benefits
            </div>
            <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
              Why Use Scrubby{' '}
              <span className="text-gradient">with Clay</span>
            </h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
              Maximize the value of your Clay-enriched data by validating every
              risky email before outreach.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="card p-8 reveal group"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-green-bg flex items-center justify-center mb-6 group-hover:shadow-green-glow transition-shadow duration-300">
                    <Icon size={24} className="text-brand-green-dark" />
                  </div>
                  <h3 className="font-display font-700 text-xl text-ink mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="divider mb-24" />

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="reveal">
            <div
              className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
              style={{ background: '#18181B' }}
            >
              <div className="absolute inset-0 grid-bg opacity-30" />

              <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" />
              <div
                className="absolute top-12 right-16 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse"
                style={{ animationDelay: '1s' }}
              />
              <div
                className="absolute bottom-16 left-20 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse"
                style={{ animationDelay: '2s' }}
              />
              <div
                className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-6">
                  <Zap size={12} />
                  Get Started
                </div>

                <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                  Start Validating with{' '}
                  <span className="text-gradient-light">Clay + Scrubby</span>
                </h2>

                <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
                  Sign up for free and start validating your Clay-enriched risky
                  emails. 100 free credits, no credit card required.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                  <a
                    href="https://app.scrubby.io"
                    className="btn-primary text-base px-8 py-4"
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </a>
                  <Link
                    to="/pricing"
                    className="btn-secondary-dark text-base px-8 py-4"
                  >
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
    </main>
  )
}
