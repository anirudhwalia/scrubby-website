import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  ArrowRight, Zap, Code2, Plug, CheckCircle2,
  Globe, ExternalLink, Layers, Tag, ShieldCheck
} from 'lucide-react'

/* ─── Data ─── */

const preScrubbyTools = [
  { name: 'ZeroBounce', logo: 'zerobounce', description: 'Email verification & scoring', category: 'Email Verification' },
  { name: 'NeverBounce', logo: 'neverbounce', description: 'Real-time email verification', category: 'Email Verification' },
  { name: 'MillionVerifier', logo: 'millionverifier', description: 'Bulk email verification', category: 'Email Verification' },
  { name: 'Bouncer', logo: 'bouncer', description: 'Email deliverability tools', category: 'Email Verification' },
  { name: 'Debounce', logo: 'debounce', description: 'Email validation API', category: 'Email Verification' },
  { name: 'Hunter.io', logo: 'hunter', description: 'Email finder & verifier', category: 'Email Verification' },
]

const postScrubbyTools = [
  { name: 'Clay', logo: 'clay', description: 'Data enrichment & outreach', category: 'Outreach' },
  { name: 'SmartLead', logo: 'smartlead', description: 'Cold email outreach at scale', category: 'Outreach' },
  { name: 'Instantly', logo: 'instantly', description: 'Email outreach automation', category: 'Outreach' },
  { name: 'HubSpot', logo: 'hubspot', description: 'CRM & marketing automation', category: 'CRM' },
  { name: 'Salesforce', logo: 'salesforce', description: 'Enterprise CRM platform', category: 'CRM' },
  { name: 'Pipedrive', logo: 'pipedrive', description: 'Sales pipeline management', category: 'CRM' },
  { name: 'Mailchimp', logo: 'mailchimp', description: 'Email marketing platform', category: 'Email Marketing' },
  { name: 'Zapier', logo: 'zapier', description: 'Workflow automation platform', category: 'Automation' },
]

const apiSnippet = `curl -X POST https://api.scrubby.io/v1/validate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"email": "test@example.com"}'`

const apiResponse = `{
  "email": "test@example.com",
  "status": "valid",
  "deliverable": true,
  "catch_all": false,
  "risk_level": "low",
  "score": 98
}`

/* ─── Page ─── */

