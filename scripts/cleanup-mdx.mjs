/**
 * Clean up scraped junk from MDX files
 * Removes: social sharing links, "Spread the knowledge", empty link blocks
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const BLOG_DIR = join(process.cwd(), 'content/blog')

const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
let cleaned = 0

for (const file of files) {
  const filePath = join(BLOG_DIR, file)
  let content = readFileSync(filePath, 'utf-8')
  const original = content

  // Remove "Spread the knowledge" and everything after it (social share links)
  const spreadIdx = content.indexOf('\nSpread the knowledge\n')
  if (spreadIdx !== -1) {
    content = content.slice(0, spreadIdx).trimEnd() + '\n'
  }

  // Remove empty markdown links like [](https://...)
  content = content.replace(/\[]\(https?:\/\/[^)]+\)/g, '')

  // Remove "Image source: ..." lines (credit lines for stock photos)
  content = content.replace(/^Image source:.*$/gm, '')

  // Clean up multiple consecutive blank lines (more than 2)
  content = content.replace(/\n{4,}/g, '\n\n')

  // Ensure file ends with single newline
  content = content.trimEnd() + '\n'

  if (content !== original) {
    writeFileSync(filePath, content, 'utf-8')
    cleaned++
  }
}

console.log(`Cleaned ${cleaned} of ${files.length} MDX files`)
