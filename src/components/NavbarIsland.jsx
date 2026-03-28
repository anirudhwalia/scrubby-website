import { useState, useEffect, useRef } from 'react'
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

/* ─── NAV DATA ─── */

const navLinks = [
  {
    label: 'Features',
    children: [
      { label: 'Email Validation', href: '/bulk-cleaning/' },
      { label: 'Risky Email Finder', href: '/risky-email-finder/' },
      { label: 'Risky Email Validation', href: '/risky-email-validation/' },
      { label: 'Email Verification Tools', href: '/email-verification-tools/' },
      { label: 'Blacklist Monitor', href: '/blacklist-monitor/' },
      { label: 'Email Testing', href: '/email-testing/' },
      { label: 'Benefits', href: '/benefits/' },
    ],
  },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'How It Works', href: '/how-it-works/' },
  { label: 'Integrations', href: '/integrations/' },
  { label: 'Enterprise', href: '/enterprise/' },
  {
    label: 'About',
    children: [
      { label: 'About Us', href: '/about/' },
      { label: 'Founders', href: '/about/founders/' },
      { label: 'Milestones', href: '/about/milestones/' },
      { label: 'G2 Reviews', href: '/about/g2-reviews/' },
      { label: 'Careers', href: '/about/careers/' },
      { label: 'Testimonials', href: '/testimonials/' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Blog', href: '/blog/' },
      { label: 'Resources', href: '/resources/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'Book a Demo', href: '/book-demo/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
]

/* ─── NAVBAR ─── */

export default function NavbarIsland() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null)
  const dropdownTimeoutRef = useRef(null)

  // scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close mobile menu on Astro view transition navigation
  useEffect(() => {
    const close = () => { setMobileOpen(false); setMobileDropdownOpen(null) }
    document.addEventListener('astro:before-swap', close)
    return () => document.removeEventListener('astro:before-swap', close)
  }, [])

  const handleDropdownEnter = (label) => {
    clearTimeout(dropdownTimeoutRef.current)
    setActiveDropdown(label)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm'
          : 'bg-white'
      }`}
    >
      {/* ── Top Banner ── */}
      <div className="bg-navy-800">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-2 text-xs font-display font-medium tracking-tight">
          <Sparkles size={11} className="text-brand-green" />
          <span className="text-slate-400">
            Transform your risky emails into valid leads with Scrubby
          </span>
          <a href="/pricing/" className="text-brand-green ml-1 hover:underline">
            Learn how <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      {/* ── Main Nav Bar ── */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <img src="/logos/scrubby-logo.svg" alt="Scrubby" className="h-6" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isDropdown = !!link.children

            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => isDropdown && handleDropdownEnter(link.label)}
                onMouseLeave={() => isDropdown && handleDropdownLeave()}
              >
                {isDropdown ? (
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3.5 py-2 rounded-md text-[13px] font-display font-medium text-slate-500 hover:text-navy-800 hover:bg-slate-50/80 transition-all duration-150"
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={`opacity-40 transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="flex items-center gap-1 px-3.5 py-2 rounded-md text-[13px] font-display font-medium text-slate-500 hover:text-navy-800 hover:bg-slate-50/80 transition-all duration-150"
                  >
                    {link.label}
                  </a>
                )}

                {/* Dropdown Panel */}
                {isDropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-lg shadow-black/[0.04] animate-fade-up">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-3.5 py-2 text-[13px] font-display text-slate-500 hover:text-brand-green-dark hover:bg-slate-50 transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href="https://app.scrubby.io"
            className="px-3.5 py-2 text-[13px] font-display font-medium text-slate-500 hover:text-navy-800 transition-colors"
          >
            Login
          </a>
          <a href="/pricing/" className="btn-primary text-[13px] px-5 py-2.5">
            Try for Free
            <ArrowRight size={13} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-navy-800 hover:bg-slate-50 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[calc(theme(spacing.0)+88px)] bottom-0 bg-white overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
            {navLinks.map((link) => {
              const isDropdown = !!link.children

              return (
                <div key={link.label}>
                  {isDropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileDropdownOpen(
                            mobileDropdownOpen === link.label ? null : link.label
                          )
                        }
                        className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-display font-medium text-slate-600 hover:text-navy-800 hover:bg-slate-50 transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`opacity-50 transition-transform duration-200 ${
                            mobileDropdownOpen === link.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {mobileDropdownOpen === link.label && (
                        <div className="ml-4 space-y-1">
                          {link.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-slate-500 hover:text-brand-green-dark transition-colors"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="block px-4 py-3 rounded-lg text-sm font-display font-medium text-slate-600 hover:text-navy-800 hover:bg-slate-50 transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              )
            })}

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href="https://app.scrubby.io"
                className="block px-4 py-3 text-sm font-display font-medium text-slate-600"
              >
                Login
              </a>
              <a
                href="/pricing/"
                className="btn-primary w-full justify-center text-sm"
              >
                Try for Free
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
