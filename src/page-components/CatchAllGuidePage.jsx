import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  BookOpen, ArrowRight, ChevronRight, List,
  Mail, Shield, AlertTriangle, CheckCircle, XCircle,
  Zap, Clock, TrendingUp
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   TABLE OF CONTENTS DATA
   ═══════════════════════════════════════════════════════ */

const tocSections = [
  { id: 'what-are-catch-all-emails', label: 'What Are Catch-All Emails?' },
  { id: 'why-domains-use-catch-all', label: 'Why Do Domains Use Catch-All?' },
  { id: 'challenge-for-email-marketers', label: 'The Challenge for Marketers' },
  { id: 'how-scrubby-solves-this', label: 'How Scrubby Solves This' },
  { id: 'best-practices', label: 'Best Practices' },
  { id: 'catch-all-vs-other-types', label: 'Catch-All vs Other Types' },
  { id: 'impact-on-deliverability', label: 'Impact on Deliverability' },
  { id: 'getting-started', label: 'Getting Started' },
]

/* ═══════════════════════════════════════════════════════
   EMAIL TYPE COMPARISON DATA
   ═══════════════════════════════════════════════════════ */

const emailTypes = [
  {
    type: 'Valid',
    description: 'Confirmed deliverable',
    action: 'Safe to send',
    icon: CheckCircle,
    iconColor: 'text-emerald-500',
    rowBg: 'bg-white',
  },
  {
    type: 'Invalid',
    description: 'Non-existent mailbox',
    action: 'Remove immediately',
    icon: XCircle,
    iconColor: 'text-red-500',
    rowBg: 'bg-slate-50',
  },
  {
    type: 'Catch-All',
    description: 'Server accepts all',
    action: 'Validate with Scrubby',
    icon: AlertTriangle,
    iconColor: 'text-amber-500',
    rowBg: 'bg-white',
  },
  {
    type: 'Disposable',
    description: 'Temporary address',
    action: 'Usually remove',
    icon: Clock,
    iconColor: 'text-orange-500',
    rowBg: 'bg-slate-50',
  },
  {
    type: 'Role-Based',
    description: 'team@, info@',
    action: 'Handle with care',
    icon: Mail,
    iconColor: 'text-blue-500',
    rowBg: 'bg-white',
  },
]

/* ═══════════════════════════════════════════════════════
   CATCH-ALL GUIDE PAGE
   ═══════════════════════════════════════════════════════ */

