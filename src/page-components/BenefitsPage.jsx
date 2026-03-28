import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Zap, CheckCircle2, Shield, TrendingUp,
  Target, BarChart3, Plug, Heart, Users, XCircle,
  AlertTriangle, Sparkles, Scale
} from 'lucide-react'
import SEO from '../components/SEO'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const keyStats = [
  { value: '42%', label: 'of emails are flagged risky', icon: AlertTriangle },
  { value: '98%', label: 'deliverability after Scrubby', icon: CheckCircle2 },
  { value: '<2%', label: 'bounce rate guaranteed', icon: BarChart3 },
]

const benefitCards = [
  {
    icon: Target,
    iconBg: 'bg-brand-green-bg',
    iconColor: 'text-brand-green-dark',
    title: 'Recover Lost Leads',
    description:
      'Up to 42% of your email list may be marked risky by standard tools. Scrubby validates these addresses and recovers up to 83% of them as deliverable, adding valuable leads back to your pipeline.',
  },
  {
    icon: Shield,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    title: 'Protect Sender Reputation',
    description:
      'High bounce rates damage your sender score and can get your domain blacklisted. Scrubby ensures you only send to verified addresses, keeping your reputation clean and deliverability high.',
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    title: 'Maximize ROI',
    description:
      'Every email you send to an invalid address costs money. By validating risky emails, you recover leads that convert into revenue without spending more on acquisition.',
  },
  {
    icon: BarChart3,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-400',
    title: 'Reduce Bounce Rates',
    description:
      'Maintain your bounce rate below the industry-standard 2% threshold. Clean lists mean fewer bounces, better inbox placement, and more of your emails being seen.',
  },
  {
    icon: Plug,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-500',
    title: 'Complement Existing Tools',
    description:
      'Scrubby works alongside ZeroBounce, NeverBounce, BriteVerify, and other verification providers. Add it as a second layer to handle what they cannot resolve.',
  },
  {
    icon: Scale,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-500',
    title: 'Scale with Confidence',
    description:
      'Whether you process 1,000 or 10,000,000 emails, Scrubby scales with your volume. Flexible plans and volume discounts make it cost-effective at any size.',
  },
]

