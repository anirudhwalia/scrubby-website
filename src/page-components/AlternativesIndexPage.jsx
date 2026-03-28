import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Zap, Shield, CheckCircle2, Target,
  Layers, Gift, Sparkles, BarChart3
} from 'lucide-react'
import SEO from '../components/SEO'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const alternatives = [
  { name: 'NeverBounce', slug: 'neverbounce', description: 'Email list verification & cleaning' },
  { name: 'ZeroBounce', slug: 'zerobounce', description: 'Email verification & scoring' },
  { name: 'Apollo', slug: 'apollo', description: 'Sales intelligence & engagement' },
  { name: 'Cognism', slug: 'cognism', description: 'B2B data & intelligence' },
  { name: 'ZoomInfo', slug: 'zoominfo', description: 'B2B contact database' },
  { name: 'BriteVerify', slug: 'briteverify', description: 'Real-time email verification' },
  { name: 'MillionVerifier', slug: 'millionverifier', description: 'Bulk email verification' },
  { name: 'SmartLeads', slug: 'smartleads', description: 'Cold email outreach at scale' },
  { name: 'Instantly', slug: 'instantly', description: 'Email outreach automation' },
  { name: 'Clay', slug: 'clay', description: 'Data enrichment & outreach' },
  { name: 'Mailchimp', slug: 'mailchimp', description: 'Email marketing platform' },
  { name: 'Pipedrive', slug: 'pipedrive', description: 'Sales pipeline management' },
  { name: 'Salesforce', slug: 'salesforce', description: 'Enterprise CRM platform' },
]

const differentiators = [
  {
    icon: Target,
    title: '98.7% Accuracy on Risky Emails',
    description:
      'While other tools flag catch-all and risky emails as "unknown," Scrubby validates them at the inbox level and delivers definitive results you can trust.',
  },
  {
    icon: Layers,
    title: 'Deep Inbox-Level Validation',
    description:
      'Scrubby goes beyond standard SMTP checks. Our proprietary technology performs deep inbox-level validation to determine true deliverability on catch-all domains.',
  },
  {
    icon: Gift,
    title: '100 Free Credits to Start',
    description:
      'No credit card required. Sign up and get 100 free validation credits so you can see the results for yourself before committing.',
  },
  {
    icon: Sparkles,
    title: 'Complements Your Existing Stack',
    description:
      'Scrubby is not a replacement for your current tools. It works alongside ZeroBounce, NeverBounce, Clay, Instantly, and others to handle what they cannot resolve.',
  },
]

/* ═══════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 bg-navy-800 overflow-hidden">
      {/* Background effects */}
      <div
        className="absolute w-[600px] h-[600px] -top-40 -left-40 rounded-full blur-3xl animate-pulse opacity-60"
        style={{ background: 'rgba(45, 206, 142, 0.08)' }}
      />
      <div
        className="absolute w-[400px] h-[400px] top-20 right-0 rounded-full blur-3xl animate-pulse"
        style={{ background: 'rgba(45, 206, 142, 0.05)', animationDelay: '2s' }}
      />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Decorative dots */}
      <div className="absolute top-12 left-12 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" />
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="reveal">
          <div className="badge mx-auto mb-5">
            <BarChart3 size={12} />
            Alternatives
          </div>

          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-4xl mx-auto">
            Scrubby vs.{' '}
            <span className="text-gradient-light">The Competition</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
            See how Scrubby compares to other email verification, outreach, and
            CRM tools. Find out why teams add Scrubby to their stack.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   ALTERNATIVES GRID SECTION
   ═══════════════════════════════════════════════════════ */

function AlternativesGridSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Zap size={12} />
            Comparisons
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Explore Tool{' '}
            <span className="text-gradient">Comparisons</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Detailed, side-by-side comparisons to help you understand where
            Scrubby fits in your workflow.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {alternatives.map((alt, i) => (
            <Link
              key={alt.slug}
              to={`/alternatives/${alt.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-lg hover:border-brand-green/30 transition-all duration-300 reveal"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              {/* Icon area */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green/15 to-brand-green/5 flex items-center justify-center mb-5">
                <span className="font-display font-800 text-sm text-brand-green-dark">
                  vs
                </span>
              </div>

              {/* Tool name */}
              <h3 className="font-display font-700 text-lg text-ink mb-2 group-hover:text-brand-green-dark transition-colors duration-300">
                Scrubby vs. {alt.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-ink-tertiary leading-relaxed font-body mb-5">
                {alt.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-1.5 text-sm text-brand-green-dark font-display font-600 group-hover:gap-2.5 transition-all duration-300">
                See Comparison
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   WHY CHOOSE SCRUBBY SECTION
   ═══════════════════════════════════════════════════════ */

function WhyChooseSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Shield size={12} />
            Why Scrubby
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Why Choose{' '}
            <span className="text-gradient">Scrubby?</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Scrubby is the only tool purpose-built to validate the risky and
            catch-all emails that other providers leave unresolved.
          </p>
        </div>

        {/* Differentiators grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {differentiators.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="glass-card p-8 reveal group hover:shadow-card-hover transition-all duration-300"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green-bg flex items-center justify-center mb-5">
                  <Icon size={22} className="text-brand-green-dark" />
                </div>
                <h3 className="font-display font-700 text-lg text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                  {item.description}
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
   CTA SECTION
   ═══════════════════════════════════════════════════════ */

function CtaSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="reveal">
          <div className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden" style={{ background: '#18181B' }}>
            {/* Grid background */}
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Decorative dots */}
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
                Ready to See the{' '}
                <span className="text-gradient-light">Difference?</span>
              </h2>

              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
                Sign up for free and get 100 credits to validate your risky
                emails. No credit card required.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
                  Start Free
                  <ArrowRight size={18} />
                </a>
                <Link to="/pricing" className="btn-secondary-dark text-base px-8 py-4">
                  View Pricing
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-display font-500">
                <div className="flex items-center gap-1.5">
                  <Shield size={13} className="text-brand-green" />
                  GDPR Compliant
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-brand-green" />
                  No Credit Card Required
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles size={13} className="text-brand-green" />
                  100 Free Credits
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
   ALTERNATIVES INDEX PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function AlternativesIndexPage() {
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
        title="Scrubby Alternatives & Comparisons"
        description="See how Scrubby compares to NeverBounce, ZeroBounce, Apollo, ZoomInfo, and other email verification and outreach tools. Find out why teams add Scrubby to their stack."
        path="/alternatives"
      />
      <HeroSection />
      <AlternativesGridSection />
      <WhyChooseSection />
      <CtaSection />
    </main>
  )
}
