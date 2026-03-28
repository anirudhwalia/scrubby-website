import rss from '@astrojs/rss';
import { blogPosts, getAuthorBySlug } from '../data/blog.js';

export async function GET(context) {
  return rss({
    title: 'Scrubby Blog — Email Validation Insights & Tips',
    description: 'Expert insights on email validation, catch-all emails, deliverability best practices, and cold email strategies from the Scrubby team.',
    site: context.site || 'https://scrubby.io',
    items: blogPosts.map((post) => {
      const author = getAuthorBySlug(post.author);
      return {
        title: post.title,
        pubDate: new Date(post.date),
        description: post.excerpt || '',
        link: `/blog/${post.slug}/`,
        categories: post.tags || [],
        author: author?.name || 'Scrubby Team',
      };
    }),
    customData: `<language>en-us</language>
<copyright>Copyright ${new Date().getFullYear()} Scrubby. All rights reserved.</copyright>
<managingEditor>hello@scrubby.io (Scrubby Team)</managingEditor>
<webMaster>hello@scrubby.io (Scrubby Team)</webMaster>`,
  });
}
