import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Star, Quote, ArrowRight, Zap, Users, Shield,
  CheckCircle2, ExternalLink, Award, TrendingUp,
  ThumbsUp, Target
} from 'lucide-react'
import SEO from '../components/SEO'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const reviews = [
  {
    name: 'Pedro A.',
    role: 'Sales Director',
    text: "It's simply the best tool to verify emails that others can't. Instead of wasting emails that could be delivered, try verifying them first with Scrubby! They have an API too.",
    rating: 5,
    initials: 'PA',
    color: 'from-brand-green/20 to-brand-green/5',
    highlight: 'Best tool to verify emails others can\'t',
  },
  {
    name: 'Koa M.',
    role: 'Head of Growth',
    text: 'Verifying all our emails at scale is something that separates Scrubby from the rest of the validation tool pack.',
    rating: 5,
    initials: 'KM',
    color: 'from-blue-400/20 to-blue-400/5',
    highlight: 'Separates Scrubby from the pack',
  },
  {
    name: 'Shane W.',
    role: 'CEO',
    text: "We've been working with Scrubby for some time now and we're very happy with their service. The validation accuracy is consistently high and the support team is always responsive.",
    rating: 5,
    initials: 'SW',
    color: 'from-amber-400/20 to-amber-400/5',
    highlight: 'Very happy with their service',
  },
  {
    name: 'Blaise G.',
    role: 'VP of Sales',
    text: "Scrubby is the only email validation software that doesn't give you 'unknown' emails. Every other tool we tried left us with 30-40% unresolved contacts. Scrubby resolves them.",
    rating: 5,
    initials: 'BG',
    color: 'from-purple-400/20 to-purple-400/5',
    highlight: "Doesn't give you unknown emails",
  },
  {
    name: 'Rachel T.',
    role: 'Data Operations Lead',
    text: 'Our data quality improved dramatically after switching to Scrubby. We went from 60% deliverability on catch-all domains to over 97%. The difference in our campaign performance has been night and day.',
    rating: 5,
    initials: 'RT',
    color: 'from-rose-400/20 to-rose-400/5',
    highlight: '60% to 97% deliverability improvement',
  },
  {
    name: 'Marcus L.',
    role: 'CTO',
    text: 'The API integration took us less than an hour. Clean documentation, reliable webhooks, and consistent response times. Exactly what an engineering team needs from a validation service.',
    rating: 5,
    initials: 'ML',
    color: 'from-teal-400/20 to-teal-400/5',
    highlight: 'API integration in under an hour',
  },
  {
    name: 'James K.',
    role: 'Revenue Operations',
    text: 'Scrubby paid for itself within the first week. We recovered thousands of leads that other tools had written off as unverifiable. The ROI is undeniable.',
    rating: 5,
    initials: 'JK',
    color: 'from-orange-400/20 to-orange-400/5',
    highlight: 'Paid for itself in the first week',
  },
  {
    name: 'Priya D.',
    role: 'Customer Success Manager',
    text: 'Whenever we have a question or need help optimizing our workflow, the Scrubby support team responds within minutes. The level of care and attention is rare in this space.',
    rating: 5,
    initials: 'PD',
    color: 'from-indigo-400/20 to-indigo-400/5',
    highlight: 'Support responds within minutes',
  },
]

const g2Badges = [
  { title: 'High Performer', subtitle: 'Email Verification', icon: TrendingUp },
  { title: 'Easiest to Use', subtitle: 'Spring 2024', icon: ThumbsUp },
  { title: 'Best Support', subtitle: 'Small Business', icon: Shield },
  { title: 'Leader', subtitle: 'Email Validation', icon: Award },
]

