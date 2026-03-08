import { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Check, Zap, CreditCard, Sparkles, Shield,
  RefreshCw, Upload, Code, ChevronDown, ChevronUp,
  HelpCircle, CheckCircle2, TrendingUp
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const plans = [
  {
    name: 'Starter',
    price: 27,
    credits: '1,000',
    perCredit: '2.70',
    description: 'Great for individuals and small teams just getting started with email validation.',
    features: [
      'Risky email validation',
      'API access',
      'CSV upload & download',
      'Rollover unused credits',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Basic',
    price: 127,
    credits: '5,000',
    perCredit: '2.54',
    description: 'For growing teams that need more volume and faster processing.',
    features: [
      'Everything in Starter',
      'Priority email support',
      'Bulk processing',
      'Webhook notifications',
      'Rollover unused credits',
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
      'Advanced API access',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
    ],
    cta: 'Get Started',
    popular: true,
  },
]

const includedFeatures = [
  { icon: Shield, title: 'Risky Email Validation', description: 'Validate catch-all, accept-all, and unknown emails that other tools leave unresolved.' },
  { icon: Code, title: 'Full API Access', description: 'Integrate Scrubby directly into your workflow with our well-documented REST API.' },
  { icon: Upload, title: 'CSV Upload & Download', description: 'Upload lists of any size via CSV and download clean results when processing is complete.' },
  { icon: RefreshCw, title: 'Rollover Credits', description: 'Unused credits roll over to the next month so you never lose what you paid for.' },
]

const faqs = [
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel your subscription at any time with no cancellation fees. Your credits remain available until the end of your current billing cycle, and any unused rolled-over credits stay in your account.',
  },
  {
    question: 'Do unused credits roll over to the next month?',
    answer:
      'Absolutely. Unused credits automatically roll over to the next billing cycle as long as your subscription is active. You never lose credits you have paid for.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer:
      'You can upgrade or downgrade at any time. When you upgrade, you get immediate access to additional credits. When you downgrade, the change takes effect at the start of your next billing cycle.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Every new account receives 100 free credits to test our validation services. No credit card is required to get started. Use these credits to verify risky emails and see the quality of our results before committing.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards including Visa, Mastercard, and American Express. Invoice billing is available for Growth plan subscribers and enterprise accounts upon request.',
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
            <CreditCard size={12} />
            Monthly Plans
          </div>

          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">Predictable Pricing for </span>
            <span className="text-gradient-light">Growing Teams</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
            Choose a monthly plan that fits your volume. All plans include risky email
            validation, full API access, and rollover credits.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
              Start with 100 Free Credits
              <ArrowRight size={18} />
            </a>
            <Link to="/pricing" className="btn-secondary-dark text-base px-8 py-4">
              Compare All Options
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   PLANS SECTION
   ═══════════════════════════════════════════════════════ */

function PlansSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 reveal">
          {plans.map((plan) => (
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
        <div className="max-w-3xl mx-auto mt-16 reveal">
          <div className="card-dark p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-5">
                <Zap size={24} className="text-brand-green" />
              </div>
              <h3 className="font-display font-700 text-xl text-white mb-2">
                Need Unlimited Volume?
              </h3>
              <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto font-body">
                Get custom pricing with unlimited validations, dedicated support,
                and SLA guarantees for high-volume teams.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/unlimited" className="btn-primary">
                  Learn About Unlimited
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
  )
}

/* ═══════════════════════════════════════════════════════
   INCLUDED FEATURES SECTION
   ═══════════════════════════════════════════════════════ */

function IncludedFeaturesSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <CheckCircle2 size={12} />
            All Plans Include
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Everything you need in{' '}
            <span className="text-gradient">every plan</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            No matter which plan you choose, you get access to all of our core
            features. The only difference is volume.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {includedFeatures.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="glass-card p-7 text-center reveal group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-green-bg flex items-center justify-center mb-5 group-hover:shadow-lg transition-shadow duration-300">
                  <Icon size={24} className="text-brand-green-dark" />
                </div>
                <h3 className="font-display font-700 text-base text-ink mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                  {feature.description}
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
   FAQ SECTION
   ═══════════════════════════════════════════════════════ */

function FAQSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="badge mx-auto mb-5">
            <HelpCircle size={12} />
            FAQ
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink mb-4">
            Subscription{' '}
            <span className="text-gradient">questions</span>
          </h2>
          <p className="text-ink-secondary text-base max-w-lg mx-auto font-body">
            Everything you need to know about our monthly plans.
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
            Start with 100{' '}
            <span className="text-gradient-light">Free Credits</span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-10 font-body">
            No credit card required. Pick a plan later when you are ready to scale.
            See the quality of our validation before you commit.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
              Start Free Trial
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
              <TrendingUp size={13} className="text-brand-green" />
              Cancel Anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   SUBSCRIPTION PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function SubscriptionPage() {
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
        title="Subscription Plans"
        description="Monthly subscription plans for Scrubby email validation. From 1,000 to 100,000+ credits per month. Cancel anytime."
        path="/pricing/subscription"
      />
      <HeroSection />
      <PlansSection />
      <IncludedFeaturesSection />
      <FAQSection />
      <CtaSection />
    </main>
  )
}
