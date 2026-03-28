import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  ArrowRight,
  Shield,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Star,
  Upload,
  UserPlus,
  Target,
  Layers,
  CreditCard,
  Link2,
  Lock,
  Globe,
  Building2,
  Users,
  Quote,
  ChevronLeft,
  ChevronRight,
  Zap,
  Play,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

const emailDemoData = [
  { email: 'sarah.chen@techcorp.com', status: 'valid', type: 'Deliverable' },
  { email: 'mike.ross@catchall.io', status: 'risky', type: 'Catch-All' },
  { email: 'j.wilson@startup.co', status: 'valid', type: 'Deliverable' },
  { email: 'bounce@invalid.xyz', status: 'invalid', type: 'Invalid' },
  { email: 'alex.p@enterprise.com', status: 'risky', type: 'Catch-All' },
  { email: 'info@company.org', status: 'valid', type: 'Deliverable' },
]

const statusConfig = {
  valid: { icon: CheckCircle2, color: 'text-brand-green', bg: 'bg-brand-green/10', label: 'Valid' },
  risky: { icon: AlertTriangle, color: 'text-amber-400', bg: 'bg-amber-400/10', label: 'Recovered' },
  invalid: { icon: XCircle, color: 'text-red-400', bg: 'bg-red-400/10', label: 'Invalid' },
}

const trustLogosRow1 = [
  'ZeroBounce', 'NeverBounce', 'MillionVerifier', 'Clay', 'Instantly', 'SmartLead',
]
const trustLogosRow2 = [
  'Apollo', 'ZoomInfo', 'Cognism', 'LeadIQ', 'HubSpot',
]

const integrationLogos = [
  'NeverBounce', 'ZeroBounce', 'MillionVerifier', 'Clay', 'Instantly',
  'SmartLead', 'Apollo', 'HubSpot', 'ZoomInfo', 'LeadIQ', 'Cognism',
]

const howItWorksSteps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Create an account with Scrubby',
    description: 'Sign up in seconds and get 100 free email credits to test our catch-all and risky email validation.',
  },
  {
    icon: Upload,
    number: '02',
    title: 'Submit your catch-all or risky email list',
    description: 'Upload your list via CSV, use our API, or connect through one of our many integrations.',
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'Receive back 98% validated lead list',
    description: 'Get a fully validated list with 98% deliverability. Only pay for emails we can verify.',
  },
]

const benefitsData = [
  {
    icon: Target,
    title: 'High Accuracy Rate',
    description: 'Validate your risky emails with 98% accuracy ensuring your emails reach real, active inboxes.',
  },
  {
    icon: Shield,
    title: 'Comprehensive Risk Management',
    description: 'Scrubby excels at validating risky catch-all emails that other providers mark as unknown.',
  },
  {
    icon: CreditCard,
    title: 'Flexible Pricing Plans',
    description: 'Choose from monthly subscriptions and pay-as-you-go models that scale with your needs.',
  },
  {
    icon: Link2,
    title: 'Advanced Integrations',
    description: 'Seamlessly integrate with NeverBounce, ZeroBounce, MillionVerifier, Clay, Instantly and more.',
  },
  {
    icon: Lock,
    title: 'Robust Data Security',
    description: 'AWS storage, encryption, multi-layered security protocols to protect your data at every step.',
  },
  {
    icon: Globe,
    title: 'Global Compliance',
    description: 'GDPR adherence and international data protection standards built into every layer of our platform.',
  },
]

const enterpriseLogos = ['Revolut', 'Oracle', 'IBM', 'Samsara', 'Gorgias', 'Sisense']
const agencyLogos = ['Leadbird', 'LinkedHacker', 'Pitchlane', 'Revsure', 'Growth Partners', 'BetterContact']

const testimonials = [
  {
    name: 'Koa M.',
    role: 'Head of Growth',
    company: 'Leadbird',
    text: "Verifying all our emails at scale is something that separates Scrubby from the rest of the validation tool pack.",
    rating: 5,
    initials: 'KM',
    color: 'from-brand-green/20 to-brand-green/5',
  },
  {
    name: 'Shane W.',
    role: 'CEO',
    company: 'LinkedHacker',
    text: "We've been working with Scrubby for some time now and we're very happy with their service.",
    rating: 5,
    initials: 'SW',
    color: 'from-amber-400/20 to-amber-400/5',
  },
  {
    name: 'Blaise G.',
    role: 'VP of Sales',
    company: 'Neptik',
    text: "Scrubby is the only email validation software that doesn't give you 'unknown' emails.",
    rating: 5,
    initials: 'BG',
    color: 'from-blue-400/20 to-blue-400/5',
  },
]

