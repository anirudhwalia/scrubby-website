import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  Mail,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  ChevronDown,
  MessageSquare,
  Shield,
  Zap,
  Globe,
  Linkedin,
  Twitter,
  Building2,
  Send,
  ChevronUp,
  Calendar,
} from 'lucide-react'

/* ─── Data ─── */

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@scrubby.io',
    href: 'mailto:info@scrubby.io',
  },
  {
    icon: Zap,
    label: 'Sales',
    value: 'sales@scrubby.io',
    href: 'mailto:sales@scrubby.io',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Viru väljak 2, 10111, Tallinn, Estonia',
    href: null,
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon–Fri, 9am–6pm EET',
    href: null,
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/scrubby-io',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com/scrubby_io',
  },
]

const faqs = [
  {
    question: 'How quickly can I get started?',
    answer:
      'You can get started in minutes. Sign up for a free account and receive 100 free credits instantly — no credit card required. Upload your email list, connect via API, or use one of our integrations to start validating emails right away.',
  },
  {
    question: 'Do you offer custom enterprise plans?',
    answer:
      'Absolutely. We offer custom enterprise plans tailored to your volume and needs. This includes volume-based pricing starting from 1 cent per credit, dedicated account management, priority support with SLA guarantees, custom integrations, and white-label solutions. Contact our sales team to discuss your requirements.',
  },
  {
    question: 'What integrations do you support?',
    answer:
      'Scrubby integrates with all the tools you already use. We offer native integrations with Clay, HubSpot, Instantly, SmartLead, and Zapier, plus a robust REST API for custom workflows. We also work alongside existing email verification providers like NeverBounce, ZeroBounce, and MillionVerifier to validate the risky emails they leave unresolved.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Data security is a top priority at Scrubby. We are fully GDPR compliant and working toward SOC 2 certification. All data is encrypted both in transit (TLS 1.3) and at rest (AES-256). We never share, sell, or repurpose your data. Uploaded lists are automatically deleted after processing unless you choose to retain them.',
  },
]

const offices = [
  {
    country: 'Estonia',
    city: 'Tallinn',
    label: 'HQ',
    address: 'Viru väljak 2, 10111',
  },
  {
    country: 'India',
    city: 'Bangalore',
    label: 'Engineering',
    address: 'Koramangala, 560034',
  },
  {
    country: 'United States',
    city: 'New York',
    label: 'Sales',
    address: 'Manhattan, NY 10001',
  },
]

/* ─── FAQ Item ─── */

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-surface-border rounded-xl overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface-secondary transition-colors"
      >
        <span className="font-display font-700 text-ink text-sm pr-4">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp size={18} className="text-ink-muted flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-ink-muted flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-sm text-ink-secondary leading-relaxed font-body">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

