import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Users, ArrowRight, Zap, Globe, Star, Quote, Shield,
  Target, Heart, Lightbulb, Eye, MapPin, Building2, Sparkles
} from 'lucide-react'
import SEO from '../components/SEO'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We push the boundaries of email validation technology, developing proprietary methods that go beyond standard SMTP checks to deliver results no one else can.',
    gradient: 'from-amber-100/60 to-amber-50/40',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Every feature, every integration, and every pricing decision starts with the customer. We build what our users actually need, not what looks good on a features page.',
    gradient: 'from-rose-100/60 to-rose-50/40',
  },
  {
    icon: Shield,
    title: 'Data Privacy',
    description: 'Your data is yours. We are fully GDPR compliant, encrypt everything in transit and at rest, and never share or sell your contact lists. Trust is non-negotiable.',
    gradient: 'from-blue-100/60 to-blue-50/40',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'No hidden fees, no surprise charges, no opaque algorithms. We believe in clear pricing, honest metrics, and open communication with every customer.',
    gradient: 'from-brand-green/10 to-brand-green/5',
  },
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
            <span className="text-white">Meet the </span>
            <span className="text-gradient-light">Founders</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-body">
            The people behind Scrubby who are building the future of email validation,
            one catch-all domain at a time.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   FOUNDER SECTION
   ═══════════════════════════════════════════════════════ */

function FounderSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left -- Founder Info */}
          <div className="reveal">
            <div className="badge mx-auto lg:mx-0 mb-5">
              <Star size={12} />
              CEO &amp; Co-Founder
            </div>

            <h2 className="font-display font-800 text-2xl sm:text-3xl lg:text-4xl text-ink mb-6 text-center lg:text-left">
              Erik{' '}
              <span className="text-gradient">Paulson</span>
            </h2>

            <div className="space-y-5 text-ink-secondary leading-relaxed font-body text-center lg:text-left">
              <p>
                Erik built Scrubby to solve a problem he experienced firsthand: the massive
                gap in email validation where catch-all and risky emails were simply abandoned
                by existing tools. With a deep background in sales technology and email
                deliverability, he saw an opportunity to recover up to 40% of leads that
                competitors were marking as &quot;unknown.&quot;
              </p>

              <p>
                Based in Estonia, Erik leads Scrubby&apos;s vision of making every email
                count. Under his leadership, Scrubby has grown from an internal tool to
                a platform trusted by 2,500+ customers worldwide, processing millions of
                email validations with industry-leading 98% accuracy.
              </p>

              <p>
                His philosophy is simple: no valid lead should ever be left behind. Every
                product decision, every feature, and every integration is built with this
                principle at its core.
              </p>
            </div>

            {/* Location tag */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-6">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-600 bg-brand-green-bg text-brand-green-dark">
                <MapPin size={12} />
                Tallinn, Estonia
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-600 bg-blue-50 text-blue-600">
                <Building2 size={12} />
                Vendisys Ecosystem
              </div>
            </div>
          </div>

          {/* Right -- Founder Card */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="card p-8 relative overflow-hidden">
              {/* Decorative corner */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl"
                style={{ background: 'rgba(45, 206, 142, 0.08)' }}
              />

              <div className="relative z-10">
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-brand-green/20 to-brand-green/5 flex items-center justify-center border border-brand-green/10 mb-6">
                  <span className="font-display font-800 text-3xl text-brand-green-dark">
                    EP
                  </span>
                </div>

                <h3 className="font-display font-700 text-xl text-ink mb-1 text-center">
                  Erik Paulson
                </h3>
                <p className="text-sm text-ink-tertiary font-display font-500 text-center mb-6">
                  CEO &amp; Co-Founder
                </p>

                {/* Quote */}
                <div className="relative">
                  <Quote size={40} className="absolute -top-2 -left-1 text-surface-border opacity-40" />
                  <blockquote className="text-sm text-ink-secondary leading-relaxed font-body italic pl-8">
                    &ldquo;We started Scrubby because we saw a massive gap in email validation.
                    Every other tool was marking catch-all emails as unknown &mdash; leaving 40%
                    of good leads on the table. We knew there had to be a better way, and we
                    built it.&rdquo;
                  </blockquote>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-3 rounded-xl bg-surface-secondary">
                    <div className="font-display font-800 text-lg text-ink">2,500+</div>
                    <p className="text-[10px] text-ink-tertiary font-display font-500">Customers</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-surface-secondary">
                    <div className="font-display font-800 text-lg text-ink">10M+</div>
                    <p className="text-[10px] text-ink-tertiary font-display font-500">Emails</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-surface-secondary">
                    <div className="font-display font-800 text-lg text-ink">4.85</div>
                    <p className="text-[10px] text-ink-tertiary font-display font-500">G2 Rating</p>
                  </div>
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
   VISION SECTION
   ═══════════════════════════════════════════════════════ */

function VisionSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto reveal">
          <div className="card p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div
              className="absolute -top-20 -left-20 w-40 h-40 rounded-full blur-3xl"
              style={{ background: 'rgba(45, 206, 142, 0.06)' }}
            />
            <div
              className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl"
              style={{ background: 'rgba(45, 206, 142, 0.06)' }}
            />

            <div className="relative z-10">
              <div className="badge mx-auto mb-6">
                <Sparkles size={12} />
                Our Vision
              </div>

              <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-6 leading-tight">
                We believe every email deserves a{' '}
                <span className="text-gradient">fair chance</span>{' '}
                at validation
              </h2>

              <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body mb-8">
                While other tools give up on catch-all and risky emails, we see untapped
                potential. Our mission is to ensure that no valid email address is ever
                wrongly discarded &mdash; because behind every email is a potential customer,
                partner, or opportunity.
              </p>

              {/* Accent line */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-brand-green/40" />
                <div className="w-2 h-2 rounded-full bg-brand-green/30" />
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-brand-green/40" />
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
   COMPANY STORY SECTION
   ═══════════════════════════════════════════════════════ */

function CompanyStorySection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Globe size={12} />
            Our Story
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            From Estonia to the{' '}
            <span className="text-gradient">World</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            What started as a small team in Tallinn solving their own email problems
            has grown into a global platform trusted by thousands.
          </p>
        </div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="card p-7 reveal text-center" style={{ transitionDelay: '0s' }}>
            <div className="w-12 h-12 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-4">
              <MapPin size={20} className="text-brand-green-dark" />
            </div>
            <h3 className="font-display font-700 text-lg text-ink mb-2">
              Founded in Estonia
            </h3>
            <p className="text-sm text-ink-tertiary leading-relaxed font-body">
              Born in Tallinn, the heart of Europe&apos;s tech ecosystem. Our headquarters
              remain in Estonia, where our leadership and product teams drive the vision forward.
            </p>
          </div>

          <div className="card p-7 reveal text-center" style={{ transitionDelay: '0.1s' }}>
            <div className="w-12 h-12 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-4">
              <Users size={20} className="text-brand-green-dark" />
            </div>
            <h3 className="font-display font-700 text-lg text-ink mb-2">
              2,500+ Customers
            </h3>
            <p className="text-sm text-ink-tertiary leading-relaxed font-body">
              Serving customers globally, from high-growth startups to enterprise teams.
              Every day, more companies discover the power of proper email validation.
            </p>
          </div>

          <div className="card p-7 reveal text-center" style={{ transitionDelay: '0.2s' }}>
            <div className="w-12 h-12 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-4">
              <Building2 size={20} className="text-brand-green-dark" />
            </div>
            <h3 className="font-display font-700 text-lg text-ink mb-2">
              Vendisys Ecosystem
            </h3>
            <p className="text-sm text-ink-tertiary leading-relaxed font-body">
              Part of the Vendisys family of sales enablement products, designed to help
              teams prospect smarter, validate faster, and convert more efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   VALUES SECTION
   ═══════════════════════════════════════════════════════ */

function ValuesSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Target size={12} />
            Our Values
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            What Drives{' '}
            <span className="text-gradient">Us Forward</span>
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
                <Zap size={12} />
                Join Us
              </div>

              <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Join Our{' '}
                <span className="text-gradient-light">Mission</span>
              </h2>

              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
                We&apos;re always looking for talented people who share our passion for
                building exceptional products. Let&apos;s make every email count together.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <Link to="/contact" className="btn-primary text-base px-8 py-4">
                  Get in Touch
                  <ArrowRight size={18} />
                </Link>
                <Link to="/careers" className="btn-secondary-dark text-base px-8 py-4">
                  <Users size={16} />
                  View Careers
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-display font-500">
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-brand-green" />
                  Remote-Friendly
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe size={13} className="text-brand-green" />
                  3 Continents
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
   FOUNDERS PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function FoundersPage() {
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
        title="Meet Our Founders"
        description="Meet Erik Paulson and Anirudh Kaushal, the founders of Scrubby. Learn about their vision for email validation."
        path="/about/founders"
      />
      <HeroSection />
      <FounderSection />
      <VisionSection />
      <CompanyStorySection />
      <ValuesSection />
      <CtaSection />
    </main>
  )
}
