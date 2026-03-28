import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  Check, ArrowRight, Zap, HelpCircle, Sparkles, Star,
  ChevronDown, ChevronUp, Shield, CreditCard
} from 'lucide-react'

/* ─── Data ─── */

const monthlyPlans = [
  {
    name: 'Starter',
    price: 27,
    credits: '1,000',
    perCredit: '2.70',
    description: 'Great for individuals and small teams getting started.',
    features: [
      'Email validation (catch-all + risky)',
      'Person enrichment',
      'Company enrichment',
      'API access',
      'CSV upload',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Basic',
    price: 127,
    credits: '5,000',
    perCredit: '2.54',
    description: 'For growing teams that need more volume and support.',
    features: [
      'Everything in Starter',
      'Priority email support',
      'Bulk processing',
      'Webhook notifications',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: 247,
    credits: '10,000',
    perCredit: '2.47',
    description: 'For high-volume teams and agencies scaling fast.',
    features: [
      'Everything in Basic',
      'Advanced API',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
    ],
    cta: 'Get Started',
    popular: true,
  },
]

const paygoTiers = [
  { range: 'Up to 100', price: 'FREE', per: '' },
  { range: '101 \u2013 5,000', price: '$0.0370', per: '/email' },
  { range: '5,001 \u2013 25,000', price: '$0.0270', per: '/email' },
  { range: '25,001 \u2013 100,000', price: '$0.0199', per: '/email' },
  { range: '100,001 \u2013 1,000,000', price: '$0.0149', per: '/email' },
  { range: '1,000,001 \u2013 10,000,000', price: '$0.0100', per: '/email' },
]

const creditBreakdown = [
  { action: 'Email Verification', credits: '1 credit', icon: Shield },
  { action: 'Person Enrichment', credits: '2 credits', icon: Sparkles },
  { action: 'Company Enrichment', credits: '2 credits', icon: Star },
]

const faqs = [
  {
    question: 'What is a credit and how are they used?',
    answer:
      'A credit is our unit of measurement for services. Email verification costs 1 credit per email, while person enrichment and company enrichment each cost 2 credits. You can use credits for any combination of these services across CSV uploads, API calls, or integrations.',
  },
  {
    question: 'What is a risky email?',
    answer:
      'A risky email is an address that belongs to a catch-all domain or has an uncertain deliverability status. Most email verification providers mark these as "unknown" or "risky" and leave them unresolved. Scrubby goes further by actually verifying whether a mailbox exists within catch-all domains, turning risky unknowns into actionable valid or invalid results.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes! Every new account receives 100 free credits to test our validation and enrichment services. No credit card is required to get started. You can use these credits to verify emails, enrich person data, or enrich company data. This lets you experience the quality of our results before committing to a paid plan.',
  },
  {
    question: 'What happens to unused credits?',
    answer:
      'With our monthly plans, unused credits roll over to the next month so you never lose what you have paid for. Credits accumulate and remain available as long as your subscription is active. With pay-as-you-go pricing, you only pay for the credits you use, so there is nothing to roll over.',
  },
  {
    question: 'Can I get a refund if I am not satisfied?',
    answer:
      'We offer a satisfaction guarantee on all monthly plans. If you are not happy with the results within the first 14 days, reach out to our support team and we will work with you to resolve any issues. For pay-as-you-go purchases, credits remain in your account until used and do not expire.',
  },
  {
    question: 'How does billing work?',
    answer:
      'Monthly plans are billed at the start of each billing cycle. You can upgrade, downgrade, or cancel at any time. Pay-as-you-go credits are purchased in advance and deducted as you use them. We accept all major credit cards and invoice billing is available for enterprise accounts.',
  },
]

/* ─── FAQ Item ─── */

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-surface-border rounded-xl overflow-hidden transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface-secondary transition-colors"
      >
        <span className="font-display font-700 text-ink text-sm pr-4">
          {question}
        </span>
        {open ? (
          <ChevronUp size={18} className="text-ink-muted flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-ink-muted flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-ink-secondary leading-relaxed font-body">{answer}</p>
        </div>
      )}
    </div>
  )
}

/* ─── Page ─── */

