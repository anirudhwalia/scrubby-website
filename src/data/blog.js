// Blog data loader - reads MDX files from content/blog/ at build time
// To add a new blog post: create a new .mdx file in content/blog/

import blogConfig from '../../content/blog-config.json'

export const blogCategories = blogConfig.categories
export const blogAuthors = blogConfig.authors

// Import all MDX files eagerly for metadata (frontmatter only)
const mdxModules = import.meta.glob('../../content/blog/*.mdx', { eager: true })

// Build the posts array from MDX frontmatter (metadata only — no Astro components)
export const blogPosts = Object.entries(mdxModules)
  .map(([path, mod]) => ({
    ...mod.frontmatter,
  }))
  .sort((a, b) => new Date(b.date) - new Date(a.date))

// Server-only: get MDX component by slug (for rendering in Astro templates)
export function getPostComponent(slug) {
  const entry = Object.entries(mdxModules).find(([_, mod]) => mod.frontmatter?.slug === slug)
  return entry ? entry[1].default : null
}

// Helper functions
export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug) || null
}

export function getPostsByCategory(categorySlug) {
  return blogPosts.filter((p) => p.category === categorySlug)
}

export function getAuthorBySlug(slug) {
  return blogAuthors.find((a) => a.slug === slug) || null
}

export function getCategoryBySlug(slug) {
  return blogCategories.find((c) => c.slug === slug) || null
}

export function getFeaturedPosts() {
  return blogPosts.filter((p) => p.featured)
}

export function getPostsByAuthor(authorSlug) {
  return blogPosts.filter((p) => p.author === authorSlug)
}

export function getRecentPosts(count = 6) {
  return blogPosts.slice(0, count)
}
