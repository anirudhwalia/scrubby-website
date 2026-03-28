import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  Heart, Target, Lightbulb, Shield, MapPin, Users,
  ArrowRight, Quote, Zap, Globe, Code, Star
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const companyStats = [
  { label: 'Founded', value: '2020', icon: Star },
  { label: 'Emails Validated', value: '10M+', icon: Zap },
  { label: 'Team Members', value: '25+', icon: Users },
  { label: 'Headquarters', value: 'Estonia', icon: Globe },
]

const values = [
  {
    icon: Target,
    title: 'Accuracy First',
    description: 'We obsess over delivering the most accurate email validation results in the industry. Our 98% deliverability rate is not a marketing claim, it is a commitment backed by real data and continuous improvement.',
    gradient: 'from-brand-green/10 to-brand-green/5',
  },
  {
    icon: Heart,
    title: 'Customer Obsession',
    description: 'Every decision we make starts with the customer. From transparent pricing with no hidden fees, to 24/7 support and personalized onboarding, we earn trust by putting your success first.',
    gradient: 'from-rose-100/60 to-rose-50/40',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Innovation',
    description: 'Email infrastructure evolves constantly and so do we. Our engineering team ships weekly improvements to stay ahead of catch-all domain patterns, ISP changes, and new validation challenges.',
    gradient: 'from-amber-100/60 to-amber-50/40',
  },
  {
    icon: Shield,
    title: 'Data Privacy',
    description: 'Your data is yours, period. We are fully GDPR compliant, encrypt everything in transit and at rest, and never share or sell your contact lists. Auto-deletion policies ensure nothing lingers after processing.',
    gradient: 'from-blue-100/60 to-blue-50/40',
  },
]

const locations = [
  {
    city: 'Tallinn, Estonia',
    type: 'Headquarters',
    address: 'Viru v\u00E4ljak 2, 10111 Tallinn',
    flag: '\uD83C\uDDEA\uD83C\uDDEA',
    description: 'Our global headquarters and the birthplace of Scrubby. Home to our leadership, product, and operations teams.',
  },
  {
    city: 'India',
    type: 'Engineering Hub',
    address: 'Engineering & Development',
    flag: '\uD83C\uDDEE\uD83C\uDDF3',
    description: 'Our core engineering team builds and scales the infrastructure that powers millions of email validations daily.',
  },
  {
    city: 'United States',
    type: 'Sales & Partnerships',
    address: 'Sales & Business Development',
    flag: '\uD83C\uDDFA\uD83C\uDDF8',
    description: 'Our North American team drives enterprise partnerships, customer success, and strategic growth initiatives.',
  },
]

