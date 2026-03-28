import { useState } from 'react'
import { Send, ChevronDown } from 'lucide-react'

const companySizes = ['1-10', '11-50', '51-200', '201-1000', '1000+']
const emailVolumes = ['< 10K', '10K - 100K', '100K - 1M', '1M+']

export default function BookDemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    companySize: '',
    emailVolume: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Visual-only form, no backend submission
  }

  return (
    <div className="card p-8 md:p-10">
      <h3 className="font-display font-700 text-xl text-ink mb-1">
        Schedule Your Demo
      </h3>
      <p className="text-sm text-ink-secondary font-body mb-8">
        Fill out the form below and we&apos;ll be in touch within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-display font-600 text-ink-secondary mb-1.5"
          >
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-display font-600 text-ink-secondary mb-1.5"
          >
            Work Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-display font-600 text-ink-secondary mb-1.5"
          >
            Company *
          </label>
          <input
            id="company"
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Inc."
            className="w-full px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
          />
        </div>

        {/* Company Size + Email Volume row */}
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Company Size */}
          <div>
            <label
              htmlFor="companySize"
              className="block text-xs font-display font-600 text-ink-secondary mb-1.5"
            >
              Company Size
            </label>
            <div className="relative">
              <select
                id="companySize"
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>Select size</option>
                {companySizes.map((size) => (
                  <option key={size} value={size}>{size} employees</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none" />
            </div>
          </div>

          {/* Monthly Email Volume */}
          <div>
            <label
              htmlFor="emailVolume"
              className="block text-xs font-display font-600 text-ink-secondary mb-1.5"
            >
              Monthly Email Volume
            </label>
            <div className="relative">
              <select
                id="emailVolume"
                name="emailVolume"
                value={formData.emailVolume}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>Select volume</option>
                {emailVolumes.map((vol) => (
                  <option key={vol} value={vol}>{vol}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-display font-600 text-ink-secondary mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your email validation needs..."
            className="w-full px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all resize-none"
          />
        </div>

        {/* Submit */}
        <button type="submit" className="btn-primary w-full justify-center text-base py-3.5">
          Book My Demo
          <Send size={16} />
        </button>
      </form>

      <p className="text-[11px] text-ink-muted mt-4 text-center font-body">
        By submitting this form, you agree to our{' '}
        <a href="#" className="text-brand-green-dark underline hover:no-underline">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  )
}
