import { useState } from 'react'

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
  { range: '101 – 5,000', price: '$0.0370', per: '/email' },
  { range: '5,001 – 25,000', price: '$0.0270', per: '/email' },
  { range: '25,001 – 100,000', price: '$0.0199', per: '/email' },
  { range: '100,001 – 1,000,000', price: '$0.0149', per: '/email' },
  { range: '1,000,001 – 10,000,000', price: '$0.0100', per: '/email' },
]

/* ── SVG icons ── */

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green mt-0.5 flex-shrink-0" aria-hidden="true">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  )
}

function SparklesIcon({ size = 10 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
    </svg>
  )
}

function ZapIcon({ size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
    </svg>
  )
}

export default function PricingToggle() {
  const [tab, setTab] = useState('monthly')

  return (
    <>
      {/* ── Toggle ── */}
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

      {/* ── Monthly Plans ── */}
      {tab === 'monthly' && (
        <section className="relative py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {monthlyPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative card overflow-hidden transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-brand-green shadow-green-glow' : ''
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
                          <SparklesIcon size={10} />
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
                      {plan.perCredit}¢ per credit
                    </p>
                    <p className="text-sm text-ink-secondary mb-6 font-body">
                      {plan.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <CheckIcon />
                          <span className="text-sm text-ink-secondary font-body">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="https://app.scrubby.io"
                      className={`w-full flex items-center gap-2 justify-center ${
                        plan.popular ? 'btn-primary' : 'btn-secondary'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRightIcon />
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
                    <span className="text-brand-green"><ZapIcon size={24} /></span>
                  </div>
                  <h3 className="font-display font-700 text-xl text-white mb-2">
                    Need Enterprise Volume?
                  </h3>
                  <p className="text-sm text-slate-300 font-display mb-1">
                    Custom pricing starting from 1¢ per credit
                  </p>
                  <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto font-body">
                    Get a personalized offer with dedicated support, custom
                    integrations, SLAs, and white-label solutions.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a href="/enterprise" className="btn-primary flex items-center gap-2">
                      Contact Sales
                      <ArrowRightIcon />
                    </a>
                    <a href="/contact" className="btn-secondary-dark">
                      Book a Demo
                    </a>
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
                  className="btn-primary w-full flex items-center gap-2 justify-center"
                >
                  Start with 100 Free Credits
                  <ArrowRightIcon />
                </a>
              </div>
            </div>

            {/* Enterprise CTA (paygo tab) */}
            <div className="mt-12">
              <div className="card-dark p-8 text-center relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative z-10">
                  <h3 className="font-display font-700 text-xl text-white mb-2">
                    Need Enterprise Volume?
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto font-body">
                    Custom pricing starting from 1¢ per credit with dedicated
                    support, SLAs, and white-label solutions.
                  </p>
                  <a href="/enterprise" className="btn-primary flex items-center gap-2 justify-center w-fit mx-auto">
                    Contact Sales
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
