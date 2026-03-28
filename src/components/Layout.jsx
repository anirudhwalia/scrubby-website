import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react'

/* ─────────────────────────── NAV DATA ─────────────────────────── */

const navLinks = [
  {
    label: 'Features',
    children: [
      { label: 'Email Validation', to: '/bulk-cleaning' },
      { label: 'Risky Email Finder', to: '/risky-email-finder' },
      { label: 'Risky Email Validation', to: '/risky-email-validation' },
      { label: 'Email Verification Tools', to: '/email-verification-tools' },
      { label: 'Blacklist Monitor', to: '/blacklist-monitor' },
      { label: 'Email Testing', to: '/email-testing' },
      { label: 'Benefits', to: '/benefits' },
    ],
  },
  { label: 'Pricing', to: '/pricing' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Integrations', to: '/integrations' },
  { label: 'Enterprise', to: '/enterprise' },
  {
    label: 'About',
    children: [
      { label: 'About Us', to: '/about' },
      { label: 'Founders', to: '/about/founders' },
      { label: 'Milestones', to: '/about/milestones' },
      { label: 'G2 Reviews', to: '/about/g2-reviews' },
      { label: 'Careers', to: '/about/careers' },
      { label: 'Testimonials', to: '/testimonials' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Blog', to: '/blog' },
      { label: 'Resources', to: '/resources' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Book a Demo', to: '/book-demo' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

/* ─────────────────────────── FOOTER DATA ─────────────────────── */

const footerColumns = {
  Product: [
    { label: 'Bulk Email Cleaning', to: '/bulk-cleaning' },
    { label: 'Risky Email Finder', to: '/risky-email-finder' },
    { label: 'Risky Email Validation', to: '/risky-email-validation' },
    { label: 'Email Verification Tools', to: '/email-verification-tools' },
    { label: 'Email Testing', to: '/email-testing' },
    { label: 'Benefits', to: '/benefits' },
  ],
  Pricing: [
    { label: 'Pricing', to: '/pricing' },
    { label: 'Enterprise', to: '/enterprise' },
    { label: 'Agencies', to: '/agencies' },
  ],
  Compare: [
    { label: 'vs NeverBounce', to: '/alternatives/neverbounce' },
    { label: 'vs ZeroBounce', to: '/alternatives/zerobounce' },
    { label: 'vs MillionVerifier', to: '/alternatives/millionverifier' },
    { label: 'vs BriteVerify', to: '/alternatives/briteverify' },
    { label: 'vs Apollo', to: '/alternatives/apollo' },
    { label: 'vs Cognism', to: '/alternatives/cognism' },
    { label: 'vs ZoomInfo', to: '/alternatives/zoominfo' },
    { label: 'vs SmartLeads', to: '/alternatives/smartleads' },
    { label: 'vs Instantly', to: '/alternatives/instantly' },
    { label: 'vs Clay', to: '/alternatives/clay' },
    { label: 'vs Mailchimp', to: '/alternatives/mailchimp' },
    { label: 'vs Pipedrive', to: '/alternatives/pipedrive' },
    { label: 'vs Salesforce', to: '/alternatives/salesforce' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Founders', to: '/about/founders' },
    { label: 'Milestones', to: '/about/milestones' },
    { label: 'G2 Reviews', to: '/about/g2-reviews' },
    { label: 'Careers', to: '/about/careers' },
    { label: 'Testimonials', to: '/testimonials' },
  ],
  Resources: [
    { label: 'Blog', to: '/blog' },
    { label: 'Resources', to: '/resources' },
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Book a Demo', to: '/book-demo' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Integrations', to: '/integrations' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'GDPR Compliance', to: '/gdpr' },
    { label: 'Cookie Policy', to: '/cookie-policy' },
    { label: 'Code of Conduct', to: '/code-of-conduct' },
  ],
}

const socialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

/* ─────────────────────────── LOGO ─────────────────────────────── */

function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center group">
      <img
        src="/logos/scrubby-logo.svg"
        alt="Scrubby"
        className="h-6"
        style={light ? { filter: 'brightness(0) invert(1)' } : {}}
      />
    </Link>
  )
}

/* ─────────────────────────── NAVBAR ──────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null)
  const dropdownTimeoutRef = useRef(null)
  const location = useLocation()

  // close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setMobileDropdownOpen(null)
  }, [location.pathname])

  // scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

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
          <Link
            to="/pricing"
            className="text-brand-green ml-1 hover:underline"
          >
            Learn how <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>

      {/* ── Main Nav Bar ── */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

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
                  <Link
                    to={link.to}
                    className="flex items-center gap-1 px-3.5 py-2 rounded-md text-[13px] font-display font-medium text-slate-500 hover:text-navy-800 hover:bg-slate-50/80 transition-all duration-150"
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown Panel */}
                {isDropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-lg shadow-black/[0.04] animate-fade-up">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block px-3.5 py-2 text-[13px] font-display text-slate-500 hover:text-brand-green-dark hover:bg-slate-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2.5">
          <Link
            to="/#login"
            className="px-3.5 py-2 text-[13px] font-display font-medium text-slate-500 hover:text-navy-800 transition-colors"
          >
            Login
          </Link>
          <Link to="/pricing" className="btn-primary text-[13px] px-5 py-2.5">
            Try for Free
            <ArrowRight size={13} />
          </Link>
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
                            mobileDropdownOpen === link.label
                              ? null
                              : link.label
                          )
                        }
                        className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-display font-medium text-slate-600 hover:text-navy-800 hover:bg-slate-50 transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`opacity-50 transition-transform duration-200 ${
                            mobileDropdownOpen === link.label
                              ? 'rotate-180'
                              : ''
                          }`}
                        />
                      </button>
                      {mobileDropdownOpen === link.label && (
                        <div className="ml-4 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.to}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2 text-sm text-slate-500 hover:text-brand-green-dark transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-lg text-sm font-display font-medium text-slate-600 hover:text-navy-800 hover:bg-slate-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              )
            })}

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <Link
                to="/#login"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-display font-medium text-slate-600"
              >
                Login
              </Link>
              <Link
                to="/pricing"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center text-sm"
              >
                Try for Free
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

/* ─────────────────────────── FOOTER ─────────────────────────── */

function Footer() {
  return (
    <footer className="relative bg-navy-800 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* ── Columns ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="mb-4">
              <Logo light />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4 max-w-[220px]">
              Validate &amp; enrich every email for maximum deliverability.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs text-slate-500">
                <MapPin size={12} className="mt-0.5 shrink-0" />
                <span>Viru v&auml;ljak 2, 10111, Tallinn, Estonia</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Mail size={12} className="shrink-0" />
                hello@scrubby.io
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-xs text-slate-500 uppercase tracking-widest mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-400 hover:text-brand-green transition-colors font-display flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={10}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/[0.06] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: tagline + copyright */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-xs text-slate-500 font-display">
                Made with <span className="text-red-400">&hearts;</span> in
                Estonia, India and US
              </p>
              <p className="text-xs text-slate-500 font-display">
                &copy; 2024 Scrubby. All rights reserved.
              </p>
            </div>

            {/* Right: socials */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-brand-green hover:border-brand-green/20 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────── LAYOUT ─────────────────────────── */

export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