export default function PricingPage() {
  const [tab, setTab] = useState('monthly')

  return (
    <main>
      <SEO
        title="Pricing — Simple, Transparent Plans"
        description="Choose from subscription, pay-as-you-go, or unlimited plans. Start free with 100 credits. No hidden fees."
        path="/pricing"
      />
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 bg-navy-800 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div
          className="absolute w-[500px] h-[500px] -top-32 -left-32 rounded-full blur-3xl animate-pulse opacity-50"
          style={{ background: 'rgba(45, 206, 142, 0.08)' }}
        />
        <div
          className="absolute w-[350px] h-[350px] top-16 right-0 rounded-full blur-3xl animate-pulse"
          style={{ background: 'rgba(45, 206, 142, 0.05)', animationDelay: '2s' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="reveal">
            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5">
              Simple, transparent{' '}
              <span className="text-gradient-light">pricing</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
              Start free with 100 credits. Scale as you grow with flexible
              monthly plans or pay-as-you-go options.
            </p>

            {/* Toggle */}
            <div className="pricing-toggle inline-flex">
              <div
                className="pricing-toggle-slider"
                style={{
                  left: tab === 'monthly' ? '4px' : '50%',
                  width: 'calc(50% - 4px)',
                }}
              />
              <button
                onClick={() => setTab('monthly')}
                className={`pricing-toggle-btn ${tab === 'monthly' ? 'active' : ''}`}
              >
                Monthly Plans
              </button>
              <button
                onClick={() => setTab('paygo')}
                className={`pricing-toggle-btn ${tab === 'paygo' ? 'active' : ''}`}
              >
                Pay As You Go
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Monthly Plans ── */}
      {tab === 'monthly' && (
        <section className="relative py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {monthlyPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative card overflow-hidden transition-all duration-300 ${
                    plan.popular
                      ? 'ring-2 ring-brand-green shadow-green-glow'
                      : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green via-brand-green-light to-brand-green" />
                  )}

                  <div className="p-7">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display font-700 text-lg text-ink">
                        {plan.name}
                      </h3>
                      {plan.popular && (
                        <span className="badge text-[10px] py-0.5">
                          <Sparkles size={10} />
                          Most Popular
                        </span>
                      )}
                    </div>

                    <div className="mb-2">
                      <span className="font-display font-800 text-4xl text-ink">
                        ${plan.price}
                      </span>
                      <span className="text-ink-muted text-sm font-display">
                        /month
                      </span>
                    </div>
                    <p className="text-sm text-brand-green-dark font-display font-500 mb-1">
                      {plan.credits} credits included
                    </p>
                    <p className="text-xs text-ink-muted font-display mb-4">
                      {plan.perCredit}&cent; per credit
                    </p>
                    <p className="text-sm text-ink-secondary mb-6 font-body">
                      {plan.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <Check
                            size={15}
                            className="text-brand-green mt-0.5 flex-shrink-0"
                          />
                          <span className="text-sm text-ink-secondary font-body">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="https://app.scrubby.io"
                      className={`w-full justify-center ${
                        plan.popular ? 'btn-primary' : 'btn-secondary'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Enterprise CTA */}
            <div className="max-w-3xl mx-auto">
              <div className="card-dark p-8 md:p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-5">
                    <Zap size={24} className="text-brand-green" />
                  </div>
                  <h3 className="font-display font-700 text-xl text-white mb-2">
                    Need Enterprise Volume?
                  </h3>
                  <p className="text-sm text-slate-300 font-display mb-1">
                    Custom pricing starting from 1&cent; per credit
                  </p>
                  <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto font-body">
                    Get a personalized offer with dedicated support, custom
                    integrations, SLAs, and white-label solutions.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link to="/enterprise" className="btn-primary">
                      Contact Sales
                      <ArrowRight size={15} />
                    </Link>
                    <Link to="/contact" className="btn-secondary-dark">
                      Book a Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Pay As You Go ── */}
      {tab === 'paygo' && (
        <section className="relative py-16 bg-white">
          <div className="max-w-2xl mx-auto px-6">
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
                  {paygoTiers.map((tier, i) => (
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
                            tier.price === 'FREE'
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

            {/* Enterprise CTA (also in paygo tab) */}
            <div className="mt-12">
              <div className="card-dark p-8 text-center relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative z-10">
                  <h3 className="font-display font-700 text-xl text-white mb-2">
                    Need Enterprise Volume?
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto font-body">
                    Custom pricing starting from 1&cent; per credit with dedicated
                    support, SLAs, and white-label solutions.
                  </p>
                  <Link to="/enterprise" className="btn-primary">
                    Contact Sales
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Credit Breakdown ── */}
      <section className="relative py-16 bg-surface-secondary">
        <div className="max-w-xl mx-auto px-6 reveal">
          <div className="card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle size={16} className="text-ink-muted" />
              <span className="text-sm font-display font-600 text-ink">
                How Credits Work
              </span>
            </div>
            <div className="space-y-4">
              {creditBreakdown.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.action}
                    className="flex items-center justify-between p-3 rounded-lg bg-surface-secondary"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-green-bg flex items-center justify-center">
                        <Icon size={14} className="text-brand-green-dark" />
                      </div>
                      <span className="text-sm text-ink-secondary font-body">
                        {item.action}
                      </span>
                    </div>
                    <span className="text-sm font-display font-600 text-brand-green-dark">
                      {item.credits}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <div className="badge mx-auto mb-5">
              <HelpCircle size={12} />
              FAQ
            </div>
            <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink mb-4">
              Frequently asked{' '}
              <span className="text-gradient">questions</span>
            </h2>
            <p className="text-ink-secondary text-base max-w-lg mx-auto font-body">
              Everything you need to know about pricing and credits.
            </p>
          </div>

          <div className="space-y-3 reveal">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <p className="text-sm text-ink-muted mb-4 font-body">
              Still have questions?
            </p>
            <Link to="/contact" className="btn-secondary">
              Contact Us
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
