import { Link } from 'react-router-dom'
import SEO, { buildBreadcrumbSchema } from '../components/SEO'
import {
  ArrowRight, Upload, CheckCircle, Send, Zap, Shield,
  TrendingUp, ShieldCheck, Maximize2, UserPlus, Sparkles,
  Layers, ChevronRight
} from 'lucide-react'

/* ─── Data ─── */

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: 'Create Your Account',
    description:
      'Sign up in seconds and get 100 free credits to test. No credit card required — start validating immediately.',
  },
  {
    number: 2,
    icon: Upload,
    title: 'Submit Your Risky Email List',
    description:
      'Upload your catch-all or risky emails from any verification tool. Scrubby handles what others can\u2019t.',
  },
  {
    number: 3,
    icon: CheckCircle,
    title: 'Receive Your Validated List',
    description:
      'Get back a 98% validated lead list. Only truly deliverable emails make the cut.',
  },
]

const preScrubbyTools = [
  { name: 'ZeroBounce', logo: 'zerobounce' },
  { name: 'NeverBounce', logo: 'neverbounce' },
  { name: 'MillionVerifier', logo: 'millionverifier' },
  { name: 'Bouncer', logo: 'bouncer' },
  { name: 'Debounce', logo: 'debounce' },
  { name: 'Hunter.io', logo: 'hunter' },
]

const postScrubbyTools = [
  { name: 'Clay', logo: 'clay' },
  { name: 'SmartLead', logo: 'smartlead' },
  { name: 'Instantly', logo: 'instantly' },
  { name: 'HubSpot', logo: 'hubspot' },
  { name: 'Salesforce', logo: 'salesforce' },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Superior Email Validation',
    description:
      'Validates risky emails beyond basic verification, ensuring genuinely deliverable addresses.',
  },
  {
    icon: Maximize2,
    title: 'Maximized List Potential',
    description:
      'Recover otherwise discarded emails, potentially doubling your usable list size.',
  },
  {
    icon: Shield,
    title: 'Domain Reputation Protection',
    description:
      'Invalid emails harm sender reputation; our validation preserves your domain score.',
  },
  {
    icon: TrendingUp,
    title: 'Increased ROI',
    description:
      'Better engagement rates from refined, larger lists improve your email marketing returns.',
  },
]

/* ─── Page ─── */

