import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO, { buildFAQSchema } from '../components/SEO'
import { ArrowLeft, ArrowRight, ChevronRight, HelpCircle } from 'lucide-react'

/* ─── FAQ Detail Data ─── */

const faqDetails = [
  { slug: 'what-is-a-risky-or-catch-all-email', question: 'What is a risky or catch-all email?', answer: 'Risky emails are addresses that may cause deliverability issues when included in your campaigns. Catch-all (also known as accept-all) addresses belong to domains configured to receive all incoming messages, regardless of whether a specific mailbox actually exists.\n\nThis means any email sent to the domain \u2014 even to random or misspelled addresses \u2014 will be accepted by the server. Standard email verification tools can detect these domains but cannot determine which individual addresses are actually valid.\n\nCommon types of risky emails include:\n- **Catch-all/Accept-all addresses**: Server accepts everything\n- **Temporary or disposable emails**: Created for short-term use\n- **Spam trap addresses**: Used by ISPs to identify spammers\n- **Role-based addresses**: Generic addresses like info@, admin@, support@\n\nScrubby specializes in validating these risky emails through deep inbox-level testing, giving you definitive valid/invalid results instead of uncertain \u201crisky\u201d classifications.', category: 'general' },
  { slug: 'catch-all-vs-risky-email', question: 'Is a Catch-All email the same thing as a Risky Email?', answer: 'Yes, essentially they refer to the same category of hard-to-verify emails, but the terminology depends on the tool you use.\n\n**SMTP verification tools** (like ZeroBounce, NeverBounce, MillionVerifier) classify them as **Catch-All** or **Accept-All** because that describes the server behavior \u2014 the domain\'s mail server is configured to catch all incoming messages.\n\n**Data providers and enrichment tools** (like Apollo, Cognism, ZoomInfo) classify them as **Risky** or assign **low confidence validation scores** because from their perspective, the email\'s deliverability is uncertain.\n\nRegardless of the label, the core problem is the same: standard verification methods cannot determine whether the individual mailbox actually exists and will deliver your message to a real person.\n\nScrubby bridges this gap by going beyond SMTP checks and actually testing deliverability at the inbox level.', category: 'general' },
  { slug: 'why-cant-smtp-tools-validate-risky-emails', question: "Why can't my SMTP tool validate the Risky Emails?", answer: 'SMTP (Simple Mail Transfer Protocol) verification works by performing a "handshake" with the receiving mail server to check if an email address exists. Here\'s the technical process:\n\n1. Your tool connects to the recipient\'s mail server\n2. It says "I want to send an email to user@domain.com"\n3. The server responds with either acceptance or rejection\n\nWith **catch-all domains**, the server is configured to accept ALL incoming connections, regardless of whether the specific mailbox exists. This means:\n- Every address returns a "valid" handshake response\n- The tool cannot distinguish real addresses from fake ones\n- Results are marked as "Accept-All" or "Risky" \u2014 not valid or invalid\n\nThis is why tools like ZeroBounce, NeverBounce, and MillionVerifier cannot give you a definitive answer for these addresses.\n\n**Scrubby takes a different approach**: instead of relying on SMTP handshakes, we perform actual inbox-level testing over 48-72 hours, monitoring what happens when a test email is sent. This gives definitive valid/invalid results that SMTP-based tools simply cannot achieve.', category: 'general' },
  { slug: 'what-results-to-expect-with-scrubby', question: 'What Kind of Results Can I Expect with Scrubby?', answer: 'With Scrubby, you can expect:\n\n- **~98.7% accuracy** in detecting hard bounces among catch-all/risky emails\n- **Bounce rates under 2%** when using Scrubby-validated addresses\n- **Up to 42% more usable leads** recovered from your "risky" email segment\n\n**Hard bounces vs Soft bounces:**\n- **Hard bounces** occur when an email address doesn\'t exist \u2014 Scrubby excels at catching these\n- **Soft bounces** can result from offline servers, full inboxes, or poor sender reputation \u2014 these depend on factors beyond the email address itself\n\nScrubby focuses specifically on hard bounce detection, which is the most critical factor for protecting your sender reputation. Soft bounce rates depend on your list quality, sender score, domain reputation, and email content.\n\n**Processing time:** Results are typically delivered within 48-72 hours because Scrubby performs deep inbox-level validation rather than instant SMTP checks. This trade-off in speed delivers significantly more accurate results.', category: 'results' },
  { slug: 'how-does-scrubby-work-with-tech-stack', question: 'How does Scrubby work with my existing tech stack?', answer: 'Scrubby is designed to complement \u2014 not replace \u2014 your existing email verification tools. Here\'s how it fits into your workflow:\n\n**Step 1: Initial Verification**\nRun your email list through your current SMTP tool (ZeroBounce, NeverBounce, MillionVerifier, etc.)\n\n**Step 2: Separate the Results**\n- Valid emails \u2192 Send directly\n- Invalid emails \u2192 Remove from list\n- Catch-All/Risky emails \u2192 Send to Scrubby\n\n**Step 3: Deep Validation with Scrubby**\nScrubby validates the risky segment through inbox-level testing over 48-72 hours.\n\n**Step 4: Use the Results**\n- Scrubby-validated \u2192 Safe to include in campaigns\n- Scrubby-invalid \u2192 Remove from list\n\n**Integrations available:**\n- **API**: Full REST API for custom integrations\n- **Zapier**: Automate workflows without code\n- **Clay**: Native integration for data enrichment\n- **CRM tools**: HubSpot, Salesforce, Pipedrive via Zapier\n- **Outreach tools**: Instantly, SmartLead via API or CSV\n\nYou can also use your own API keys from ZeroBounce, NeverBounce, or MillionVerifier within the Scrubby platform.', category: 'usage' },
  { slug: 'is-there-a-scrubby-api', question: 'Is there a Scrubby API available?', answer: 'Yes! Scrubby offers a full REST API that enables you to integrate email validation directly into your applications and workflows.\n\n**API Features:**\n- Single email validation endpoint\n- Bulk email validation (upload lists)\n- Webhook notifications when results are ready\n- Full documentation with code examples\n\n**Getting started:**\n1. Sign up at app.scrubby.io\n2. Navigate to API settings\n3. Generate your API key\n4. Use the endpoints with your preferred language\n\nAPI keys and documentation are available within the platform immediately after registration.', category: 'billing' },
  { slug: 'how-secure-is-my-data', question: 'How secure is my data with Scrubby?', answer: 'Data security is a top priority at Scrubby. Here\'s how we protect your information:\n\n**Encryption:**\n- All data is encrypted in transit using TLS 1.3\n- Data at rest is encrypted with AES-256\n\n**Access Control:**\n- Your data remains strictly under your control\n- No third-party access without your explicit consent\n- Role-based access controls for team accounts\n\n**Compliance:**\n- GDPR compliant \u2014 we follow all EU data protection regulations\n- Regular security audits and penetration testing\n- SOC 2 compliance processes in place\n\n**Data Retention:**\n- Email lists are processed and results are stored securely\n- You can delete your data at any time from the dashboard\n- We never sell or share your email data\n\nFor more details, see our Privacy Policy and GDPR Compliance pages.', category: 'security' },
]