export default function CatchAllGuidePage() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Track active section for TOC highlighting
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.2, rootMargin: '-100px 0px -60% 0px' }
    )

    tocSections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) sectionObserver.observe(el)
    })

    return () => sectionObserver.disconnect()
  }, [])

  return (
    <div className="font-body">
      <SEO
        title="The Ultimate Guide to Catch-All Emails"
        description="Everything you need to know about catch-all (accept-all) email addresses: what they are, why they matter, and how to validate them for better deliverability."
        path="/resources/the-ultimate-guide-to-catch-all-emails"
        type="article"
      />

      {/* ── Hero ── */}
      <section className="relative bg-[#18181B] pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-green/10 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6 reveal">
            <Link to="/resources" className="hover:text-brand-green transition-colors">Resources</Link>
            <ChevronRight size={12} />
            <span className="text-slate-500">Guide</span>
          </nav>

          <div className="reveal">
            <span className="inline-flex items-center gap-1.5 text-xs font-display font-medium px-3 py-1.5 rounded-full mb-4 bg-brand-green/10 border border-brand-green/20 text-brand-green">
              <BookOpen size={12} />
              Resource Guide
            </span>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              The Ultimate Guide to{' '}
              <span className="text-gradient-light">Catch-All Emails</span>
            </h1>

            <p className="text-lg text-slate-300 mb-8 max-w-3xl">
              Everything you need to know about catch-all (accept-all) domains &mdash; what they are,
              why standard verification tools can&apos;t resolve them, and how to handle them for
              maximum deliverability.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp size={14} />
                <span>Updated March 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Content + Sidebar ── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* ── Main Content ── */}
            <article>
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
                {/* ── Section 1: What Are Catch-All Emails? ── */}
                <h2 id="what-are-catch-all-emails" className="reveal">What Are Catch-All Emails?</h2>
                <div className="reveal">
                  <p>
                    Catch-all (also called <strong>accept-all</strong>) email addresses belong to domains
                    configured to accept all incoming emails regardless of whether the specific mailbox
                    exists. When a domain has catch-all enabled, emails sent to <em>any</em> address at
                    that domain will be received &mdash; even made-up ones like{' '}
                    <code className="text-sm bg-slate-100 px-1.5 py-0.5 rounded text-ink font-mono">
                      random123@domain.com
                    </code>.
                  </p>
                  <p>
                    This means there&apos;s no way to tell from the outside whether a particular mailbox
                    truly exists or if the server is simply accepting everything. For email marketers
                    and sales teams, this creates a unique challenge that standard verification tools
                    can&apos;t solve.
                  </p>
                </div>

                {/* ── Section 2: Why Do Domains Use Catch-All? ── */}
                <h2 id="why-domains-use-catch-all" className="reveal">Why Do Domains Use Catch-All?</h2>
                <div className="reveal">
                  <p>
                    Organizations enable catch-all configurations on their domains for several reasons:
                  </p>
                  <ul>
                    <li>
                      <strong>Prevent missing important messages</strong> &mdash; Emails sent to misspelled
                      addresses (e.g., <em>joh@company.com</em> instead of <em>john@company.com</em>) are
                      still received rather than bouncing back.
                    </li>
                    <li>
                      <strong>Collect all incoming communications in one place</strong> &mdash; A single
                      inbox can aggregate messages sent to any address at the domain, making it easy
                      to route or review them later.
                    </li>
                    <li>
                      <strong>Small business flexibility</strong> &mdash; Smaller organizations want the
                      flexibility to use any address without creating individual mailbox accounts for each
                      one.
                    </li>
                    <li>
                      <strong>Legacy configuration</strong> &mdash; Many domains have catch-all enabled
                      as a default setting that was never updated or revisited by IT administrators.
                    </li>
                  </ul>
                </div>

                {/* ── Section 3: The Challenge for Email Marketers ── */}
                <h2 id="challenge-for-email-marketers" className="reveal">The Challenge for Email Marketers</h2>
                <div className="reveal">
                  <p>
                    Standard email verification tools rely on the <strong>SMTP handshake</strong> protocol
                    to check if an address exists. They connect to the recipient&apos;s mail server and
                    ask &ldquo;Does this mailbox exist?&rdquo; For most domains, the server gives a clear
                    yes or no answer.
                  </p>
                  <p>
                    With catch-all domains, however, <strong>every address appears valid</strong> because
                    the server accepts all incoming connections. This means your verification tool marks
                    them as &ldquo;Accept-All&rdquo; or &ldquo;Risky&rdquo; rather than giving a definitive
                    valid or invalid answer.
                  </p>
                  <p>
                    This creates a real dilemma: you could have <strong>30&ndash;40% of your list</strong>{' '}
                    that you can&apos;t confidently classify. If you send to all of them, you risk high
                    bounce rates. If you discard them all, you lose potentially valuable contacts. Neither
                    option is good for your bottom line.
                  </p>
                </div>

                {/* ── Section 4: How Scrubby Solves This ── */}
                <h2 id="how-scrubby-solves-this" className="reveal">How Scrubby Solves This</h2>
                <div className="reveal">
                  <p>
                    Unlike SMTP-based tools, Scrubby uses <strong>deep inbox-level validation</strong>.
                    Rather than simply asking the server whether an address exists, we actually send a
                    test email and monitor what happens at the inbox level over{' '}
                    <strong>48&ndash;72 hours</strong>.
                  </p>
                  <p>
                    This proprietary approach gives <strong>definitive valid/invalid results</strong> for
                    catch-all addresses that other tools simply mark as &ldquo;unknown&rdquo; or
                    &ldquo;risky.&rdquo; With Scrubby, you get a clear answer: either the email is
                    deliverable, or it isn&apos;t.
                  </p>

                  {/* Highlight box */}
                  <div className="not-prose my-8 p-6 rounded-2xl bg-brand-green/5 border border-brand-green/20">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Zap size={20} className="text-brand-green-dark" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-ink mb-1">98.7% Accuracy</h4>
                        <p className="text-sm text-ink-secondary leading-relaxed">
                          Scrubby achieves 98.7% accuracy on catch-all email validation &mdash; compared
                          to 0% resolution from standard SMTP-based tools that simply label them as
                          &ldquo;risky.&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Section 5: Best Practices ── */}
                <h2 id="best-practices" className="reveal">Best Practices for Handling Catch-All Emails</h2>
                <div className="reveal">
                  <p>
                    Whether you use Scrubby or manage catch-all emails manually, these best practices will
                    help you maintain a clean list and protect your sender reputation:
                  </p>
                  <ol>
                    <li>
                      <strong>Never discard catch-all emails outright</strong> &mdash; Up to 42% of them
                      are valid, deliverable addresses. Removing them all means losing nearly half of those
                      potential leads.
                    </li>
                    <li>
                      <strong>Use a specialized tool like Scrubby to validate them</strong> &mdash; Standard
                      verification tools cannot resolve catch-all addresses. You need inbox-level validation
                      to get definitive answers.
                    </li>
                    <li>
                      <strong>Segment your list by validation status</strong> &mdash; Separate your validated
                      catch-all emails from unvalidated ones so you can treat each group appropriately.
                    </li>
                    <li>
                      <strong>Monitor bounce rates carefully</strong> &mdash; When sending to catch-all
                      segments, watch your bounce rates closely. Keep them under 2% to protect your sender
                      reputation.
                    </li>
                    <li>
                      <strong>Start with small batches and scale up</strong> &mdash; Don&apos;t blast your
                      entire catch-all segment at once. Send small batches first, monitor results, and scale
                      up as you validate more addresses.
                    </li>
                  </ol>
                </div>

                {/* ── Section 6: Catch-All vs Other Email Types ── */}
                <h2 id="catch-all-vs-other-types" className="reveal">Catch-All vs Other Email Types</h2>
                <div className="reveal">
                  <p>
                    Understanding how catch-all emails differ from other email validation statuses is
                    critical. Here&apos;s a comparison of the most common email types and how you should
                    handle each:
                  </p>
                </div>

                {/* Comparison Table */}
                <div className="not-prose my-8 reveal">
                  <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                    <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                      <thead>
                        <tr className="bg-[#18181B] text-white">
                          <th className="text-left px-5 py-3.5 font-display font-semibold text-xs uppercase tracking-wider rounded-tl-xl">
                            Type
                          </th>
                          <th className="text-left px-5 py-3.5 font-display font-semibold text-xs uppercase tracking-wider">
                            Description
                          </th>
                          <th className="text-left px-5 py-3.5 font-display font-semibold text-xs uppercase tracking-wider rounded-tr-xl">
                            Recommended Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {emailTypes.map((row, i) => {
                          const Icon = row.icon
                          return (
                            <tr
                              key={row.type}
                              className={`${row.rowBg} border-t border-slate-100 ${
                                i === emailTypes.length - 1 ? 'last:rounded-b-xl' : ''
                              }`}
                            >
                              <td className="px-5 py-3.5 font-display font-semibold text-ink">
                                <div className="flex items-center gap-2">
                                  <Icon size={16} className={row.iconColor} />
                                  {row.type}
                                </div>
                              </td>
                              <td className="px-5 py-3.5 text-ink-secondary">{row.description}</td>
                              <td className="px-5 py-3.5">
                                <span
                                  className={`inline-flex items-center text-xs font-display font-medium px-2.5 py-1 rounded-full ${
                                    row.type === 'Valid'
                                      ? 'bg-emerald-50 text-emerald-700'
                                      : row.type === 'Invalid'
                                      ? 'bg-red-50 text-red-700'
                                      : row.type === 'Catch-All'
                                      ? 'bg-amber-50 text-amber-700'
                                      : row.type === 'Disposable'
                                      ? 'bg-orange-50 text-orange-700'
                                      : 'bg-blue-50 text-blue-700'
                                  }`}
                                >
                                  {row.action}
                                </span>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── Section 7: Impact on Email Deliverability ── */}
                <h2 id="impact-on-deliverability" className="reveal">Impact on Email Deliverability</h2>
                <div className="reveal">
                  <p>
                    Sending to unverified catch-all addresses is one of the fastest ways to damage your
                    sender reputation. Here&apos;s why it matters:
                  </p>
                  <p>
                    When you send emails to non-existent mailboxes on catch-all domains, many of those
                    emails will <strong>hard bounce</strong>. High bounce rates signal to inbox providers
                    like Gmail, Outlook, and Yahoo that you&apos;re not maintaining a clean list &mdash;
                    which can lead to your domain being <strong>blacklisted</strong>.
                  </p>
                  <p>
                    The consequences cascade quickly: blacklisting leads to lower inbox placement rates,
                    which leads to fewer opens, fewer clicks, and ultimately less revenue from your email
                    channel.
                  </p>
                  <p>
                    With <strong>validated catch-all emails</strong>, you can confidently include them
                    in your campaigns while maintaining <strong>under 2% bounce rates</strong> &mdash;
                    the threshold most inbox providers consider acceptable. This means more emails
                    delivered, better engagement, and a healthier sender reputation over time.
                  </p>

                  {/* Stats highlight */}
                  <div className="not-prose my-8 grid sm:grid-cols-3 gap-4">
                    {[
                      { stat: '42%', label: 'of catch-all emails are valid' },
                      { stat: '<2%', label: 'bounce rate after validation' },
                      { stat: '98.7%', label: 'validation accuracy with Scrubby' },
                    ].map((item) => (
                      <div
                        key={item.stat}
                        className="text-center p-5 rounded-xl bg-surface-secondary border border-slate-200"
                      >
                        <div className="font-display text-2xl font-bold text-brand-green-dark mb-1">
                          {item.stat}
                        </div>
                        <div className="text-xs text-ink-secondary font-display">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Section 8: Getting Started ── */}
                <h2 id="getting-started" className="reveal">Getting Started</h2>
                <div className="reveal">
                  <p>
                    Ready to stop guessing about your catch-all emails? Scrubby gives you the definitive
                    answers that other tools can&apos;t. Sign up today and get <strong>100 free credits</strong>{' '}
                    to validate your first batch of catch-all addresses.
                  </p>
                </div>

                {/* CTA Card */}
                <div className="not-prose mt-8 mb-4 reveal">
                  <div className="rounded-2xl p-8 md:p-10 text-center relative overflow-hidden" style={{ background: '#18181B' }}>
                    <div className="absolute inset-0 grid-bg opacity-20" />
                    <div className="absolute top-10 right-1/4 w-60 h-60 bg-brand-green/10 rounded-full blur-[100px]" />
                    <div className="relative z-10">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                        Validate Your Catch-All Emails Today
                      </h3>
                      <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                        Start with 100 free credits. No credit card required. See the difference
                        inbox-level validation makes.
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
                  </div>
                </div>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-6">
                {/* Table of Contents */}
                <div className="p-6 rounded-2xl bg-surface-secondary border border-slate-200">
                  <h3 className="font-display text-sm font-bold text-ink mb-4 flex items-center gap-2">
                    <List size={14} className="text-ink-tertiary" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-1">
                    {tocSections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`block text-sm py-1.5 px-3 rounded-lg transition-all duration-200 ${
                          activeSection === section.id
                            ? 'text-brand-green-dark bg-brand-green/5 font-medium'
                            : 'text-ink-secondary hover:text-brand-green-dark hover:bg-slate-50'
                        }`}
                      >
                        {section.label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Try Scrubby Free CTA */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-green-dark to-emerald-800 text-white">
                  <h3 className="font-display text-lg font-bold mb-2">Try Scrubby Free</h3>
                  <p className="text-sm text-emerald-100 mb-4">
                    Validate your catch-all emails with 98.7% accuracy. Start with 100 free credits.
                  </p>
                  <a
                    href="https://app.scrubby.io"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white text-brand-green-dark font-display font-semibold text-sm hover:bg-emerald-50 transition-colors"
                  >
                    Get Started Free
                    <ArrowRight size={14} />
                  </a>
                </div>

                {/* Related Resources */}
                <div className="p-6 rounded-2xl bg-surface-secondary border border-slate-200">
                  <h3 className="font-display text-sm font-bold text-ink mb-4">Related Resources</h3>
                  <div className="space-y-3">
                    <Link
                      to="/how-it-works"
                      className="block group"
                    >
                      <h4 className="font-display text-sm font-medium text-ink group-hover:text-brand-green-dark transition-colors mb-0.5">
                        How Scrubby Works
                      </h4>
                      <span className="text-xs text-ink-tertiary">Learn the technology</span>
                    </Link>
                    <Link
                      to="/risky-email-validation"
                      className="block group"
                    >
                      <h4 className="font-display text-sm font-medium text-ink group-hover:text-brand-green-dark transition-colors mb-0.5">
                        Risky Email Validation
                      </h4>
                      <span className="text-xs text-ink-tertiary">Beyond catch-all</span>
                    </Link>
                    <Link
                      to="/blog"
                      className="block group"
                    >
                      <h4 className="font-display text-sm font-medium text-ink group-hover:text-brand-green-dark transition-colors mb-0.5">
                        Blog
                      </h4>
                      <span className="text-xs text-ink-tertiary">Latest articles</span>
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Section ── */}
      <section className="py-20 bg-[#18181B] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-10 right-1/4 w-60 h-60 bg-brand-green/10 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 reveal">
            Ready to Validate Your Emails?
          </h2>
          <p className="text-slate-300 mb-8 reveal">
            Start with 100 free credits. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
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
    </div>
  )
}
