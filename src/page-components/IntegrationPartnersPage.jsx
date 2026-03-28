import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  ArrowRight,
  Zap,
  CheckCircle2,
  Shield,
  TrendingUp,
  RefreshCw,
  Target,
} from 'lucide-react'

/* ─── Integration Data ─── */

const integrations = {
  '/scrubby-and-pipedrive': {
    name: 'Pipedrive',
    tagline: 'Keep your Pipedrive CRM clean with validated emails',
    description:
      'Integrate Scrubby with Pipedrive to automatically validate risky and catch-all emails in your sales pipeline. Ensure every lead in your CRM has a verified, deliverable email address.',
    steps: [
      'Connect Pipedrive via Zapier or API',
      'Scrubby validates risky emails from your pipeline',
      'Clean results sync back to Pipedrive automatically',
    ],
    benefits: [
      'Reduce bounces from CRM-sourced campaigns',
      'Keep pipeline data clean and accurate',
      'Automated validation for new leads',
      'Better deliverability for sales outreach',
    ],
  },
  '/scrubby-and-mailchimp': {
    name: 'Mailchimp',
    tagline: 'Validate your Mailchimp audience for better deliverability',
    description:
      'Clean your Mailchimp email lists by validating catch-all and risky addresses. Improve open rates and protect your sender reputation.',
    steps: [
      'Export your Mailchimp audience or segment',
      'Upload to Scrubby for deep validation',
      'Import the cleaned list back to Mailchimp',
    ],
    benefits: [
      'Lower bounce rates in campaigns',
      'Protect Mailchimp sender reputation',
      'Improve open and click rates',
      'Reduce wasted sends to invalid addresses',
    ],
  },
  '/scrubby-and-salesforce': {
    name: 'Salesforce',
    tagline: 'Enterprise email validation for Salesforce CRM',
    description:
      'Validate risky emails in your Salesforce database. Scrubby integrates with Salesforce to ensure your contact and lead emails are deliverable.',
    steps: [
      'Connect Salesforce via API or Zapier',
      'Scrubby processes risky and catch-all contacts',
      'Validation status syncs back to Salesforce fields',
    ],
    benefits: [
      'Maintain CRM data hygiene at scale',
      'Reduce email bounce rates from Salesforce campaigns',
      'Automated validation workflows',
      'Better ROI on Salesforce email sends',
    ],
  },
}

const stepIcons = [Target, Shield, CheckCircle2]
const benefitIcons = [TrendingUp, RefreshCw, Zap, Shield]

/* ─── Page ─── */

export default function IntegrationPartnersPage() {
  const { pathname } = useLocation()
  const integration = integrations[pathname]

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
  }, [pathname])

  if (!integration) {
    return (
      <div className="font-body pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-ink mb-4">
            Integration Not Found
          </h1>
          <p className="text-ink-secondary mb-8">
            The integration page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link to="/integrations" className="btn-primary">
            View All Integrations
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main>
      <SEO
        title={`Scrubby + ${integration.name} - Email Validation Integration`}
        description={integration.description}
        path={pathname}
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
              <span className="text-gradient-light">{integration.name}</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-4 font-body">
              {integration.tagline}
            </p>

            <p className="text-base text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
              {integration.description}
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

      {/* ── How It Works ── */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="badge mx-auto mb-5">
              <RefreshCw size={12} />
              How It Works
            </div>
            <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
              How It Works with{' '}
              <span className="text-gradient">{integration.name}</span>
            </h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
              A simple workflow to validate risky emails from{' '}
              {integration.name} and keep your data clean.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {integration.steps.map((step, i) => {
              const Icon = stepIcons[i]
              return (
                <div
                  key={i}
                  className="card p-7 reveal text-center relative group"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="text-5xl font-display font-800 text-surface-tertiary mb-4 group-hover:text-brand-green/20 transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <div className="w-12 h-12 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-4">
                    <Icon size={20} className="text-brand-green-dark" />
                  </div>

                  <h3 className="font-display font-700 text-lg text-ink mb-2">
                    Step {i + 1}
                  </h3>
                  <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                    {step}
                  </p>

                  {i < integration.steps.length - 1 && (
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

      {/* ── Benefits ── */}
      <section className="relative py-24 bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="badge mx-auto mb-5">
              <CheckCircle2 size={12} />
              Key Benefits
            </div>
            <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
              Why Use Scrubby with{' '}
              <span className="text-gradient">{integration.name}</span>
            </h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
              Get the most out of your {integration.name} data with validated,
              deliverable email addresses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {integration.benefits.map((benefit, i) => {
              const Icon = benefitIcons[i]
              return (
                <div
                  key={i}
                  className="card p-8 reveal group"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-green-bg flex items-center justify-center mb-6 group-hover:shadow-green-glow transition-shadow duration-300">
                    <Icon size={24} className="text-brand-green-dark" />
                  </div>
                  <h3 className="font-display font-700 text-xl text-ink mb-3">
                    {benefit}
                  </h3>
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
                  Try Scrubby with{' '}
                  <span className="text-gradient-light">
                    {integration.name}
                  </span>
                </h2>

                <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
                  Start with 100 free credits. Validate your{' '}
                  {integration.name} risky emails and see how many deliverable
                  leads you can recover.
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