/* ═══════════════════════════════════════════════════════
   UTILITY COMPONENTS
   ═══════════════════════════════════════════════════════ */

function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const start = performance.now()
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

const logoNameMap = {
  'ZeroBounce': 'zerobounce',
  'NeverBounce': 'neverbounce',
  'MillionVerifier': 'millionverifier',
  'Clay': 'clay',
  'Instantly': 'instantly',
  'SmartLead': 'smartlead',
  'Apollo': 'apollo',
  'ZoomInfo': 'zoominfo',
  'Cognism': 'cognism',
  'LeadIQ': 'leadiq',
  'HubSpot': 'hubspot',
  'Revolut': 'revolut',
  'Oracle': 'oracle',
  'IBM': 'ibm',
  'Samsara': 'samsara',
  'Gorgias': 'gorgias',
  'Sisense': 'sisense',
  'Leadbird': 'leadbird',
  'Pitchlane': 'pitchlane',
  'BetterContact': 'bettercontact',
}

const integrationKeys = [
  'zerobounce', 'neverbounce', 'millionverifier', 'clay', 'smartlead',
  'instantly', 'hubspot', 'salesforce', 'pipedrive', 'mailchimp',
  'zapier', 'apollo', 'zoominfo', 'cognism', 'hunter', 'bouncer',
  'debounce', 'leadiq',
]

function getLogoPath(name) {
  const key = logoNameMap[name]
  if (!key) return null
  if (integrationKeys.includes(key)) return `/logos/integrations/${key}.png`
  return `/logos/clients/${key}.png`
}