/* ─── Category Labels ─── */

const categoryLabels = {
  general: 'General',
  results: 'Results & Accuracy',
  usage: 'Usage & Integration',
  billing: 'Account & Billing',
  security: 'Security',
}

/* ─── Markdown-style Parser ─── */

function parseAnswer(answer) {
  const paragraphs = answer.split('\n\n')
  return paragraphs.map((block, i) => {
    const lines = block.split('\n')

    // Check if this block is a list
    const isUnorderedList = lines.every((l) => l.startsWith('- '))
    const isOrderedList = lines.every((l) => /^\d+\.\s/.test(l))

    if (isUnorderedList) {
      return (
        <ul key={i} className="list-disc pl-6 mb-4 space-y-1">
          {lines.map((line, j) => (
            <li key={j} className="text-ink-secondary leading-relaxed">
              {renderInline(line.replace(/^- /, ''))}
            </li>
          ))}
        </ul>
      )
    }

    if (isOrderedList) {
      return (
        <ol key={i} className="list-decimal pl-6 mb-4 space-y-1">
          {lines.map((line, j) => (
            <li key={j} className="text-ink-secondary leading-relaxed">
              {renderInline(line.replace(/^\d+\.\s/, ''))}
            </li>
          ))}
        </ol>
      )
    }

    // Check for mixed content (paragraph followed by list items)
    const listStartIndex = lines.findIndex((l) => l.startsWith('- '))
    if (listStartIndex > 0) {
      const textLines = lines.slice(0, listStartIndex)
      const listLines = lines.slice(listStartIndex)
      return (
        <div key={i}>
          <p className="text-ink-secondary leading-relaxed mb-4">
            {renderInline(textLines.join(' '))}
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            {listLines.map((line, j) => (
              <li key={j} className="text-ink-secondary leading-relaxed">
                {renderInline(line.replace(/^- /, ''))}
              </li>
            ))}
          </ul>
        </div>
      )
    }

    // Regular paragraph
    return (
      <p key={i} className="text-ink-secondary leading-relaxed mb-4">
        {renderInline(lines.join(' '))}
      </p>
    )
  })
}

