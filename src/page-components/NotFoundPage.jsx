import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { Home, BookOpen, ArrowRight } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <main>
      <SEO title="Page Not Found" noindex />

      <section className="relative pt-40 pb-24 bg-white overflow-hidden">
        {/* Background dots */}
        <div className="absolute inset-0 dots-bg opacity-40" />

        {/* Decorative dots */}
        <div className="absolute top-16 left-16 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" />
        <div className="absolute top-24 right-24 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 right-1/4 w-2 h-2 rounded-full bg-brand-green/40 animate-pulse" style={{ animationDelay: '0.5s' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          {/* Large 404 */}
          <h1 className="font-display font-800 text-[8rem] sm:text-[10rem] lg:text-[12rem] leading-none text-gradient mb-2 select-none">
            404
          </h1>

          {/* Heading */}
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-ink mb-4">
            Page Not Found
          </h2>

          {/* Subtitle */}
          <p className="text-ink-secondary text-lg max-w-md mx-auto mb-10 font-body">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="btn-primary">
              <Home size={16} />
              Go Home
            </Link>
            <Link to="/blog" className="btn-secondary">
              <BookOpen size={16} />
              Visit Blog
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
