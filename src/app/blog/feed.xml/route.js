import { getPostsForFeed } from '@/data/blog'
import { Feed } from 'feed'
import assert from 'node:assert'

export async function GET(req) {
  let siteUrl = new URL(req.url).origin

  let feed = new Feed({
    title: 'Botanical Science Journal',
    description:
      'Ingredient science, dermatology guides, and research updates from the MimosaShea Radiance™ laboratory.',
    author: {
      name: 'MimosaShea Radiance™ Team',
      email: 'care@mimosashea.com',
    },
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  let { data: posts } = await getPostsForFeed()

  posts.forEach((post) => {
    try {
      assert(typeof post.title === 'string')
      assert(typeof post.slug === 'string')
      assert(typeof post.excerpt === 'string')
      assert(typeof post.publishedAt === 'string')
    } catch (error) {
      console.log('Post is missing required fields for RSS feed:', post, error)
      return
    }

    feed.addItem({
      title: post.title,
      id: post.slug,
      link: `${siteUrl}/blog/${post.slug}`,
      content: post.excerpt,
      image: post.mainImage?.replaceAll('&', '&amp;'),
      author: post.author?.name ? [{ name: post.author.name }] : [],
      contributor: post.author?.name ? [{ name: post.author.name }] : [],
      date: new Date(post.publishedAt),
    })
  })

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
