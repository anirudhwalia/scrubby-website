import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO, { buildArticleSchema } from '../components/SEO'
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tag, ChevronRight } from 'lucide-react'
import { getPostBySlug, getAuthorBySlug, blogCategories, blogPosts } from '../data/blog'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [slug])

  if (!post) {
    return (
      <div className="font-body pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-ink mb-4">Article Not Found</h1>
          <p className="text-ink-secondary mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="btn-primary">
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const author = getAuthorBySlug(post.author)
  const category = blogCategories.find(c => c.slug === post.category)
  const MdxContent = post.Component

  const seoSchema = buildArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: '/blog/' + post.slug,
    datePublished: post.date,
    author: author?.name || 'Scrubby Team',
  })

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    })
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)

  // Get prev/next posts
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))
  const currentIndex = sortedPosts.findIndex(p => p.slug === post.slug)
  const prevPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null

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
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        article={{ publishedTime: post.date, author: author?.name, section: category?.name }}
        schema={seoSchema}
      />
      {/* Hero */}
      <section className="relative bg-[#18181B] pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-green/10 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/blog" className="hover:text-brand-green transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <Link
              to={`/blog/category/${post.category}`}
              className="hover:text-brand-green transition-colors"
            >
              {category?.name || post.category}
            </Link>
          </nav>

          <span className={`inline-flex text-xs font-display font-medium px-3 py-1.5 rounded-full mb-4 ${categoryColors[post.category] || 'bg-slate-100 text-slate-600'}`}>
            {category?.name || post.category}
          </span>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-3xl">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              {author?.avatar ? (
                <img src={author.avatar} alt={author.name} className="w-8 h-8 rounded-full object-cover" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <User size={14} className="text-brand-green" />
                </div>
              )}
              <Link to={`/blog/author/${post.author}`} className="font-display font-medium text-slate-300 hover:text-brand-green transition-colors">
                {author?.name || 'Scrubby Team'}
              </Link>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
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
                  prose-img:rounded-xl prose-img:max-w-full prose-img:h-auto prose-img:my-6
                "
              >
                <MdxContent />
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-slate-200">
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag size={14} className="text-ink-tertiary" />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-slate-100 text-xs font-display font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Card */}
              {author && (
                <Link to={`/blog/author/${post.author}`} className="mt-8 p-6 rounded-2xl bg-surface-secondary border border-slate-200 block hover:border-brand-green/30 hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                    {author.avatar ? (
                      <img src={author.avatar} alt={author.name} className="w-12 h-12 rounded-full object-cover" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center">
                        <span className="font-display font-bold text-brand-green-dark">
                          {author.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <h4 className="font-display font-bold text-ink">{author.name}</h4>
                      <p className="text-sm text-ink-tertiary">{author.role}</p>
                    </div>
                  </div>
                </Link>
              )}

              {/* Prev/Next Navigation */}
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {prevPost && (
                  <Link
                    to={`/blog/${prevPost.slug}`}
                    className="group p-4 rounded-xl border border-slate-200 hover:border-brand-green/30 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-2 text-xs text-ink-tertiary mb-2">
                      <ArrowLeft size={12} />
                      Previous Article
                    </div>
                    <h4 className="font-display text-sm font-bold text-ink group-hover:text-brand-green-dark transition-colors line-clamp-2">
                      {prevPost.title}
                    </h4>
                  </Link>
                )}
                {nextPost && (
                  <Link
                    to={`/blog/${nextPost.slug}`}
                    className="group p-4 rounded-xl border border-slate-200 hover:border-brand-green/30 hover:shadow-md transition-all sm:text-right"
                  >
                    <div className="flex items-center justify-end gap-2 text-xs text-ink-tertiary mb-2">
                      Next Article
                      <ArrowRight size={12} />
                    </div>
                    <h4 className="font-display text-sm font-bold text-ink group-hover:text-brand-green-dark transition-colors line-clamp-2">
                      {nextPost.title}
                    </h4>
                  </Link>
                )}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-6">
                {/* CTA Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 text-white">
                  <h3 className="font-display text-lg font-bold mb-2">Try Scrubby Free</h3>
                  <p className="text-sm text-slate-300 mb-4">
                    Validate your catch-all emails with 98.7% accuracy. Start with 100 free credits.
                  </p>
                  <Link to="/pricing" className="btn-primary w-full justify-center text-sm">
                    Get Started Free
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="p-6 rounded-2xl bg-surface-secondary border border-slate-200">
                    <h3 className="font-display text-sm font-bold text-ink mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((rp) => (
                        <Link
                          key={rp.slug}
                          to={`/blog/${rp.slug}`}
                          className="block group"
                        >
                          <h4 className="font-display text-sm font-medium text-ink group-hover:text-brand-green-dark transition-colors line-clamp-2 mb-1">
                            {rp.title}
                          </h4>
                          <span className="text-xs text-ink-tertiary">{formatDate(rp.date)}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Categories */}
                <div className="p-6 rounded-2xl bg-surface-secondary border border-slate-200">
                  <h3 className="font-display text-sm font-bold text-ink mb-4">Categories</h3>
                  <div className="space-y-2">
                    {blogCategories.map((cat) => {
                      const count = blogPosts.filter(p => p.category === cat.slug).length
                      if (count === 0) return null
                      return (
                        <Link
                          key={cat.slug}
                          to={`/blog/category/${cat.slug}`}
                          className="flex items-center justify-between text-sm text-ink-secondary hover:text-brand-green-dark transition-colors"
                        >
                          <span>{cat.name}</span>
                          <span className="text-xs text-ink-tertiary">{count}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <Link to="/pricing" className="btn-primary">
              Start Free
              <ArrowRight size={14} />
            </Link>
            <Link to="/how-it-works" className="btn-secondary-dark">
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
