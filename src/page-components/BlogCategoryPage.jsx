import { useState, useEffect, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, User, ChevronRight as BreadcrumbArrow } from 'lucide-react'
import { blogPosts, blogCategories, getPostsByCategory, getAuthorBySlug } from '../data/blog'

export default function BlogCategoryPage() {
  const { slug } = useParams()
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 12

  const category = blogCategories.find(c => c.slug === slug)
  const posts = useMemo(() => {
    return getPostsByCategory(slug).sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [slug])

  const totalPages = Math.ceil(posts.length / postsPerPage)
  const paginatedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [slug])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [slug])

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    })
  }

  const categoryColors = {
    catchallemails: 'bg-blue-100 text-blue-700',
    emaillistcleaning: 'bg-purple-100 text-purple-700',
    emailvalidation: 'bg-green-100 text-green-700',
    founders: 'bg-amber-100 text-amber-700',
    leadgenerationagency: 'bg-rose-100 text-rose-700',
    scrubbycampaign: 'bg-teal-100 text-teal-700',
    scrubbycomparison: 'bg-indigo-100 text-indigo-700',
    uncategorized: 'bg-slate-100 text-slate-600',
  }

  if (!category) {
    return (
      <div className="font-body pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-ink mb-4">Category Not Found</h1>
          <p className="text-ink-secondary mb-8">This category doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="font-body">
      <SEO
        title={`${category.name} — Blog`}
        description={`Read articles about ${category.name.toLowerCase()} from the Scrubby blog.`}
        path={`/blog/category/${slug}`}
      />
      {/* Hero */}
      <section className="relative bg-[#18181B] pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-green/10 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/blog" className="hover:text-brand-green transition-colors">Blog</Link>
            <BreadcrumbArrow size={12} />
            <span className="text-white">{category.name}</span>
          </nav>
          <span className={`inline-flex text-xs font-display font-medium px-3 py-1.5 rounded-full mb-4 ${categoryColors[slug] || 'bg-slate-100 text-slate-600'}`}>
            {posts.length} article{posts.length !== 1 ? 's' : ''}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {category.name}
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">{category.description}</p>
        </div>
      </section>

      {/* All Categories */}
      <section className="py-6 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            <Link
              to="/blog"
              className="px-4 py-2 rounded-lg text-sm font-display font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
            >
              All Posts
            </Link>
            {blogCategories.map((cat) => {
              const count = blogPosts.filter(p => p.category === cat.slug).length
              if (count === 0) return null
              return (
                <Link
                  key={cat.slug}
                  to={`/blog/category/${cat.slug}`}
                  className={`px-4 py-2 rounded-lg text-sm font-display font-medium transition-all ${
                    cat.slug === slug
                      ? 'bg-navy-800 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.name}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {paginatedPosts.map((post) => {
              const author = getAuthorBySlug(post.author)
              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-brand-green/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-display font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-slate-100 text-slate-600'}`}>
                      {category.name}
                    </span>
                    <span className="text-xs text-ink-tertiary flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink mb-3 group-hover:text-brand-green-dark transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-ink-secondary mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-ink-tertiary">
                      <span className="font-display font-medium">{author?.name || 'Scrubby Team'}</span>
                      <span>·</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <ArrowRight size={14} className="text-brand-green-dark opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg text-sm font-display font-medium transition-all ${
                    currentPage === page
                      ? 'bg-navy-800 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#18181B] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Start Validating Your Emails Today
          </h2>
          <p className="text-slate-300 mb-8">
            Get 100 free credits. No credit card required. 98.7% accuracy guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/pricing" className="btn-primary">
              Get Started Free
              <ArrowRight size={14} />
            </Link>
            <Link to="/blog" className="btn-secondary-dark">
              Browse All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
