import { ArrowRight, Shield, Sparkles, Zap } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="section-divider mb-24" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="reveal">
          <div className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden bg-navy-800">
            {/* Grid Background */}
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Decorative Dots */}
            <div className="absolute top-8 left-8 glow-dot animate-pulse-glow" />
            <div className="absolute top-12 right-16 glow-dot animate-pulse-glow" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-16 left-20 glow-dot animate-pulse-glow" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-8 right-8 glow-dot animate-pulse-glow" style={{ animationDelay: '0.5s' }} />

            <div className="relative z-10">

              <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Transform your risky emails into{' '}
                <span className="gradient-text-light">valid, enriched leads</span>
              </h2>

              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10">
                Join 2,500+ teams using Scrubby to validate catch-all emails
                and enrich their contact data. Start with 100 free credits.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <a href="#pricing" className="btn-primary text-base px-8 py-4">
                  Start for Free
                  <ArrowRight size={18} />
                </a>
                <a href="#contact" className="btn-secondary-dark text-base px-8 py-4">
                  <Shield size={18} />
                  Talk to Sales
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-display font-500">
                <div className="flex items-center gap-1.5">
                  <Shield size={13} className="text-accent-green" />
                  GDPR Compliant
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles size={13} className="text-accent-green" />
                  98% Deliverability
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap size={13} className="text-accent-green" />
                  No Credit Card Required
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
