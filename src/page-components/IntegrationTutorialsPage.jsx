import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Puzzle, Code2, Zap, BookOpen,
  ChevronRight, MessageSquare
} from 'lucide-react'
import SEO from '../components/SEO'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const tutorials = [
  {
    name: 'Clay',
    description: 'Connect Scrubby with Clay for enriched outreach',
    link: '/blog/scrubby-clay-integration',
    icon: Puzzle,
  },
  {
    name: 'HubSpot',
    description: 'Validate emails directly in HubSpot CRM',
    link: '/blog/scrubby-hubspot-integration',
    icon: Puzzle,
  },
  {
    name: 'Zapier',
    description: 'Automate email validation workflows',
    link: '/integrations',
    icon: Zap,
  },
  {
    name: 'Instantly',
    description: 'Improve deliverability for cold outreach',
    link: '/alternatives/instantly',
    icon: Puzzle,
  },
  {
    name: 'SmartLead',
    description: 'Scale email campaigns with validated lists',
    link: '/alternatives/smartleads',
    icon: Puzzle,
  },
  {
    name: 'API',
    description: 'Build custom integrations with our REST API',
    link: '/integrations',
    icon: Code2,
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
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Decorative dots */}
      <div className="absolute top-12 left-12 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" />
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="reveal">
          <div className="badge mx-auto mb-5">
            <BookOpen size={12} />
            Tutorials
          </div>

          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-4xl mx-auto">
            Integration{' '}
            <span className="text-gradient-light">Tutorials</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Step-by-step guides for connecting Scrubby with your favorite tools.
            Get up and running in minutes.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   TUTORIALS GRID SECTION
   ═══════════════════════════════════════════════════════ */

function TutorialsGridSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Puzzle size={12} />
            Guides
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink mb-5">
            Connect Your{' '}
            <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Choose an integration below to see how Scrubby fits into your
            existing workflow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tutorials.map((tutorial, i) => {
            const Icon = tutorial.icon
            return (
              <Link
                key={tutorial.name}
                to={tutorial.link}
                className="card p-7 group hover:shadow-card-hover transition-all duration-300 reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-green-bg flex items-center justify-center mb-5">
                  <Icon size={22} className="text-brand-green-dark" />
                </div>

                {/* Tool name */}
                <h3 className="font-display font-700 text-lg text-ink mb-2 group-hover:text-brand-green-dark transition-colors duration-300">
                  {tutorial.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-ink-tertiary leading-relaxed font-body mb-5">
                  {tutorial.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-1.5 text-sm text-brand-green-dark font-display font-600 group-hover:gap-2.5 transition-all duration-300">
                  View Tutorial
                  <ChevronRight size={14} />
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
              <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-6">
                <MessageSquare size={24} className="text-brand-green" />
              </div>

              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white mb-4">
                Need help with a custom integration?
              </h2>

              <p className="text-slate-300 text-base max-w-lg mx-auto mb-8 font-body">
                Our team can help you build a custom workflow that fits your
                exact needs. Reach out and we&apos;ll get you set up.
              </p>

              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   INTEGRATION TUTORIALS PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function IntegrationTutorialsPage() {
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
        title="Integration Tutorials"
        description="Step-by-step tutorials for integrating Scrubby with Clay, HubSpot, Zapier, Instantly, SmartLead, and the Scrubby API."
        path="/integrations-tutorials"
      />
      <HeroSection />
      <TutorialsGridSection />
      <CtaSection />
    </main>
  )
}
