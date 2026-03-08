import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import SEO, { buildFAQSchema } from '../components/SEO'
import {
  Search,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  Mail,
  BarChart3,
  Plug,
  CreditCard,
  Lock,
} from 'lucide-react'

/* ─── Data ─── */

const categories = [
  { key: 'all', label: 'All Questions', icon: HelpCircle },
  { key: 'general', label: 'General', icon: Mail },
  { key: 'results', label: 'Results & Accuracy', icon: BarChart3 },
  { key: 'usage', label: 'Usage & Integration', icon: Plug },
  { key: 'billing', label: 'Account & Billing', icon: CreditCard },
  { key: 'security', label: 'Security', icon: Lock },
]

const faqData = [
  {
    category: 'general',
    question: 'What is a risky or catch-all email?',
    answer:
      'Risky emails may cause deliverability issues. Catch-all addresses receive all messages sent to a domain, even nonexistent ones. They can also include temporary, invalid, spam-trap, or role-based addresses.',
  },
  {
    category: 'general',
    question: 'Is a Catch-All email the same thing as a Risky Email?',
    answer:
      'Yes, SMTP tools classify them as Catch-All or Accept-All, while data providers classify them as Risky or assign low confidence validation scores.',
  },
  {
    category: 'general',
    question: "Why can't my SMTP tool validate the Risky Emails?",
    answer:
      'Catch-All servers deliberately bypass SMTP validation. They catch all "handshakes" without providing Valid or Invalid signals.',
  },
  {
    category: 'results',
    question: 'What Kind of Results Can I Expect with Scrubby?',
    answer:
      'Expect approximately 98% accuracy detecting hard bounces, maintaining bounce rates under 2%. Soft bounces depend on list quality, sender score, domain reputation, and content.',
  },
  {
    category: 'results',
    question:
      'What is a soft bounce vs a hard bounce? Can Scrubby catch soft bounces?',
    answer:
      'Hard bounces occur for nonexistent addresses. Soft bounces result from offline servers or poor sender reputation. Scrubby focuses on hard bounces and cannot catch soft bounces.',
  },
  {
    category: 'results',
    question: 'What happens if I don\'t validate my "risky" emails?',
    answer:
      'Discarding risky emails wastes up to 42% of your list. Including unvalidated ones risks burned domains and account shutdowns from high bounce rates.',
  },
  {
    category: 'usage',
    question: 'How can I best utilize Scrubby?',
    answer:
      'Use Scrubby exclusively for "risky" emails that SMTP tools classify as Catch-All or Accept-All, or data providers mark as Risky with low confidence scores.',
  },
  {
    category: 'usage',
    question: 'What are the most common SMTP verification tools?',
    answer:
      'Common tools include ZeroBounce, NeverBounce, BriteVerify, DeBounce, and MillionVerifier.',
  },
  {
    category: 'usage',
    question: 'How does Scrubby work with my existing tech stack?',
    answer:
      'Scrubby complements existing tools by validating "risky" emails that traditional platforms can\'t confidently classify through actual blank email testing.',
  },
  {
    category: 'usage',
    question:
      'Can I use my own accounts with ZeroBounce, NeverBounce, or MillionVerifier?',
    answer:
      'Yes, you can enter API keys from these services. In-house accounts remain available if you don\'t have external accounts.',
  },
  {
    category: 'usage',
    question: 'Does Scrubby integrate with Clay?',
    answer:
      'Yes, full integration is available with documentation and setup guides.',
  },
  {
    category: 'billing',
    question: 'Is there a Scrubby API available?',
    answer:
      'Yes, API keys are available within the platform with full documentation.',
  },
  {
    category: 'billing',
    question: 'What if I need more credits?',
    answer:
      'Purchase additional data packs once you exceed your monthly quota limits.',
  },
  {
    category: 'billing',
    question:
      'If I cancel my subscription, do I keep my rolled-over credits?',
    answer:
      'Yes, unused credits remain available after canceling monthly subscriptions.',
  },
  {
    category: 'billing',
    question:
      'I\'m trying to register but it says "Domain Restricted". What should I do?',
    answer:
      'Registration restrictions apply to personal/public domain emails (Gmail, Yahoo), nonexistent domains, or domains redirecting elsewhere. Use a business email.',
  },
  {
    category: 'security',
    question: 'How secure is my data with Scrubby?',
    answer:
      'Data is encrypted with cutting-edge protocols and remains under your control at all times.',
  },
  {
    category: 'security',
    question: 'My question isn\'t answered. How do I contact you?',
    answer:
      'Email support@scrubby.io. Expect responses within 24\u201348 hours; mention urgency for priority handling.',
  },
]

/* ─── Category Labels ─── */

