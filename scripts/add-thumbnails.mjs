/**
 * Add thumbnail frontmatter to MDX files
 * Extracts the first image from each post and adds it as a thumbnail field
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const BLOG_DIR = join(process.cwd(), 'content/blog')

const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
let updated = 0

for (const file of files) {
  const filePath = join(BLOG_DIR, file)
  let content = readFileSync(filePath, 'utf-8')

  // Skip if already has thumbnail
  if (/^thumbnail:/m.test(content)) continue

  // Find the first markdown image with /blog-images/ path
  const imgMatch = content.match(/!\[[^\]]*\]\((\/blog-images\/[^)]+)\)/)
  const thumbnail = imgMatch ? imgMatch[1] : ''

  // Insert thumbnail into frontmatter (before the closing ---)
  // Find the second --- (end of frontmatter)
  const frontmatterEnd = content.indexOf('---', content.indexOf('---') + 3)
  if (frontmatterEnd === -1) continue

  const before = content.slice(0, frontmatterEnd)
  const after = content.slice(frontmatterEnd)

  content = before + `thumbnail: "${thumbnail}"\n` + after
  writeFileSync(filePath, content, 'utf-8')
  updated++
}

console.log(`Added thumbnails to ${updated} of ${files.length} MDX files`)
