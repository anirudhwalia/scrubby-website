import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Briefcase, ArrowRight, Zap, Users, Star, Globe, Shield,
  MapPin, Heart, Rocket, Clock, Laptop, TrendingUp,
  Mail, Search, Coffee, Sparkles
} from 'lucide-react'
import SEO from '../components/SEO'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const whyWorkHere = [
  {
    icon: TrendingUp,
    title: 'Impact',
    description: 'Your work directly affects 2,500+ companies worldwide. Every feature you build, every bug you fix, helps teams recover leads and grow their revenue.',
    gradient: 'from-brand-green/10 to-brand-green/5',
  },
  {
    icon: Rocket,
    title: 'Growth',
    description: 'We are a fast-growing company with ambitious goals. You will have the opportunity to grow your skills, take on new challenges, and shape the future of email validation.',
    gradient: 'from-amber-100/60 to-amber-50/40',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'We are building technology that no one else has. You will work on cutting-edge problems in email infrastructure, data science, and API design.',
    gradient: 'from-purple-100/60 to-purple-50/40',
  },
  {
    icon: Laptop,
    title: 'Remote Flexibility',
    description: 'Work from anywhere. We are a remote-first company with team members across Estonia, India, and the United States. Results matter more than hours in a seat.',
    gradient: 'from-blue-100/60 to-blue-50/40',
  },
]

const perks = [
  { icon: Laptop, label: 'Remote Work', description: 'Work from anywhere in the world' },
  { icon: Clock, label: 'Flexible Hours', description: 'Set your own schedule' },
  { icon: TrendingUp, label: 'Competitive Salary', description: 'Market-rate compensation' },
  { icon: Rocket, label: 'Growth Opportunities', description: 'Career development support' },
  { icon: Heart, label: 'Health Benefits', description: 'Comprehensive coverage' },
  { icon: Coffee, label: 'Team Events', description: 'Regular virtual and in-person meetups' },
]