function renderInline(text) {
  // Split on **bold** patterns
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-ink font-semibold">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

/* ─── Page ─── */

export default function FAQDetailPage() {
  const { slug } = useParams()
  const faq = faqDetails.find((f) => f.slug === slug)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add('visible')
        ),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [slug])

  if (!faq) {
    return (
      <div className="font-body pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-surface-secondary flex items-center justify-center mx-auto mb-5">
            <HelpCircle size={24} className="text-ink-muted" />
          </div>
          <h1 className="font-display text-4xl font-bold text-ink mb-4">
            Question Not Found
          </h1>
          <p className="text-ink-secondary mb-8">
            The question you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link to="/faq" className="btn-primary">
            <ArrowLeft size={14} />
            Back to All Questions
          </Link>
        </div>
      </div>
    )
  }

  const relatedQuestions = faqDetails
    .filter((f) => f.category === faq.category && f.slug !== faq.slug)
    .slice(0, 4)

  const faqSchema = buildFAQSchema([
    { question: faq.question, answer: faq.answer },
  ])

  return (
    <main className="font-body">
      <SEO
        title={faq.question}
        description={faq.answer.split('\n\n')[0].slice(0, 160)}
        path={`/faq/${faq.slug}`}
        schema={faqSchema}
      />

      {/* ── Hero ── */}
      <section className="relative bg-[#18181B] pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-green/10 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link
              to="/faq"
              className="hover:text-brand-green transition-colors"
            >
              FAQ
            </Link>
            <ChevronRight size={12} />
            <span className="text-slate-300 line-clamp-1">{faq.question}</span>
          </nav>

          <span className="inline-flex text-xs font-display font-medium px-3 py-1.5 rounded-full mb-4 bg-brand-green/10 text-brand-green border border-brand-green/20">
            {categoryLabels[faq.category] || faq.category}
          </span>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {faq.question}
          </h1>
        </div>
      </section>

      {/* ── Content + Sidebar ── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <article className="reveal">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-display prose-headings:font-bold prose-headings:text-ink
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-ink-secondary prose-p:leading-relaxed prose-p:mb-4
                  prose-li:text-ink-secondary
                  prose-a:text-brand-green-dark prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-ink prose-strong:font-semibold
                  prose-ol:pl-6 prose-ul:pl-6
                "
              >
                {parseAnswer(faq.answer)}
              </div>

              {/* Back Link */}
              <div className="mt-10 pt-6 border-t border-slate-200">
                <Link
                  to="/faq"
                  className="inline-flex items-center gap-2 text-sm font-display font-medium text-brand-green-dark hover:text-brand-green transition-colors"
                >
                  <ArrowLeft size={14} />
                  Back to All Questions
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-6">
                {/* CTA Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 text-white">
                  <h3 className="font-display text-lg font-bold mb-2">
                    Try Scrubby Free
                  </h3>
                  <p className="text-sm text-slate-300 mb-4">
                    Validate your catch-all emails with 98.7% accuracy. Start
                    with 100 free credits.
                  </p>
                  <a
                    href="https://app.scrubby.io"
                    className="btn-primary w-full justify-center text-sm"
                  >
                    Get Started Free
                    <ArrowRight size={14} />
                  </a>
                </div>

                {/* Related Questions */}
                {relatedQuestions.length > 0 && (
                  <div className="p-6 rounded-2xl bg-surface-secondary border border-slate-200">
                    <h3 className="font-display text-sm font-bold text-ink mb-4">
                      Related Questions
                    </h3>
                    <div className="space-y-4">
                      {relatedQuestions.map((rq) => (
                        <Link
                          key={rq.slug}
                          to={`/faq/${rq.slug}`}
                          className="block group"
                        >
                          <h4 className="font-display text-sm font-medium text-ink group-hover:text-brand-green-dark transition-colors line-clamp-2 mb-1">
                            {rq.question}
                          </h4>
                          <span className="text-xs text-ink-tertiary">
                            {categoryLabels[rq.category]}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#18181B] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-10 right-1/4 w-60 h-60 bg-brand-green/10 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Validate Your Emails?
          </h2>
          <p className="text-slate-300 mb-8">
            Start with 100 free credits. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.scrubby.io" className="btn-primary">
              Start Free
              <ArrowRight size={14} />
            </a>
            <Link to="/how-it-works" className="btn-secondary-dark">
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