const categoryLabels = {
  general: 'General',
  results: 'Results & Accuracy',
  usage: 'Usage & Integration',
  billing: 'Account & Billing',
  security: 'Security',
}

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
        <ChevronDown
          size={18}
          className={`text-ink-muted flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5">
            <p className="text-sm text-ink-secondary leading-relaxed font-body">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Page ─── */

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

  /* Filtered FAQs */
  const filteredFaqs = useMemo(() => {
    let items = faqData

    if (activeCategory !== 'all') {
      items = items.filter((faq) => faq.category === activeCategory)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      items = items.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
      )
    }

    return items
  }, [activeCategory, searchQuery])

  /* Group filtered FAQs by category */
  const groupedFaqs = useMemo(() => {
    const groups = {}
    filteredFaqs.forEach((faq) => {
      if (!groups[faq.category]) {
        groups[faq.category] = []
      }
      groups[faq.category].push(faq)
    })
    return groups
  }, [filteredFaqs])

  /* Category order for rendering */
  const categoryOrder = ['general', 'results', 'usage', 'billing', 'security']

  /* Build a global index for open/close state */
  const getFaqGlobalIndex = (faq) =>
    faqData.findIndex(
      (f) => f.question === faq.question && f.category === faq.category
    )

  return (
    <main>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about Scrubby's email validation, pricing, integrations, accuracy, and more."
        path="/faq"
        schema={buildFAQSchema(faqData)}
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
          style={{
            background: 'rgba(45, 206, 142, 0.05)',
            animationDelay: '2s',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="reveal">
            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5">
              Frequently Asked{' '}
              <span className="text-gradient-light">Questions</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-body">
              Everything you need to know about Scrubby, email validation, and
              how to get the most out of your risky email lists.
            </p>

            {/* Search Bar */}
            <div className="max-w-lg mx-auto relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setOpenFaq(null)
                }}
                placeholder="Search questions..."
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white font-body placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green/40 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setOpenFaq(null)
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors text-xs font-display"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Filters + FAQ Content ── */}
      <section className="relative py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 reveal">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveCategory(cat.key)
                    setOpenFaq(null)
                  }}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-display font-500 transition-all duration-300 ${
                    activeCategory === cat.key
                      ? 'bg-brand-green text-white shadow-md shadow-brand-green/20'
                      : 'bg-surface-secondary text-ink-secondary hover:bg-surface-border hover:text-ink'
                  }`}
                >
                  <Icon size={14} />
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Results Count */}
          {searchQuery && (
            <div className="text-center mb-8 reveal">
              <p className="text-sm text-ink-muted font-body">
                {filteredFaqs.length}{' '}
                {filteredFaqs.length === 1 ? 'result' : 'results'} found
                {activeCategory !== 'all' && (
                  <span>
                    {' '}
                    in{' '}
                    <span className="font-display font-600 text-ink-secondary">
                      {categoryLabels[activeCategory]}
                    </span>
                  </span>
                )}
              </p>
            </div>
          )}

          {/* FAQ Groups */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-12 reveal">
              {categoryOrder.map((catKey) => {
                const items = groupedFaqs[catKey]
                if (!items || items.length === 0) return null

                const catInfo = categories.find((c) => c.key === catKey)
                const CatIcon = catInfo?.icon || HelpCircle

                return (
                  <div key={catKey}>
                    {/* Category Heading */}
                    {(activeCategory === 'all' || searchQuery) && (
                      <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-8 h-8 rounded-lg bg-brand-green-bg flex items-center justify-center">
                          <CatIcon
                            size={14}
                            className="text-brand-green-dark"
                          />
                        </div>
                        <h2 className="font-display font-700 text-lg text-ink">
                          {categoryLabels[catKey]}
                        </h2>
                        <span className="text-xs font-display font-500 text-ink-muted bg-surface-secondary px-2 py-0.5 rounded-full">
                          {items.length}
                        </span>
                      </div>
                    )}

                    {/* FAQ Items */}
                    <div className="space-y-3">
                      {items.map((faq) => {
                        const globalIndex = getFaqGlobalIndex(faq)
                        return (
                          <FAQItem
                            key={faq.question}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openFaq === globalIndex}
                            onToggle={() =>
                              setOpenFaq(
                                openFaq === globalIndex ? null : globalIndex
                              )
                            }
                          />
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16 reveal">
              <div className="w-16 h-16 rounded-2xl bg-surface-secondary flex items-center justify-center mx-auto mb-5">
                <Search size={24} className="text-ink-muted" />
              </div>
              <h3 className="font-display font-700 text-lg text-ink mb-2">
                No results found
              </h3>
              <p className="text-sm text-ink-secondary font-body mb-6 max-w-sm mx-auto">
                We couldn&apos;t find any questions matching your search. Try a
                different term or browse by category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                  setOpenFaq(null)
                }}
                className="btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <div className="divider max-w-3xl mx-auto" />

      {/* ── CTA Section ── */}
      <section className="relative py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="card-dark p-8 md:p-12 text-center relative overflow-hidden rounded-2xl reveal">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div
              className="absolute w-[300px] h-[300px] -top-20 -right-20 rounded-full blur-3xl opacity-30"
              style={{ background: 'rgba(45, 206, 142, 0.15)' }}
            />
            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-6">
                <Mail size={24} className="text-brand-green" />
              </div>
              <h2 className="font-display font-700 text-xl sm:text-2xl text-white mb-3">
                Still have questions?
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-md mx-auto font-body">
                Can&apos;t find the answer you&apos;re looking for? Our support
                team is here to help. Reach out and we&apos;ll get back to you
                within 24&ndash;48 hours.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Contact Support
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="mailto:support@scrubby.io"
                  className="btn-secondary-dark"
                >
                  Email Us
                  <Mail size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