const beforeAfterData = {
  before: {
    title: 'Without Scrubby',
    items: [
      { label: 'Total list', value: '10,000 emails', color: 'text-ink-secondary' },
      { label: 'Valid', value: '5,800', color: 'text-brand-green-dark' },
      { label: 'Invalid', value: '200', color: 'text-red-400' },
      { label: 'Risky / Unknown', value: '4,000', color: 'text-amber-500', highlight: true },
    ],
    outcome: 'You discard 4,000 risky emails and lose potential revenue.',
  },
  after: {
    title: 'With Scrubby',
    items: [
      { label: 'Total list', value: '10,000 emails', color: 'text-ink-secondary' },
      { label: 'Valid', value: '5,800', color: 'text-brand-green-dark' },
      { label: 'Invalid', value: '200', color: 'text-red-400' },
      { label: 'Risky validated', value: '3,320 recovered', color: 'text-brand-green', highlight: true },
      { label: 'Risky invalid', value: '680 removed', color: 'text-red-400' },
    ],
    outcome: 'You recover 3,320 deliverable leads and safely remove 680 invalid ones.',
  },
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
            <Heart size={12} />
            Why Scrubby
          </div>

          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">The Benefits of Validating </span>
            <span className="text-gradient-light">Risky Emails</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
            Most verification tools leave up to 42% of your list unresolved. Scrubby
            turns those risky unknowns into actionable, deliverable leads.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
              Start with 100 Free Credits
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
   KEY STATS SECTION
   ═══════════════════════════════════════════════════════ */

function KeyStatsSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto reveal">
          {keyStats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="glass-card p-8 text-center"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-green-bg mb-4">
                  <Icon size={22} className="text-brand-green-dark" />
                </div>
                <div className="font-display font-800 text-4xl text-ink mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-ink-tertiary font-display font-500">
                  {stat.label}
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
   BENEFIT CARDS SECTION
   ═══════════════════════════════════════════════════════ */

function BenefitCardsSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Sparkles size={12} />
            Benefits
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Six reasons to{' '}
            <span className="text-gradient">validate risky emails</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Stop leaving money on the table. Here is how validating risky emails
            improves every aspect of your email operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitCards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="glass-card p-8 reveal group"
                style={{ transitionDelay: `${i * 0.08}s` }}
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
   BEFORE / AFTER SECTION
   ═══════════════════════════════════════════════════════ */

function BeforeAfterSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <BarChart3 size={12} />
            Visual Comparison
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            See the{' '}
            <span className="text-gradient">difference</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            A side-by-side look at what happens to a 10,000-email list
            with and without Scrubby.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto reveal">
          {/* Without Scrubby */}
          <div className="glass-card p-7 relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <XCircle size={20} className="text-red-400" />
              </div>
              <h3 className="font-display font-700 text-lg text-ink">
                {beforeAfterData.before.title}
              </h3>
            </div>

            <div className="space-y-3 mb-6">
              {beforeAfterData.before.items.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    item.highlight ? 'bg-amber-50 border border-amber-100' : 'bg-surface-secondary'
                  }`}
                >
                  <span className="text-sm text-ink-secondary font-body">{item.label}</span>
                  <span className={`text-sm font-display font-600 ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-red-50 border border-red-100">
              <p className="text-xs text-red-600 font-body leading-relaxed">
                {beforeAfterData.before.outcome}
              </p>
            </div>
          </div>

          {/* With Scrubby */}
          <div className="glass-card p-7 ring-1 ring-brand-green/20 relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-green-bg flex items-center justify-center">
                <CheckCircle2 size={20} className="text-brand-green-dark" />
              </div>
              <h3 className="font-display font-700 text-lg text-ink">
                {beforeAfterData.after.title}
              </h3>
            </div>

            <div className="space-y-3 mb-6">
              {beforeAfterData.after.items.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    item.highlight ? 'bg-brand-green/5 border border-brand-green/10' : 'bg-surface-secondary'
                  }`}
                >
                  <span className="text-sm text-ink-secondary font-body">{item.label}</span>
                  <span className={`text-sm font-display font-600 ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-brand-green/5 border border-brand-green/10">
              <p className="text-xs text-brand-green-dark font-body leading-relaxed">
                {beforeAfterData.after.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   TESTIMONIAL SECTION
   ═══════════════════════════════════════════════════════ */

function TestimonialSection() {
  return (
    <section className="relative py-20 bg-surface-secondary">
      <div className="divider mb-20" />

      <div className="max-w-3xl mx-auto px-6 reveal">
        <div className="glass-card p-8 md:p-10 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green-bg mb-6">
            <Users size={22} className="text-brand-green-dark" />
          </div>

          <blockquote className="font-display font-600 text-lg sm:text-xl text-ink leading-relaxed mb-6">
            &ldquo;We were discarding 40% of our leads because they were flagged as risky. After adding Scrubby
            to our workflow, we recovered over 3,000 valid emails from a single list. That translated
            directly into booked meetings and closed deals.&rdquo;
          </blockquote>

          <div>
            <p className="font-display font-700 text-sm text-ink">
              Sarah Chen
            </p>
            <p className="text-xs text-ink-tertiary font-body">
              VP of Sales, TechScale Inc.
            </p>
          </div>
        </div>
      </div>

      <div className="divider mt-20" />
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
            See the benefits for yourself. Validate your risky emails and discover
            how many leads you have been leaving on the table.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
              Start Free Trial
              <ArrowRight size={18} />
            </a>
            <Link to="/pricing" className="btn-secondary-dark text-base px-8 py-4">
              View Pricing
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
              98% Deliverability
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   BENEFITS PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function BenefitsPage() {
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
        title="Benefits of Email Validation"
        description="Discover how Scrubby's email validation improves deliverability, reduces bounce rates, and recovers up to 42% more leads."
        path="/benefits"
      />
      <HeroSection />
      <KeyStatsSection />
      <BenefitCardsSection />
      <BeforeAfterSection />
      <TestimonialSection />
      <CtaSection />
    </main>
  )
}
