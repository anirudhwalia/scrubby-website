import { useState } from 'react'
import { Check, Sparkles, ArrowRight, Zap, HelpCircle } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 59,
    credits: '10,000',
    description: 'Perfect for small teams getting started with email validation.',
    features: [
      'Email validation (catch-all + risky)',
      'Person enrichment',
      'Company enrichment',
      'API access',
      'Credit rollover',
      'CSV upload',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    monthlyPrice: 149,
    credits: '50,000',
    description: 'For growing teams that need more volume and priority support.',
    features: [
      'Everything in Starter',
      'Priority email support',
      'Bulk processing',
      'Webhook notifications',
      'Advanced API features',
      'Dedicated account manager',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Scale',
    monthlyPrice: 379,
    credits: '150,000',
    description: 'For high-volume teams and agencies with custom requirements.',
    features: [
      'Everything in Professional',
      'Custom integrations',
      'SLA guarantee',
      'Volume discounts',
      'White-label options',
      'Phone support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
]

const paygoTiers = [
  { range: 'Up to 100', price: 'FREE', per: '' },
  { range: '101 – 10,000', price: '$0.0270', per: '/email' },
  { range: '10,001 – 100,000', price: '$0.0199', per: '/email' },
  { range: '100,001 – 1,000,000', price: '$0.0149', per: '/email' },
  { range: '1,000,001+', price: '$0.0100', per: '/email' },
]

const creditBreakdown = [
  { action: 'Email Verification', credits: '1 credit' },
  { action: 'Person Enrichment', credits: '2 credits' },
  { action: 'Company Enrichment', credits: '2 credits' },
]

export default function Pricing() {
  const [tab, setTab] = useState('monthly')

  return (
    <section id="pricing" className="relative py-24 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="tag mx-auto mb-5">
            <Zap size={12} />
            Pricing
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-navy-800 mb-4">
            Pricing that{' '}
            <span className="gradient-text">scales with you</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-8">
            Start free with 100 credits. Scale as you grow with flexible plans
            and pay-as-you-go options.
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

        {/* Monthly Plans */}
        {tab === 'monthly' && (
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  plan.popular
                    ? 'glass-card border-accent-green shadow-lg shadow-accent-green/10 ring-1 ring-accent-green/20'
                    : 'glass-card'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green via-accent-green-light to-accent-green" />
                )}

                <div className="p-7">
                  {/* Plan Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-700 text-lg text-navy-800">{plan.name}</h3>
                    {plan.popular && (
                      <span className="tag text-[10px] py-0.5">
                        <Sparkles size={10} />
                        Most Popular
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <span className="font-display font-800 text-4xl text-navy-800">${plan.monthlyPrice}</span>
                    <span className="text-slate-400 text-sm font-display">/month</span>
                  </div>
                  <p className="text-sm text-accent-green-dark font-display font-500 mb-4">
                    {plan.credits} credits included
                  </p>
                  <p className="text-sm text-slate-500 mb-6">{plan.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check size={15} className="text-accent-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#"
                    className={`w-full justify-center ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    {plan.cta}
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pay As You Go */}
        {tab === 'paygo' && (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <span className="text-sm font-display font-600 text-navy-800">Pay-As-You-Go Pricing</span>
                <span className="tag text-[10px] py-0.5">No commitment</span>
              </div>

              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left px-6 py-3 text-[11px] font-display font-600 text-slate-400 uppercase tracking-wider">Email Volume</th>
                    <th className="text-right px-6 py-3 text-[11px] font-display font-600 text-slate-400 uppercase tracking-wider">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {paygoTiers.map((tier, i) => (
                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-3.5 text-sm text-slate-600 font-display">{tier.range}</td>
                      <td className="px-6 py-3.5 text-right">
                        <span className={`text-sm font-display font-600 ${tier.price === 'FREE' ? 'text-accent-green-dark' : 'text-navy-800'}`}>
                          {tier.price}
                        </span>
                        <span className="text-xs text-slate-400">{tier.per}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="px-6 py-4 bg-slate-50">
                <a href="#" className="btn-primary w-full justify-center">
                  Start with 100 Free Credits
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Credit Breakdown */}
        <div className="max-w-xl mx-auto reveal">
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle size={14} className="text-slate-400" />
              <span className="text-sm font-display font-600 text-navy-800">Credit Breakdown</span>
            </div>
            <div className="space-y-3">
              {creditBreakdown.map((item) => (
                <div key={item.action} className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{item.action}</span>
                  <span className="text-sm font-display font-600 text-accent-green-dark">{item.credits}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise */}
        <div className="mt-12 max-w-3xl mx-auto reveal">
          <div className="animated-border">
            <div className="glass-card rounded-2xl p-8 text-center">
              <h3 className="font-display font-700 text-xl text-navy-800 mb-2">Need Enterprise Volume?</h3>
              <p className="text-slate-500 text-sm mb-6 max-w-lg mx-auto">
                Starting from 1¢ per credit with personalized SLAs, custom integrations,
                dedicated support, and white-label solutions for agencies.
              </p>
              <a href="#contact" className="btn-secondary mx-auto">
                Contact Sales
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