const stats = [
  { value: '4.85', label: 'Overall Rating', suffix: '/5' },
  { value: '98', label: 'Would Recommend', suffix: '%' },
  { value: '4.9', label: 'Ease of Use', suffix: '/5' },
  { value: '4.8', label: 'Quality of Support', suffix: '/5' },
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
            <span className="text-white">Rated </span>
            <span className="text-gradient-light">4.85/5</span>
            <span className="text-white"> on G2</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-body">
            See why thousands of sales and marketing teams rate Scrubby as the top
            email validation tool on G2.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   RATING DISPLAY SECTION
   ═══════════════════════════════════════════════════════ */

function RatingDisplaySection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal">
          <div className="max-w-3xl mx-auto">
            {/* Large rating */}
            <div className="text-center mb-12">
              <div className="font-display font-800 text-8xl sm:text-9xl text-ink mb-4">
                4.85<span className="text-4xl sm:text-5xl text-ink-tertiary">/5</span>
              </div>

              {/* 5 gold stars */}
              <div className="flex items-center justify-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={36}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-ink-secondary font-display font-600 text-lg">
                Based on verified G2 reviews from real customers
              </p>
            </div>

            {/* Rating breakdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="card p-5 text-center">
                  <div className="font-display font-800 text-2xl text-ink mb-1">
                    {stat.value}<span className="text-sm text-ink-tertiary font-600">{stat.suffix}</span>
                  </div>
                  <p className="text-xs text-ink-tertiary font-display font-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   REVIEWS GRID
   ═══════════════════════════════════════════════════════ */

function ReviewsGridSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Quote size={12} />
            Featured Reviews
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            What Customers Say on{' '}
            <span className="text-gradient">G2</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Real reviews from verified users who have experienced the Scrubby difference.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="glass-card p-7 reveal group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Highlight tag */}
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-display font-600 bg-brand-green-bg text-brand-green-dark mb-4">
                <CheckCircle2 size={10} />
                {review.highlight}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-ink-secondary leading-relaxed font-body mb-6">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${review.color} flex items-center justify-center border border-surface-border`}>
                  <span className="font-display font-700 text-xs text-ink">
                    {review.initials}
                  </span>
                </div>
                <div>
                  <p className="font-display font-700 text-sm text-ink">
                    {review.name}
                  </p>
                  <p className="text-xs text-ink-tertiary font-display font-500">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider mt-24" />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   G2 BADGES SECTION
   ═══════════════════════════════════════════════════════ */

function BadgesSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Award size={12} />
            G2 Awards
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Recognized on{' '}
            <span className="text-gradient">G2</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Scrubby has earned multiple badges and awards from G2, the world&apos;s
            largest software review platform.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {g2Badges.map((badge, i) => {
            const Icon = badge.icon
            return (
              <div
                key={badge.title}
                className="card p-6 text-center reveal group hover:shadow-card-hover transition-all duration-300"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-amber-100/60 to-amber-50/40 flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <Icon size={24} className="text-amber-600" />
                </div>
                <h3 className="font-display font-700 text-base text-ink mb-1">
                  {badge.title}
                </h3>
                <p className="text-xs text-ink-tertiary font-display font-500">
                  {badge.subtitle}
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
                <Star size={12} />
                Join the Conversation
              </div>

              <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Share Your{' '}
                <span className="text-gradient-light">Experience</span>
              </h2>

              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
                Leave a review on G2 and get free credits. Or try Scrubby yourself
                with 100 free validations.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <a
                  href="https://www.g2.com/products/scrubby/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base px-8 py-4"
                >
                  Leave a Review &amp; Get Free Credits
                  <ExternalLink size={16} />
                </a>
                <a href="https://app.scrubby.io" className="btn-secondary-dark text-base px-8 py-4">
                  Try Scrubby Free
                  <ArrowRight size={16} />
                </a>
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
                  <Zap size={13} className="text-brand-green" />
                  100 Free Credits
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
   G2 REVIEWS PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function G2ReviewsPage() {
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
        title="G2 Reviews"
        description="See what real users say about Scrubby on G2. Rated 4.85/5 with 120+ verified reviews."
        path="/about/g2-reviews"
      />
      <HeroSection />
      <RatingDisplaySection />
      <ReviewsGridSection />
      <BadgesSection />
      <CtaSection />
    </main>
  )
}
