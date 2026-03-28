import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { CheckCircle2, ArrowRight, Home, MessageSquare, HelpCircle, Lightbulb } from 'lucide-react'

const expectations = [
  {
    icon: Lightbulb,
    text: 'Personalized walkthrough of Scrubby\u2019s features',
  },
  {
    icon: MessageSquare,
    text: 'Live Q&A with our team',
  },
  {
    icon: HelpCircle,
    text: 'Custom recommendations for your use case',
  },
]

export default function DemoBookedPage() {
  return (
    <main>
      <SEO
        title="Demo Booked"
        description="Your demo with the Scrubby team has been booked. We'll send you a confirmation email shortly."
        path="/demo-call-booked"
        noindex
      />

      <section className="relative pt-40 pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-40" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          {/* Green checkmark */}
          <div className="w-20 h-20 mx-auto rounded-full bg-brand-green-bg flex items-center justify-center mb-8">
            <CheckCircle2 size={40} className="text-brand-green-dark" />
          </div>

          {/* Heading */}
          <h1 className="font-display font-800 text-3xl sm:text-4xl text-ink mb-4">
            Your Demo is Booked!
          </h1>

          {/* Message */}
          <p className="text-ink-secondary text-lg max-w-lg mx-auto mb-12 font-body leading-relaxed">
            Thank you for scheduling a demo with our team. You&apos;ll receive a
            confirmation email shortly with all the details.
          </p>

          {/* What to expect */}
          <div className="card p-8 md:p-10 text-left max-w-lg mx-auto mb-10">
            <h2 className="font-display font-700 text-lg text-ink mb-6">
              What to expect
            </h2>

            <div className="space-y-5">
              {expectations.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.text} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-brand-green-dark" />
                    </div>
                    <p className="text-sm text-ink-secondary font-body leading-relaxed pt-2">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Back to Home button */}
          <Link to="/" className="btn-primary">
            <Home size={16} />
            Back to Home
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  )
}
