import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Zap, CheckCircle2, Shield, Users, Building2,
  Infinity, Headphones, FileText, Clock, UserCheck, Plug,
  Check, Star, TrendingUp, Target
} from 'lucide-react'
import SEO from '../components/SEO'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const heroStats = [
  { label: 'Custom Pricing', sublabel: 'Tailored to your volume', icon: Star },
  { label: 'Unlimited Credits', sublabel: 'No caps, no limits', icon: Infinity },
  { label: 'Dedicated Support', sublabel: 'Your own account manager', icon: Headphones },
  { label: 'Custom SLA', sublabel: 'Guaranteed uptime & speed', icon: FileText },
]

const whoItsFor = [
  {
    icon: Building2,
    iconBg: 'bg-brand-green-bg',
    iconColor: 'text-brand-green-dark',
    title: 'Lead Gen Agencies',
    description: 'Agencies managing email lists across dozens of clients need unlimited validation without worrying about credit limits or per-email costs eating into margins.',
  },
  {
    icon: Users,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    title: 'Enterprise Sales Teams',
    description: 'Large B2B sales organizations processing hundreds of thousands of emails monthly need predictable costs and guaranteed throughput for their outreach pipelines.',
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    title: 'High-Volume Senders',
    description: 'Marketing teams running large-scale campaigns across multiple domains need continuous list hygiene without volume restrictions slowing them down.',
  },
]

const features = [
  { text: 'Unlimited email validations', icon: Infinity },
  { text: 'Priority processing queue', icon: Zap },
  { text: 'Dedicated account manager', icon: UserCheck },
  { text: 'Custom API integrations', icon: Plug },
  { text: 'SLA guarantees (99.99% uptime)', icon: Shield },
  { text: 'Custom reporting & analytics', icon: TrendingUp },
  { text: 'White-label options available', icon: Star },
  { text: 'Quarterly business reviews', icon: Target },
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
            <Infinity size={12} />
            Unlimited Plan
          </div>

          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">Unlimited Email Validation for </span>
            <span className="text-gradient-light">High-Volume Teams</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
            Custom pricing, unlimited validations, and dedicated support designed for
            agencies and enterprise teams that process emails at scale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Apply for Unlimited
              <ArrowRight size={18} />
            </Link>
            <Link to="/pricing" className="btn-secondary-dark text-base px-8 py-4">
              View All Plans
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {heroStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/20 mb-3">
                    <Icon size={18} className="text-brand-green" />
                  </div>
                  <div className="font-display font-700 text-lg text-white mb-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-400 font-display font-500">
                    {stat.sublabel}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   WHO IT'S FOR SECTION
   ═══════════════════════════════════════════════════════ */

function WhoItsForSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Users size={12} />
            Who It&apos;s For
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Built for teams that{' '}
            <span className="text-gradient">think big</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            The unlimited plan is designed for organizations where email validation
            is a core part of daily operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {whoItsFor.map((card, i) => {
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
   FEATURES SECTION
   ═══════════════════════════════════════════════════════ */

function FeaturesSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Zap size={12} />
            What You Get
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Everything included in{' '}
            <span className="text-gradient">Unlimited</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Enterprise-grade features, dedicated infrastructure, and white-glove
            support for teams that demand the best.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto reveal">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.text}
                className="glass-card p-5 flex items-start gap-3"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="w-9 h-9 rounded-lg bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-brand-green-dark" />
                </div>
                <span className="text-sm text-ink-secondary font-body leading-relaxed pt-1.5">
                  {feature.text}
                </span>
              </div>
            )
          })}
        </div>

        {/* Comparison callout */}
        <div className="mt-16 max-w-3xl mx-auto reveal">
          <div className="card p-0 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Standard plans */}
              <div className="p-7 border-b md:border-b-0 md:border-r border-surface-border">
                <h4 className="font-display font-700 text-base text-ink mb-4">Standard Plans</h4>
                <ul className="space-y-3">
                  {['Credit-based pricing', 'Self-serve support', 'Standard processing', 'Shared infrastructure'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <Check size={14} className="text-ink-muted flex-shrink-0" />
                      <span className="text-sm text-ink-tertiary font-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Unlimited */}
              <div className="p-7" style={{ background: 'rgba(45,206,142,0.03)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <h4 className="font-display font-700 text-base text-ink">Unlimited Plan</h4>
                  <span className="badge text-[10px] py-0.5">
                    <Sparkles size={10} />
                    Recommended
                  </span>
                </div>
                <ul className="space-y-3">
                  {['Unlimited validations', 'Dedicated account manager', 'Priority processing', 'Dedicated infrastructure'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 size={14} className="text-brand-green flex-shrink-0" />
                      <span className="text-sm text-ink-secondary font-body font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   CTA / CONTACT SECTION
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left -- Content */}
          <div className="reveal">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-6">
              <Zap size={12} />
              Apply Now
            </div>

            <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
              Ready for{' '}
              <span className="text-gradient-light">Unlimited?</span>
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 font-body">
              Tell us about your validation volume and our team will create a custom
              plan with pricing tailored to your needs.
            </p>

            <div className="flex flex-wrap gap-6 text-xs text-slate-400 font-display font-500">
              <div className="flex items-center gap-1.5">
                <Shield size={13} className="text-brand-green" />
                GDPR Compliant
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={13} className="text-brand-green" />
                24h Response Time
              </div>
              <div className="flex items-center gap-1.5">
                <UserCheck size={13} className="text-brand-green" />
                Dedicated Support
              </div>
            </div>
          </div>

          {/* Right -- Contact Form (visual only) */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="font-display font-700 text-lg text-white mb-6">
                Apply for Unlimited
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-display font-500 text-slate-400 mb-1.5">
                    Full Name
                  </label>
                  <div className="w-full px-4 py-3 rounded-xl text-sm font-body text-slate-500 cursor-not-allowed" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    John Smith
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-display font-500 text-slate-400 mb-1.5">
                    Work Email
                  </label>
                  <div className="w-full px-4 py-3 rounded-xl text-sm font-body text-slate-500 cursor-not-allowed" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    john@company.com
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-display font-500 text-slate-400 mb-1.5">
                    Company
                  </label>
                  <div className="w-full px-4 py-3 rounded-xl text-sm font-body text-slate-500 cursor-not-allowed" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    Acme Inc.
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-display font-500 text-slate-400 mb-1.5">
                    Monthly Email Volume
                  </label>
                  <div className="w-full px-4 py-3 rounded-xl text-sm font-body text-slate-500 cursor-not-allowed" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    Select your volume...
                  </div>
                </div>

                <Link to="/contact" className="btn-primary w-full justify-center text-base py-3.5 mt-2">
                  Apply for Unlimited
                  <ArrowRight size={16} />
                </Link>
              </div>

              <p className="text-[11px] text-slate-500 mt-4 text-center font-body">
                Our team typically responds within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   UNLIMITED PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function UnlimitedPage() {
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
        title="Unlimited Plan"
        description="Unlimited email validation for high-volume teams. Fixed monthly price, unlimited verifications, priority support."
        path="/pricing/unlimited"
      />
      <HeroSection />
      <WhoItsForSection />
      <FeaturesSection />
      <CtaSection />
    </main>
  )
}