function LogoItem({ name }) {
  const logoPath = getLogoPath(name)
  return (
    <div className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-surface-secondary border border-surface-border whitespace-nowrap select-none">
      {logoPath ? (
        <img src={logoPath} alt={name} className="w-5 h-5 rounded object-contain" />
      ) : (
        <div className="w-5 h-5 rounded bg-brand-green-bg flex items-center justify-center">
          <span className="text-[9px] font-display font-bold text-brand-green-dark">{name.charAt(0)}</span>
        </div>
      )}
      <span className="text-sm font-display font-medium text-ink-tertiary">{name}</span>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════ */


function HeroSection() {
  const [activeRow, setActiveRow] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRow((prev) => (prev + 1) % emailDemoData.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-44 pb-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F9F8F6 0%, #FFFFFF 100%)' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Centered editorial heading ── */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1
            className="font-editorial font-bold text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-8"
            style={{ opacity: 0, animation: 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards' }}
          >
            <span className="text-ink">Verify the emails</span>
            <br />
            <span className="text-gradient italic" style={{ paddingRight: '0.08em' }}>every other tool</span>
            <span className="text-ink"> can&apos;t</span>
          </h1>

          <p
            className="text-lg text-ink-secondary leading-relaxed max-w-2xl mx-auto mb-10 font-body"
            style={{ opacity: 0, animation: 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s forwards' }}
          >
            Scrubby goes beyond SMTP validation to verify catch-all and risky emails
            with 98% deliverability. Recover up to 42% more leads from your existing lists.
          </p>

          <div
            className="flex flex-wrap justify-center gap-4 mb-16"
            style={{ opacity: 0, animation: 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s forwards' }}
          >
            <Link to="/signup" className="btn-shimmer text-base px-8 py-3.5">
              Start free — 100 credits
              <ArrowRight size={16} />
            </Link>
            <Link to="/demo" className="btn-secondary text-base px-8 py-3.5">
              <Play size={16} />
              Book a demo
            </Link>
          </div>

          {/* Stats row */}
          <div
            className="flex justify-center gap-16"
            style={{ opacity: 0, animation: 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s forwards' }}
          >
            {[
              { value: 98, suffix: '%', label: 'Deliverability' },
              { value: 1, suffix: 'B+', label: 'Emails Validated' },
              { value: 2500, suffix: '+', label: 'Customers' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-editorial font-bold text-4xl text-ink tracking-tight">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-ink-muted mt-1.5 font-display font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Demo Card — single strong visual (dark card on light bg = high contrast) ── */}
        <div
          className="relative max-w-3xl mx-auto"
          style={{ opacity: 0, animation: 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s forwards' }}
        >
          <div className="card-dark p-px relative rounded-xl overflow-hidden" style={{ boxShadow: '0 25px 80px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.1)' }}>
            {/* Demo Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.05]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                </div>
                <span className="text-[11px] text-slate-500 font-display ml-2">email_validation.csv</span>
              </div>
              <span className="badge-dark text-[10px] py-0.5 px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse inline-block" />
                Live Preview
              </span>
            </div>

            {/* Column Headers */}
            <div className="grid grid-cols-12 gap-2 px-5 py-2.5 text-[10px] font-display font-medium text-slate-500 uppercase tracking-wider border-b border-white/[0.04]">
              <div className="col-span-5">Email</div>
              <div className="col-span-3">Status</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-2 text-right">Result</div>
            </div>

            {/* Email Rows */}
            <div className="divide-y divide-white/[0.03]">
              {emailDemoData.map((row, i) => {
                const cfg = statusConfig[row.status]
                const Icon = cfg.icon
                const isActive = i === activeRow
                return (
                  <div
                    key={row.email}
                    className={`grid grid-cols-12 gap-2 px-5 py-3 items-center transition-all duration-500 ${
                      isActive ? 'bg-brand-green/[0.04]' : ''
                    }`}
                  >
                    <div className="col-span-5 text-[13px] text-slate-300 font-mono truncate">
                      {row.email}
                    </div>
                    <div className="col-span-3">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-display font-medium ${cfg.color}`}>
                        <Icon size={11} />
                        {cfg.label}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-display font-medium ${cfg.bg} ${cfg.color}`}>
                        {row.type}
                      </span>
                    </div>
                    <div className="col-span-2 text-right">
                      {row.status !== 'invalid' ? (
                        <span className="inline-flex items-center gap-1 text-xs text-brand-green font-display">
                          <CheckCircle2 size={10} /> Pass
                        </span>
                      ) : (
                        <span className="text-xs text-red-400 font-display">Reject</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Demo Footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-white/[0.05] bg-brand-green/[0.02]">
              <div className="flex items-center gap-4">
                <span className="text-xs font-display">
                  <span className="text-brand-green font-semibold">4</span>
                  <span className="text-slate-500"> valid</span>
                </span>
                <span className="text-xs font-display">
                  <span className="text-amber-400 font-semibold">2</span>
                  <span className="text-slate-500"> recovered</span>
                </span>
                <span className="text-xs font-display">
                  <span className="text-red-400 font-semibold">1</span>
                  <span className="text-slate-500"> invalid</span>
                </span>
              </div>
              <span className="text-xs text-brand-green font-display font-semibold">
                83% deliverable
              </span>
            </div>
          </div>

          {/* Floating Badge -- G2 Rating */}
          <div className="absolute -bottom-5 -left-6 px-4 py-3 rounded-xl shadow-elevated border border-surface-border" style={{ background: '#fff', animation: 'float 6s ease-in-out infinite' }}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-display font-semibold text-ink">4.8/5</span>
              <span className="text-[10px] text-ink-tertiary">on G2</span>
            </div>
          </div>

          {/* Floating Badge -- Recovered */}
          <div className="absolute -top-5 -right-6 px-4 py-3 rounded-xl shadow-elevated border border-surface-border" style={{ background: '#fff', animation: 'float 6s ease-in-out 3s infinite' }}>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-brand-green-bg flex items-center justify-center">
                <Shield size={13} className="text-brand-green-dark" />
              </div>
              <div>
                <p className="text-[10px] text-ink-tertiary font-display">Recovered</p>
                <p className="text-sm font-display font-semibold text-ink">+2,250 emails</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   TRUST BANNER / MARQUEE
   ═══════════════════════════════════════════════════════ */

function TrustBannerSection() {
  const allRow1 = [...trustLogosRow1, ...trustLogosRow2]
  const allRow2 = [...trustLogosRow2, ...trustLogosRow1]

  return (
    <section className="relative py-16 overflow-hidden bg-white">
      <div className="divider mb-16" />

      <div className="text-center mb-10">
        <p className="text-sm font-display font-medium text-ink-tertiary uppercase tracking-widest">
          Trusted by teams worldwide
        </p>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative mb-4 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="marquee-track animate-marquee">
          {[...allRow1, ...allRow1].map((name, i) => (
            <LogoItem key={`a-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="marquee-track animate-marquee-reverse">
          {[...allRow2, ...allRow2].map((name, i) => (
            <LogoItem key={`b-${i}`} name={name} />
          ))}
        </div>
      </div>

      <div className="divider mt-16" />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   BEFORE / AFTER — VISUAL COMPARISON SHOWCASE
   ═══════════════════════════════════════════════════════ */

const beforeEmails = [
  { email: 'sarah.chen@techcorp.com', status: 'valid', label: 'Valid' },
  { email: 'mike.ross@catchall.io', status: 'unknown', label: 'Unknown' },
  { email: 'j.wilson@startup.co', status: 'valid', label: 'Valid' },
  { email: 'alex.p@enterprise.com', status: 'unknown', label: 'Unknown' },
  { email: 'hello@company.org', status: 'unknown', label: 'Unknown' },
  { email: 'bounce@invalid.xyz', status: 'invalid', label: 'Invalid' },
]

const afterEmails = [
  { email: 'sarah.chen@techcorp.com', status: 'valid', label: 'Valid' },
  { email: 'mike.ross@catchall.io', status: 'recovered', label: 'Recovered' },
  { email: 'j.wilson@startup.co', status: 'valid', label: 'Valid' },
  { email: 'alex.p@enterprise.com', status: 'recovered', label: 'Recovered' },
  { email: 'hello@company.org', status: 'recovered', label: 'Recovered' },
  { email: 'bounce@invalid.xyz', status: 'invalid', label: 'Invalid' },
]

function ValidationShowcaseSection() {
  const [showAfter, setShowAfter] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowAfter(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-28 overflow-hidden hero-gradient-mesh">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 rounded-full animate-glow-pulse"
        style={{ background: 'radial-gradient(circle, rgba(45,206,142,0.08), transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-blur-in">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-white mb-5 tracking-tight leading-tight">
            See what other tools{' '}
            <span className="text-gradient-light">miss</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto font-body leading-relaxed">
            Other validators return &ldquo;Unknown&rdquo; for catch-all emails. Scrubby validates them.
          </p>
        </div>

        {/* Before/After Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* ── BEFORE CARD ── */}
          <div className="scroll-fade-left">
            <div className="flex items-center gap-2 mb-3">
              <XCircle size={14} className="text-red-400" />
              <span className="text-sm font-display font-semibold text-red-400">Other Email Validators</span>
            </div>
            <div className="card-dark p-0 overflow-hidden">
              {/* Header bar */}
              <div className="px-5 py-3 border-b border-white/[0.05] flex items-center justify-between">
                <span className="text-[11px] font-display text-slate-500">email_list.csv</span>
                <span className="text-[10px] font-display text-red-400/80 bg-red-400/10 px-2 py-0.5 rounded">
                  3 Unknown
                </span>
              </div>

              {/* Email rows */}
              <div className="divide-y divide-white/[0.03]">
                {beforeEmails.map((row, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-2.5">
                    <span className="text-[12px] text-slate-400 font-mono truncate mr-4">{row.email}</span>
                    <span className={`text-[11px] font-display font-medium px-2 py-0.5 rounded whitespace-nowrap ${
                      row.status === 'valid' ? 'text-brand-green bg-brand-green/10' :
                      row.status === 'unknown' ? 'text-amber-400 bg-amber-400/10' :
                      'text-red-400 bg-red-400/10'
                    }`}>
                      {row.status === 'unknown' ? (
                        <span className="flex items-center gap-1">
                          <AlertTriangle size={10} />
                          Unknown
                        </span>
                      ) : row.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-white/[0.05] bg-red-400/[0.03]">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-display">Usable leads:</span>
                  <span className="text-[11px] font-display font-semibold text-red-400">Only 2 of 6 (33%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── AFTER CARD ── */}
          <div className="scroll-fade-right" style={{ transitionDelay: '0.15s' }}>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 size={14} className="text-brand-green" />
              <span className="text-sm font-display font-semibold text-brand-green">With Scrubby</span>
            </div>
            <div className="card-dark p-0 overflow-hidden relative">
              {/* Animated scan line */}
              {showAfter && <div className="scan-line" />}

              {/* Header bar */}
              <div className="px-5 py-3 border-b border-white/[0.05] flex items-center justify-between">
                <span className="text-[11px] font-display text-slate-500">email_list.csv</span>
                <span className="text-[10px] font-display text-brand-green bg-brand-green/10 px-2 py-0.5 rounded flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                  Validated
                </span>
              </div>

              {/* Email rows with staggered animation */}
              <div className="divide-y divide-white/[0.03]">
                {afterEmails.map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-5 py-2.5 transition-all duration-700"
                    style={{
                      background: showAfter && row.status === 'recovered' ? 'rgba(45,206,142,0.04)' : 'transparent',
                      opacity: showAfter ? 1 : 0.4,
                      transform: showAfter ? 'translateX(0)' : 'translateX(8px)',
                      transitionDelay: `${i * 0.12}s`,
                    }}
                  >
                    <span className="text-[12px] text-slate-300 font-mono truncate mr-4">{row.email}</span>
                    <span className={`text-[11px] font-display font-medium px-2 py-0.5 rounded whitespace-nowrap flex items-center gap-1 ${
                      row.status === 'recovered' ? 'text-brand-green bg-brand-green/10' :
                      row.status === 'valid' ? 'text-brand-green bg-brand-green/10' :
                      'text-red-400 bg-red-400/10'
                    }`}>
                      {row.status === 'recovered' && <Sparkles size={9} />}
                      {row.status === 'recovered' ? 'Recovered' : row.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-white/[0.05] bg-brand-green/[0.03]">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-display">Usable leads:</span>
                  <span className="text-[11px] font-display font-semibold text-brand-green">5 of 6 (83%) — +3 recovered</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recovery callout */}
        <div className="mt-10 text-center scroll-scale-in" style={{ transitionDelay: '0.3s' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-brand-green/20" style={{ background: 'rgba(45,206,142,0.06)', backdropFilter: 'blur(8px)' }}>
            <Zap size={16} className="text-brand-green" />
            <span className="text-sm font-display font-semibold text-white">
              <span className="text-brand-green">+42%</span> more usable leads recovered from the same list
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   ANIMATED VISUAL PROCESS — HOW IT WORKS
   ═══════════════════════════════════════════════════════ */

function VisualProcessSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 scroll-blur-in">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-ink mb-5 tracking-tight">
            Three steps to{' '}
            <span className="text-gradient">validated leads</span>
          </h2>
          <p className="text-ink-secondary text-base max-w-lg mx-auto font-body leading-relaxed">
            Get started in minutes. No complex setup or long onboarding required.
          </p>
        </div>

        {/* Visual Steps */}
        <div className="grid lg:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          {/* Connecting flow paths (desktop) */}
          <div className="hidden lg:flex absolute top-[100px] left-[30%] w-[12%] items-center z-0">
            <div className="flow-path w-full" />
          </div>
          <div className="hidden lg:flex absolute top-[100px] left-[58%] w-[12%] items-center z-0">
            <div className="flow-path w-full flow-path-delayed" />
          </div>

          {/* ── STEP 1: Upload ── */}
          <div className="relative z-10 text-center reveal">
            <div className="relative mx-auto mb-8 w-[220px] h-[200px]">
              <div className="absolute inset-0 rounded-2xl bg-surface-secondary border border-surface-border overflow-hidden shadow-card">
                {/* Upload zone */}
                <div className="absolute inset-4 rounded-xl border-2 border-dashed border-brand-green/30 flex flex-col items-center justify-center bg-white/50">
                  <Upload size={28} className="text-brand-green mb-2 gentle-bounce" />
                  <span className="text-[10px] font-display text-ink-tertiary font-medium">Drop your CSV here</span>
                </div>

                {/* Animated file cards dropping in */}
                <div
                  className="absolute top-3 left-1/2 -translate-x-1/2"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(-16px)',
                    transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1) 0.3s',
                  }}
                >
                  <div className="w-14 h-16 bg-white rounded-lg shadow-elevated border border-surface-border flex flex-col items-center justify-center">
                    <div className="w-7 h-[3px] bg-ink-muted/20 rounded mb-1" />
                    <div className="w-9 h-[3px] bg-ink-muted/20 rounded mb-1" />
                    <div className="w-6 h-[3px] bg-ink-muted/20 rounded mb-1" />
                    <div className="w-8 h-[3px] bg-ink-muted/20 rounded" />
                    <span className="text-[7px] font-display font-bold text-brand-green mt-1.5">.CSV</span>
                  </div>
                </div>

                {/* Email count badge */}
                <div
                  className="absolute bottom-2 right-2 px-2 py-1 rounded bg-brand-green/10 border border-brand-green/20"
                  style={{
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.4s ease 0.8s',
                  }}
                >
                  <span className="text-[9px] font-display font-bold text-brand-green">10,000 emails</span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-green text-white text-xs font-display font-bold mb-3">
              01
            </div>
            <h3 className="font-display font-semibold text-lg text-ink mb-2">Upload Your List</h3>
            <p className="text-sm text-ink-tertiary font-body max-w-[260px] mx-auto leading-relaxed">
              Drop your CSV, use our API, or connect your favorite tools.
            </p>
          </div>

          {/* ── STEP 2: Process ── */}
          <div className="relative z-10 text-center reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="relative mx-auto mb-8 w-[220px] h-[200px]">
              <div className="absolute inset-0 rounded-2xl bg-navy-800 border border-white/10 overflow-hidden shadow-elevated">
                <div className="absolute inset-0 grid-bg opacity-30" />

                {/* Central processing engine */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Orbiting particles */}
                    {visible && (
                      <>
                        <div
                          className="absolute left-1/2 top-1/2 -ml-1 -mt-1 w-2 h-2 rounded-full bg-brand-green"
                          style={{ animation: 'orbit 4s linear infinite', boxShadow: '0 0 8px rgba(45,206,142,0.6)' }}
                        />
                        <div
                          className="absolute left-1/2 top-1/2 -ml-0.5 -mt-0.5 w-1.5 h-1.5 rounded-full bg-brand-green-light"
                          style={{ animation: 'orbit-reverse 3s linear 1s infinite', boxShadow: '0 0 6px rgba(94,234,181,0.5)' }}
                        />
                        <div
                          className="absolute left-1/2 top-1/2 -ml-0.5 -mt-0.5 w-1 h-1 rounded-full bg-brand-green"
                          style={{ animation: 'orbit 5s linear 2s infinite', opacity: 0.6 }}
                        />
                      </>
                    )}

                    {/* Pulsing rings */}
                    <div className="absolute -inset-8 rounded-full border border-brand-green/10" style={{ animation: 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite' }} />
                    <div className="absolute -inset-5 rounded-full border border-brand-green/15" style={{ animation: 'pulse 2.5s cubic-bezier(0.4,0,0.6,1) 0.5s infinite' }} />

                    {/* Core node */}
                    <div className="w-16 h-16 rounded-full bg-brand-green/15 flex items-center justify-center border border-brand-green/30 shadow-green-glow">
                      <Shield size={26} className="text-brand-green" />
                    </div>
                  </div>
                </div>

                {/* Processing email indicators */}
                <div className="absolute top-3 left-3 right-3 flex items-center gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 h-1 rounded-full transition-all duration-500"
                      style={{
                        background: visible ? (i < 4 ? '#2DCE8E' : i < 5 ? '#F5A623' : '#ef4444') : 'rgba(255,255,255,0.1)',
                        transitionDelay: `${0.8 + i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Status text */}
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <span className="text-[9px] font-mono text-brand-green/70 animate-pulse">
                    Validating catch-all...
                  </span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-green text-white text-xs font-display font-bold mb-3">
              02
            </div>
            <h3 className="font-display font-semibold text-lg text-ink mb-2">Smart Validation</h3>
            <p className="text-sm text-ink-tertiary font-body max-w-[260px] mx-auto leading-relaxed">
              Our engine goes beyond SMTP to validate every catch-all and risky email.
            </p>
          </div>

          {/* ── STEP 3: Results ── */}
          <div className="relative z-10 text-center reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="relative mx-auto mb-8 w-[220px] h-[200px]">
              <div className="absolute inset-0 rounded-2xl bg-white border border-surface-border overflow-hidden shadow-card">
                <div className="p-3.5">
                  {/* Mini window bar */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-300/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-300/80" />
                    <div className="w-2 h-2 rounded-full bg-green-300/80" />
                    <span className="text-[8px] font-display text-ink-muted ml-1.5">Results</span>
                  </div>

                  {/* Animated progress bars */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={10} className="text-brand-green" />
                      </div>
                      <div className="flex-1 h-3.5 bg-surface-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-brand-green rounded-full"
                          style={{
                            width: visible ? '83%' : '0%',
                            transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1) 0.6s',
                          }}
                        />
                      </div>
                      <span className="text-[10px] font-display font-bold text-brand-green w-8 text-right">83%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                        <Sparkles size={10} className="text-amber-400" />
                      </div>
                      <div className="flex-1 h-3.5 bg-surface-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-400 rounded-full"
                          style={{
                            width: visible ? '42%' : '0%',
                            transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1) 0.9s',
                          }}
                        />
                      </div>
                      <span className="text-[10px] font-display font-bold text-amber-500 w-8 text-right">42%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-red-400/10 flex items-center justify-center flex-shrink-0">
                        <XCircle size={10} className="text-red-400" />
                      </div>
                      <div className="flex-1 h-3.5 bg-surface-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-red-400 rounded-full"
                          style={{
                            width: visible ? '7%' : '0%',
                            transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1) 1.2s',
                          }}
                        />
                      </div>
                      <span className="text-[10px] font-display font-bold text-red-400 w-8 text-right">7%</span>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="mt-3 pt-2.5 border-t border-surface-border flex items-center justify-between">
                    <div className="text-center">
                      <p className="text-[15px] font-display font-bold text-brand-green">5,000</p>
                      <p className="text-[7px] text-ink-tertiary font-display font-medium uppercase tracking-wider">Valid</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[15px] font-display font-bold text-amber-500">2,100</p>
                      <p className="text-[7px] text-ink-tertiary font-display font-medium uppercase tracking-wider">Recovered</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[15px] font-display font-bold text-red-400">350</p>
                      <p className="text-[7px] text-ink-tertiary font-display font-medium uppercase tracking-wider">Invalid</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success badge */}
              <div
                className="absolute -bottom-2 -right-2 px-2.5 py-1.5 rounded-lg bg-white shadow-elevated border border-surface-border"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1) 1.5s',
                }}
              >
                <span className="flex items-center gap-1 text-[10px] font-display font-bold text-brand-green">
                  <CheckCircle2 size={10} />
                  98% Accurate
                </span>
              </div>
            </div>

            <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-green text-white text-xs font-display font-bold mb-3">
              03
            </div>
            <h3 className="font-display font-semibold text-lg text-ink mb-2">Clean Results</h3>
            <p className="text-sm text-ink-tertiary font-body max-w-[260px] mx-auto leading-relaxed">
              Download your validated list or sync results to your tools automatically.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 scroll-fade-up">
          <Link to="/signup" className="btn-primary">
            Get Started Free
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   INTEGRATIONS SEAMLESS SOLUTION
   ═══════════════════════════════════════════════════════ */

function SeamlessSolutionSection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-blur-in">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-ink mb-5 tracking-tight">
            Works with your{' '}
            <span className="text-gradient">existing stack</span>
          </h2>
          <p className="text-ink-secondary text-base max-w-2xl mx-auto leading-relaxed font-body">
            Scrubby complements your existing tools. Add an extra layer of verification for risky emails.
          </p>
        </div>

        {/* Integration logos grid */}
        <div className="scroll-fade-up max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 scroll-stagger">
            {integrationLogos.map((name, i) => {
              const logoPath = getLogoPath(name)
              return (
                <div
                  key={name}
                  className="card px-5 py-3 flex items-center gap-2.5 hover:shadow-card-hover transition-all duration-300 scroll-scale-in"
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  {logoPath ? (
                    <img src={logoPath} alt={name} className="w-8 h-8 rounded-lg object-contain" />
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-brand-green-bg flex items-center justify-center">
                      <span className="text-xs font-display font-bold text-brand-green-dark">
                        {name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className="text-sm font-display font-medium text-ink-secondary">{name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="divider mt-24" />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   BENEFITS GRID
   ═══════════════════════════════════════════════════════ */

function BenefitsSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-blur-in">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-4">
            Built for{' '}
            <span className="text-gradient">deliverability</span>
          </h2>
          <p className="text-ink-secondary text-lg max-w-xl mx-auto font-body">
            Everything you need to ensure your email lists perform at the highest level.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefitsData.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="card p-7 scroll-fade-up group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green-bg flex items-center justify-center mb-5 group-hover:shadow-green-glow transition-shadow duration-300">
                  <Icon size={22} className="text-brand-green-dark" />
                </div>
                <h3 className="font-display font-bold text-lg text-ink mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-ink-tertiary leading-relaxed font-body">
                  {benefit.description}
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
   ENTERPRISE + AGENCY SECTION
   ═══════════════════════════════════════════════════════ */

function EnterpriseAgencySection() {
  return (
    <section className="relative py-24 bg-surface-secondary">
      <div className="divider mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Enterprise Card */}
          <div className="card p-8 scroll-fade-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-green-bg flex items-center justify-center">
                <Building2 size={20} className="text-brand-green-dark" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-ink">
                  Trusted by Enterprises
                </h3>
                <p className="text-sm text-ink-tertiary font-body">
                  Industry-leading companies rely on Scrubby
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {enterpriseLogos.map((name) => {
                const logoPath = getLogoPath(name)
                return (
                  <div
                    key={name}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-secondary border border-surface-border"
                  >
                    {logoPath ? (
                      <img src={logoPath} alt={name} className="w-5 h-5 rounded object-contain" />
                    ) : (
                      <div className="w-5 h-5 rounded bg-brand-green-bg flex items-center justify-center">
                        <span className="text-[9px] font-display font-bold text-brand-green-dark">
                          {name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <span className="text-sm font-display font-medium text-ink-secondary">{name}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Agency Card */}
          <div className="card p-8 scroll-fade-right" style={{ transitionDelay: '0.15s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-green-bg flex items-center justify-center">
                <Users size={20} className="text-brand-green-dark" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-ink">
                  Trusted by Lead gen Agencies
                </h3>
                <p className="text-sm text-ink-tertiary font-body">
                  Top agencies count on Scrubby for validation
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {agencyLogos.map((name) => {
                const logoPath = getLogoPath(name)
                return (
                  <div
                    key={name}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-secondary border border-surface-border"
                  >
                    {logoPath ? (
                      <img src={logoPath} alt={name} className="w-5 h-5 rounded object-contain" />
                    ) : (
                      <div className="w-5 h-5 rounded bg-brand-green-bg flex items-center justify-center">
                        <span className="text-[9px] font-display font-bold text-brand-green-dark">
                          {name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <span className="text-sm font-display font-medium text-ink-secondary">{name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="divider mt-24" />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════════════════ */

function TestimonialsSection() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 scroll-blur-in">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-4">
            Loved by teams{' '}
            <span className="text-gradient">worldwide</span>
          </h2>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="scroll-scale-in">
            <div className="card p-8 md:p-10 relative">
              <Quote size={40} className="absolute top-6 right-6 text-surface-border opacity-50" />

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center`}>
                  <span className="text-sm font-display font-bold text-ink">
                    {testimonials[active].initials}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-ink">{testimonials[active].name}</p>
                  <p className="text-sm text-ink-tertiary font-body">
                    {testimonials[active].role} at {testimonials[active].company}
                  </p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-lg text-ink-secondary leading-relaxed font-body italic">
                &ldquo;{testimonials[active].text}&rdquo;
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl bg-white border border-surface-border flex items-center justify-center text-ink-tertiary hover:text-ink hover:border-ink-muted transition-all shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? 'w-8 bg-brand-green'
                      : 'w-2 bg-ink-muted/30 hover:bg-ink-muted/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-xl bg-white border border-surface-border flex items-center justify-center text-ink-tertiary hover:text-ink hover:border-ink-muted transition-all shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════════════════ */

function FinalCtaSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="divider mb-24" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="scroll-scale-in">
          <div className="rounded-xl p-10 md:p-16 text-center relative overflow-hidden hero-gradient-mesh">
            {/* Grid background */}
            <div className="absolute inset-0 grid-bg opacity-20" />

            {/* Gradient orb */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full animate-glow-pulse" style={{ background: 'radial-gradient(circle, rgba(45,206,142,0.15), transparent 70%)' }} />

            <div className="relative z-10">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-white mb-5 leading-tight tracking-tight">
                Get your email lists{' '}
                <span className="text-gradient-light">working for you</span>
              </h2>

              <p className="text-slate-400 text-base max-w-lg mx-auto mb-10 font-body leading-relaxed">
                Join 2,500+ teams using Scrubby to validate catch-all and risky emails.
                Start with 100 free email credits.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                <Link to="/signup" className="btn-shimmer text-base px-8 py-3.5">
                  Try it free
                  <ArrowRight size={16} />
                </Link>
                <Link to="/demo" className="btn-secondary-dark text-base px-8 py-3.5">
                  <Play size={16} />
                  Book a demo
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-display font-medium">
                <div className="flex items-center gap-1.5">
                  <Shield size={12} className="text-brand-green" />
                  GDPR Compliant
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles size={12} className="text-brand-green" />
                  98% Deliverability
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap size={12} className="text-brand-green" />
                  Free Trial
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
   HOME PAGE (MAIN EXPORT)
   ═══════════════════════════════════════════════════════ */

export default function HomePage() {
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

    document.querySelectorAll('.reveal, .scroll-fade-up, .scroll-fade-left, .scroll-fade-right, .scroll-scale-in, .scroll-blur-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <SEO
        description="Scrubby validates catch-all and risky emails with 98.7% accuracy. Recover up to 42% more leads that other verification tools miss. Start free with 100 credits."
        path="/"
      />
      <HeroSection />
      <TrustBannerSection />
      <ValidationShowcaseSection />
      <VisualProcessSection />
      <SeamlessSolutionSection />
      <BenefitsSection />
      <EnterpriseAgencySection />
      <TestimonialsSection />
      <FinalCtaSection />
    </>
  )
}
