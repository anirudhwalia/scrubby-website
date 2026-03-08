import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { Search, Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, Tag, User } from 'lucide-react'
import { blogPosts, blogCategories, getFeaturedPosts, getAuthorBySlug } from '../data/blogPosts'

export default function BlogListPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 12

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts]
    if (selectedCategory !== 'all') {
      posts = posts.filter(p => p.category === selectedCategory)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      posts = posts.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q))
      )
    }
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [searchQuery, selectedCategory])

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  const featuredPosts = getFeaturedPosts().slice(0, 3)

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedCategory])

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    })
  }

  const getCategoryName = (slug) => {
    const cat = blogCategories.find(c => c.slug === slug)
    return cat ? cat.name : slug
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

  return (
    <div className="font-body">
      <SEO
        title="Blog — Email Validation Insights & Tips"
        description="Expert guides on email validation, deliverability, catch-all emails, and outreach best practices from the Scrubby team."
        path="/blog"
      />
      {/* Hero */}
      <section className="relative bg-[#18181B] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-green/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-brand-green/8 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Email Validation <span className="text-gradient-light">Insights</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Expert guides, tutorials, and insights on email validation, deliverability, and lead generation.
          </p>
          <div className="max-w-xl mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 font-display text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green/50 backdrop-blur-sm"
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {!searchQuery && selectedCategory === 'all' && (
        <section className="py-16 bg-surface-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-ink mb-8 reveal">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-6 reveal">
              {featuredPosts.map((post) => {
                const author = getAuthorBySlug(post.author)
                return (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-brand-green/30 transition-all duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center p-6">
                      <h3 className="font-display text-lg font-bold text-white text-center leading-tight group-hover:text-brand-green transition-colors">
                        {post.title}
                      </h3>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs font-display font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-slate-100 text-slate-600'}`}>
                          {getCategoryName(post.category)}
                        </span>
                        <span className="text-xs text-ink-tertiary">{post.readTime}</span>
                      </div>
                      <p className="text-sm text-ink-secondary line-clamp-2 mb-3">{post.excerpt}</p>
                      <div className="flex items-center gap-2 text-xs text-ink-tertiary">
                        <User size={12} />
                        <span>{author?.name || 'Scrubby Team'}</span>
                        <span className="mx-1">·</span>
                        <Calendar size={12} />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter + Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 reveal">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-sm font-display font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-navy-800 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Posts ({blogPosts.length})
            </button>
            {blogCategories.map((cat) => {
              const count = blogPosts.filter(p => p.category === cat.slug).length
              if (count === 0) return null
              return (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-lg text-sm font-display font-medium transition-all ${
                    selectedCategory === cat.slug
                      ? 'bg-navy-800 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              )
            })}
          </div>

          {/* Results count */}
          <p className="text-sm text-ink-tertiary font-display mb-6">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            {searchQuery && <span> for &ldquo;{searchQuery}&rdquo;</span>}
          </p>

          {/* Posts Grid */}
          {paginatedPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        {getCategoryName(post.category)}
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
          ) : (
            <div className="text-center py-20">
              <Search size={48} className="mx-auto text-slate-300 mb-4" />
              <h3 className="font-display text-xl font-bold text-ink mb-2">No articles found</h3>
              <p className="text-ink-secondary">Try adjusting your search or filter criteria.</p>
            </div>
          )}

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

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#18181B] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-10 right-1/4 w-60 h-60 bg-brand-green/10 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated on Email Validation
          </h2>
          <p className="text-slate-300 mb-8">
            Get the latest insights on email deliverability, catch-all validation, and lead generation straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 font-display text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50"
              readOnly
            />
            <button className="btn-primary text-sm whitespace-nowrap">
              Subscribe
              <ArrowRight size={14} />
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