const teamLocations = [
  { flag: 'EE', city: 'Estonia', label: 'Headquarters', icon: MapPin },
  { flag: 'IN', city: 'India', label: 'Engineering', icon: MapPin },
  { flag: 'US', city: 'United States', label: 'Sales', icon: MapPin },
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
            <span className="text-white">Join the </span>
            <span className="text-gradient-light">Scrubby Team</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-body">
            Help us build the future of email validation. We are a remote-first team
            that values impact, innovation, and personal growth.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   CULTURE SECTION
   ═══════════════════════════════════════════════════════ */

function CultureSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left -- Culture Text */}
          <div className="reveal">
            <div className="badge mx-auto lg:mx-0 mb-5">
              <Heart size={12} />
              Our Culture
            </div>

            <h2 className="font-display font-800 text-2xl sm:text-3xl lg:text-4xl text-ink mb-6 text-center lg:text-left">
              Remote-First,{' '}
              <span className="text-gradient">Mission-Driven</span>
            </h2>

            <div className="space-y-5 text-ink-secondary leading-relaxed font-body text-center lg:text-left">
              <p>
                At Scrubby, we believe great work happens when people have the freedom
                to work where and how they are most productive. Our team is distributed
                across Estonia, India, and the United States, united by a shared mission
                to make every email count.
              </p>

              <p>
                We are a small, agile team where every person makes a real impact.
                There are no layers of bureaucracy, no pointless meetings, and no
                work-for-the-sake-of-work. We ship fast, iterate often, and celebrate
                wins together.
              </p>

              <p>
                Whether you are an engineer who loves solving hard technical problems,
                a marketer who thrives on data-driven growth, or a support specialist
                who cares deeply about customer success &mdash; you will find a home
                at Scrubby.
              </p>
            </div>
          </div>

          {/* Right -- Team Locations */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="card p-8 relative overflow-hidden">
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl"
                style={{ background: 'rgba(45, 206, 142, 0.08)' }}
              />

              <div className="relative z-10">
                <h3 className="font-display font-700 text-xl text-ink mb-6 text-center">
                  Our Global Team
                </h3>

                <div className="space-y-4">
                  {teamLocations.map((location) => (
                    <div key={location.city} className="flex items-center gap-4 p-4 rounded-xl bg-surface-secondary">
                      <div className="w-10 h-10 rounded-xl bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                        <location.icon size={18} className="text-brand-green-dark" />
                      </div>
                      <div>
                        <p className="font-display font-700 text-sm text-ink">
                          {location.city}
                        </p>
                        <p className="text-xs text-ink-tertiary font-display font-500">
                          {location.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Remote badge */}
                <div className="mt-6 p-4 rounded-xl bg-brand-green/[0.04] border border-brand-green/10 text-center">
                  <p className="text-xs font-display font-500 text-ink-tertiary">
                    <Globe size={12} className="inline mr-1.5 text-brand-green-dark" />
                    Remote-first company &mdash; work from anywhere
                  </p>
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
   WHY WORK HERE SECTION
   ═══════════════════════════════════════════════════════ */

function WhyWorkHereSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Star size={12} />
            Why Scrubby
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Why Work{' '}
            <span className="text-gradient">With Us</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Join a team that values your contribution and invests in your growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {whyWorkHere.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="card p-8 reveal group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
                  <Icon size={24} className="text-ink" />
                </div>
                <h3 className="font-display font-700 text-xl text-ink mb-3">
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
   OPEN POSITIONS SECTION
   ═══════════════════════════════════════════════════════ */

function OpenPositionsSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Search size={12} />
            Open Positions
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Current{' '}
            <span className="text-gradient">Openings</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            We are always looking for talented people to join our growing team.
          </p>
        </div>

        {/* Empty State */}
        <div className="max-w-2xl mx-auto reveal">
          <div className="card p-10 md:p-14 text-center relative overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl"
              style={{ background: 'rgba(45, 206, 142, 0.06)' }}
            />

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-surface-secondary flex items-center justify-center mb-6">
                <Briefcase size={28} className="text-ink-muted" />
              </div>

              <h3 className="font-display font-700 text-xl text-ink mb-3">
                No Open Positions Right Now
              </h3>

              <p className="text-sm text-ink-secondary leading-relaxed font-body mb-6 max-w-md mx-auto">
                We don&apos;t have any specific openings at the moment, but we are always
                interested in hearing from talented people. If you think you would be a
                great fit for Scrubby, we&apos;d love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:careers@scrubby.io"
                  className="btn-primary"
                >
                  <Mail size={16} />
                  Send Your Resume
                </a>
                <p className="text-xs text-ink-muted font-body">
                  careers@scrubby.io
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   PERKS SECTION
   ═══════════════════════════════════════════════════════ */

function PerksSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Sparkles size={12} />
            Perks &amp; Benefits
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            What We{' '}
            <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            We take care of our team so they can focus on what matters most.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {perks.map((perk, i) => {
            const Icon = perk.icon
            return (
              <div
                key={perk.label}
                className="card p-6 text-center reveal group hover:shadow-card-hover transition-all duration-300"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-green-dark" />
                </div>
                <h3 className="font-display font-700 text-base text-ink mb-1">
                  {perk.label}
                </h3>
                <p className="text-xs text-ink-tertiary font-body">
                  {perk.description}
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
                <Mail size={12} />
                Get in Touch
              </div>

              <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Send Us Your{' '}
                <span className="text-gradient-light">Resume</span>
              </h2>

              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
                Even if there are no open positions listed, we are always interested in
                connecting with talented individuals who share our mission.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <a
                  href="mailto:careers@scrubby.io"
                  className="btn-primary text-base px-8 py-4"
                >
                  <Mail size={16} />
                  careers@scrubby.io
                </a>
                <Link to="/contact" className="btn-secondary-dark text-base px-8 py-4">
                  Contact Us
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-display font-500">
                <div className="flex items-center gap-1.5">
                  <Globe size={13} className="text-brand-green" />
                  Remote-First
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-brand-green" />
                  3 Continents
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={13} className="text-brand-green" />
                  Growing Team
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
   CAREERS PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function CareersPage() {
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
        title="Careers at Scrubby"
        description="Join the Scrubby team. View open positions and help us build the future of email validation."
        path="/about/careers"
      />
      <HeroSection />
      <CultureSection />
      <WhyWorkHereSection />
      <OpenPositionsSection />
      <PerksSection />
      <CtaSection />
    </main>
  )
}
