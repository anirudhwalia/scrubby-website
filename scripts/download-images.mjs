/**
 * Download blog images from scrubby.io and update MDX files to use local paths
 * Usage: node scripts/download-images.mjs
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs'
import { join, basename } from 'path'

const BLOG_DIR = join(process.cwd(), 'content/blog')
const IMG_DIR = join(process.cwd(), 'public/blog-images')
const DELAY_MS = 200

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

async function main() {
  // Create image directory
  if (!existsSync(IMG_DIR)) {
    mkdirSync(IMG_DIR, { recursive: true })
  }

  // 1. Collect all unique image URLs from MDX files
  const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
  const urlRegex = /!\[([^\]]*)\]\((https:\/\/scrubby\.io\/wp-content\/uploads\/[^)]+)\)/g
  const allUrls = new Set()

  for (const file of files) {
    const content = readFileSync(join(BLOG_DIR, file), 'utf-8')
    let match
    while ((match = urlRegex.exec(content)) !== null) {
      allUrls.add(match[2])
    }
    urlRegex.lastIndex = 0
  }

  console.log(`Found ${allUrls.size} unique images to download\n`)

  // 2. Download all images
  const urlToLocal = new Map()
  let downloaded = 0
  let failed = 0

  for (const url of allUrls) {
    // Create a clean filename from the URL
    const urlPath = new URL(url).pathname
    const filename = basename(urlPath)
    const localPath = `/blog-images/${filename}`

    console.log(`[${downloaded + failed + 1}/${allUrls.size}] ${filename}`)

    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
          'Accept': 'image/*',
        },
      })

      if (!res.ok) {
        console.log(`  ✗ HTTP ${res.status}`)
        failed++
        continue
      }

      const buffer = Buffer.from(await res.arrayBuffer())
      writeFileSync(join(IMG_DIR, filename), buffer)
      urlToLocal.set(url, localPath)
      console.log(`  ✓ ${(buffer.length / 1024).toFixed(0)} KB`)
      downloaded++
    } catch (err) {
      console.log(`  ✗ ${err.message}`)
      failed++
    }

    await sleep(DELAY_MS)
  }

  console.log(`\nDownloaded: ${downloaded}, Failed: ${failed}\n`)

  // 3. Update MDX files to use local paths
  let filesUpdated = 0
  for (const file of files) {
    const filePath = join(BLOG_DIR, file)
    let content = readFileSync(filePath, 'utf-8')
    let changed = false

    for (const [url, localPath] of urlToLocal) {
      if (content.includes(url)) {
        content = content.replaceAll(url, localPath)
        changed = true
      }
    }

    if (changed) {
      writeFileSync(filePath, content, 'utf-8')
      filesUpdated++
    }
  }

  console.log(`Updated ${filesUpdated} MDX files with local image paths`)
}

main().catch(console.error)
