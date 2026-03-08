import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'

const navLinks = [
  {
    label: 'Features',
    href: '#features',
    children: [
      { label: 'Email Validation', href: '#validation' },
      { label: 'Profile Enrichment', href: '#enrichment' },
      { label: 'Company Enrichment', href: '#company' },
    ],
  },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm'
          : 'bg-white'
      }`}
    >
      {/* Top Banner */}
      <div className="bg-navy-800 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-2 text-xs font-display font-500">
          <Zap size={12} className="text-accent-green" />
          <span className="text-slate-300">
            Verify 20-30% more emails than any other provider
          </span>
          <span className="text-accent-green ml-1 hover:underline cursor-pointer">
            Learn how →
          </span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-accent-green to-accent-green-dark flex items-center justify-center shadow-lg shadow-accent-green/20 group-hover:shadow-accent-green/30 transition-shadow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <span className="font-display font-700 text-xl text-navy-800 tracking-tight">
            Scrubby
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-display font-500 text-slate-600 hover:text-navy-800 hover:bg-slate-50 transition-all duration-200"
              >
                {link.label}
                {link.children && <ChevronDown size={14} className="opacity-50" />}
              </a>

              {link.children && activeDropdown === link.label && (
                <div className="absolute top-full left-0 mt-1 w-56 py-2 rounded-xl bg-white border border-slate-200 shadow-lg shadow-black/5">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm font-display text-slate-600 hover:text-accent-green-dark hover:bg-slate-50 transition-colors"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#"
            className="px-4 py-2 text-sm font-display font-500 text-slate-600 hover:text-navy-800 transition-colors"
          >
            Login
          </a>
          <a href="#pricing" className="btn-primary text-sm">
            Try for Free
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-navy-800 hover:bg-slate-50 transition-colors"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-display font-500 text-slate-600 hover:text-navy-800 hover:bg-slate-50 transition-colors"
                >
                  {link.label}
                </a>
                {link.children && (
                  <div className="ml-4 space-y-1">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-slate-500 hover:text-accent-green-dark transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a href="#" className="block px-4 py-3 text-sm font-display font-500 text-slate-600">
                Login
              </a>
              <a href="#pricing" className="btn-primary w-full justify-center text-sm">
                Try for Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
