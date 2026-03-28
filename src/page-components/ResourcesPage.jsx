import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen, ArrowRight, Zap, Users, Star, Shield,
  FileText, Code, Puzzle, Lightbulb, Mail, Search,
  ChevronRight, Sparkles, Send, ExternalLink, Calendar, Clock
} from 'lucide-react'
import SEO from '../components/SEO'
import { getRecentPosts, getAuthorBySlug, blogCategories } from '../data/blog'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const resources = [
  {
    category: 'Guide',
    title: 'How to Validate Risky Emails',
    description: 'Learn the step-by-step process for validating catch-all and risky emails that standard tools mark as unknown.',
    icon: Shield,
    color: 'from-brand-green/20 to-brand-green/5',
    iconColor: 'text-brand-green-dark',
    categoryColor: 'bg-brand-green-bg text-brand-green-dark',
  },
  {
    category: 'Guide',
    title: 'Understanding Catch-All Domains',
    description: 'What catch-all domains are, why they matter for your email campaigns, and how to handle them effectively.',
    icon: Search,
    color: 'from-blue-400/20 to-blue-400/5',
    iconColor: 'text-blue-600',
    categoryColor: 'bg-blue-50 text-blue-600',
  },
  {
    category: 'Blog',
    title: 'Email Deliverability Best Practices',
    description: 'Proven strategies to improve your email deliverability rates and protect your sender reputation across all major ISPs.',
    icon: Mail,
    color: 'from-amber-400/20 to-amber-400/5',
    iconColor: 'text-amber-600',
    categoryColor: 'bg-amber-50 text-amber-600',
  },
  {
    category: 'Tutorial',
    title: 'Integrating Scrubby with Your Stack',
    description: 'Step-by-step tutorials for connecting Scrubby with Clay, HubSpot, Instantly, SmartLead, Zapier, and more.',
    icon: Puzzle,
    color: 'from-purple-400/20 to-purple-400/5',
    iconColor: 'text-purple-600',
    categoryColor: 'bg-purple-50 text-purple-600',
  },
  {
    category: 'Docs',
    title: 'Scrubby API Documentation',
    description: 'Complete API reference with authentication, endpoints, webhooks, and code examples in multiple languages.',
    icon: Code,
    color: 'from-teal-400/20 to-teal-400/5',
    iconColor: 'text-teal-600',
    categoryColor: 'bg-teal-50 text-teal-600',
  },
  {
    category: 'Guide',
    title: 'Email Verification vs Validation',
    description: 'Understand the critical difference between email verification and validation, and why you need both for optimal results.',
    icon: Lightbulb,
    color: 'from-rose-400/20 to-rose-400/5',
    iconColor: 'text-rose-600',
    categoryColor: 'bg-rose-50 text-rose-600',
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
            <span className="text-white">Learn About </span>
            <span className="text-gradient-light">Email Validation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-body">
            Guides, tutorials, and best practices to help you get the most out of
            your email validation workflow.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   FEATURED RESOURCE SECTION
   ═══════════════════════════════════════════════════════ */

function FeaturedResourceSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal">
          <div className="max-w-5xl mx-auto">
            <div className="card p-0 overflow-hidden group hover:shadow-card-hover transition-all duration-300">
              <div className="grid md:grid-cols-2">
                {/* Left -- Visual */}
                <div className="relative p-10 md:p-14 flex items-center justify-center overflow-hidden" style={{ background: '#18181B' }}>
                  <div className="absolute inset-0 grid-bg opacity-30" />

                  {/* Decorative elements */}
                  <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" />
                  <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '1s' }} />

                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-6">
                      <FileText size={36} className="text-brand-green" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green">
                      <Star size={10} />
                      Featured Guide
                    </div>
                  </div>
                </div>

                {/* Right -- Content */}
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-display font-600 bg-brand-green-bg text-brand-green-dark w-fit mb-4">
                    <BookOpen size={10} />
                    Ultimate Guide
                  </div>

                  <h2 className="font-display font-800 text-2xl sm:text-3xl text-ink mb-4">
                    The Ultimate Guide to{' '}
                    <span className="text-gradient">Catch-All Emails</span>
                  </h2>

                  <p className="text-ink-secondary leading-relaxed font-body mb-6">
                    Everything you need to know about catch-all domains: what they are,
                    why standard tools fail to validate them, and how Scrubby&apos;s
                    proprietary technology delivers the answers other tools can&apos;t.
                    Includes real-world case studies and actionable strategies.
                  </p>

                  <div className="flex items-center gap-4">
                    <Link to="/how-it-works" className="btn-primary">
                      Read the Guide
                      <ArrowRight size={15} />
                    </Link>
                    <span className="text-xs text-ink-muted font-display font-500">
                      10 min read
                    </span>
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
   RESOURCES GRID SECTION
   ═══════════════════════════════════════════════════════ */

function ResourcesGridSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <FileText size={12} />
            All Resources
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Guides, Tutorials &amp;{' '}
            <span className="text-gradient">More</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Dive deep into email validation best practices with our curated collection
            of resources.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resources.map((resource, i) => {
            const Icon = resource.icon
            return (
              <div
                key={resource.title}
                className="glass-card p-7 reveal group cursor-pointer hover:shadow-card-hover transition-all duration-300"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={resource.iconColor} />
                </div>

                {/* Category tag */}
                <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-display font-600 ${resource.categoryColor} mb-3`}>
                  {resource.category}
                </div>

                {/* Title */}
                <h3 className="font-display font-700 text-lg text-ink mb-2 group-hover:text-brand-green-dark transition-colors duration-300">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-ink-tertiary leading-relaxed font-body mb-5">
                  {resource.description}
                </p>

                {/* Read More link */}
                <div className="flex items-center gap-1.5 text-sm text-brand-green-dark font-display font-600 group-hover:gap-2.5 transition-all duration-300">
                  Read More
                  <ChevronRight size={14} />
                </div>
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
   LATEST BLOG SECTION
   ═══════════════════════════════════════════════════════ */

function LatestBlogSection() {
  const recentPosts = getRecentPosts(6)

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    })
  }

  const getCategoryName = (slug) => {
    const cat = blogCategories.find(c => c.slug === slug)
    return cat ? cat.name : slug
  }

  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <div className="badge mx-auto mb-5">
            <BookOpen size={12} />
            Blog
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink mb-4">
            Latest from the{' '}
            <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Stay updated with the latest insights on email validation, deliverability, and lead generation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {recentPosts.map((post, i) => {
            const author = getAuthorBySlug(post.author)
            return (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-brand-green/30 transition-all duration-300 reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {post.thumbnail ? (
                  <div className="h-40 bg-slate-100 overflow-hidden">
                    <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ) : (
                  <div className="h-40 bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center p-6">
                    <h3 className="font-display text-sm font-bold text-white/80 text-center leading-tight line-clamp-3">
                      {post.title}
                    </h3>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-display font-medium px-2.5 py-1 rounded-full bg-brand-green-bg text-brand-green-dark">
                      {getCategoryName(post.category)}
                    </span>
                    <span className="text-xs text-ink-tertiary flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-ink mb-2 group-hover:text-brand-green-dark transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-ink-secondary mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-ink-tertiary">
                    {author?.avatar ? (
                      <img src={author.avatar} alt={author.name} className="w-5 h-5 rounded-full object-cover" />
                    ) : null}
                    <span className="font-display font-medium">{author?.name || 'Scrubby Team'}</span>
                    <span>·</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-10 reveal">
          <Link to="/blog" className="btn-primary">
            View All Articles
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   NEWSLETTER SECTION
   ═══════════════════════════════════════════════════════ */

function NewsletterSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto reveal">
          <div className="card p-10 md:p-14 text-center relative overflow-hidden">
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
                <Mail size={12} />
                Newsletter
              </div>

              <h2 className="font-display font-800 text-2xl sm:text-3xl text-ink mb-4">
                Stay{' '}
                <span className="text-gradient">Updated</span>
              </h2>

              <p className="text-ink-secondary leading-relaxed font-body mb-8 max-w-md mx-auto">
                Get the latest guides, tips, and product updates delivered straight
                to your inbox. No spam, just actionable insights.
              </p>

              {/* Email input (visual only) */}
              <div className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                  readOnly
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                  <Send size={14} />
                </button>
              </div>

              <p className="text-xs text-ink-muted font-body mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
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
                Get Started
              </div>

              <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Start Validating Your{' '}
                <span className="text-gradient-light">Emails</span>
              </h2>

              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
                Put what you&apos;ve learned into practice. Sign up for free and
                get 100 credits to start validating your email lists today.
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
   RESOURCES PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function ResourcesPage() {
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
        title="Resources"
        description="Email validation guides, API documentation, best practices, and tools from the Scrubby team."
        path="/resources"
      />
      <HeroSection />
      <FeaturedResourceSection />
      <ResourcesGridSection />
      <LatestBlogSection />
      <NewsletterSection />
      <CtaSection />
    </main>
  )
}