export default function HowItWorksPage() {
  return (
    <main>
      <SEO
        title="How It Works"
        description="Learn how Scrubby validates catch-all and risky emails in 3 simple steps. Upload your list, we test each email, and you get 98% accurate results."
        path="/how-it-works"
        schema={buildBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'How It Works' }])}
      />
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 bg-navy-800 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div
          className="absolute w-[500px] h-[500px] -top-32 -left-32 rounded-full blur-3xl animate-pulse opacity-50"
          style={{ background: 'rgba(45, 206, 142, 0.08)' }}
        />
        <div
          className="absolute w-[350px] h-[350px] top-16 right-0 rounded-full blur-3xl animate-pulse"
          style={{ background: 'rgba(45, 206, 142, 0.05)', animationDelay: '2s' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="reveal">
            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5">
              How Scrubby{' '}
              <span className="text-gradient-light">Works</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 font-body">
              Verify your risky emails at scale in 3 easy steps. Submit your lead
              list, get it scrubbed, and receive an optimized list with 98%
              accuracy.
            </p>
            <a href="https://app.scrubby.io" className="btn-primary">
              Try It Free
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── 3-Step Process ── */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting dotted line (desktop) */}
            <div className="hidden md:block absolute top-20 left-[20%] right-[20%]">
              <div
                className="h-px w-full"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(to right, #2DCE8E 0, #2DCE8E 6px, transparent 6px, transparent 14px)',
                }}
              />
            </div>

            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="reveal relative text-center"
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  {/* Numbered circle */}
                  <div className="relative mx-auto mb-8 w-fit">
                    <div className="w-20 h-20 rounded-2xl bg-brand-green/8 border border-brand-green/15 flex items-center justify-center relative z-10">
                      <Icon size={28} className="text-brand-green-dark" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-sm font-display font-700 text-white z-20 shadow-lg shadow-brand-green/30">
                      {step.number}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="font-display font-700 text-lg text-ink mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-ink-secondary leading-relaxed font-body">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Integration Flow ── */}
      <section className="relative py-24 bg-surface-secondary overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="badge mx-auto mb-5">
              <Layers size={12} />
              Integrations
            </div>
            <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink mb-4">
              Works With Your{' '}
              <span className="text-gradient">Existing Stack</span>
            </h2>
            <p className="text-ink-secondary text-base max-w-xl mx-auto font-body">
              Scrubby complements your existing email verification tools. Run your
              list through your preferred SMTP tool first, then send the risky
              results to Scrubby.
            </p>
          </div>

          {/* Visual Flow */}
          <div className="reveal">
            <div className="grid md:grid-cols-3 gap-6 items-stretch mb-16">
              {/* Step 1: Your Verifier */}
              <div className="card p-6 text-center flex flex-col">
                <div className="w-12 h-12 mx-auto rounded-xl bg-amber-50 border border-amber-200/50 flex items-center justify-center mb-4">
                  <Layers size={22} className="text-amber-600" />
                </div>
                <h3 className="font-display font-700 text-base text-ink mb-2">
                  Your Verifier
                </h3>
                <p className="text-sm text-ink-tertiary font-body mb-5">
                  Flags risky &amp; catch-all emails as &quot;unknown&quot;
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-auto">
                  {preScrubbyTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-2 bg-white border border-surface-border rounded-lg px-3 py-2"
                    >
                      <img
                        src={`/logos/integrations/${tool.logo}.png`}
                        alt={tool.name}
                        className="w-5 h-5 rounded object-contain"
                      />
                      <span className="text-xs font-display font-500 text-ink-secondary">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Scrubby Validates */}
              <div className="card p-6 text-center flex flex-col ring-2 ring-brand-green shadow-green-glow">
                <div className="w-12 h-12 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-4">
                  <ShieldCheck size={22} className="text-brand-green-dark" />
                </div>
                <h3 className="font-display font-700 text-base text-ink mb-2">
                  Scrubby Validates
                </h3>
                <p className="text-sm text-ink-tertiary font-body mb-5">
                  Verifies inbox deliverability on catch-all domains with 98%
                  accuracy
                </p>
                <div className="mt-auto flex justify-center">
                  <span className="badge text-[10px] py-0.5">
                    <Zap size={10} />
                    98% Deliverability
                  </span>
                </div>
              </div>

              {/* Step 3: Send with Confidence */}
              <div className="card p-6 text-center flex flex-col">
                <div className="w-12 h-12 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-4">
                  <Send size={22} className="text-brand-green-dark" />
                </div>
                <h3 className="font-display font-700 text-base text-ink mb-2">
                  Send with Confidence
                </h3>
                <p className="text-sm text-ink-tertiary font-body mb-5">
                  Clean, validated data flows to your sending platform
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-auto">
                  {postScrubbyTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-2 bg-white border border-surface-border rounded-lg px-3 py-2"
                    >
                      <img
                        src={`/logos/integrations/${tool.logo}.png`}
                        alt={tool.name}
                        className="w-5 h-5 rounded object-contain"
                      />
                      <span className="text-xs font-display font-500 text-ink-secondary">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Flow Arrows (mobile-friendly horizontal summary) */}
            <div className="hidden md:flex items-center justify-center gap-4 text-sm font-display font-600">
              <span className="text-ink-secondary">Your Verifier</span>
              <ChevronRight size={16} className="text-brand-green" />
              <span className="text-brand-green-dark">Scrubby Validates</span>
              <ChevronRight size={16} className="text-brand-green" />
              <span className="text-ink-secondary">Send with Confidence</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="badge mx-auto mb-5">
              <Zap size={12} />
              Benefits
            </div>
            <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink mb-4">
              Why teams choose{' '}
              <span className="text-gradient">Scrubby</span>
            </h2>
            <p className="text-ink-secondary text-base max-w-lg mx-auto font-body">
              Go beyond basic email verification. Scrubby delivers real results
              where other tools fall short.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="glass-card p-6 rounded-xl text-center hover:shadow-card-hover transition-all duration-300"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-5">
                    <Icon size={22} className="text-brand-green-dark" />
                  </div>
                  <h3 className="font-display font-700 text-base text-ink mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed font-body">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative py-24 bg-surface-secondary overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="reveal">
            <div className="card-dark p-10 md:p-16 relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 grid-bg opacity-30" />

              {/* Decorative dots */}
              <div className="absolute top-8 left-8 glow-dot animate-pulse-glow" />
              <div
                className="absolute top-12 right-16 glow-dot animate-pulse-glow"
                style={{ animationDelay: '1s' }}
              />
              <div
                className="absolute bottom-16 left-20 glow-dot animate-pulse-glow"
                style={{ animationDelay: '2s' }}
              />
              <div
                className="absolute bottom-8 right-8 glow-dot animate-pulse-glow"
                style={{ animationDelay: '0.5s' }}
              />

              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-6">
                  <Zap size={24} className="text-brand-green" />
                </div>
                <h2 className="font-display font-800 text-3xl sm:text-4xl text-white mb-4 leading-tight">
                  Start with{' '}
                  <span className="text-gradient-light">100 free credits</span>
                </h2>
                <p className="text-slate-300 text-base max-w-lg mx-auto mb-10 font-body">
                  Optimize your campaign efficiency with Scrubby. No credit card
                  required.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a href="https://app.scrubby.io" className="btn-primary">
                    Get Started Free
                    <ArrowRight size={15} />
                  </a>
                  <Link to="/contact" className="btn-secondary-dark">
                    Book a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