/* ═══════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 bg-white overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="reveal">
          {/* Tag */}
          <div className="badge mx-auto mb-6">
            <Heart size={12} />
            Our Story
          </div>

          {/* Heading */}
          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight mb-6 max-w-4xl mx-auto">
            We&apos;re on a mission to make{' '}
            <span className="text-gradient">every email count</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-ink-secondary max-w-2xl mx-auto leading-relaxed font-body mb-8">
            Scrubby is part of the Vendisys ecosystem, a family of products designed
            to help sales teams prospect smarter, reach further, and close faster. We
            built Scrubby because we believe no valid lead should ever be left behind.
          </p>

          {/* Subtle accent */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-brand-green/40" />
            <div className="w-2 h-2 rounded-full bg-brand-green/30" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-brand-green/40" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   STORY SECTION
   ═══════════════════════════════════════════════════════ */

function StorySection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left -- Story */}
          <div className="reveal">
            <div className="badge mx-auto lg:mx-0 mb-5">
              <Zap size={12} />
              Origin Story
            </div>

            <h2 className="font-display font-800 text-2xl sm:text-3xl lg:text-4xl text-ink mb-6 text-center lg:text-left">
              Born from a{' '}
              <span className="text-gradient">Real Problem</span>
            </h2>

            <div className="space-y-5 text-ink-secondary leading-relaxed font-body text-center lg:text-left">
              <p>
                In 2020, our founding team was running large-scale outbound campaigns
                for sales teams across Europe. We kept hitting the same wall: up to 40%
                of our purchased lead lists were coming back as &quot;unknown&quot; or
                &quot;risky&quot; from every email verification tool on the market.
              </p>

              <p>
                These catch-all emails were costing sales teams real money. Teams were
                either skipping potentially valid leads (losing revenue) or sending to
                unverified addresses (destroying sender reputation). Neither option was
                acceptable.
              </p>

              <p>
                So we built Scrubby. Founded in Tallinn, Estonia, we developed proprietary
                technology that goes beyond standard SMTP checks to validate emails on
                catch-all domains at the inbox level. What started as an internal tool
                quickly became the go-to solution for thousands of teams worldwide.
              </p>

              <p className="text-sm text-ink-tertiary italic">
                Today, Scrubby operates as part of the Vendisys ecosystem, alongside other
                sales enablement tools designed to help teams prospect, validate, and convert
                more efficiently.
              </p>
            </div>
          </div>

          {/* Right -- Stats Card */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="card p-8 relative overflow-hidden">
              {/* Subtle decorative corner */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl"
                style={{ background: 'rgba(45, 206, 142, 0.08)' }}
              />

              <div className="relative z-10">
                <h3 className="font-display font-700 text-xl text-ink mb-8 text-center">
                  Scrubby at a Glance
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {companyStats.map((stat) => {
                    const Icon = stat.icon
                    return (
                      <div key={stat.label} className="text-center p-5 rounded-xl bg-surface-secondary">
                        <div className="w-10 h-10 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-3">
                          <Icon size={18} className="text-brand-green-dark" />
                        </div>
                        <div className="font-display font-800 text-2xl text-ink mb-1">
                          {stat.value}
                        </div>
                        <p className="text-xs text-ink-tertiary font-display font-500">
                          {stat.label}
                        </p>
                      </div>
                    )
                  })}
                </div>

                {/* Vendisys badge */}
                <div className="mt-8 p-4 rounded-xl bg-brand-green/[0.04] border border-brand-green/10 text-center">
                  <p className="text-xs font-display font-500 text-ink-tertiary">
                    Part of the{' '}
                    <span className="font-600 text-brand-green-dark">Vendisys</span>{' '}
                    ecosystem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider mt-24" />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   VALUES SECTION
   ═══════════════════════════════════════════════════════ */

function ValuesSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Star size={12} />
            Our Values
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            What We{' '}
            <span className="text-gradient">Believe In</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            These principles guide every decision we make, from product development
            to how we support our customers.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="card p-8 reveal group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
                  <Icon size={24} className="text-ink" />
                </div>
                <h3 className="font-display font-700 text-xl text-ink mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                  {value.description}
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
   TEAM / LEADERSHIP SECTION
   ═══════════════════════════════════════════════════════ */

function TeamSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Users size={12} />
            Leadership
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Meet the Team Behind{' '}
            <span className="text-gradient">Scrubby</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            A passionate team of engineers, data scientists, and customer success experts
            dedicated to solving email validation for good.
          </p>
        </div>

        {/* Founder Quote Card */}
        <div className="max-w-4xl mx-auto reveal">
          <div className="card p-8 md:p-12 relative overflow-hidden">
            {/* Decorative quote */}
            <Quote size={80} className="absolute top-4 right-4 text-surface-border opacity-30" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-green/20 to-brand-green/5 flex items-center justify-center border border-brand-green/10">
                    <span className="font-display font-800 text-2xl text-brand-green-dark">
                      EP
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-lg md:text-xl text-ink-secondary leading-relaxed font-body italic mb-6">
                    &ldquo;We started Scrubby because we saw a massive gap in email validation.
                    Every other tool was marking catch-all emails as unknown &mdash; leaving 40%
                    of good leads on the table. We knew there had to be a better way, and we
                    built it.&rdquo;
                  </blockquote>

                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <div>
                      <p className="font-display font-700 text-ink">
                        Erik Paulson
                      </p>
                      <p className="text-sm text-ink-tertiary font-display font-500">
                        CEO &amp; Founder
                      </p>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-surface-border mx-2" />
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded bg-brand-green-bg flex items-center justify-center">
                        <span className="text-[8px] font-display font-700 text-brand-green-dark">V</span>
                      </div>
                      <span className="text-xs text-ink-tertiary font-display font-500">
                        Vendisys Ecosystem
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Stats Bar */}
        <div className="max-w-3xl mx-auto mt-10 reveal">
          <div className="grid grid-cols-3 gap-4">
            <div className="card p-5 text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-3">
                <Code size={18} className="text-brand-green-dark" />
              </div>
              <p className="font-display font-700 text-lg text-ink">Engineering</p>
              <p className="text-xs text-ink-tertiary font-body mt-1">
                Building world-class validation infrastructure
              </p>
            </div>
            <div className="card p-5 text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-3">
                <Heart size={18} className="text-brand-green-dark" />
              </div>
              <p className="font-display font-700 text-lg text-ink">Customer Success</p>
              <p className="text-xs text-ink-tertiary font-body mt-1">
                Dedicated support for every customer
              </p>
            </div>
            <div className="card p-5 text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-3">
                <Lightbulb size={18} className="text-brand-green-dark" />
              </div>
              <p className="font-display font-700 text-lg text-ink">Product</p>
              <p className="text-xs text-ink-tertiary font-body mt-1">
                Innovating on email data intelligence
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="divider mt-24" />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   LOCATIONS SECTION
   ═══════════════════════════════════════════════════════ */

function LocationsSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Globe size={12} />
            Locations
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Global{' '}
            <span className="text-gradient">Presence</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            A distributed team spanning three continents, united by a shared mission
            to make email validation effortless and accurate.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {locations.map((location, i) => (
            <div
              key={location.city}
              className="card p-7 reveal group text-center"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Flag */}
              <div className="text-4xl mb-4">{location.flag}</div>

              {/* Type badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-display font-600 tracking-wide bg-brand-green-bg text-brand-green-dark mb-4">
                <MapPin size={10} />
                {location.type}
              </div>

              {/* City */}
              <h3 className="font-display font-700 text-lg text-ink mb-2">
                {location.city}
              </h3>

              {/* Address */}
              <p className="text-sm text-ink-tertiary font-display font-500 mb-3">
                {location.address}
              </p>

              {/* Description */}
              <p className="text-sm text-ink-secondary leading-relaxed font-body">
                {location.description}
              </p>
            </div>
          ))}
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
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="divider mb-24" />

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
                Join Us
              </div>

              <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Join Our{' '}
                <span className="text-gradient-light">Mission</span>
              </h2>

              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
                We are always looking for talented people who share our passion for
                building exceptional products. Explore opportunities or get in touch.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <Link to="/contact" className="btn-primary text-base px-8 py-4">
                  Get in Touch
                  <ArrowRight size={18} />
                </Link>
                <a href="https://vendisys.com" target="_blank" rel="noopener noreferrer" className="btn-secondary-dark text-base px-8 py-4">
                  <Globe size={16} />
                  Vendisys Careers
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-display font-500">
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-brand-green" />
                  Remote-Friendly
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={13} className="text-brand-green" />
                  25+ Team Members
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe size={13} className="text-brand-green" />
                  3 Continents
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
   ABOUT PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function AboutPage() {
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
        title="About Scrubby"
        description="Founded in 2020, Scrubby has validated over 10M+ emails. Meet the team behind the most accurate catch-all email validation tool."
        path="/about"
      />
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <LocationsSection />
      <CtaSection />
    </main>
  )
}
