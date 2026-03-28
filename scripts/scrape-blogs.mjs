/**
 * Scrape full blog content from scrubby.io and update MDX files
 * Usage: node scripts/scrape-blogs.mjs
 */

import { load } from 'cheerio'
import TurndownService from 'turndown'
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const BLOG_DIR = join(process.cwd(), 'content/blog')
const DELAY_MS = 1500 // delay between requests to be polite

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
})

// Preserve images with alt text, prefer data-src for lazy-loaded images
turndown.addRule('images', {
  filter: 'img',
  replacement: (content, node) => {
    const alt = node.getAttribute('alt') || ''
    const src = node.getAttribute('data-src') || node.getAttribute('data-lazy-src') || node.getAttribute('src') || ''
    if (!src || src.startsWith('data:')) return ''
    return `![${alt}](${src})`
  },
})

// Handle WordPress figures
turndown.addRule('figure', {
  filter: 'figure',
  replacement: (content, node) => {
    return '\n' + content.trim() + '\n'
  },
})

// Handle WordPress captions
turndown.addRule('figcaption', {
  filter: 'figcaption',
  replacement: (content) => {
    return '\n*' + content.trim() + '*\n'
  },
})

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

async function fetchBlogContent(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        Accept: 'text/html',
      },
    })
    if (!res.ok) {
      console.error(`  HTTP ${res.status} for ${url}`)
      return null
    }
    const html = await res.text()
    const $ = load(html)

    // Remove unwanted elements
    $(
      '.sharedaddy, .jp-relatedposts, .entry-meta, .post-navigation, .comments-area, script, style, .bsf-rt-reading-time, .wp-block-buttons, .wp-block-button, nav, .breadcrumbs'
    ).remove()

    // Fix lazy-loaded images: swap data-src into src
    $('img').each((_, el) => {
      const dataSrc = $(el).attr('data-src') || $(el).attr('data-lazy-src')
      if (dataSrc) {
        $(el).attr('src', dataSrc)
      }
    })

    // Get the article content
    let contentEl = $('.entry-content')
    if (!contentEl.length) {
      contentEl = $('article .post-content')
    }
    if (!contentEl.length) {
      contentEl = $('article')
    }
    if (!contentEl.length) {
      console.error(`  No content found for ${url}`)
      return null
    }

    const contentHtml = contentEl.html()
    const markdown = turndown.turndown(contentHtml).trim()

    return markdown
  } catch (err) {
    console.error(`  Error fetching ${url}: ${err.message}`)
    return null
  }
}

function extractFrontmatter(mdxContent) {
  const match = mdxContent.match(/^---\n([\s\S]*?)\n---\n/)
  if (!match) return { frontmatter: '', body: mdxContent }
  return {
    frontmatter: match[0],
    body: mdxContent.slice(match[0].length).trim(),
  }
}

function getSlugFromFrontmatter(frontmatter) {
  const match = frontmatter.match(/slug:\s*"([^"]+)"/)
  return match ? match[1] : null
}

async function main() {
  // Get all MDX files
  const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
  console.log(`Found ${files.length} MDX files to update\n`)

  let updated = 0
  let failed = 0
  let skipped = 0

  for (const file of files) {
    const filePath = join(BLOG_DIR, file)
    const content = readFileSync(filePath, 'utf-8')
    const { frontmatter } = extractFrontmatter(content)
    const slug = getSlugFromFrontmatter(frontmatter)

    if (!slug) {
      console.log(`SKIP: ${file} - no slug found`)
      skipped++
      continue
    }

    const url = `https://scrubby.io/blog/${slug}/`
    console.log(`[${updated + failed + skipped + 1}/${files.length}] Fetching: ${slug}`)

    const markdown = await fetchBlogContent(url)

    if (markdown && markdown.length > 100) {
      const newContent = frontmatter + '\n' + markdown + '\n'
      writeFileSync(filePath, newContent, 'utf-8')
      console.log(`  ✓ Updated (${markdown.length} chars)`)
      updated++
    } else if (markdown) {
      console.log(`  ⚠ Content too short (${markdown?.length || 0} chars), skipping`)
      skipped++
    } else {
      console.log(`  ✗ Failed to fetch`)
      failed++
    }

    await sleep(DELAY_MS)
  }

  console.log(`\nDone! Updated: ${updated}, Failed: ${failed}, Skipped: ${skipped}`)
}

main().catch(console.error)
