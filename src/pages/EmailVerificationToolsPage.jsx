import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Zap, CheckCircle2, Shield, TrendingUp,
  Layers, Search, Target, Plug, HelpCircle, BarChart3,
  ArrowDownRight, Sparkles, Check, XCircle, Mail
} from 'lucide-react'
import SEO from '../components/SEO'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const verificationVsValidation = [
  {
    title: 'Email Verification',
    icon: Shield,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    description: 'The process of checking whether an email address is syntactically correct, associated with a valid domain, and has an active mailbox. Verification uses SMTP handshakes and DNS lookups to confirm an address exists.',
    bestFor: 'Initial list hygiene, removing obvious invalids, syntax errors, and inactive domains.',
  },
  {
    title: 'Email Validation',
    icon: Target,
    iconBg: 'bg-brand-green-bg',
    iconColor: 'text-brand-green-dark',
    description: 'A deeper process that goes beyond existence checks to determine deliverability. Validation involves testing whether an email can actually receive messages, especially important for catch-all and risky domains.',
    bestFor: 'Resolving risky and catch-all emails that verification tools flag but cannot classify.',
  },
]

const toolsComparison = [
  {
    name: 'ZeroBounce',
    focus: 'Comprehensive verification with AI scoring',
    strength: 'Broad feature set including DMARC monitoring and inbox placement testing',
    catchAll: 'Flags as catch-all (unresolved)',
    link: '/alternative/zerobounce',
  },
  {
    name: 'NeverBounce',
    focus: 'Real-time and bulk email verification',
    strength: 'Fast processing with easy API integration and CRM connectors',
    catchAll: 'Marks as accept-all (unresolved)',
    link: '/alternative/neverbounce',
  },
  {
    name: 'BriteVerify',
    focus: 'Enterprise email verification',
    strength: 'Trusted by large enterprises with strong compliance and data security',
    catchAll: 'Returns as unknown (unresolved)',
    link: '/alternative/briteverify',
  },
  {
    name: 'MillionVerifier',
    focus: 'Budget-friendly bulk verification',
    strength: 'Affordable pricing for high-volume list cleaning with decent accuracy',
    catchAll: 'Labels as risky (unresolved)',
  },
  {
    name: 'DeBounce',
    focus: 'Accurate verification with disposable detection',
    strength: 'Strong at detecting temporary and disposable email addresses',
    catchAll: 'Flags as accept-all (unresolved)',
  },
  {
    name: 'Bouncer',
    focus: 'European email verification service',
    strength: 'GDPR-focused with strong privacy practices and good accuracy',
    catchAll: 'Returns as unknown (unresolved)',
  },
]

const workflowSteps = [
  {
    step: '01',
    icon: Shield,
    title: 'Run Initial Verification',
    description: 'Use your preferred verification tool to clean your list. Remove obvious invalids, syntax errors, and inactive domains.',
  },
  {
    step: '02',
    icon: ArrowDownRight,
    title: 'Export the Risky Segment',
    description: 'Isolate the emails flagged as catch-all, risky, unknown, or accept-all. This is the segment that needs deeper validation.',
  },
  {
    step: '03',
    icon: Sparkles,
    title: 'Validate with Scrubby',
    description: 'Send the risky segment to Scrubby for inbox-level validation. Get definitive valid or invalid results within 2-3 days.',
  },
  {
    step: '04',
    icon: CheckCircle2,
    title: 'Deploy Your Full List',
    description: 'Combine verified and validated results for maximum list coverage. Launch campaigns with confidence and near-zero bounce rates.',
  },
]

