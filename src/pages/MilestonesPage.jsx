import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Flag, ArrowRight, Zap, Users, Star, CheckCircle2,
  Rocket, Trophy, CreditCard, Puzzle, Globe, Shield,
  Target, TrendingUp, Calendar
} from 'lucide-react'
import SEO from '../components/SEO'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const milestones = [
  {
    year: '2022',
    quarter: 'Q1',
    title: 'Company Founded',
    description: 'Scrubby was founded in Tallinn, Estonia, with a mission to solve the catch-all email validation problem that every other tool was ignoring.',
    icon: Rocket,
    color: 'from-brand-green/20 to-brand-green/5',
    iconColor: 'text-brand-green-dark',
  },
  {
    year: '2022',
    quarter: 'Q4',
    title: 'First 100 Customers',
    description: 'Within months of launch, 100 sales teams trusted Scrubby to validate the risky emails that other tools couldn\'t handle.',
    icon: Users,
    color: 'from-blue-400/20 to-blue-400/5',
    iconColor: 'text-blue-600',
  },
  {
    year: '2023',
    quarter: 'Q1',
    title: '10M+ Emails Validated',
    description: 'A major milestone as Scrubby surpassed 10 million email validations, proving our technology works at scale.',
    icon: CheckCircle2,
    color: 'from-amber-400/20 to-amber-400/5',
    iconColor: 'text-amber-600',
  },
  {
    year: '2023',
    quarter: 'Q2',
    title: 'API & Clay Integration',
    description: 'Launched our REST API and native Clay integration, enabling teams to validate emails directly within their existing workflows.',
    icon: Puzzle,
    color: 'from-purple-400/20 to-purple-400/5',
    iconColor: 'text-purple-600',
  },
  {
    year: '2023',
    quarter: 'Q4',
    title: '1,000 Active Customers',
    description: 'Reached the 1,000 customer milestone, with teams across sales, marketing, and operations relying on Scrubby daily.',
    icon: Trophy,
    color: 'from-rose-400/20 to-rose-400/5',
    iconColor: 'text-rose-600',
  },
  {
    year: '2024',
    quarter: 'Q1',
    title: '2,500+ Customers Worldwide',
    description: 'Scrubby is now trusted by over 2,500 companies globally, from startups to enterprises across every industry.',
    icon: Globe,
    color: 'from-teal-400/20 to-teal-400/5',
    iconColor: 'text-teal-600',
  },
  {
    year: '2024',
    quarter: 'Q2',
    title: 'PayGo Pricing Model',
    description: 'Launched our flexible pay-as-you-go pricing, making Scrubby accessible to teams of all sizes with no commitments or subscriptions required.',
    icon: CreditCard,
    color: 'from-indigo-400/20 to-indigo-400/5',
    iconColor: 'text-indigo-600',
  },
  {
    year: '2024',
    quarter: 'Q4',
    title: '4.85/5 Rating on G2',
    description: 'Achieved a 4.85 out of 5 rating on G2, one of the highest in the email validation category, based on real customer reviews.',
    icon: Star,
    color: 'from-amber-400/20 to-amber-400/5',
    iconColor: 'text-amber-600',
  },
  {
    year: '2025',
    quarter: 'Q1',
    title: '15+ Platform Integrations',
    description: 'Expanded our integration ecosystem to 15+ platforms including HubSpot, Instantly, SmartLead, Zapier, and more.',
    icon: Puzzle,
    color: 'from-brand-green/20 to-brand-green/5',
    iconColor: 'text-brand-green-dark',
  },
]

const stats = [
  { value: '2,500+', label: 'Customers', icon: Users },
  { value: '10M+', label: 'Emails Validated', icon: Zap },
  { value: '98%', label: 'Accuracy', icon: Target },
  { value: '4.85/5', label: 'G2 Rating', icon: Star },
]

/* ═══════════════════════════════════════════════════════
   HERO SECTION (DARK)
   ═══════════════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden" style={{ background: '#18181B' }}>
      {/* Background effects */}
      <div
        className="absolute w-[600px] h-[600px] -top-40 -left-40 rounded-full blur-3xl animate-pulse opacity-60"
        style={{ background: 'rgba(45, 206, 142, 0.08)' }}
      />
      <div
        className="absolute w-[400px] h-[400px] top-20 right-0 rounded-full blur-3xl animate-pulse"
        style={{ background: 'rgba(45, 206, 142, 0.05)', animationDelay: '2s' }}
      />
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Decorative dots */}
      <div className="absolute top-12 left-12 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" />
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="reveal">

          {/* Heading */}
          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">Scrubby </span>
            <span className="text-gradient-light">Milestones</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-body">
            From our founding in Estonia to serving 2,500+ customers worldwide &mdash;
            here&apos;s how we got here.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   TIMELINE SECTION
   ═══════════════════════════════════════════════════════ */

function TimelineSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Calendar size={12} />
            Timeline
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Key{' '}
            <span className="text-gradient">Moments</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Every milestone represents a step closer to our mission of making
            every email count.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-green/20 via-brand-green/40 to-brand-green/20 md:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((milestone, i) => {
              const Icon = milestone.icon
              const isLeft = i % 2 === 0
              return (
                <div
                  key={milestone.title}
                  className="reveal relative"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 top-8 w-3 h-3 -translate-x-1.5 md:-translate-x-1.5 rounded-full bg-brand-green border-4 border-white shadow-sm z-10" />

                  {/* Content card */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'}`}>
                    <div className="card p-6 group hover:shadow-card-hover transition-all duration-300">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${milestone.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon size={20} className={milestone.iconColor} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          {/* Year badge */}
                          <div className="flex items-center gap-2 mb-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-display font-700 tracking-wide bg-brand-green-bg text-brand-green-dark">
                              {milestone.year}
                            </span>
                            <span className="text-[10px] font-display font-500 text-ink-muted">
                              {milestone.quarter}
                            </span>
                          </div>

                          <h3 className="font-display font-700 text-base text-ink mb-1.5">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
   STATS SECTION
   ═══════════════════════════════════════════════════════ */

function StatsSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <TrendingUp size={12} />
            By the Numbers
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Where We{' '}
            <span className="text-gradient">Stand Today</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-green-bg mb-4">
                    <Icon size={22} className="text-brand-green-dark" />
                  </div>
                  <div className="font-display font-800 text-3xl sm:text-4xl text-ink mb-1">
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
                <Rocket size={12} />
                Next Chapter
              </div>

              <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Be Part of Our Next{' '}
                <span className="text-gradient-light">Milestone</span>
              </h2>

              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
                Join 2,500+ teams who trust Scrubby to validate their emails.
                Start with 100 free credits today.
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
                  <Users size={13} className="text-brand-green" />
                  2,500+ Customers
                </div>
                <div className="flex items-center gap-1.5">
                  <Star size={13} className="text-brand-green" />
                  4.85/5 on G2
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
   MILESTONES PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function MilestonesPage() {
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
        title="Our Milestones"
        description="Scrubby's journey from founding in 2020 to validating 10M+ emails. Key milestones and achievements."
        path="/about/milestones"
      />
      <HeroSection />
      <TimelineSection />
      <StatsSection />
      <CtaSection />
    </main>
  )
}
