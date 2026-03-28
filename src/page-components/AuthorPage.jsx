import { useEffect, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { User, Calendar, Clock, ArrowRight, BookOpen, ArrowLeft } from 'lucide-react'
import { getAuthorBySlug, blogPosts, blogCategories } from '../data/blog'

const authorBios = {
  anirudh_kaushal_scru249:
    'Founder and CEO of Alchemy Automations and Chief Technology Officer at Leadbird. Expert in data validation, email strategies, email security, software development, and IT management.',
  abhinav_scrubby:
    'Content writer at Scrubby, covering email validation, deliverability best practices, and marketing strategies for modern businesses.',
  nick_abraham_scru247:
    'Cold email expert helping businesses optimize outreach campaigns with better email verification and deliverability practices.',
  kristelk:
    'Chief Marketing Officer and content strategist with deep expertise in email marketing, lead generation, and growth strategies.',
  amit_s_u3654:
    'Marketing lead at Scrubby, focused on email marketing strategies, lead generation, and data-driven campaign optimization.',
  admin_scrubby_f1wrkklo:
    'Official Scrubby team account sharing product updates, announcements, and email validation insights.',
}

export default function AuthorPage() {
  const { slug } = useParams()
  const author = getAuthorBySlug(slug)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [slug])

  const authorPosts = useMemo(() => {
    return blogPosts
      .filter((post) => post.author === slug)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [slug])

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getCategoryName = (catSlug) => {
    return blogCategories.find((c) => c.slug === catSlug)?.name || catSlug
  }

  if (!author) {
    return (
      <div className="font-body pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-ink mb-4">Author Not Found</h1>
          <p className="text-ink-secondary mb-8">
            The author you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/blog" className="btn-primary">
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const bio = authorBios[slug] || ''
  const initial = author.name ? author.name.charAt(0).toUpperCase() : '?'

  return (
    <div className="font-body">
      <SEO
        title={`${author.name} — Author at Scrubby Blog`}
        description={bio || `Read all blog posts by ${author.name} on the Scrubby blog.`}
        path={`/blog/author/${slug}`}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-[#18181B] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-green/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-brand-green/8 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="reveal">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-8 font-display"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>

            {/* Author Avatar */}
            {author.avatar ? (
              <img
                src={author.avatar}
                alt={author.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-5 border-4 border-white/10"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-brand-green/20 flex items-center justify-center mx-auto mb-5 border-4 border-white/10">
                <span className="font-display text-3xl font-bold text-brand-green">{initial}</span>
              </div>
            )}

            <span className="badge mx-auto mb-5">
              <User size={12} />
              Author
            </span>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              {author.name}
            </h1>

            {author.role && (
              <p className="text-lg text-brand-green font-display font-medium mb-4">{author.role}</p>
            )}

            {bio && (
              <p className="text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">{bio}</p>
            )}

            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm font-display">
              <BookOpen size={14} />
              <span>
                {authorPosts.length} article{authorPosts.length !== 1 ? 's' : ''} published
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-ink mb-8">
            Articles by {author.name}
          </h2>

          {authorPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authorPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-brand-green/30 transition-all duration-300"
                >
                  {post.thumbnail ? (
                    <div className="h-40 bg-slate-100 overflow-hidden">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="h-40 bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center p-6">
                      <h3 className="font-display text-sm font-bold text-white/80 text-center leading-tight line-clamp-3">
                        {post.title}
                      </h3>
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-display font-medium px-2.5 py-1 rounded-full bg-brand-green-bg text-brand-green-dark">
                        {getCategoryName(post.category)}
                      </span>
                      <span className="text-xs text-ink-tertiary flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-ink mb-2 group-hover:text-brand-green-dark transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-ink-secondary mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-ink-tertiary">
                        <Calendar size={11} />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-brand-green-dark opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen size={48} className="mx-auto text-slate-300 mb-4" />
              <h3 className="font-display text-xl font-bold text-ink mb-2">No articles yet</h3>
              <p className="text-ink-secondary">This author hasn't published any articles yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
