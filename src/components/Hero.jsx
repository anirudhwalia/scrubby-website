import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Shield, Sparkles, CheckCircle2, XCircle, AlertTriangle, Star } from 'lucide-react'

const emailDemoData = [
  { email: 'sarah.chen@techcorp.com', status: 'valid', type: 'Deliverable', enriched: true },
  { email: 'mike.ross@catchall.io', status: 'risky', type: 'Catch-All', enriched: true },
  { email: 'j.wilson@startup.co', status: 'valid', type: 'Deliverable', enriched: true },
  { email: 'bounce@invalid.xyz', status: 'invalid', type: 'Invalid', enriched: false },
  { email: 'alex.p@enterprise.com', status: 'risky', type: 'Catch-All', enriched: true },
  { email: 'info@company.org', status: 'valid', type: 'Deliverable', enriched: true },
]

const statusConfig = {
  valid: { icon: CheckCircle2, color: 'text-accent-green', bg: 'bg-accent-green/10', label: 'Valid' },
  risky: { icon: AlertTriangle, color: 'text-accent-amber', bg: 'bg-accent-amber/10', label: 'Recovered' },
  invalid: { icon: XCircle, color: 'text-red-400', bg: 'bg-red-400/10', label: 'Invalid' },
}

function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
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

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Hero() {
  const [activeRow, setActiveRow] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRow((prev) => (prev + 1) % emailDemoData.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-navy-800" id="home">
      {/* Background Effects */}
      <div className="orb w-[600px] h-[600px] -top-40 -left-40 animate-pulse-glow" style={{ background: 'rgba(45, 206, 142, 0.1)' }} />
      <div className="orb w-[400px] h-[400px] top-20 right-0 animate-pulse-glow" style={{ background: 'rgba(245, 166, 35, 0.06)', animationDelay: '2s' }} />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>

            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-6">
              <span className="text-white">Validate & enrich </span>
              <span className="gradient-text-light">every email</span>
              <span className="text-white"> that others can't</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-lg mb-8 font-body">
              Stop wasting expensive data. Scrubby validates catch-all and risky emails
              with 98% deliverability, then enriches contacts with 50+ data points — all
              in one seamless platform.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#pricing" className="btn-primary">
                Start for Free
                <ArrowRight size={16} />
              </a>
              <a href="#features" className="btn-secondary-dark">
                <Shield size={16} />
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="stat-value-light">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <p className="text-sm text-slate-400 mt-1 font-display font-500">Deliverability</p>
              </div>
              <div>
                <div className="stat-value-light">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <p className="text-sm text-slate-400 mt-1 font-display font-500">Data Points</p>
              </div>
              <div>
                <div className="stat-value-light">
                  <AnimatedCounter end={30} suffix="%" />
                </div>
                <p className="text-sm text-slate-400 mt-1 font-display font-500">More Recovered</p>
              </div>
            </div>
          </div>

          {/* Right — Demo Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent-green/5 via-transparent to-accent-amber/5 rounded-3xl blur-xl" />
            <div className="relative dark-card p-1 rounded-2xl">
              {/* Demo Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                  <span className="text-xs text-slate-500 font-display ml-2">email_validation.csv</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="tag-dark text-[10px] py-0.5 px-2 rounded-full text-accent-green border border-accent-green/20 bg-accent-green/10 inline-flex items-center gap-1 font-display font-500">Live Preview</span>
                </div>
              </div>

              {/* Column Headers */}
              <div className="grid grid-cols-12 gap-2 px-5 py-2.5 text-[11px] font-display font-600 text-slate-500 uppercase tracking-wider border-b border-white/[0.04]">
                <div className="col-span-5">Email</div>
                <div className="col-span-3">Status</div>
                <div className="col-span-2">Type</div>
                <div className="col-span-2 text-right">Enriched</div>
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
                        isActive ? 'bg-accent-green/[0.04]' : ''
                      }`}
                    >
                      <div className="col-span-5 text-sm text-slate-300 font-mono truncate">
                        {row.email}
                      </div>
                      <div className="col-span-3">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-display font-500 ${cfg.color}`}>
                          <Icon size={12} />
                          {cfg.label}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-display font-500 ${cfg.bg} ${cfg.color}`}>
                          {row.type}
                        </span>
                      </div>
                      <div className="col-span-2 text-right">
                        {row.enriched ? (
                          <span className="inline-flex items-center gap-1 text-xs text-accent-green font-display">
                            <Sparkles size={10} /> Yes
                          </span>
                        ) : (
                          <span className="text-xs text-slate-600">—</span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Demo Footer */}
              <div className="flex items-center justify-between px-5 py-3 border-t border-white/[0.06] bg-accent-green/[0.03]">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-display">
                    <span className="text-accent-green font-600">5</span>
                    <span className="text-slate-500"> valid</span>
                  </span>
                  <span className="text-xs font-display">
                    <span className="text-accent-amber font-600">2</span>
                    <span className="text-slate-500"> recovered</span>
                  </span>
                  <span className="text-xs font-display">
                    <span className="text-red-400 font-600">1</span>
                    <span className="text-slate-500"> invalid</span>
                  </span>
                </div>
                <span className="text-xs text-accent-green font-display font-600">
                  83% deliverable
                </span>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white px-4 py-3 rounded-xl animate-float shadow-lg shadow-black/8 border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-accent-amber fill-accent-amber" />
                  ))}
                </div>
                <span className="text-xs font-display font-600 text-navy-800">4.8/5</span>
                <span className="text-[10px] text-slate-400">on G2</span>
              </div>
            </div>

            {/* Floating Enrichment Badge */}
            <div className="absolute -top-2 -right-2 bg-white px-4 py-3 rounded-xl animate-float-delayed shadow-lg shadow-black/8 border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-accent-amber/15 flex items-center justify-center">
                  <Sparkles size={12} className="text-accent-amber" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-display">Enriched</p>
                  <p className="text-xs font-display font-600 text-navy-800">+2,250 contacts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