export default function IntegrationsPage() {
  return (
    <main>
      <SEO
        title="Integrations"
        description="Connect Scrubby with your favorite tools. Works with ZeroBounce, NeverBounce, Clay, Instantly, HubSpot, Salesforce, Zapier and more."
        path="/integrations"
      />
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="reveal">
            <div className="badge mx-auto mb-5">
              <Plug size={12} />
              Integrations
            </div>
            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight mb-5">
              Powerful{' '}
              <span className="text-gradient">Integrations</span>
            </h1>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto mb-8 font-body">
              Connect Scrubby with the tools you already use. Automate your
              workflows and keep your email lists clean across every platform.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://app.scrubby.io" className="btn-primary">
                Start for Free
                <ArrowRight size={16} />
              </a>
              <a
                href="https://api.scrubby.io/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Code2 size={16} />
                View API Docs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Workflow Diagram ── */}
      <section className="relative py-16 bg-surface-secondary overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-ink mb-3">
              How it fits into your workflow
            </h2>
            <p className="text-ink-secondary text-base max-w-lg mx-auto font-body">
              Scrubby validates the risky emails that other verifiers mark as
              unknown, then passes clean data to your sending platform.
            </p>
          </div>

          <div className="reveal">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Step 1: Pre-Scrubby */}
              <div className="card p-6 text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-brand-amber-bg flex items-center justify-center mb-4">
                  <Layers size={22} className="text-brand-amber" />
                </div>
                <h3 className="font-display font-700 text-base text-ink mb-2">
                  Your Verifier
                </h3>
                <p className="text-sm text-ink-tertiary font-body mb-4">
                  Flags risky &amp; catch-all emails as &quot;unknown&quot;
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {preScrubbyTools.slice(0, 3).map((tool) => (
                    <span
                      key={tool.name}
                      className="badge-amber text-[10px] py-0.5 px-2 inline-flex items-center rounded-full font-display font-500"
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Step 2: Scrubby */}
              <div className="card p-6 text-center ring-2 ring-brand-green shadow-green-glow">
                <div className="w-12 h-12 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-4">
                  <ShieldCheck size={22} className="text-brand-green-dark" />
                </div>
                <h3 className="font-display font-700 text-base text-ink mb-2">
                  Scrubby Validates
                </h3>
                <p className="text-sm text-ink-tertiary font-body mb-4">
                  Verifies inbox deliverability on catch-all domains
                </p>
                <span className="badge text-[10px] py-0.5">
                  <Zap size={10} />
                  98% Deliverability
                </span>
              </div>

              {/* Step 3: Post-Scrubby */}
              <div className="card p-6 text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-brand-green-bg flex items-center justify-center mb-4">
                  <CheckCircle2 size={22} className="text-brand-green-dark" />
                </div>
                <h3 className="font-display font-700 text-base text-ink mb-2">
                  Send with Confidence
                </h3>
                <p className="text-sm text-ink-tertiary font-body mb-4">
                  Clean, enriched data flows to your sending platform
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {postScrubbyTools.slice(0, 3).map((tool) => (
                    <span
                      key={tool.name}
                      className="badge text-[10px] py-0.5 px-2"
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pre-Scrubby: Clean Your Lists Before Sending ── */}
      <section className="relative py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <div className="badge-amber mx-auto mb-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-600">
              <Tag size={12} />
              Works After
            </div>
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-ink mb-3">
              Clean Your Lists Before Sending
            </h2>
            <p className="text-ink-secondary text-base max-w-lg mx-auto font-body">
              Scrubby picks up where these providers leave off, resolving the
              risky and catch-all emails they cannot verify.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
            {preScrubbyTools.map((tool) => (
              <div
                key={tool.name}
                className="card p-5 flex items-start gap-4 hover:shadow-card-hover transition-shadow"
              >
                <img src={`/logos/integrations/${tool.logo}.png`} alt={tool.name} className="w-8 h-8 rounded-lg object-contain flex-shrink-0" />
                <div>
                  <h3 className="font-display font-600 text-sm text-ink mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-ink-tertiary font-body">
                    {tool.description}
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-display font-500 text-brand-amber bg-brand-amber-bg px-2 py-0.5 rounded-full">
                    {tool.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Post-Scrubby: Send to Your Favorite Tools ── */}
      <section className="relative py-20 bg-surface-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <div className="badge mx-auto mb-5">
              <Zap size={12} />
              Sends To
            </div>
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-ink mb-3">
              Send to Your Favorite Tools
            </h2>
            <p className="text-ink-secondary text-base max-w-lg mx-auto font-body">
              Once Scrubby validates your list, clean data flows directly into
              the platforms you use to send and manage outreach.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal">
            {postScrubbyTools.map((tool) => (
              <div
                key={tool.name}
                className="card p-5 flex items-start gap-4 hover:shadow-card-hover transition-shadow"
              >
                <img src={`/logos/integrations/${tool.logo}.png`} alt={tool.name} className="w-8 h-8 rounded-lg object-contain flex-shrink-0" />
                <div>
                  <h3 className="font-display font-600 text-sm text-ink mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-ink-tertiary font-body">
                    {tool.description}
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-display font-500 text-brand-green-dark bg-brand-green-bg px-2 py-0.5 rounded-full">
                    {tool.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── API Section (Dark) ── */}
      <section className="relative py-20 overflow-hidden" style={{ background: '#18181B' }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div
          className="absolute w-[400px] h-[400px] -bottom-32 -right-32 rounded-full blur-3xl opacity-40"
          style={{ background: 'rgba(45, 206, 142, 0.08)' }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left -- Content */}
            <div className="reveal">
              <h2 className="font-display font-800 text-2xl sm:text-3xl lg:text-4xl text-white mb-5 text-center lg:text-left">
                Build Custom{' '}
                <span className="text-gradient-light">Workflows</span>
              </h2>
              <p className="text-slate-300 text-base mb-8 font-body text-center lg:text-left">
                Build custom workflows with our RESTful API. Validate emails,
                enrich contacts, and process bulk lists programmatically with
                simple, well-documented endpoints.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'RESTful API with JSON responses',
                  'Webhook notifications for async processing',
                  'Bulk processing endpoints',
                  'Rate limiting with generous quotas',
                  'Comprehensive error handling',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-brand-green mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-slate-300 font-body">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://api.scrubby.io/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View API Documentation
                <ExternalLink size={15} />
              </a>
            </div>

            {/* Right -- Code Snippet */}
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="card-dark rounded-2xl overflow-hidden">
                {/* Tab Bar */}
                <div className="flex items-center gap-4 px-5 py-3 border-b border-white/[0.06]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                  <span className="text-xs text-slate-500 font-display">
                    Request
                  </span>
                </div>
                <pre className="px-5 py-4 text-sm text-slate-300 font-mono overflow-x-auto leading-relaxed">
                  <code>{apiSnippet}</code>
                </pre>

                <div className="px-5 py-3 border-t border-white/[0.06]">
                  <span className="text-xs text-slate-500 font-display">
                    Response
                  </span>
                </div>
                <pre className="px-5 py-4 text-sm text-brand-green/80 font-mono overflow-x-auto leading-relaxed">
                  <code>{apiResponse}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── White Label ── */}
      <section className="relative py-20 bg-surface-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <div className="card-dark p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-6">
                <Globe size={24} className="text-brand-green" />
              </div>
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white mb-4">
                White-Label Solutions
              </h2>
              <p className="text-slate-300 text-base max-w-lg mx-auto mb-8 font-body">
                Need a custom-branded email validation solution? We offer
                white-label options for agencies and enterprises that want to
                provide Scrubby&apos;s validation under their own brand.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/enterprise" className="btn-primary">
                  Learn More
                  <ArrowRight size={15} />
                </Link>
                <Link to="/contact" className="btn-secondary-dark">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="font-display font-800 text-2xl sm:text-3xl text-ink mb-4">
            Ready to integrate?
          </h2>
          <p className="text-ink-secondary text-base mb-8 font-body">
            Get started with 100 free credits. No credit card required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary">
              Start Free
              <ArrowRight size={16} />
            </a>
            <a
              href="https://api.scrubby.io/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Code2 size={16} />
              API Docs
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
