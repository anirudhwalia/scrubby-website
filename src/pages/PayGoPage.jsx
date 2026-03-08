import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Zap, CheckCircle2, Shield, TrendingUp,
  CreditCard, Calendar, BarChart3, Sparkles, Tag,
  Target, RefreshCw, Check
} from 'lucide-react'
import SEO from '../components/SEO'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const pricingTiers = [
  { range: 'Up to 100', price: 'FREE', per: '', highlight: true },
  { range: '100 \u2013 1,000', price: '$0.05', per: '/email' },
  { range: '1,000 \u2013 5,000', price: '$0.04', per: '/email' },
  { range: '5,000 \u2013 10,000', price: '$0.03', per: '/email' },
  { range: '10,000 \u2013 100,000', price: '$0.02', per: '/email' },
  { range: '100,000 \u2013 1,000,000', price: '$0.015', per: '/email' },
  { range: '1,000,000 \u2013 10,000,000', price: '$0.01', per: '/email' },
]

const benefits = [
  {
    icon: CreditCard,
    iconBg: 'bg-brand-green-bg',
    iconColor: 'text-brand-green-dark',
    title: 'No Monthly Commitment',
    description: 'Only pay when you validate. No subscriptions, no recurring charges, no contracts. Top up your balance and use credits whenever you need them.',
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    title: 'Volume Discounts Built In',
    description: 'The more you validate, the less you pay per email. Automatic tiered pricing rewards higher volumes with deeper discounts.',
  },
  {
    icon: Sparkles,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    title: 'Same Powerful Features',
    description: 'Get access to the exact same risky email validation, API access, CSV uploads, and integrations as subscription users. Nothing is held back.',
  },
]

const useCases = [
  {
    icon: Calendar,
    title: 'One-Time List Cleanings',
    description: 'Inherited a stale list from a previous CRM or marketing tool? Clean it once without committing to a monthly plan.',
  },
  {
    icon: Target,
    title: 'Seasonal Campaigns',
    description: 'Running a holiday campaign or product launch? Validate your list before the big send and only pay for that one batch.',
  },
  {
    icon: RefreshCw,
    title: 'Testing Before Committing',
    description: 'Want to see how Scrubby performs on your specific list? Try pay-as-you-go first, then switch to a subscription when you are ready.',
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
      <div
        className="absolute w-[300px] h-[300px] bottom-0 left-1/3 rounded-full blur-3xl animate-pulse"
        style={{ background: 'rgba(245, 166, 35, 0.04)', animationDelay: '3s' }}
      />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-8">
            <Tag size={12} />
            Pay As You Go
          </div>

          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">Only Pay for </span>
            <span className="text-gradient-light">What You Use</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
            No subscriptions, no commitments. Purchase credits and validate emails
            at your own pace with automatic volume discounts.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
              Get Started Free
              <ArrowRight size={18} />
            </a>
            <Link to="/subscription" className="btn-secondary-dark text-base px-8 py-4">
              View Monthly Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   PRICING TABLE SECTION
   ═══════════════════════════════════════════════════════ */

function PricingTableSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="badge mx-auto mb-5">
            <BarChart3 size={12} />
            Tiered Pricing
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink mb-4">
            Volume-based{' '}
            <span className="text-gradient">pricing</span>
          </h2>
          <p className="text-ink-secondary text-base max-w-lg mx-auto font-body">
            The more you validate, the less each email costs. Start free
            with your first 100 emails.
          </p>
        </div>

        <div className="reveal">
          <div className="card rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-surface-border flex items-center justify-between">
              <span className="text-sm font-display font-600 text-ink">
                Pay-As-You-Go Pricing
              </span>
              <span className="badge text-[10px] py-0.5">No commitment</span>
            </div>

            <table className="w-full">
              <thead>
                <tr className="border-b border-surface-border">
                  <th className="text-left px-6 py-3 text-[11px] font-display font-600 text-ink-muted uppercase tracking-wider">
                    Email Volume
                  </th>
                  <th className="text-right px-6 py-3 text-[11px] font-display font-600 text-ink-muted uppercase tracking-wider">
                    Price per Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, i) => (
                  <tr
                    key={i}
                    className="border-b border-surface-border/50 hover:bg-surface-secondary transition-colors"
                  >
                    <td className="px-6 py-3.5 text-sm text-ink-secondary font-display">
                      {tier.range}
                    </td>
                    <td className="px-6 py-3.5 text-right">
                      <span
                        className={`text-sm font-display font-600 ${
                          tier.highlight
                            ? 'text-brand-green-dark'
                            : 'text-ink'
                        }`}
                      >
                        {tier.price}
                      </span>
                      <span className="text-xs text-ink-muted">
                        {tier.per}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="px-6 py-4 bg-surface-secondary">
              <a
                href="https://app.scrubby.io"
                className="btn-primary w-full justify-center"
              >
                Start with 100 Free Credits
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Savings callout */}
        <div className="mt-8 reveal">
          <div className="glass-card p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-green-bg flex items-center justify-center flex-shrink-0">
              <TrendingUp size={18} className="text-brand-green-dark" />
            </div>
            <div>
              <h4 className="font-display font-600 text-sm text-ink mb-1">Save up to 80%</h4>
              <p className="text-xs text-ink-tertiary font-body leading-relaxed">
                At the highest volume tier, you pay just $0.01 per email, an 80% discount
                compared to the base rate. The savings scale automatically as your volume grows.
              </p>
            </div>
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
    <section className="relative py-24 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Zap size={12} />
            Benefits
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Why go{' '}
            <span className="text-gradient">pay-as-you-go</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Flexible pricing that adapts to your needs. No wasted credits, no
            unnecessary charges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((card, i) => {
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
   USE CASES SECTION
   ═══════════════════════════════════════════════════════ */

function UseCasesSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Target size={12} />
            Use Cases
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Perfect for{' '}
            <span className="text-gradient">these scenarios</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Pay-as-you-go is ideal when you need flexible validation
            without long-term commitments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {useCases.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="glass-card p-8 text-center reveal"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-green-bg flex items-center justify-center mb-5">
                  <Icon size={24} className="text-brand-green-dark" />
                </div>
                <h3 className="font-display font-700 text-lg text-ink mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Subscription suggestion */}
        <div className="mt-16 text-center reveal">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <RefreshCw size={20} className="text-brand-green-dark" />
              <h3 className="font-display font-700 text-lg text-ink">
                Need regular validation?
              </h3>
            </div>
            <p className="text-sm text-ink-tertiary leading-relaxed font-body mb-6">
              If you validate emails every month, a subscription plan may save you money
              with lower per-credit rates and rollover credits.
            </p>
            <Link to="/subscription" className="btn-secondary text-sm">
              View Monthly Plans
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
            Get Started
          </div>

          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
            Get Started{' '}
            <span className="text-gradient-light">Free</span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-10 font-body">
            Your first 100 email validations are completely free. No credit card
            required. Start validating risky emails in minutes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
              Get Started Free
              <ArrowRight size={18} />
            </a>
            <Link to="/pricing" className="btn-secondary-dark text-base px-8 py-4">
              Compare All Options
            </Link>
          </div>

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
              <Check size={13} className="text-brand-green" />
              No Commitment
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   PAY GO PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function PayGoPage() {
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
        title="Pay-As-You-Go Pricing"
        description="No commitment email validation. Buy credits as you need them with Scrubby's pay-as-you-go pricing. No expiration."
        path="/pricing/paygo"
      />
      <HeroSection />
      <PricingTableSection />
      <BenefitsSection />
      <UseCasesSection />
      <CtaSection />
    </main>
  )
}
