import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Zap, Shield, CheckCircle2, Mail,
  Search, BarChart3, AlertTriangle, TestTube2, Sparkles,
  FileSpreadsheet, Layers
} from 'lucide-react'
import SEO from '../components/SEO'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const products = [
  {
    icon: FileSpreadsheet,
    iconBg: 'bg-brand-green-bg',
    iconColor: 'text-brand-green-dark',
    title: 'Bulk Email List Cleaning',
    description:
      'Upload your email list and get it cleaned in bulk. Remove invalid, risky, and catch-all emails at scale.',
    to: '/bulk-cleaning',
  },
  {
    icon: Search,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    title: 'Risky Email Finder',
    description:
      'Identify risky and catch-all emails that standard verification tools miss. Recover up to 42% more leads.',
    to: '/risky-email-finder',
  },
  {
    icon: Shield,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    title: 'Risky Email Validation',
    description:
      'Validate risky emails with deep inbox-level testing. Get definitive valid/invalid results in 48-72 hours.',
    to: '/risky-email-validation',
  },
  {
    icon: Mail,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-500',
    title: 'Email Verification Tools',
    description:
      'Complete email verification toolkit. Verify individual emails or integrate via API.',
    to: '/email-verification-tools',
  },
  {
    icon: AlertTriangle,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-400',
    title: 'Blacklist Monitor',
    description:
      'Monitor your sending domains and IPs against 100+ blacklists. Get alerts before deliverability drops.',
    to: '/blacklist-monitor',
  },
  {
    icon: TestTube2,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-500',
    title: 'Email Testing',
    description:
      'Test your emails before sending. Check deliverability, spam scores, and inbox placement.',
    to: '/email-testing',
  },
  {
    icon: Sparkles,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    title: 'Email List Scrubber',
    description:
      'Deep-clean your email lists by scrubbing invalid, disposable, role-based, and risky addresses.',
    to: '/email-list-scrubber',
  },
]

/* ═══════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 bg-navy-800 overflow-hidden">
      {/* Background effects */}
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
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Decorative dots */}
      <div className="absolute top-12 left-12 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" />
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-8">
            <Layers size={12} />
            Product Suite
          </div>

          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-4xl mx-auto">
            Our{' '}
            <span className="text-gradient-light">Products</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 font-body">
            A complete suite of email validation, list cleaning, and deliverability
            tools. Everything you need to protect your sender reputation and maximize
            campaign performance.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   PRODUCTS GRID SECTION
   ═══════════════════════════════════════════════════════ */

function ProductsGridSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Zap size={12} />
            Explore
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Tools Built for{' '}
            <span className="text-gradient">Email Success</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            From bulk list cleaning to real-time blacklist monitoring, Scrubby
            has the tools to keep your email outreach performing at its best.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, i) => {
            const Icon = product.icon
            return (
              <Link
                key={product.to}
                to={product.to}
                className="group bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-lg hover:border-brand-green/30 transition-all duration-300 reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${product.iconBg} flex items-center justify-center mb-5 group-hover:shadow-lg transition-shadow duration-300`}>
                  <Icon size={24} className={product.iconColor} />
                </div>

                {/* Title */}
                <h3 className="font-display font-700 text-lg text-ink mb-2 group-hover:text-brand-green-dark transition-colors duration-300">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-ink-tertiary leading-relaxed font-body mb-5">
                  {product.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-1.5 text-sm text-brand-green-dark font-display font-600 group-hover:gap-2.5 transition-all duration-300">
                  Learn More
                  <ArrowRight size={14} />
                </div>
              </Link>
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
    <section className="relative py-24 overflow-hidden bg-surface-secondary">
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
                Ready to Improve Your{' '}
                <span className="text-gradient-light">Deliverability?</span>
              </h2>

              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
                Sign up for free and get 100 credits to validate your risky
                emails. No credit card required.
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
                  <CheckCircle2 size={13} className="text-brand-green" />
                  No Credit Card Required
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles size={13} className="text-brand-green" />
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
   PRODUCTS PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function ProductsPage() {
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
        title="Products"
        description="Explore Scrubby's complete suite of email validation, list cleaning, and deliverability tools. Bulk cleaning, risky email validation, blacklist monitoring, and more."
        path="/products"
      />
      <HeroSection />
      <ProductsGridSection />
      <CtaSection />
    </main>
  )
}
