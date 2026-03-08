import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Koa M.',
    role: 'Head of Growth',
    company: 'Leadbird',
    text: "Verifying all our emails at scale is something that separates Scrubby from the rest. The catch-all validation alone saved us from thousands of bounces per month.",
    rating: 5,
    initials: 'KM',
    color: 'from-accent-green/20 to-accent-green/5',
  },
  {
    name: 'Shane W.',
    role: 'CEO',
    company: 'LinkedHacker',
    text: "We've been working with Scrubby for some time now and we're very happy. The enrichment features are a game-changer for our outbound campaigns.",
    rating: 5,
    initials: 'SW',
    color: 'from-accent-amber/20 to-accent-amber/5',
  },
  {
    name: 'Blaise G.',
    role: 'VP of Sales',
    company: 'Neptik',
    text: "Scrubby is the only email validation software that doesn't give you 'unknown' emails. The combination of validation and enrichment in one platform is unmatched.",
    rating: 5,
    initials: 'BG',
    color: 'from-blue-400/20 to-blue-400/5',
  },
  {
    name: 'Alex R.',
    role: 'Marketing Director',
    company: 'Revsure',
    text: "The enrichment data quality is phenomenal. We went from cold outreach to personalized campaigns overnight. Our response rates increased by 40%.",
    rating: 5,
    initials: 'AR',
    color: 'from-purple-400/20 to-purple-400/5',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  return (
    <section id="resources" className="relative py-24 overflow-hidden bg-slate-50/50">
      <div className="section-divider mb-24" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="tag mx-auto mb-5">
            <Star size={12} />
            Testimonials
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-navy-800 mb-4">
            Loved by teams{' '}
            <span className="gradient-text">worldwide</span>
          </h2>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <div className="glass-card rounded-2xl p-8 md:p-10 relative">
              <Quote size={40} className="absolute top-6 right-6 text-slate-100" />

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center`}>
                  <span className="text-sm font-display font-700 text-navy-800">
                    {testimonials[active].initials}
                  </span>
                </div>
                <div>
                  <p className="font-display font-600 text-navy-800">{testimonials[active].name}</p>
                  <p className="text-sm text-slate-500">
                    {testimonials[active].role} at {testimonials[active].company}
                  </p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-accent-amber fill-accent-amber" />
                  ))}
                </div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed font-body italic">
                "{testimonials[active].text}"
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-navy-800 hover:border-slate-300 transition-all shadow-sm"
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
                      ? 'w-8 bg-accent-green'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-navy-800 hover:border-slate-300 transition-all shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto reveal">
          {[
            { value: '10M+', label: 'Emails Validated' },
            { value: '2,500+', label: 'Happy Customers' },
            { value: '4.8/5', label: 'G2 Rating' },
            { value: '99.9%', label: 'Uptime SLA' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display font-800 text-2xl text-navy-800 mb-1">{value}</p>
              <p className="text-xs text-slate-500 font-display font-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