const choosingCriteria = [
  {
    icon: BarChart3,
    title: 'Accuracy & Coverage',
    description: 'Look for tools with high accuracy rates and the ability to handle edge cases. Consider whether the tool can resolve catch-all domains or only flag them.',
  },
  {
    icon: Zap,
    title: 'Processing Speed',
    description: 'Real-time verification is important for point-of-capture validation. Bulk processing speed matters for large lists. Balance speed with thoroughness.',
  },
  {
    icon: Plug,
    title: 'Integrations & API',
    description: 'Check if the tool integrates with your CRM, email platform, and outreach tools. A well-documented API makes custom workflows possible.',
  },
  {
    icon: HelpCircle,
    title: 'Catch-All Handling',
    description: 'This is often the deciding factor. Most tools flag catch-all emails without resolution. Adding a validation layer like Scrubby fills this critical gap.',
  },
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
            <Mail size={12} />
            Email Verification
          </div>

          <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
            <span className="text-white">Understanding Email </span>
            <span className="text-gradient-light">Verification Tools</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-body">
            A comprehensive guide to the email verification landscape, how the top tools
            compare, and where Scrubby fits into your stack.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
              Add Scrubby to Your Stack
              <ArrowRight size={18} />
            </a>
            <Link to="/how-it-works" className="btn-secondary-dark text-base px-8 py-4">
              How Scrubby Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   VERIFICATION VS VALIDATION SECTION
   ═══════════════════════════════════════════════════════ */

function VerificationVsValidationSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Layers size={12} />
            Key Difference
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Verification vs{' '}
            <span className="text-gradient">Validation</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            These terms are often used interchangeably, but they represent two
            distinct stages of ensuring email deliverability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {verificationVsValidation.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="card p-8 reveal group"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
                  <Icon size={24} className={item.iconColor} />
                </div>
                <h3 className="font-display font-700 text-xl text-ink mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-tertiary leading-relaxed font-body mb-4">
                  {item.description}
                </p>
                <div className="p-3 rounded-lg bg-surface-secondary">
                  <p className="text-xs font-display font-600 text-ink-muted uppercase tracking-wider mb-1">
                    Best For
                  </p>
                  <p className="text-sm text-ink-secondary font-body">
                    {item.bestFor}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   TOOLS COMPARISON SECTION
   ═══════════════════════════════════════════════════════ */

function ToolsComparisonSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Search size={12} />
            Tool Comparison
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            Popular verification{' '}
            <span className="text-gradient">tools</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Here is how the most popular email verification services compare. All are
            strong at general verification but limited with catch-all domains.
          </p>
        </div>

        <div className="reveal">
          <div className="card overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 border-b border-surface-border">
              <div className="px-6 py-4 text-[11px] font-display font-600 text-ink-muted uppercase tracking-wider">
                Tool
              </div>
              <div className="px-6 py-4 text-[11px] font-display font-600 text-ink-muted uppercase tracking-wider">
                Focus
              </div>
              <div className="px-6 py-4 text-[11px] font-display font-600 text-ink-muted uppercase tracking-wider">
                Key Strength
              </div>
              <div className="px-6 py-4 text-[11px] font-display font-600 text-ink-muted uppercase tracking-wider">
                Catch-All Handling
              </div>
            </div>

            {/* Table Rows */}
            {toolsComparison.map((tool, i) => (
              <div
                key={tool.name}
                className={`grid grid-cols-4 ${i < toolsComparison.length - 1 ? 'border-b border-surface-border/50' : ''} hover:bg-surface-secondary/30 transition-colors`}
              >
                <div className="px-6 py-4">
                  {tool.link ? (
                    <Link to={tool.link} className="text-sm font-display font-600 text-ink hover:text-brand-green-dark transition-colors">
                      {tool.name}
                    </Link>
                  ) : (
                    <span className="text-sm font-display font-600 text-ink">
                      {tool.name}
                    </span>
                  )}
                </div>
                <div className="px-6 py-4 text-sm text-ink-secondary font-body">
                  {tool.focus}
                </div>
                <div className="px-6 py-4 text-sm text-ink-secondary font-body">
                  {tool.strength}
                </div>
                <div className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-display font-500 text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                    <XCircle size={11} />
                    {tool.catchAll}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   WHERE SCRUBBY FITS SECTION
   ═══════════════════════════════════════════════════════ */

function WhereScrubbyFitsSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <Sparkles size={12} />
            Where Scrubby Fits
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            After verification,{' '}
            <span className="text-gradient">before sending</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Scrubby is not a replacement for your verification tool. It is the essential
            second layer that validates the risky segment they leave behind.
          </p>
        </div>

        {/* Workflow */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto reveal">
          {workflowSteps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.step}
                className="card p-7 reveal text-center relative group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-5xl font-display font-800 text-surface-tertiary mb-4 group-hover:text-brand-green/20 transition-colors duration-300">
                  {step.step}
                </div>

                <div className="w-12 h-12 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-green-dark" />
                </div>

                <h3 className="font-display font-700 text-base text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                  {step.description}
                </p>

                {i < workflowSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight size={16} className="text-ink-muted" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Key difference callout */}
        <div className="mt-16 max-w-3xl mx-auto reveal">
          <div className="glass-card p-7 flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-brand-green-bg flex items-center justify-center flex-shrink-0">
              <Target size={22} className="text-brand-green-dark" />
            </div>
            <div>
              <h4 className="font-display font-700 text-base text-ink mb-2">
                The Scrubby Difference
              </h4>
              <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                While verification tools rely on SMTP handshakes, Scrubby sends actual blank test emails
                to determine if a catch-all mailbox exists. This is the only way to get definitive results
                on addresses that other tools cannot resolve. The result: 98.7% accuracy and up to 83%
                recovery of risky emails as valid, deliverable leads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   HOW TO CHOOSE SECTION
   ═══════════════════════════════════════════════════════ */

function HowToChooseSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="badge mx-auto mb-5">
            <HelpCircle size={12} />
            Choosing a Tool
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
            How to choose the{' '}
            <span className="text-gradient">right tool</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Consider these factors when evaluating email verification and validation tools
            for your specific needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {choosingCriteria.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="card p-8 reveal group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-green-bg flex items-center justify-center flex-shrink-0 group-hover:shadow-green-glow transition-shadow duration-300">
                    <Icon size={22} className="text-brand-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-lg text-ink mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                      {item.description}
                    </p>
                  </div>
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
   CTA SECTION
   ═══════════════════════════════════════════════════════ */

function CtaSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="reveal">
          <div className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden" style={{ background: '#18181B' }}>
            <div className="absolute inset-0 grid-bg opacity-30" />

            <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" />
            <div className="absolute top-12 right-16 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-16 left-20 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '0.5s' }} />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-600 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-6">
                <Plug size={12} />
                Complete Your Stack
              </div>

              <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Add Scrubby to{' '}
                <span className="text-gradient-light">Your Stack</span>
              </h2>

              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
                Start with 100 free credits. Validate the risky emails your current
                tools flag but cannot resolve.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <a href="https://app.scrubby.io" className="btn-primary text-base px-8 py-4">
                  Get Started Free
                  <ArrowRight size={18} />
                </a>
                <Link to="/pricing" className="btn-secondary-dark text-base px-8 py-4">
                  View Pricing
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-display font-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-brand-green" />
                  100 Free Credits
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-brand-green" />
                  No Credit Card Required
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-brand-green" />
                  Works with Any Tool
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
   EMAIL VERIFICATION TOOLS PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function EmailVerificationToolsPage() {
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
        title="Email Verification Tools"
        description="Complete suite of email verification tools. Validate catch-all emails, check blacklists, test deliverability, and clean lists."
        path="/email-verification-tools"
      />
      <HeroSection />
      <VerificationVsValidationSection />
      <ToolsComparisonSection />
      <WhereScrubbyFitsSection />
      <HowToChooseSection />
      <CtaSection />
    </main>
  )
}
