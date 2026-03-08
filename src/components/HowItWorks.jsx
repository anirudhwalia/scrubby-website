import { UserPlus, Upload, CheckCircle, Sparkles, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Create Your Account',
    description: 'Sign up in seconds and get 100 free credits to test our validation and enrichment services.',
    color: 'green',
  },
  {
    icon: Upload,
    number: '02',
    title: 'Upload or Connect',
    description: 'Upload your email list via CSV, use our API, or connect through 20+ integrations like HubSpot and Clay.',
    color: 'amber',
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Get Validated & Enriched Data',
    description: 'Receive a fully validated list with 98% deliverability and enriched contact profiles with 50+ data points.',
    color: 'green',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50/50">
      <div className="section-divider mb-24" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="tag mx-auto mb-5">
            <Sparkles size={12} />
            How It Works
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-navy-800 mb-4">
            Three steps to{' '}
            <span className="gradient-text">clean, enriched data</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Get started in minutes. No complex setup or long onboarding required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines (desktop) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-accent-green/20 via-accent-amber/20 to-accent-green/20" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="reveal relative text-center"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Step Icon */}
                <div className="relative mx-auto mb-6">
                  <div
                    className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center relative z-10"
                    style={{
                      background: step.color === 'green'
                        ? 'rgba(45, 206, 142, 0.08)'
                        : 'rgba(245, 166, 35, 0.08)',
                      border: `1px solid ${step.color === 'green'
                        ? 'rgba(45, 206, 142, 0.15)'
                        : 'rgba(245, 166, 35, 0.15)'}`,
                    }}
                  >
                    <Icon
                      size={28}
                      className={step.color === 'green' ? 'text-accent-green-dark' : 'text-accent-amber'}
                    />
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-display font-700 z-20 text-white"
                    style={{
                      background: step.color === 'green'
                        ? 'linear-gradient(135deg, #2DCE8E, #1FA96E)'
                        : 'linear-gradient(135deg, #F5A623, #E09000)',
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                <h3 className="font-display font-700 text-lg text-navy-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 reveal">
          <a href="#pricing" className="btn-primary">
            Get Started Free
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  )
}
