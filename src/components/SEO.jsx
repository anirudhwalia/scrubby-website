import { useEffect, useRef } from 'react'

const SITE_URL = 'https://scrubby.io'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function SEO({
  title,
  description,
  path = '',
  type = 'website',
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  schema = null,
  article = null,
}) {
  const schemaRef = useRef(null)

  const fullTitle = title
    ? `${title} | Scrubby`
    : 'Scrubby — Transform Risky Emails into Valid Leads'
  const url = `${SITE_URL}${path}`
  const desc = description || 'Scrubby validates catch-all and risky emails with 98.7% accuracy. Recover up to 42% more leads. Start free with 100 credits.'

  useEffect(() => {
    document.title = fullTitle

    // Core meta
    setMeta('name', 'description', desc)
    setCanonical(url)

    // Robots
    if (noindex) {
      setMeta('name', 'robots', 'noindex, nofollow')
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]')
      if (robotsMeta && robotsMeta.content === 'noindex, nofollow') {
        robotsMeta.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      }
    }

    // Open Graph
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:site_name', 'Scrubby')

    // Twitter
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:url', url)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', desc)
    setMeta('name', 'twitter:image', image)

    // Article metadata
    if (article) {
      setMeta('property', 'article:published_time', article.publishedTime)
      setMeta('property', 'article:author', article.author)
      setMeta('property', 'article:section', article.section)
    }

    // Schema.org JSON-LD
    if (schema) {
      if (schemaRef.current) {
        schemaRef.current.remove()
      }
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
      schemaRef.current = script
    }

    return () => {
      if (schemaRef.current) {
        schemaRef.current.remove()
        schemaRef.current = null
      }
    }
  }, [fullTitle, desc, url, type, image, noindex, schema, article])

  return null
}

// Reusable schema builders
export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url ? `https://scrubby.io${item.url}` : undefined,
    })),
  }
}

export function buildFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function buildArticleSchema({ title, description, url, datePublished, author, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `https://scrubby.io${url}`,
    datePublished,
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'Organization',
      name: 'Scrubby',
      logo: { '@type': 'ImageObject', url: 'https://scrubby.io/logos/scrubby-logo.svg' },
    },
    image: image || 'https://scrubby.io/og-image.png',
  }
}

export function buildComparisonSchema(competitor) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Scrubby vs ${competitor} - Email Validation Comparison`,
    description: `Compare Scrubby and ${competitor} for email validation. See how they complement each other for complete email list validation.`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: { '@type': 'SoftwareApplication', name: 'Scrubby', applicationCategory: 'BusinessApplication' },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: { '@type': 'SoftwareApplication', name: competitor, applicationCategory: 'BusinessApplication' },
        },
      ],
    },
  }
}