/* ─── Page ─── */

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
    message: '',
    gdpr: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Visual-only form, no backend submission
  }

  return (
    <main>
      <SEO
        title="Contact Us"
        description="Get in touch with the Scrubby team. Email us at hello@scrubby.io or visit our office in Tallinn, Estonia."
        path="/contact"
      />
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="reveal">
            <div className="badge mx-auto mb-5">
              <MessageSquare size={12} />
              Get in Touch
            </div>
            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight mb-5">
              Let&apos;s talk about your{' '}
              <span className="text-gradient">email validation</span> needs
            </h1>
            <p className="text-ink-secondary text-lg max-w-xl mx-auto font-body">
              Whether you have a question about features, pricing, integrations,
              or anything else — our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Form + Info (Two-Column) ── */}
      <section className="relative py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 reveal">
            {/* Left Column — Form */}
            <div className="lg:col-span-3">
              <div className="card p-8 md:p-10">
                <h2 className="font-display font-700 text-xl text-ink mb-1">
                  Send us a message
                </h2>
                <p className="text-sm text-ink-secondary font-body mb-8">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name + Work Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
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
                  </div>

                  {/* Row 2: Phone + Job Title */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-display font-600 text-ink-secondary mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="jobTitle"
                        className="block text-xs font-display font-600 text-ink-secondary mb-1.5"
                      >
                        Job Title
                      </label>
                      <input
                        id="jobTitle"
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        placeholder="VP of Sales"
                        className="w-full px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-display font-600 text-ink-secondary mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                    />
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-display font-600 text-ink-secondary mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="w-full px-4 py-3 rounded-xl border border-surface-border bg-white text-sm text-ink font-body placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all resize-none"
                    />
                  </div>

                  {/* GDPR Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      id="gdpr"
                      name="gdpr"
                      type="checkbox"
                      checked={formData.gdpr}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-surface-border text-brand-green focus:ring-brand-green"
                    />
                    <label
                      htmlFor="gdpr"
                      className="text-xs text-ink-tertiary font-body leading-relaxed"
                    >
                      I agree to Scrubby processing my personal data in
                      accordance with the{' '}
                      <a
                        href="#"
                        className="text-brand-green-dark underline hover:no-underline"
                      >
                        Privacy Policy
                      </a>
                      . I understand I can withdraw my consent at any time.
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                    <button type="submit" className="btn-primary">
                      Send Message
                      <Send size={15} />
                    </button>
                    <p className="text-xs text-ink-muted font-body flex items-center gap-1.5">
                      <Clock size={12} />
                      We typically respond within 24 hours
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column — Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Details Card */}
              <div className="card p-7">
                <h3 className="font-display font-700 text-base text-ink mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.label} className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-lg bg-brand-green-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon size={16} className="text-brand-green-dark" />
                        </div>
                        <div>
                          <p className="text-xs font-display font-600 text-ink-muted mb-0.5">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm text-ink font-body hover:text-brand-green-dark transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm text-ink font-body">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Book a Demo Card */}
              <div className="card p-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-amber-bg flex items-center justify-center flex-shrink-0">
                    <Calendar size={18} className="text-brand-amber" />
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-sm text-ink mb-1">
                      Book a Demo
                    </h3>
                    <p className="text-xs text-ink-tertiary mb-3 font-body">
                      Schedule a personalized walkthrough of Scrubby with our
                      team.
                    </p>
                    <Link
                      to="/enterprise"
                      className="inline-flex items-center gap-1.5 text-sm text-brand-green-dark font-display font-600 hover:underline"
                    >
                      Schedule a call
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Social Links Card */}
              <div className="card p-7">
                <h3 className="font-display font-700 text-base text-ink mb-4">
                  Follow Us
                </h3>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-surface-border bg-white hover:border-brand-green/30 hover:bg-brand-green-bg transition-all duration-300 group"
                      >
                        <Icon
                          size={16}
                          className="text-ink-muted group-hover:text-brand-green-dark transition-colors"
                        />
                        <span className="text-sm font-display font-500 text-ink-secondary group-hover:text-ink transition-colors">
                          {social.label}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Quick CTA Card */}
              <div className="card-dark p-7 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-500 tracking-wide bg-brand-green/10 border border-brand-green/20 text-brand-green mb-4">
                    <Zap size={10} />
                    Quick Start
                  </div>
                  <h3 className="font-display font-700 text-base text-white mb-2">
                    Want to try before you talk?
                  </h3>
                  <p className="text-sm text-slate-400 font-body mb-5">
                    Get 100 free credits and start validating emails instantly.
                    No credit card required.
                  </p>
                  <a href="https://app.scrubby.io" className="btn-primary text-sm">
                    Start Free
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider max-w-6xl mx-auto" />

      {/* ── FAQ Section ── */}
      <section className="relative py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <div className="badge mx-auto mb-5">
              <MessageSquare size={12} />
              FAQ
            </div>
            <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink mb-4">
              Common{' '}
              <span className="text-gradient">questions</span>
            </h2>
            <p className="text-ink-secondary text-base max-w-lg mx-auto font-body">
              Quick answers to the questions we get asked the most.
            </p>
          </div>

          <div className="space-y-3 reveal">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === index}
                onToggle={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
              />
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <p className="text-sm text-ink-muted mb-4 font-body">
              Don&apos;t see your question here?
            </p>
            <a href="mailto:info@scrubby.io" className="btn-secondary">
              Email Us Directly
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <div className="divider max-w-6xl mx-auto" />

      {/* ── Offices / Locations Section ── */}
      <section className="relative py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <div className="badge mx-auto mb-5">
              <Globe size={12} />
              Global Presence
            </div>
            <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink mb-4">
              Our{' '}
              <span className="text-gradient">offices</span>
            </h2>
            <p className="text-ink-secondary text-base max-w-lg mx-auto font-body">
              We&apos;re a distributed team with offices across three continents,
              serving customers worldwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 reveal">
            {offices.map((office) => (
              <div
                key={office.country}
                className="card p-6 text-center hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-green-bg flex items-center justify-center mx-auto mb-4">
                  <Building2 size={20} className="text-brand-green-dark" />
                </div>
                <h3 className="font-display font-700 text-base text-ink mb-0.5">
                  {office.city}
                </h3>
                <span className="inline-block text-xs font-display font-500 text-brand-green-dark bg-brand-green-bg px-2 py-0.5 rounded-full mb-3">
                  {office.label}
                </span>
                <p className="text-sm text-ink-secondary font-body mb-1">
                  {office.country}
                </p>
                <p className="text-xs text-ink-muted font-body">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
